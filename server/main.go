package main

import (
	"fmt"
	"log"
	"net"

	"github.com/sirupsen/logrus"
	"google.golang.org/grpc"
	corev1 "k8s.io/api/core/v1"
	v1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	"k8s.io/client-go/kubernetes"
	"k8s.io/client-go/rest"

	api "github.com/yitsushi/grpc-streaming-experiment/api/application/v1"
)

type apiServer struct {
	*api.UnimplementedApplicationServiceServer
}

func (s *apiServer) ListPods(request *api.ListPodsRequest, stream api.ApplicationService_ListPodsServer) error {
	ctx := stream.Context()
	end := make(chan bool)

	config, err := rest.InClusterConfig()
	if err != nil {
		return fmt.Errorf("get InClusterConfig: %w", err)
	}

	clientset, err := kubernetes.NewForConfig(config)
	if err != nil {
		return fmt.Errorf("get clientset: %w", err)
	}

	_ = clientset

	watcher, err := clientset.CoreV1().Pods(request.Namespace).Watch(ctx, v1.ListOptions{Watch: true})
	if err != nil {
		return fmt.Errorf("start watch: %w", err)
	}

	defer watcher.Stop()

	go func() {
		for item := range watcher.ResultChan() {
			pod, ok := item.Object.(*corev1.Pod)
			if ok {
				stream.Send(&api.ListPodsResponse{
					Type: string(item.Type),
					Pod:  &api.Pod{Name: pod.Name},
				})
			} else {
				logrus.Infof("%+v", item.Object)
			}

			select {
			case <-ctx.Done():
				return
			default:
			}
		}

		end <- true
	}()

	for {
		select {
		case <-end:
			logrus.Info("Closing stream for client", request)

			return nil
		case <-ctx.Done():
			logrus.Info("Client has disconnected")

			return nil
		}
	}
}

func main() {
	lis, err := net.Listen("tcp", ":8080")
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}
	grpcServer := grpc.NewServer([]grpc.ServerOption{}...)

	server := &apiServer{}

	// Register the server
	api.RegisterApplicationServiceServer(grpcServer, server)

	log.Printf("Starting server on address %s", lis.Addr().String())

	// Start listening
	if err := grpcServer.Serve(lis); err != nil {
		log.Fatalf("failed to listen: %v", err)
	}
}
