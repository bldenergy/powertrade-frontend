import * as jspb from 'google-protobuf'

import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as protoc$gen$openapiv2_options_annotations_pb from '../../../protoc-gen-openapiv2/options/annotations_pb';
import * as google_api_resource_pb from '../../../google/api/resource_pb';
import * as google_api_field_behavior_pb from '../../../google/api/field_behavior_pb';


export class PowerUsage extends jspb.Message {
  getDeviceId(): string;
  setDeviceId(value: string): PowerUsage;

  getPowerUsage(): number;
  setPowerUsage(value: number): PowerUsage;

  getTimeOfUsage(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimeOfUsage(value?: google_protobuf_timestamp_pb.Timestamp): PowerUsage;
  hasTimeOfUsage(): boolean;
  clearTimeOfUsage(): PowerUsage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PowerUsage.AsObject;
  static toObject(includeInstance: boolean, msg: PowerUsage): PowerUsage.AsObject;
  static serializeBinaryToWriter(message: PowerUsage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PowerUsage;
  static deserializeBinaryFromReader(message: PowerUsage, reader: jspb.BinaryReader): PowerUsage;
}

export namespace PowerUsage {
  export type AsObject = {
    deviceId: string,
    powerUsage: number,
    timeOfUsage?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class GetPowerUsageRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPowerUsageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPowerUsageRequest): GetPowerUsageRequest.AsObject;
  static serializeBinaryToWriter(message: GetPowerUsageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPowerUsageRequest;
  static deserializeBinaryFromReader(message: GetPowerUsageRequest, reader: jspb.BinaryReader): GetPowerUsageRequest;
}

export namespace GetPowerUsageRequest {
  export type AsObject = {
  }
}

export class Get60TicksPowerUsageRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Get60TicksPowerUsageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: Get60TicksPowerUsageRequest): Get60TicksPowerUsageRequest.AsObject;
  static serializeBinaryToWriter(message: Get60TicksPowerUsageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Get60TicksPowerUsageRequest;
  static deserializeBinaryFromReader(message: Get60TicksPowerUsageRequest, reader: jspb.BinaryReader): Get60TicksPowerUsageRequest;
}

export namespace Get60TicksPowerUsageRequest {
  export type AsObject = {
  }
}

export class HealthCheckRequest extends jspb.Message {
  getService(): string;
  setService(value: string): HealthCheckRequest;
  hasService(): boolean;
  clearService(): HealthCheckRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HealthCheckRequest.AsObject;
  static toObject(includeInstance: boolean, msg: HealthCheckRequest): HealthCheckRequest.AsObject;
  static serializeBinaryToWriter(message: HealthCheckRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HealthCheckRequest;
  static deserializeBinaryFromReader(message: HealthCheckRequest, reader: jspb.BinaryReader): HealthCheckRequest;
}

export namespace HealthCheckRequest {
  export type AsObject = {
    service?: string,
  }

  export enum ServiceCase { 
    _SERVICE_NOT_SET = 0,
    SERVICE = 1,
  }
}

export class HealthCheckResponse extends jspb.Message {
  getStatus(): HealthCheckResponse.ServingStatus;
  setStatus(value: HealthCheckResponse.ServingStatus): HealthCheckResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HealthCheckResponse.AsObject;
  static toObject(includeInstance: boolean, msg: HealthCheckResponse): HealthCheckResponse.AsObject;
  static serializeBinaryToWriter(message: HealthCheckResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HealthCheckResponse;
  static deserializeBinaryFromReader(message: HealthCheckResponse, reader: jspb.BinaryReader): HealthCheckResponse;
}

export namespace HealthCheckResponse {
  export type AsObject = {
    status: HealthCheckResponse.ServingStatus,
  }

  export enum ServingStatus { 
    SERVING_STATUS_UNSPECIFIED = 0,
    SERVING_STATUS_SERVING = 1,
    SERVING_STATUS_NOT_SERVING = 2,
  }
}

export class LivenessRequest extends jspb.Message {
  getHealthCheckRequest(): HealthCheckRequest | undefined;
  setHealthCheckRequest(value?: HealthCheckRequest): LivenessRequest;
  hasHealthCheckRequest(): boolean;
  clearHealthCheckRequest(): LivenessRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LivenessRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LivenessRequest): LivenessRequest.AsObject;
  static serializeBinaryToWriter(message: LivenessRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LivenessRequest;
  static deserializeBinaryFromReader(message: LivenessRequest, reader: jspb.BinaryReader): LivenessRequest;
}

export namespace LivenessRequest {
  export type AsObject = {
    healthCheckRequest?: HealthCheckRequest.AsObject,
  }
}

export class LivenessResponse extends jspb.Message {
  getHealthCheckResponse(): HealthCheckResponse | undefined;
  setHealthCheckResponse(value?: HealthCheckResponse): LivenessResponse;
  hasHealthCheckResponse(): boolean;
  clearHealthCheckResponse(): LivenessResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LivenessResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LivenessResponse): LivenessResponse.AsObject;
  static serializeBinaryToWriter(message: LivenessResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LivenessResponse;
  static deserializeBinaryFromReader(message: LivenessResponse, reader: jspb.BinaryReader): LivenessResponse;
}

export namespace LivenessResponse {
  export type AsObject = {
    healthCheckResponse?: HealthCheckResponse.AsObject,
  }
}

export class ReadinessRequest extends jspb.Message {
  getHealthCheckRequest(): HealthCheckRequest | undefined;
  setHealthCheckRequest(value?: HealthCheckRequest): ReadinessRequest;
  hasHealthCheckRequest(): boolean;
  clearHealthCheckRequest(): ReadinessRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReadinessRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ReadinessRequest): ReadinessRequest.AsObject;
  static serializeBinaryToWriter(message: ReadinessRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReadinessRequest;
  static deserializeBinaryFromReader(message: ReadinessRequest, reader: jspb.BinaryReader): ReadinessRequest;
}

export namespace ReadinessRequest {
  export type AsObject = {
    healthCheckRequest?: HealthCheckRequest.AsObject,
  }
}

export class ReadinessResponse extends jspb.Message {
  getHealthCheckResponse(): HealthCheckResponse | undefined;
  setHealthCheckResponse(value?: HealthCheckResponse): ReadinessResponse;
  hasHealthCheckResponse(): boolean;
  clearHealthCheckResponse(): ReadinessResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReadinessResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ReadinessResponse): ReadinessResponse.AsObject;
  static serializeBinaryToWriter(message: ReadinessResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReadinessResponse;
  static deserializeBinaryFromReader(message: ReadinessResponse, reader: jspb.BinaryReader): ReadinessResponse;
}

export namespace ReadinessResponse {
  export type AsObject = {
    healthCheckResponse?: HealthCheckResponse.AsObject,
  }
}

