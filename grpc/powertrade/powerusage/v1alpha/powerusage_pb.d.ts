import * as jspb from 'google-protobuf'
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'

export class DeviceUsage extends jspb.Message {
  getId(): string
  setId(value: string): DeviceUsage

  getWatt(): number
  setWatt(value: number): DeviceUsage

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): DeviceUsage.AsObject
  static toObject(
    includeInstance: boolean,
    msg: DeviceUsage
  ): DeviceUsage.AsObject
  static serializeBinaryToWriter(
    message: DeviceUsage,
    writer: jspb.BinaryWriter
  ): void
  static deserializeBinary(bytes: Uint8Array): DeviceUsage
  static deserializeBinaryFromReader(
    message: DeviceUsage,
    reader: jspb.BinaryReader
  ): DeviceUsage
}

export namespace DeviceUsage {
  export type AsObject = {
    id: string
    watt: number
  }
}

export class ChannelUsage extends jspb.Message {
  getNumber(): number
  setNumber(value: number): ChannelUsage

  getAlias(): string
  setAlias(value: string): ChannelUsage

  getDevicesList(): Array<DeviceUsage>
  setDevicesList(value: Array<DeviceUsage>): ChannelUsage
  clearDevicesList(): ChannelUsage
  addDevices(value?: DeviceUsage, index?: number): DeviceUsage

  getWatt(): number
  setWatt(value: number): ChannelUsage

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): ChannelUsage.AsObject
  static toObject(
    includeInstance: boolean,
    msg: ChannelUsage
  ): ChannelUsage.AsObject
  static serializeBinaryToWriter(
    message: ChannelUsage,
    writer: jspb.BinaryWriter
  ): void
  static deserializeBinary(bytes: Uint8Array): ChannelUsage
  static deserializeBinaryFromReader(
    message: ChannelUsage,
    reader: jspb.BinaryReader
  ): ChannelUsage
}

export namespace ChannelUsage {
  export type AsObject = {
    number: number
    alias: string
    devicesList: Array<DeviceUsage.AsObject>
    watt: number
  }
}

export class MeterUsage extends jspb.Message {
  getId(): string
  setId(value: string): MeterUsage

  getUid(): string
  setUid(value: string): MeterUsage

  getDescription(): string
  setDescription(value: string): MeterUsage

  getVoltage(): number
  setVoltage(value: number): MeterUsage

  getFrequency(): number
  setFrequency(value: number): MeterUsage

  getChannelsList(): Array<ChannelUsage>
  setChannelsList(value: Array<ChannelUsage>): MeterUsage
  clearChannelsList(): MeterUsage
  addChannels(value?: ChannelUsage, index?: number): ChannelUsage

  getWatt(): number
  setWatt(value: number): MeterUsage

  getEpoch(): google_protobuf_timestamp_pb.Timestamp | undefined
  setEpoch(value?: google_protobuf_timestamp_pb.Timestamp): MeterUsage
  hasEpoch(): boolean
  clearEpoch(): MeterUsage

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): MeterUsage.AsObject
  static toObject(
    includeInstance: boolean,
    msg: MeterUsage
  ): MeterUsage.AsObject
  static serializeBinaryToWriter(
    message: MeterUsage,
    writer: jspb.BinaryWriter
  ): void
  static deserializeBinary(bytes: Uint8Array): MeterUsage
  static deserializeBinaryFromReader(
    message: MeterUsage,
    reader: jspb.BinaryReader
  ): MeterUsage
}

export namespace MeterUsage {
  export type AsObject = {
    id: string
    uid: string
    description: string
    voltage: number
    frequency: number
    channelsList: Array<ChannelUsage.AsObject>
    watt: number
    epoch?: google_protobuf_timestamp_pb.Timestamp.AsObject
  }
}

export class GetPowerUsageRequest extends jspb.Message {
  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): GetPowerUsageRequest.AsObject
  static toObject(
    includeInstance: boolean,
    msg: GetPowerUsageRequest
  ): GetPowerUsageRequest.AsObject
  static serializeBinaryToWriter(
    message: GetPowerUsageRequest,
    writer: jspb.BinaryWriter
  ): void
  static deserializeBinary(bytes: Uint8Array): GetPowerUsageRequest
  static deserializeBinaryFromReader(
    message: GetPowerUsageRequest,
    reader: jspb.BinaryReader
  ): GetPowerUsageRequest
}

export namespace GetPowerUsageRequest {
  export type AsObject = {}
}

export class GetPowerUsageResponse extends jspb.Message {
  getMetersList(): Array<MeterUsage>
  setMetersList(value: Array<MeterUsage>): GetPowerUsageResponse
  clearMetersList(): GetPowerUsageResponse
  addMeters(value?: MeterUsage, index?: number): MeterUsage

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): GetPowerUsageResponse.AsObject
  static toObject(
    includeInstance: boolean,
    msg: GetPowerUsageResponse
  ): GetPowerUsageResponse.AsObject
  static serializeBinaryToWriter(
    message: GetPowerUsageResponse,
    writer: jspb.BinaryWriter
  ): void
  static deserializeBinary(bytes: Uint8Array): GetPowerUsageResponse
  static deserializeBinaryFromReader(
    message: GetPowerUsageResponse,
    reader: jspb.BinaryReader
  ): GetPowerUsageResponse
}

export namespace GetPowerUsageResponse {
  export type AsObject = {
    metersList: Array<MeterUsage.AsObject>
  }
}

export class Get60TicksPowerUsageRequest extends jspb.Message {
  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): Get60TicksPowerUsageRequest.AsObject
  static toObject(
    includeInstance: boolean,
    msg: Get60TicksPowerUsageRequest
  ): Get60TicksPowerUsageRequest.AsObject
  static serializeBinaryToWriter(
    message: Get60TicksPowerUsageRequest,
    writer: jspb.BinaryWriter
  ): void
  static deserializeBinary(bytes: Uint8Array): Get60TicksPowerUsageRequest
  static deserializeBinaryFromReader(
    message: Get60TicksPowerUsageRequest,
    reader: jspb.BinaryReader
  ): Get60TicksPowerUsageRequest
}

export namespace Get60TicksPowerUsageRequest {
  export type AsObject = {}
}

export class Get60TicksPowerUsageResponse extends jspb.Message {
  getSequenceNumber(): number
  setSequenceNumber(value: number): Get60TicksPowerUsageResponse

  getMetersList(): Array<MeterUsage>
  setMetersList(value: Array<MeterUsage>): Get60TicksPowerUsageResponse
  clearMetersList(): Get60TicksPowerUsageResponse
  addMeters(value?: MeterUsage, index?: number): MeterUsage

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): Get60TicksPowerUsageResponse.AsObject
  static toObject(
    includeInstance: boolean,
    msg: Get60TicksPowerUsageResponse
  ): Get60TicksPowerUsageResponse.AsObject
  static serializeBinaryToWriter(
    message: Get60TicksPowerUsageResponse,
    writer: jspb.BinaryWriter
  ): void
  static deserializeBinary(bytes: Uint8Array): Get60TicksPowerUsageResponse
  static deserializeBinaryFromReader(
    message: Get60TicksPowerUsageResponse,
    reader: jspb.BinaryReader
  ): Get60TicksPowerUsageResponse
}

export namespace Get60TicksPowerUsageResponse {
  export type AsObject = {
    sequenceNumber: number
    metersList: Array<MeterUsage.AsObject>
  }
}
