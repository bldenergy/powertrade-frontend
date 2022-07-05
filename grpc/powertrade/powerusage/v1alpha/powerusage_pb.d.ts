import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


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

export class StatisticalDeviceWatt extends jspb.Message {
  getId(): string;
  setId(value: string): StatisticalDeviceWatt;

  getWattList(): Array<number>;
  setWattList(value: Array<number>): StatisticalDeviceWatt;
  clearWattList(): StatisticalDeviceWatt;
  addWatt(value: number, index?: number): StatisticalDeviceWatt;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StatisticalDeviceWatt.AsObject;
  static toObject(includeInstance: boolean, msg: StatisticalDeviceWatt): StatisticalDeviceWatt.AsObject;
  static serializeBinaryToWriter(message: StatisticalDeviceWatt, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StatisticalDeviceWatt;
  static deserializeBinaryFromReader(message: StatisticalDeviceWatt, reader: jspb.BinaryReader): StatisticalDeviceWatt;
}

export namespace StatisticalDeviceWatt {
  export type AsObject = {
    id: string,
    wattList: Array<number>,
  }
}

export class ChannelUsage extends jspb.Message {
  getNumber(): number;
  setNumber(value: number): ChannelUsage;

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
    devicesList: Array<DeviceUsage.AsObject>,
    watt: number,
  }
}

export class HistoricalChannelUsage extends jspb.Message {
  getNumber(): number;
  setNumber(value: number): HistoricalChannelUsage;

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
    devicesList: Array<HistoricalDeviceUsage.AsObject>,
    wattList: Array<number>,
  }
}

export class StatisticalChannelWatt extends jspb.Message {
  getNumber(): number;
  setNumber(value: number): StatisticalChannelWatt;

  getDevicesList(): Array<StatisticalDeviceWatt>;
  setDevicesList(value: Array<StatisticalDeviceWatt>): StatisticalChannelWatt;
  clearDevicesList(): StatisticalChannelWatt;
  addDevices(value?: StatisticalDeviceWatt, index?: number): StatisticalDeviceWatt;

