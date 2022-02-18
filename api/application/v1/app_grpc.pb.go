// Code generated by protoc-gen-go-grpc. DO NOT EDIT.

package api

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

// ApplicationServiceClient is the client API for ApplicationService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type ApplicationServiceClient interface {
	ListNamespaces(ctx context.Context, in *ListNamespacesRequest, opts ...grpc.CallOption) (ApplicationService_ListNamespacesClient, error)
}

type applicationServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewApplicationServiceClient(cc grpc.ClientConnInterface) ApplicationServiceClient {
	return &applicationServiceClient{cc}
}

func (c *applicationServiceClient) ListNamespaces(ctx context.Context, in *ListNamespacesRequest, opts ...grpc.CallOption) (ApplicationService_ListNamespacesClient, error) {
	stream, err := c.cc.NewStream(ctx, &ApplicationService_ServiceDesc.Streams[0], "/application.v1.ApplicationService/ListNamespaces", opts...)
	if err != nil {
		return nil, err
	}
	x := &applicationServiceListNamespacesClient{stream}
	if err := x.ClientStream.SendMsg(in); err != nil {
		return nil, err
	}
	if err := x.ClientStream.CloseSend(); err != nil {
		return nil, err
	}
	return x, nil
}

type ApplicationService_ListNamespacesClient interface {
	Recv() (*ListNamespacesResponse, error)
	grpc.ClientStream
}

type applicationServiceListNamespacesClient struct {
	grpc.ClientStream
}

func (x *applicationServiceListNamespacesClient) Recv() (*ListNamespacesResponse, error) {
	m := new(ListNamespacesResponse)
	if err := x.ClientStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

// ApplicationServiceServer is the server API for ApplicationService service.
// All implementations should embed UnimplementedApplicationServiceServer
// for forward compatibility
type ApplicationServiceServer interface {
	ListNamespaces(*ListNamespacesRequest, ApplicationService_ListNamespacesServer) error
}

// UnimplementedApplicationServiceServer should be embedded to have forward compatible implementations.
type UnimplementedApplicationServiceServer struct {
}

func (UnimplementedApplicationServiceServer) ListNamespaces(*ListNamespacesRequest, ApplicationService_ListNamespacesServer) error {
	return status.Errorf(codes.Unimplemented, "method ListNamespaces not implemented")
}

// UnsafeApplicationServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to ApplicationServiceServer will
// result in compilation errors.
type UnsafeApplicationServiceServer interface {
	mustEmbedUnimplementedApplicationServiceServer()
}

func RegisterApplicationServiceServer(s grpc.ServiceRegistrar, srv ApplicationServiceServer) {
	s.RegisterService(&ApplicationService_ServiceDesc, srv)
}

func _ApplicationService_ListNamespaces_Handler(srv interface{}, stream grpc.ServerStream) error {
	m := new(ListNamespacesRequest)
	if err := stream.RecvMsg(m); err != nil {
		return err
	}
	return srv.(ApplicationServiceServer).ListNamespaces(m, &applicationServiceListNamespacesServer{stream})
}

type ApplicationService_ListNamespacesServer interface {
	Send(*ListNamespacesResponse) error
	grpc.ServerStream
}

type applicationServiceListNamespacesServer struct {
	grpc.ServerStream
}

func (x *applicationServiceListNamespacesServer) Send(m *ListNamespacesResponse) error {
	return x.ServerStream.SendMsg(m)
}

// ApplicationService_ServiceDesc is the grpc.ServiceDesc for ApplicationService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var ApplicationService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "application.v1.ApplicationService",
	HandlerType: (*ApplicationServiceServer)(nil),
	Methods:     []grpc.MethodDesc{},
	Streams: []grpc.StreamDesc{
		{
			StreamName:    "ListNamespaces",
			Handler:       _ApplicationService_ListNamespaces_Handler,
			ServerStreams: true,
		},
	},
	Metadata: "application/v1/app.proto",
}
