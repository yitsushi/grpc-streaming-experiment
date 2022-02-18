/**
 * @fileoverview gRPC-Web generated client stub for api
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.api = require('./app_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.api.ApplicationClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.api.ApplicationPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.ListNamespacesRequest,
 *   !proto.api.NamespaceEvent>}
 */
const methodDescriptor_Application_ListNamespaces = new grpc.web.MethodDescriptor(
  '/api.Application/ListNamespaces',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.api.ListNamespacesRequest,
  proto.api.NamespaceEvent,
  /**
   * @param {!proto.api.ListNamespacesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.NamespaceEvent.deserializeBinary
);


/**
 * @param {!proto.api.ListNamespacesRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.api.NamespaceEvent>}
 *     The XHR Node Readable Stream
 */
proto.api.ApplicationClient.prototype.listNamespaces =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/api.Application/ListNamespaces',
      request,
      metadata || {},
      methodDescriptor_Application_ListNamespaces);
};


/**
 * @param {!proto.api.ListNamespacesRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.api.NamespaceEvent>}
 *     The XHR Node Readable Stream
 */
proto.api.ApplicationPromiseClient.prototype.listNamespaces =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/api.Application/ListNamespaces',
      request,
      metadata || {},
      methodDescriptor_Application_ListNamespaces);
};


module.exports = proto.api;

