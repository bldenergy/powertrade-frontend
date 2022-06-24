import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as google_api_resource_pb from '../../../google/api/resource_pb';


export class DeviceUsage extends jspb.Message {
  getId(): string;
  setId(value: string): DeviceUsage;

  getWatt(): number;
  setWatt(value: number): DeviceUsage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeviceUsage.AsObject;
  static toObject(includeInstance: boolean, msg: DeviceUsage): DeviceUsage.AsObject;
  static serializeBinaryToWriter(message: DeviceUsage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeviceUsage;
  static deserializeBinaryFromReader(message: DeviceUsage, reader: jspb.BinaryReader): DeviceUsage;
}

export namespace DeviceUsage {
  export type AsObject = {
    id: string,
    watt: number,
  }
}

export class HistoricalDeviceUsage extends jspb.Message {
  getId(): string;
  setId(value: string): HistoricalDeviceUsage;

  getWattList(): Array<number>;
  setWattList(value: Array<number>): HistoricalDeviceUsage;
  clearWattList(): HistoricalDeviceUsage;
  addWatt(value: number, index?: number): HistoricalDeviceUsage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HistoricalDeviceUsage.AsObject;
  static toObject(includeInstance: boolean, msg: HistoricalDeviceUsage): HistoricalDeviceUsage.AsObject;
  static serializeBinaryToWriter(message: HistoricalDeviceUsage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HistoricalDeviceUsage;
  static deserializeBinaryFromReader(message: HistoricalDeviceUsage, reader: jspb.BinaryReader): HistoricalDeviceUsage;
}

export namespace HistoricalDeviceUsage {
  export type AsObject = {
    id: string,
    wattList: Array<number>,
  }
}

export class ChannelUsage extends jspb.Message {
  getNumber(): number;
  setNumber(value: number): ChannelUsage;

  getAlias(): string;
  setAlias(value: string): ChannelUsage;

  getDevicesList(): Array<DeviceUsage>;
  setDevicesList(value: Array<DeviceUsage>): ChannelUsage;
  clearDevicesList(): ChannelUsage;
  addDevices(value?: DeviceUsage, index?: number): DeviceUsage;

  getWatt(): number;
  setWatt(value: number): ChannelUsage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChannelUsage.AsObject;
  static toObject(includeInstance: boolean, msg: ChannelUsage): ChannelUsage.AsObject;
  static serializeBinaryToWriter(message: ChannelUsage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChannelUsage;
  static deserializeBinaryFromReader(message: ChannelUsage, reader: jspb.BinaryReader): ChannelUsage;
}

export namespace ChannelUsage {
  export type AsObject = {
    number: number,
    alias: string,
    devicesList: Array<DeviceUsage.AsObject>,
    watt: number,
  }
}

export class HistoricalChannelUsage extends jspb.Message {
  getNumber(): number;
  setNumber(value: number): HistoricalChannelUsage;

  getAlias(): string;
  setAlias(value: string): HistoricalChannelUsage;

  getDevicesList(): Array<HistoricalDeviceUsage>;
  setDevicesList(value: Array<HistoricalDeviceUsage>): HistoricalChannelUsage;
  clearDevicesList(): HistoricalChannelUsage;
  addDevices(value?: HistoricalDeviceUsage, index?: number): HistoricalDeviceUsage;

  getWattList(): Array<number>;
  setWattList(value: Array<number>): HistoricalChannelUsage;
  clearWattList(): HistoricalChannelUsage;
  addWatt(value: number, index?: number): HistoricalChannelUsage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HistoricalChannelUsage.AsObject;
  static toObject(includeInstance: boolean, msg: HistoricalChannelUsage): HistoricalChannelUsage.AsObject;
  static serializeBinaryToWriter(message: HistoricalChannelUsage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HistoricalChannelUsage;
  static deserializeBinaryFromReader(message: HistoricalChannelUsage, reader: jspb.BinaryReader): HistoricalChannelUsage;
}

export namespace HistoricalChannelUsage {
  export type AsObject = {
    number: number,
    alias: string,
    devicesList: Array<HistoricalDeviceUsage.AsObject>,
    wattList: Array<number>,
  }
}

export class MeterUsage extends jspb.Message {
  getName(): string;
  setName(value: string): MeterUsage;

  getId(): string;
  setId(value: string): MeterUsage;

  getUid(): string;
  setUid(value: string): MeterUsage;

  getVoltage(): number;
  setVoltage(value: number): MeterUsage;

  getFrequency(): number;
  setFrequency(value: number): MeterUsage;