  getWattList(): Array<number>;
  setWattList(value: Array<number>): StatisticalChannelWatt;
  clearWattList(): StatisticalChannelWatt;
  addWatt(value: number, index?: number): StatisticalChannelWatt;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StatisticalChannelWatt.AsObject;
  static toObject(includeInstance: boolean, msg: StatisticalChannelWatt): StatisticalChannelWatt.AsObject;
  static serializeBinaryToWriter(message: StatisticalChannelWatt, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StatisticalChannelWatt;
  static deserializeBinaryFromReader(message: StatisticalChannelWatt, reader: jspb.BinaryReader): StatisticalChannelWatt;
}

export namespace StatisticalChannelWatt {
  export type AsObject = {
    number: number,
    devicesList: Array<StatisticalDeviceWatt.AsObject>,
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

export class StatisticalMeterWatt extends jspb.Message {
  getName(): string;
  setName(value: string): StatisticalMeterWatt;

  getId(): string;
  setId(value: string): StatisticalMeterWatt;

  getUid(): string;
  setUid(value: string): StatisticalMeterWatt;

  getChannelsList(): Array<StatisticalChannelWatt>;
  setChannelsList(value: Array<StatisticalChannelWatt>): StatisticalMeterWatt;
  clearChannelsList(): StatisticalMeterWatt;
  addChannels(value?: StatisticalChannelWatt, index?: number): StatisticalChannelWatt;

  getWattList(): Array<number>;
  setWattList(value: Array<number>): StatisticalMeterWatt;
  clearWattList(): StatisticalMeterWatt;
  addWatt(value: number, index?: number): StatisticalMeterWatt;

  getEpoch(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEpoch(value?: google_protobuf_timestamp_pb.Timestamp): StatisticalMeterWatt;
  hasEpoch(): boolean;
  clearEpoch(): StatisticalMeterWatt;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StatisticalMeterWatt.AsObject;
  static toObject(includeInstance: boolean, msg: StatisticalMeterWatt): StatisticalMeterWatt.AsObject;
  static serializeBinaryToWriter(message: StatisticalMeterWatt, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StatisticalMeterWatt;
  static deserializeBinaryFromReader(message: StatisticalMeterWatt, reader: jspb.BinaryReader): StatisticalMeterWatt;
}

export namespace StatisticalMeterWatt {
  export type AsObject = {
    name: string,
    id: string,
    uid: string,
    channelsList: Array<StatisticalChannelWatt.AsObject>,
    wattList: Array<number>,
    epoch?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class GetHistoricalRequest extends jspb.Message {
  getFrames(): number;
  setFrames(value: number): GetHistoricalRequest;

  getGranularity(): Granularity;
  setGranularity(value: Granularity): GetHistoricalRequest;

  getStart(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStart(value?: google_protobuf_timestamp_pb.Timestamp): GetHistoricalRequest;
  hasStart(): boolean;
  clearStart(): GetHistoricalRequest;

  getName(): string;
  setName(value: string): GetHistoricalRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetHistoricalRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetHistoricalRequest): GetHistoricalRequest.AsObject;
  static serializeBinaryToWriter(message: GetHistoricalRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetHistoricalRequest;
  static deserializeBinaryFromReader(message: GetHistoricalRequest, reader: jspb.BinaryReader): GetHistoricalRequest;
}

export namespace GetHistoricalRequest {
  export type AsObject = {
    frames: number,
    granularity: Granularity,
    start?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    name: string,
  }
}

export class GetHistoricalResponse extends jspb.Message {
  getMeter(): HistoricalMeterUsage | undefined;
  setMeter(value?: HistoricalMeterUsage): GetHistoricalResponse;
  hasMeter(): boolean;
  clearMeter(): GetHistoricalResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetHistoricalResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetHistoricalResponse): GetHistoricalResponse.AsObject;
  static serializeBinaryToWriter(message: GetHistoricalResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetHistoricalResponse;
  static deserializeBinaryFromReader(message: GetHistoricalResponse, reader: jspb.BinaryReader): GetHistoricalResponse;
}

export namespace GetHistoricalResponse {
  export type AsObject = {
    meter?: HistoricalMeterUsage.AsObject,
  }
}

export class GetStatisticalWattRequest extends jspb.Message {
  getScale(): Scale;
  setScale(value: Scale): GetStatisticalWattRequest;

  getStart(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStart(value?: google_protobuf_timestamp_pb.Timestamp): GetStatisticalWattRequest;
  hasStart(): boolean;
  clearStart(): GetStatisticalWattRequest;

  getName(): string;
  setName(value: string): GetStatisticalWattRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetStatisticalWattRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetStatisticalWattRequest): GetStatisticalWattRequest.AsObject;
  static serializeBinaryToWriter(message: GetStatisticalWattRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetStatisticalWattRequest;
  static deserializeBinaryFromReader(message: GetStatisticalWattRequest, reader: jspb.BinaryReader): GetStatisticalWattRequest;
}

export namespace GetStatisticalWattRequest {
  export type AsObject = {
    scale: Scale,
    start?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    name: string,
  }
}

export class GetStatisticalWattResponse extends jspb.Message {
  getMeter(): StatisticalMeterWatt | undefined;
  setMeter(value?: StatisticalMeterWatt): GetStatisticalWattResponse;
  hasMeter(): boolean;
  clearMeter(): GetStatisticalWattResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetStatisticalWattResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetStatisticalWattResponse): GetStatisticalWattResponse.AsObject;
  static serializeBinaryToWriter(message: GetStatisticalWattResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetStatisticalWattResponse;
  static deserializeBinaryFromReader(message: GetStatisticalWattResponse, reader: jspb.BinaryReader): GetStatisticalWattResponse;
}

export namespace GetStatisticalWattResponse {
  export type AsObject = {
    meter?: StatisticalMeterWatt.AsObject,
  }
}

export class ListHistoricalRequest extends jspb.Message {
  getFrames(): number;
  setFrames(value: number): ListHistoricalRequest;

  getGranularity(): Granularity;
  setGranularity(value: Granularity): ListHistoricalRequest;

  getStart(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStart(value?: google_protobuf_timestamp_pb.Timestamp): ListHistoricalRequest;
  hasStart(): boolean;
  clearStart(): ListHistoricalRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListHistoricalRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListHistoricalRequest): ListHistoricalRequest.AsObject;
  static serializeBinaryToWriter(message: ListHistoricalRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListHistoricalRequest;
  static deserializeBinaryFromReader(message: ListHistoricalRequest, reader: jspb.BinaryReader): ListHistoricalRequest;
}

export namespace ListHistoricalRequest {
  export type AsObject = {
    frames: number,
    granularity: Granularity,
    start?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class ListHistoricalResponse extends jspb.Message {
  getMetersList(): Array<HistoricalMeterUsage>;
  setMetersList(value: Array<HistoricalMeterUsage>): ListHistoricalResponse;
  clearMetersList(): ListHistoricalResponse;
  addMeters(value?: HistoricalMeterUsage, index?: number): HistoricalMeterUsage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListHistoricalResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListHistoricalResponse): ListHistoricalResponse.AsObject;
  static serializeBinaryToWriter(message: ListHistoricalResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListHistoricalResponse;
  static deserializeBinaryFromReader(message: ListHistoricalResponse, reader: jspb.BinaryReader): ListHistoricalResponse;
}

export namespace ListHistoricalResponse {
  export type AsObject = {
    metersList: Array<HistoricalMeterUsage.AsObject>,
  }
}

export class ListStatisticalWattRequest extends jspb.Message {
  getScale(): Scale;
  setScale(value: Scale): ListStatisticalWattRequest;

  getStart(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStart(value?: google_protobuf_timestamp_pb.Timestamp): ListStatisticalWattRequest;
  hasStart(): boolean;
  clearStart(): ListStatisticalWattRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListStatisticalWattRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListStatisticalWattRequest): ListStatisticalWattRequest.AsObject;
  static serializeBinaryToWriter(message: ListStatisticalWattRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListStatisticalWattRequest;
  static deserializeBinaryFromReader(message: ListStatisticalWattRequest, reader: jspb.BinaryReader): ListStatisticalWattRequest;
}

export namespace ListStatisticalWattRequest {
  export type AsObject = {
    scale: Scale,
    start?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class ListStatisticalWattResponse extends jspb.Message {
  getMeterList(): Array<StatisticalMeterWatt>;
  setMeterList(value: Array<StatisticalMeterWatt>): ListStatisticalWattResponse;
  clearMeterList(): ListStatisticalWattResponse;
  addMeter(value?: StatisticalMeterWatt, index?: number): StatisticalMeterWatt;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListStatisticalWattResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListStatisticalWattResponse): ListStatisticalWattResponse.AsObject;
  static serializeBinaryToWriter(message: ListStatisticalWattResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListStatisticalWattResponse;
  static deserializeBinaryFromReader(message: ListStatisticalWattResponse, reader: jspb.BinaryReader): ListStatisticalWattResponse;
}

export namespace ListStatisticalWattResponse {
  export type AsObject = {
    meterList: Array<StatisticalMeterWatt.AsObject>,
  }
}

export class GetRealtimeRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GetRealtimeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRealtimeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetRealtimeRequest): GetRealtimeRequest.AsObject;
  static serializeBinaryToWriter(message: GetRealtimeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRealtimeRequest;
  static deserializeBinaryFromReader(message: GetRealtimeRequest, reader: jspb.BinaryReader): GetRealtimeRequest;
}

export namespace GetRealtimeRequest {
  export type AsObject = {
    name: string,
  }
}

export class GetRealtimeResponse extends jspb.Message {
  getSequenceNumber(): number;
  setSequenceNumber(value: number): GetRealtimeResponse;

  getMeter(): MeterUsage | undefined;
  setMeter(value?: MeterUsage): GetRealtimeResponse;
  hasMeter(): boolean;
  clearMeter(): GetRealtimeResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRealtimeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetRealtimeResponse): GetRealtimeResponse.AsObject;
  static serializeBinaryToWriter(message: GetRealtimeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRealtimeResponse;
  static deserializeBinaryFromReader(message: GetRealtimeResponse, reader: jspb.BinaryReader): GetRealtimeResponse;
}

export namespace GetRealtimeResponse {
  export type AsObject = {
    sequenceNumber: number,
    meter?: MeterUsage.AsObject,
  }
}

export class ListRealtimeRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListRealtimeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListRealtimeRequest): ListRealtimeRequest.AsObject;
  static serializeBinaryToWriter(message: ListRealtimeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListRealtimeRequest;
  static deserializeBinaryFromReader(message: ListRealtimeRequest, reader: jspb.BinaryReader): ListRealtimeRequest;
}

export namespace ListRealtimeRequest {
  export type AsObject = {
  }
}

export class ListRealtimeResponse extends jspb.Message {
  getSequenceNumber(): number;
  setSequenceNumber(value: number): ListRealtimeResponse;

  getMetersList(): Array<MeterUsage>;
  setMetersList(value: Array<MeterUsage>): ListRealtimeResponse;
  clearMetersList(): ListRealtimeResponse;
  addMeters(value?: MeterUsage, index?: number): MeterUsage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListRealtimeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListRealtimeResponse): ListRealtimeResponse.AsObject;
  static serializeBinaryToWriter(message: ListRealtimeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListRealtimeResponse;
  static deserializeBinaryFromReader(message: ListRealtimeResponse, reader: jspb.BinaryReader): ListRealtimeResponse;
}

export namespace ListRealtimeResponse {
  export type AsObject = {
    sequenceNumber: number,
    metersList: Array<MeterUsage.AsObject>,
  }
}

export enum Granularity { 
  GRANULARITY_UNSPECIFIED = 0,
  GRANULARITY_SECOND = 1,
  GRANULARITY_MINUTE = 2,
  GRANULARITY_HOUR = 3,
}
export enum Scale { 
  SCALE_UNSPECIFIED = 0,
  SCALE_DAY = 1,
  SCALE_WEEK = 2,
  SCALE_MONTH = 3,
  SCALE_YEAR = 4,
}
