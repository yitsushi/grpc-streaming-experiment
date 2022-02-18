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

// ApplicationClient is the client API for Application service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type ApplicationClient interface {
	ListNamespaces(ctx context.Context, in *ListNamespacesRequest, opts ...grpc.CallOption) (Application_ListNamespacesClient, error)
}

type applicationClient struct {
	cc grpc.ClientConnInterface
}

func NewApplicationClient(cc grpc.ClientConnInterface) ApplicationClient {
	return &applicationClient{cc}
}

func (c *applicationClient) ListNamespaces(ctx context.Context, in *ListNamespacesRequest, opts ...grpc.CallOption) (Application_ListNamespacesClient, error) {
	stream, err := c.cc.NewStream(ctx, &Application_ServiceDesc.Streams[0], "/api.Application/ListNamespaces", opts...)
	if err != nil {
		return nil, err
	}
	x := &applicationListNamespacesClient{stream}
	if err := x.ClientStream.SendMsg(in); err != nil {
		return nil, err
	}
	if err := x.ClientStream.CloseSend(); err != nil {
		return nil, err
	}
	return x, nil
}

type Application_ListNamespacesClient interface {
	Recv() (*NamespaceEvent, error)
	grpc.ClientStream
}

type applicationListNamespacesClient struct {
	grpc.ClientStream
}

func (x *applicationListNamespacesClient) Recv() (*NamespaceEvent, error) {
	m := new(NamespaceEvent)
	if err := x.ClientStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

// ApplicationServer is the server API for Application service.
// All implementations must embed UnimplementedApplicationServer
// for forward compatibility
type ApplicationServer interface {
	ListNamespaces(*ListNamespacesRequest, Application_ListNamespacesServer) error
	mustEmbedUnimplementedApplicationServer()
}

// UnimplementedApplicationServer must be embedded to have forward compatible implementations.
type UnimplementedApplicationServer struct {
}

func (UnimplementedApplicationServer) ListNamespaces(*ListNamespacesRequest, Application_ListNamespacesServer) error {
	return status.Errorf(codes.Unimplemented, "method ListNamespaces not implemented")
}
func (UnimplementedApplicationServer) mustEmbedUnimplementedApplicationServer() {}

// UnsafeApplicationServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to ApplicationServer will
// result in compilation errors.
type UnsafeApplicationServer interface {
	mustEmbedUnimplementedApplicationServer()
}

func RegisterApplicationServer(s grpc.ServiceRegistrar, srv ApplicationServer) {
	s.RegisterService(&Application_ServiceDesc, srv)
}

func _Application_ListNamespaces_Handler(srv interface{}, stream grpc.ServerStream) error {
	m := new(ListNamespacesRequest)
	if err := stream.RecvMsg(m); err != nil {
		return err
	}
	return srv.(ApplicationServer).ListNamespaces(m, &applicationListNamespacesServer{stream})
}

type Application_ListNamespacesServer interface {
	Send(*NamespaceEvent) error
	grpc.ServerStream
}

type applicationListNamespacesServer struct {
	grpc.ServerStream
}

func (x *applicationListNamespacesServer) Send(m *NamespaceEvent) error {
	return x.ServerStream.SendMsg(m)
}

// Application_ServiceDesc is the grpc.ServiceDesc for Application service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var Application_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "api.Application",
	HandlerType: (*ApplicationServer)(nil),
	Methods:     []grpc.MethodDesc{},
	Streams: []grpc.StreamDesc{
		{
			StreamName:    "ListNamespaces",
			Handler:       _Application_ListNamespaces_Handler,
			ServerStreams: true,
		},
	},
	Metadata: "api/app.proto",
}