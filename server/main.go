package main

import (
	"log"
	"net"
	"time"

	"github.com/sirupsen/logrus"
	"google.golang.org/grpc"

	"github.com/yitsushi/websocket-grpc-experiment/api"
)

type apiServer struct {
	api.UnimplementedApplicationServer
}

func (s *apiServer) ListNamespaces(request *api.ListNamespacesRequest, stream api.Application_ListNamespacesServer) error {
	ctx := stream.Context()
	end := make(chan bool)

	go func() {
		for {
			select {
			case <-ctx.Done():
				return
			default:
			}

			time.Sleep(time.Microsecond * 1000)

			stream.Send(&api.NamespaceEvent{
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
	lis, err := net.Listen("tcp", ":7070")
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}
	grpcServer := grpc.NewServer([]grpc.ServerOption{}...)

	server := &apiServer{}

	// Register the server
	api.RegisterApplicationServer(grpcServer, server)

	log.Printf("Starting server on address %s", lis.Addr().String())

	// Start listening
	if err := grpcServer.Serve(lis); err != nil {
		log.Fatalf("failed to listen: %v", err)
	}
}
