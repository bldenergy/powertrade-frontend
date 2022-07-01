/**
 * @fileoverview gRPC-Web generated client stub for powertrade.powerusage.v1alpha
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as powertrade_powerusage_v1alpha_powerusage_pb from '../../../powertrade/powerusage/v1alpha/powerusage_pb';
import * as powertrade_powerusage_v1alpha_healthcheck_pb from '../../../powertrade/powerusage/v1alpha/healthcheck_pb';


export class PowerUsageServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'binary';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptorLiveness = new grpcWeb.MethodDescriptor(
    '/powertrade.powerusage.v1alpha.PowerUsageService/Liveness',
    grpcWeb.MethodType.UNARY,
    powertrade_powerusage_v1alpha_healthcheck_pb.LivenessRequest,
    powertrade_powerusage_v1alpha_healthcheck_pb.LivenessResponse,
    (request: powertrade_powerusage_v1alpha_healthcheck_pb.LivenessRequest) => {
      return request.serializeBinary();
    },
    powertrade_powerusage_v1alpha_healthcheck_pb.LivenessResponse.deserializeBinary
  );

  liveness(
    request: powertrade_powerusage_v1alpha_healthcheck_pb.LivenessRequest,
    metadata: grpcWeb.Metadata | null): Promise<powertrade_powerusage_v1alpha_healthcheck_pb.LivenessResponse>;

  liveness(
    request: powertrade_powerusage_v1alpha_healthcheck_pb.LivenessRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: powertrade_powerusage_v1alpha_healthcheck_pb.LivenessResponse) => void): grpcWeb.ClientReadableStream<powertrade_powerusage_v1alpha_healthcheck_pb.LivenessResponse>;

  liveness(
    request: powertrade_powerusage_v1alpha_healthcheck_pb.LivenessRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: powertrade_powerusage_v1alpha_healthcheck_pb.LivenessResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/powertrade.powerusage.v1alpha.PowerUsageService/Liveness',
        request,
        metadata || {},
        this.methodDescriptorLiveness,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/powertrade.powerusage.v1alpha.PowerUsageService/Liveness',
    request,
    metadata || {},
    this.methodDescriptorLiveness);
  }

  methodDescriptorReadiness = new grpcWeb.MethodDescriptor(
    '/powertrade.powerusage.v1alpha.PowerUsageService/Readiness',
    grpcWeb.MethodType.UNARY,
    powertrade_powerusage_v1alpha_healthcheck_pb.ReadinessRequest,
    powertrade_powerusage_v1alpha_healthcheck_pb.ReadinessResponse,
    (request: powertrade_powerusage_v1alpha_healthcheck_pb.ReadinessRequest) => {
      return request.serializeBinary();
    },
    powertrade_powerusage_v1alpha_healthcheck_pb.ReadinessResponse.deserializeBinary
  );

  readiness(
    request: powertrade_powerusage_v1alpha_healthcheck_pb.ReadinessRequest,
    metadata: grpcWeb.Metadata | null): Promise<powertrade_powerusage_v1alpha_healthcheck_pb.ReadinessResponse>;

  readiness(
    request: powertrade_powerusage_v1alpha_healthcheck_pb.ReadinessRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: powertrade_powerusage_v1alpha_healthcheck_pb.ReadinessResponse) => void): grpcWeb.ClientReadableStream<powertrade_powerusage_v1alpha_healthcheck_pb.ReadinessResponse>;

  readiness(
    request: powertrade_powerusage_v1alpha_healthcheck_pb.ReadinessRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: powertrade_powerusage_v1alpha_healthcheck_pb.ReadinessResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/powertrade.powerusage.v1alpha.PowerUsageService/Readiness',
        request,
        metadata || {},
        this.methodDescriptorReadiness,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/powertrade.powerusage.v1alpha.PowerUsageService/Readiness',
    request,
    metadata || {},
    this.methodDescriptorReadiness);
  }

  methodDescriptorGetHistorical = new grpcWeb.MethodDescriptor(
    '/powertrade.powerusage.v1alpha.PowerUsageService/GetHistorical',
    grpcWeb.MethodType.UNARY,
    powertrade_powerusage_v1alpha_powerusage_pb.GetHistoricalRequest,
    powertrade_powerusage_v1alpha_powerusage_pb.GetHistoricalResponse,
    (request: powertrade_powerusage_v1alpha_powerusage_pb.GetHistoricalRequest) => {
      return request.serializeBinary();
    },
    powertrade_powerusage_v1alpha_powerusage_pb.GetHistoricalResponse.deserializeBinary
  );

  getHistorical(
    request: powertrade_powerusage_v1alpha_powerusage_pb.GetHistoricalRequest,
    metadata: grpcWeb.Metadata | null): Promise<powertrade_powerusage_v1alpha_powerusage_pb.GetHistoricalResponse>;

  getHistorical(
    request: powertrade_powerusage_v1alpha_powerusage_pb.GetHistoricalRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: powertrade_powerusage_v1alpha_powerusage_pb.GetHistoricalResponse) => void): grpcWeb.ClientReadableStream<powertrade_powerusage_v1alpha_powerusage_pb.GetHistoricalResponse>;

  getHistorical(
    request: powertrade_powerusage_v1alpha_powerusage_pb.GetHistoricalRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: powertrade_powerusage_v1alpha_powerusage_pb.GetHistoricalResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/powertrade.powerusage.v1alpha.PowerUsageService/GetHistorical',
        request,
        metadata || {},
        this.methodDescriptorGetHistorical,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/powertrade.powerusage.v1alpha.PowerUsageService/GetHistorical',
    request,
    metadata || {},
    this.methodDescriptorGetHistorical);
  }

  methodDescriptorGetStatisticalWatt = new grpcWeb.MethodDescriptor(
    '/powertrade.powerusage.v1alpha.PowerUsageService/GetStatisticalWatt',
    grpcWeb.MethodType.UNARY,
    powertrade_powerusage_v1alpha_powerusage_pb.GetStatisticalWattRequest,
    powertrade_powerusage_v1alpha_powerusage_pb.GetStatisticalWattResponse,
    (request: powertrade_powerusage_v1alpha_powerusage_pb.GetStatisticalWattRequest) => {
      return request.serializeBinary();
    },
    powertrade_powerusage_v1alpha_powerusage_pb.GetStatisticalWattResponse.deserializeBinary
  );

  getStatisticalWatt(
    request: powertrade_powerusage_v1alpha_powerusage_pb.GetStatisticalWattRequest,
    metadata: grpcWeb.Metadata | null): Promise<powertrade_powerusage_v1alpha_powerusage_pb.GetStatisticalWattResponse>;

  getStatisticalWatt(
    request: powertrade_powerusage_v1alpha_powerusage_pb.GetStatisticalWattRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: powertrade_powerusage_v1alpha_powerusage_pb.GetStatisticalWattResponse) => void): grpcWeb.ClientReadableStream<powertrade_powerusage_v1alpha_powerusage_pb.GetStatisticalWattResponse>;

  getStatisticalWatt(
    request: powertrade_powerusage_v1alpha_powerusage_pb.GetStatisticalWattRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: powertrade_powerusage_v1alpha_powerusage_pb.GetStatisticalWattResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/powertrade.powerusage.v1alpha.PowerUsageService/GetStatisticalWatt',
        request,
        metadata || {},
        this.methodDescriptorGetStatisticalWatt,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/powertrade.powerusage.v1alpha.PowerUsageService/GetStatisticalWatt',
    request,
    metadata || {},
    this.methodDescriptorGetStatisticalWatt);
  }

  methodDescriptorListHistorical = new grpcWeb.MethodDescriptor(
    '/powertrade.powerusage.v1alpha.PowerUsageService/ListHistorical',
    grpcWeb.MethodType.UNARY,
    powertrade_powerusage_v1alpha_powerusage_pb.ListHistoricalRequest,
    powertrade_powerusage_v1alpha_powerusage_pb.ListHistoricalResponse,
    (request: powertrade_powerusage_v1alpha_powerusage_pb.ListHistoricalRequest) => {
      return request.serializeBinary();
    },
    powertrade_powerusage_v1alpha_powerusage_pb.ListHistoricalResponse.deserializeBinary
  );

  listHistorical(
    request: powertrade_powerusage_v1alpha_powerusage_pb.ListHistoricalRequest,
    metadata: grpcWeb.Metadata | null): Promise<powertrade_powerusage_v1alpha_powerusage_pb.ListHistoricalResponse>;

  listHistorical(
    request: powertrade_powerusage_v1alpha_powerusage_pb.ListHistoricalRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: powertrade_powerusage_v1alpha_powerusage_pb.ListHistoricalResponse) => void): grpcWeb.ClientReadableStream<powertrade_powerusage_v1alpha_powerusage_pb.ListHistoricalResponse>;

  listHistorical(
    request: powertrade_powerusage_v1alpha_powerusage_pb.ListHistoricalRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: powertrade_powerusage_v1alpha_powerusage_pb.ListHistoricalResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/powertrade.powerusage.v1alpha.PowerUsageService/ListHistorical',
        request,
        metadata || {},
        this.methodDescriptorListHistorical,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/powertrade.powerusage.v1alpha.PowerUsageService/ListHistorical',
    request,
    metadata || {},
    this.methodDescriptorListHistorical);
  }

  methodDescriptorListStatisticalWatt = new grpcWeb.MethodDescriptor(
    '/powertrade.powerusage.v1alpha.PowerUsageService/ListStatisticalWatt',
    grpcWeb.MethodType.UNARY,
    powertrade_powerusage_v1alpha_powerusage_pb.ListStatisticalWattRequest,
    powertrade_powerusage_v1alpha_powerusage_pb.ListStatisticalWattResponse,
    (request: powertrade_powerusage_v1alpha_powerusage_pb.ListStatisticalWattRequest) => {
      return request.serializeBinary();
    },
    powertrade_powerusage_v1alpha_powerusage_pb.ListStatisticalWattResponse.deserializeBinary
  );

  listStatisticalWatt(
    request: powertrade_powerusage_v1alpha_powerusage_pb.ListStatisticalWattRequest,
    metadata: grpcWeb.Metadata | null): Promise<powertrade_powerusage_v1alpha_powerusage_pb.ListStatisticalWattResponse>;

  listStatisticalWatt(
    request: powertrade_powerusage_v1alpha_powerusage_pb.ListStatisticalWattRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: powertrade_powerusage_v1alpha_powerusage_pb.ListStatisticalWattResponse) => void): grpcWeb.ClientReadableStream<powertrade_powerusage_v1alpha_powerusage_pb.ListStatisticalWattResponse>;

  listStatisticalWatt(
    request: powertrade_powerusage_v1alpha_powerusage_pb.ListStatisticalWattRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: powertrade_powerusage_v1alpha_powerusage_pb.ListStatisticalWattResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/powertrade.powerusage.v1alpha.PowerUsageService/ListStatisticalWatt',
        request,
        metadata || {},
        this.methodDescriptorListStatisticalWatt,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/powertrade.powerusage.v1alpha.PowerUsageService/ListStatisticalWatt',
    request,
    metadata || {},
    this.methodDescriptorListStatisticalWatt);
  }

  methodDescriptorGetRealtime = new grpcWeb.MethodDescriptor(
    '/powertrade.powerusage.v1alpha.PowerUsageService/GetRealtime',
    grpcWeb.MethodType.SERVER_STREAMING,
    powertrade_powerusage_v1alpha_powerusage_pb.GetRealtimeRequest,
    powertrade_powerusage_v1alpha_powerusage_pb.GetRealtimeResponse,
    (request: powertrade_powerusage_v1alpha_powerusage_pb.GetRealtimeRequest) => {
      return request.serializeBinary();
    },
    powertrade_powerusage_v1alpha_powerusage_pb.GetRealtimeResponse.deserializeBinary
  );

  getRealtime(
    request: powertrade_powerusage_v1alpha_powerusage_pb.GetRealtimeRequest,
    metadata?: grpcWeb.Metadata): grpcWeb.ClientReadableStream<powertrade_powerusage_v1alpha_powerusage_pb.GetRealtimeResponse> {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/powertrade.powerusage.v1alpha.PowerUsageService/GetRealtime',
      request,
      metadata || {},
      this.methodDescriptorGetRealtime);
  }

  methodDescriptorListRealtime = new grpcWeb.MethodDescriptor(
    '/powertrade.powerusage.v1alpha.PowerUsageService/ListRealtime',
    grpcWeb.MethodType.SERVER_STREAMING,
    powertrade_powerusage_v1alpha_powerusage_pb.ListRealtimeRequest,
    powertrade_powerusage_v1alpha_powerusage_pb.ListRealtimeResponse,
    (request: powertrade_powerusage_v1alpha_powerusage_pb.ListRealtimeRequest) => {
      return request.serializeBinary();
    },
    powertrade_powerusage_v1alpha_powerusage_pb.ListRealtimeResponse.deserializeBinary
  );

  listRealtime(
    request: powertrade_powerusage_v1alpha_powerusage_pb.ListRealtimeRequest,
    metadata?: grpcWeb.Metadata): grpcWeb.ClientReadableStream<powertrade_powerusage_v1alpha_powerusage_pb.ListRealtimeResponse> {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/powertrade.powerusage.v1alpha.PowerUsageService/ListRealtime',
      request,
      metadata || {},
      this.methodDescriptorListRealtime);
  }

}

