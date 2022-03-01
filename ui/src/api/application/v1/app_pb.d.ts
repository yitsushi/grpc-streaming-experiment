import * as jspb from 'google-protobuf'



export class ListPodsRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListPodsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPodsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListPodsRequest): ListPodsRequest.AsObject;
  static serializeBinaryToWriter(message: ListPodsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPodsRequest;
  static deserializeBinaryFromReader(message: ListPodsRequest, reader: jspb.BinaryReader): ListPodsRequest;
}

export namespace ListPodsRequest {
  export type AsObject = {
    namespace: string,
  }
}

export class ListPodsResponse extends jspb.Message {
  getType(): string;
  setType(value: string): ListPodsResponse;

  getPod(): Pod | undefined;
  setPod(value?: Pod): ListPodsResponse;
  hasPod(): boolean;
  clearPod(): ListPodsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPodsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListPodsResponse): ListPodsResponse.AsObject;
  static serializeBinaryToWriter(message: ListPodsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPodsResponse;
  static deserializeBinaryFromReader(message: ListPodsResponse, reader: jspb.BinaryReader): ListPodsResponse;
}

export namespace ListPodsResponse {
  export type AsObject = {
    type: string,
    pod?: Pod.AsObject,
  }
}

export class Pod extends jspb.Message {
  getName(): string;
  setName(value: string): Pod;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Pod.AsObject;
  static toObject(includeInstance: boolean, msg: Pod): Pod.AsObject;
  static serializeBinaryToWriter(message: Pod, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Pod;
  static deserializeBinaryFromReader(message: Pod, reader: jspb.BinaryReader): Pod;
}

export namespace Pod {
  export type AsObject = {
    name: string,
  }
}

