import * as jspb from 'google-protobuf'

export class HealthCheckRequest extends jspb.Message {
  getService(): string
  setService(value: string): HealthCheckRequest
  hasService(): boolean
  clearService(): HealthCheckRequest

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): HealthCheckRequest.AsObject
  static toObject(
    includeInstance: boolean,
    msg: HealthCheckRequest
  ): HealthCheckRequest.AsObject
  static serializeBinaryToWriter(
    message: HealthCheckRequest,
    writer: jspb.BinaryWriter
  ): void
  static deserializeBinary(bytes: Uint8Array): HealthCheckRequest
  static deserializeBinaryFromReader(
    message: HealthCheckRequest,
    reader: jspb.BinaryReader
  ): HealthCheckRequest
}

export namespace HealthCheckRequest {
  export type AsObject = {
    service?: string
  }

  export enum ServiceCase {
    _SERVICE_NOT_SET = 0,
    SERVICE = 1
  }
}

export class HealthCheckResponse extends jspb.Message {
  getStatus(): HealthCheckResponse.ServingStatus
  setStatus(value: HealthCheckResponse.ServingStatus): HealthCheckResponse

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): HealthCheckResponse.AsObject
  static toObject(
    includeInstance: boolean,
    msg: HealthCheckResponse
  ): HealthCheckResponse.AsObject
  static serializeBinaryToWriter(
    message: HealthCheckResponse,
    writer: jspb.BinaryWriter
  ): void
  static deserializeBinary(bytes: Uint8Array): HealthCheckResponse
  static deserializeBinaryFromReader(
    message: HealthCheckResponse,
    reader: jspb.BinaryReader
  ): HealthCheckResponse
}

export namespace HealthCheckResponse {
  export type AsObject = {
    status: HealthCheckResponse.ServingStatus
  }

  export enum ServingStatus {
    SERVING_STATUS_UNSPECIFIED = 0,
    SERVING_STATUS_SERVING = 1,
    SERVING_STATUS_NOT_SERVING = 2
  }
}

export class LivenessRequest extends jspb.Message {
  getHealthCheckRequest(): HealthCheckRequest | undefined
  setHealthCheckRequest(value?: HealthCheckRequest): LivenessRequest
  hasHealthCheckRequest(): boolean
  clearHealthCheckRequest(): LivenessRequest

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): LivenessRequest.AsObject
  static toObject(
    includeInstance: boolean,
    msg: LivenessRequest
  ): LivenessRequest.AsObject
  static serializeBinaryToWriter(
    message: LivenessRequest,
    writer: jspb.BinaryWriter
  ): void
  static deserializeBinary(bytes: Uint8Array): LivenessRequest
  static deserializeBinaryFromReader(
    message: LivenessRequest,
    reader: jspb.BinaryReader
  ): LivenessRequest
}

export namespace LivenessRequest {
  export type AsObject = {
    healthCheckRequest?: HealthCheckRequest.AsObject
  }
}

export class LivenessResponse extends jspb.Message {
  getHealthCheckResponse(): HealthCheckResponse | undefined
  setHealthCheckResponse(value?: HealthCheckResponse): LivenessResponse
  hasHealthCheckResponse(): boolean
  clearHealthCheckResponse(): LivenessResponse

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): LivenessResponse.AsObject
  static toObject(
    includeInstance: boolean,
    msg: LivenessResponse
  ): LivenessResponse.AsObject
  static serializeBinaryToWriter(
    message: LivenessResponse,
    writer: jspb.BinaryWriter
  ): void
  static deserializeBinary(bytes: Uint8Array): LivenessResponse
  static deserializeBinaryFromReader(
    message: LivenessResponse,
    reader: jspb.BinaryReader
  ): LivenessResponse
}

export namespace LivenessResponse {
  export type AsObject = {
    healthCheckResponse?: HealthCheckResponse.AsObject
  }
}

export class ReadinessRequest extends jspb.Message {
  getHealthCheckRequest(): HealthCheckRequest | undefined
  setHealthCheckRequest(value?: HealthCheckRequest): ReadinessRequest
  hasHealthCheckRequest(): boolean
  clearHealthCheckRequest(): ReadinessRequest

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): ReadinessRequest.AsObject
  static toObject(
    includeInstance: boolean,
    msg: ReadinessRequest
  ): ReadinessRequest.AsObject
  static serializeBinaryToWriter(
    message: ReadinessRequest,
    writer: jspb.BinaryWriter
  ): void
  static deserializeBinary(bytes: Uint8Array): ReadinessRequest
  static deserializeBinaryFromReader(
    message: ReadinessRequest,
    reader: jspb.BinaryReader
  ): ReadinessRequest
}

export namespace ReadinessRequest {
  export type AsObject = {
    healthCheckRequest?: HealthCheckRequest.AsObject
  }
}

export class ReadinessResponse extends jspb.Message {
  getHealthCheckResponse(): HealthCheckResponse | undefined
  setHealthCheckResponse(value?: HealthCheckResponse): ReadinessResponse
  hasHealthCheckResponse(): boolean
  clearHealthCheckResponse(): ReadinessResponse

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): ReadinessResponse.AsObject
  static toObject(
    includeInstance: boolean,
    msg: ReadinessResponse
  ): ReadinessResponse.AsObject
  static serializeBinaryToWriter(
    message: ReadinessResponse,
    writer: jspb.BinaryWriter
  ): void
  static deserializeBinary(bytes: Uint8Array): ReadinessResponse
  static deserializeBinaryFromReader(
    message: ReadinessResponse,
    reader: jspb.BinaryReader
  ): ReadinessResponse
}

export namespace ReadinessResponse {
  export type AsObject = {
    healthCheckResponse?: HealthCheckResponse.AsObject
  }
}
