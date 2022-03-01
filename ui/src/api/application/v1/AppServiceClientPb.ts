/**
 * @fileoverview gRPC-Web generated client stub for application.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as api_application_v1_app_pb from '../../../api/application/v1/app_pb';


export class ApplicationServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptorListPods = new grpcWeb.MethodDescriptor(
    '/application.v1.ApplicationService/ListPods',
    grpcWeb.MethodType.SERVER_STREAMING,
    api_application_v1_app_pb.ListPodsRequest,
    api_application_v1_app_pb.ListPodsResponse,
    (request: api_application_v1_app_pb.ListPodsRequest) => {
      return request.serializeBinary();
    },
    api_application_v1_app_pb.ListPodsResponse.deserializeBinary
  );

  listPods(
    request: api_application_v1_app_pb.ListPodsRequest,
    metadata?: grpcWeb.Metadata): grpcWeb.ClientReadableStream<api_application_v1_app_pb.ListPodsResponse> {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/application.v1.ApplicationService/ListPods',
      request,
      metadata || {},
      this.methodDescriptorListPods);
  }

}

