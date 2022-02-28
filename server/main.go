package main

import (
	"log"
	"net"
	"time"

	"github.com/sirupsen/logrus"
	"google.golang.org/grpc"

	api "github.com/yitsushi/websocket-grpc-experiment/api/application/v1"
)

type apiServer struct{}

func (s *apiServer) ListNamespaces(request *api.ListNamespacesRequest, stream api.ApplicationService_ListNamespacesServer) error {
	ctx := stream.Context()
	end := make(chan bool)

	logrus.Info("New ListNamespaces request")

	go func() {
		for {
			select {
			case <-ctx.Done():
				return
			default:
			}

			time.Sleep(time.Microsecond * 1000)

			logrus.Info("Sending Response")

			stream.Send(&api.ListNamespacesResponse{
				Type:      "ADDED",
				Namespace: &api.Namespace{Name: "asd"},
			})
		}
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
