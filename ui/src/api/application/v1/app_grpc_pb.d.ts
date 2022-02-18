// package: application.v1
// file: application/v1/app.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as application_v1_app_pb from "../../application/v1/app_pb";

interface IApplicationServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    listNamespaces: IApplicationServiceService_IListNamespaces;
}

interface IApplicationServiceService_IListNamespaces extends grpc.MethodDefinition<application_v1_app_pb.ListNamespacesRequest, application_v1_app_pb.ListNamespacesResponse> {
    path: "/application.v1.ApplicationService/ListNamespaces";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<application_v1_app_pb.ListNamespacesRequest>;
    requestDeserialize: grpc.deserialize<application_v1_app_pb.ListNamespacesRequest>;
    responseSerialize: grpc.serialize<application_v1_app_pb.ListNamespacesResponse>;
    responseDeserialize: grpc.deserialize<application_v1_app_pb.ListNamespacesResponse>;
}

export const ApplicationServiceService: IApplicationServiceService;

export interface IApplicationServiceServer extends grpc.UntypedServiceImplementation {
    listNamespaces: grpc.handleServerStreamingCall<application_v1_app_pb.ListNamespacesRequest, application_v1_app_pb.ListNamespacesResponse>;
}

export interface IApplicationServiceClient {
    listNamespaces(request: application_v1_app_pb.ListNamespacesRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<application_v1_app_pb.ListNamespacesResponse>;
    listNamespaces(request: application_v1_app_pb.ListNamespacesRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<application_v1_app_pb.ListNamespacesResponse>;
}

export class ApplicationServiceClient extends grpc.Client implements IApplicationServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public listNamespaces(request: application_v1_app_pb.ListNamespacesRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<application_v1_app_pb.ListNamespacesResponse>;
    public listNamespaces(request: application_v1_app_pb.ListNamespacesRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<application_v1_app_pb.ListNamespacesResponse>;
}
