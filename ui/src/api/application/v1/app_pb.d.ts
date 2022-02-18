// package: application.v1
// file: application/v1/app.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class ListNamespacesRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListNamespacesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListNamespacesRequest): ListNamespacesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
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

    hasNamespace(): boolean;
    clearNamespace(): void;
    getNamespace(): Namespace | undefined;
    setNamespace(value?: Namespace): ListNamespacesResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListNamespacesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListNamespacesResponse): ListNamespacesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
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
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Namespace, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Namespace;
    static deserializeBinaryFromReader(message: Namespace, reader: jspb.BinaryReader): Namespace;
}

export namespace Namespace {
    export type AsObject = {
        name: string,
    }
}