  getChannelsList(): Array<ChannelUsage>;
  setChannelsList(value: Array<ChannelUsage>): MeterUsage;
  clearChannelsList(): MeterUsage;
  addChannels(value?: ChannelUsage, index?: number): ChannelUsage;

  getWatt(): number;
  setWatt(value: number): MeterUsage;

  getEpoch(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEpoch(value?: google_protobuf_timestamp_pb.Timestamp): MeterUsage;
  hasEpoch(): boolean;
  clearEpoch(): MeterUsage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MeterUsage.AsObject;
  static toObject(includeInstance: boolean, msg: MeterUsage): MeterUsage.AsObject;
  static serializeBinaryToWriter(message: MeterUsage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MeterUsage;
  static deserializeBinaryFromReader(message: MeterUsage, reader: jspb.BinaryReader): MeterUsage;
}

export namespace MeterUsage {
  export type AsObject = {
    name: string,
    id: string,
    uid: string,
    voltage: number,
    frequency: number,
    channelsList: Array<ChannelUsage.AsObject>,
    watt: number,
    epoch?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class HistoricalMeterUsage extends jspb.Message {
  getName(): string;
  setName(value: string): HistoricalMeterUsage;

  getId(): string;
  setId(value: string): HistoricalMeterUsage;

  getUid(): string;
  setUid(value: string): HistoricalMeterUsage;

  getVoltageList(): Array<number>;
  setVoltageList(value: Array<number>): HistoricalMeterUsage;
  clearVoltageList(): HistoricalMeterUsage;
  addVoltage(value: number, index?: number): HistoricalMeterUsage;

  getFrequencyList(): Array<number>;
  setFrequencyList(value: Array<number>): HistoricalMeterUsage;
  clearFrequencyList(): HistoricalMeterUsage;
  addFrequency(value: number, index?: number): HistoricalMeterUsage;

  getChannelsList(): Array<HistoricalChannelUsage>;
  setChannelsList(value: Array<HistoricalChannelUsage>): HistoricalMeterUsage;
  clearChannelsList(): HistoricalMeterUsage;
  addChannels(value?: HistoricalChannelUsage, index?: number): HistoricalChannelUsage;

  getWattList(): Array<number>;
  setWattList(value: Array<number>): HistoricalMeterUsage;
  clearWattList(): HistoricalMeterUsage;
  addWatt(value: number, index?: number): HistoricalMeterUsage;

  getEpoch(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEpoch(value?: google_protobuf_timestamp_pb.Timestamp): HistoricalMeterUsage;
  hasEpoch(): boolean;
  clearEpoch(): HistoricalMeterUsage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HistoricalMeterUsage.AsObject;
  static toObject(includeInstance: boolean, msg: HistoricalMeterUsage): HistoricalMeterUsage.AsObject;
  static serializeBinaryToWriter(message: HistoricalMeterUsage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HistoricalMeterUsage;
  static deserializeBinaryFromReader(message: HistoricalMeterUsage, reader: jspb.BinaryReader): HistoricalMeterUsage;
}

export namespace HistoricalMeterUsage {
  export type AsObject = {
    name: string,
    id: string,
    uid: string,
    voltageList: Array<number>,
    frequencyList: Array<number>,
    channelsList: Array<HistoricalChannelUsage.AsObject>,
    wattList: Array<number>,
    epoch?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class GetHistoricalPowerUsageRequest extends jspb.Message {
  getFrames(): number;
  setFrames(value: number): GetHistoricalPowerUsageRequest;

  getGranularity(): Granularity;
  setGranularity(value: Granularity): GetHistoricalPowerUsageRequest;

  getStart(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStart(value?: google_protobuf_timestamp_pb.Timestamp): GetHistoricalPowerUsageRequest;
  hasStart(): boolean;
  clearStart(): GetHistoricalPowerUsageRequest;

  getName(): string;
  setName(value: string): GetHistoricalPowerUsageRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetHistoricalPowerUsageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetHistoricalPowerUsageRequest): GetHistoricalPowerUsageRequest.AsObject;
  static serializeBinaryToWriter(message: GetHistoricalPowerUsageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetHistoricalPowerUsageRequest;
  static deserializeBinaryFromReader(message: GetHistoricalPowerUsageRequest, reader: jspb.BinaryReader): GetHistoricalPowerUsageRequest;
}

export namespace GetHistoricalPowerUsageRequest {
  export type AsObject = {
    frames: number,
    granularity: Granularity,
    start?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    name: string,
  }
}

export class GetHistoricalPowerUsageResponse extends jspb.Message {
  getMeter(): HistoricalMeterUsage | undefined;
  setMeter(value?: HistoricalMeterUsage): GetHistoricalPowerUsageResponse;
  hasMeter(): boolean;
  clearMeter(): GetHistoricalPowerUsageResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetHistoricalPowerUsageResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetHistoricalPowerUsageResponse): GetHistoricalPowerUsageResponse.AsObject;
  static serializeBinaryToWriter(message: GetHistoricalPowerUsageResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetHistoricalPowerUsageResponse;
  static deserializeBinaryFromReader(message: GetHistoricalPowerUsageResponse, reader: jspb.BinaryReader): GetHistoricalPowerUsageResponse;
}

export namespace GetHistoricalPowerUsageResponse {
  export type AsObject = {
    meter?: HistoricalMeterUsage.AsObject,
  }
}

export class ListHistoricalPowerUsageRequest extends jspb.Message {
  getFrames(): number;
  setFrames(value: number): ListHistoricalPowerUsageRequest;

  getGranularity(): Granularity;
  setGranularity(value: Granularity): ListHistoricalPowerUsageRequest;

  getStart(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStart(value?: google_protobuf_timestamp_pb.Timestamp): ListHistoricalPowerUsageRequest;
  hasStart(): boolean;
  clearStart(): ListHistoricalPowerUsageRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListHistoricalPowerUsageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListHistoricalPowerUsageRequest): ListHistoricalPowerUsageRequest.AsObject;
  static serializeBinaryToWriter(message: ListHistoricalPowerUsageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListHistoricalPowerUsageRequest;
  static deserializeBinaryFromReader(message: ListHistoricalPowerUsageRequest, reader: jspb.BinaryReader): ListHistoricalPowerUsageRequest;
}

export namespace ListHistoricalPowerUsageRequest {
  export type AsObject = {
    frames: number,
    granularity: Granularity,
    start?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class ListHistoricalPowerUsageResponse extends jspb.Message {
  getMetersList(): Array<HistoricalMeterUsage>;
  setMetersList(value: Array<HistoricalMeterUsage>): ListHistoricalPowerUsageResponse;
  clearMetersList(): ListHistoricalPowerUsageResponse;
  addMeters(value?: HistoricalMeterUsage, index?: number): HistoricalMeterUsage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListHistoricalPowerUsageResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListHistoricalPowerUsageResponse): ListHistoricalPowerUsageResponse.AsObject;
  static serializeBinaryToWriter(message: ListHistoricalPowerUsageResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListHistoricalPowerUsageResponse;
  static deserializeBinaryFromReader(message: ListHistoricalPowerUsageResponse, reader: jspb.BinaryReader): ListHistoricalPowerUsageResponse;
}

export namespace ListHistoricalPowerUsageResponse {
  export type AsObject = {
    metersList: Array<HistoricalMeterUsage.AsObject>,
  }
}

export class GetStreamPowerUsageRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetStreamPowerUsageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetStreamPowerUsageRequest): GetStreamPowerUsageRequest.AsObject;
  static serializeBinaryToWriter(message: GetStreamPowerUsageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetStreamPowerUsageRequest;
  static deserializeBinaryFromReader(message: GetStreamPowerUsageRequest, reader: jspb.BinaryReader): GetStreamPowerUsageRequest;
}

export namespace GetStreamPowerUsageRequest {
  export type AsObject = {
  }
}

export class GetStreamPowerUsageResponse extends jspb.Message {
  getSequenceNumber(): number;
  setSequenceNumber(value: number): GetStreamPowerUsageResponse;

  getMetersList(): Array<MeterUsage>;
  setMetersList(value: Array<MeterUsage>): GetStreamPowerUsageResponse;
  clearMetersList(): GetStreamPowerUsageResponse;
  addMeters(value?: MeterUsage, index?: number): MeterUsage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetStreamPowerUsageResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetStreamPowerUsageResponse): GetStreamPowerUsageResponse.AsObject;
  static serializeBinaryToWriter(message: GetStreamPowerUsageResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetStreamPowerUsageResponse;
  static deserializeBinaryFromReader(message: GetStreamPowerUsageResponse, reader: jspb.BinaryReader): GetStreamPowerUsageResponse;
}

export namespace GetStreamPowerUsageResponse {
  export type AsObject = {
    sequenceNumber: number,
    metersList: Array<MeterUsage.AsObject>,
  }
}

export enum Granularity { 
  GRANULARITY_UNSPECIFIED = 0,
  GRANULARITY_SECOND = 1,
}
