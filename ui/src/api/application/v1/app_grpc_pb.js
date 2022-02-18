// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var application_v1_app_pb = require('../../application/v1/app_pb.js');

function serialize_application_v1_ListNamespacesRequest(arg) {
  if (!(arg instanceof application_v1_app_pb.ListNamespacesRequest)) {
    throw new Error('Expected argument of type application.v1.ListNamespacesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_application_v1_ListNamespacesRequest(buffer_arg) {
  return application_v1_app_pb.ListNamespacesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_application_v1_ListNamespacesResponse(arg) {
  if (!(arg instanceof application_v1_app_pb.ListNamespacesResponse)) {
    throw new Error('Expected argument of type application.v1.ListNamespacesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_application_v1_ListNamespacesResponse(buffer_arg) {
  return application_v1_app_pb.ListNamespacesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var ApplicationServiceService = exports.ApplicationServiceService = {
  listNamespaces: {
    path: '/application.v1.ApplicationService/ListNamespaces',
    requestStream: false,
    responseStream: true,
    requestType: application_v1_app_pb.ListNamespacesRequest,
    responseType: application_v1_app_pb.ListNamespacesResponse,
    requestSerialize: serialize_application_v1_ListNamespacesRequest,
    requestDeserialize: deserialize_application_v1_ListNamespacesRequest,
    responseSerialize: serialize_application_v1_ListNamespacesResponse,
    responseDeserialize: deserialize_application_v1_ListNamespacesResponse,
  },
};

exports.ApplicationServiceClient = grpc.makeGenericClientConstructor(ApplicationServiceService);
