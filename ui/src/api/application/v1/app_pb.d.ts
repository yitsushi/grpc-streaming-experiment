import * as jspb from 'google-protobuf'



export class ListNamespacesRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListNamespacesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListNamespacesRequest): ListNamespacesRequest.AsObject;
  static serializeBinaryToWriter(message: ListNamespacesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListNamespacesRequest;
  static deserializeBinaryFromReader(message: ListNamespacesRequest, reader: jspb.BinaryReader): ListNamespacesRequest;
}

export namespace ListNamespacesRequest {
  export type AsObject = {
  }
}

export class ListNamespacesResponse extends jspb.Message {
  getType(): string;
  setType(value: string): ListNamespacesResponse;

  getNamespace(): Namespace | undefined;
  setNamespace(value?: Namespace): ListNamespacesResponse;
  hasNamespace(): boolean;
  clearNamespace(): ListNamespacesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListNamespacesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListNamespacesResponse): ListNamespacesResponse.AsObject;
  static serializeBinaryToWriter(message: ListNamespacesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListNamespacesResponse;
  static deserializeBinaryFromReader(message: ListNamespacesResponse, reader: jspb.BinaryReader): ListNamespacesResponse;
}

export namespace ListNamespacesResponse {
  export type AsObject = {
    type: string,
    namespace?: Namespace.AsObject,
  }
}

export class Namespace extends jspb.Message {
  getName(): string;
  setName(value: string): Namespace;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Namespace.AsObject;
  static toObject(includeInstance: boolean, msg: Namespace): Namespace.AsObject;
  static serializeBinaryToWriter(message: Namespace, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Namespace;
  static deserializeBinaryFromReader(message: Namespace, reader: jspb.BinaryReader): Namespace;
}

export namespace Namespace {
  export type AsObject = {
    name: string,
  }
}

