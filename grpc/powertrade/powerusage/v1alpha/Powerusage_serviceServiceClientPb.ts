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

  methodDescriptorGetHistoricalPowerUsage = new grpcWeb.MethodDescriptor(
    '/powertrade.powerusage.v1alpha.PowerUsageService/GetHistoricalPowerUsage',
    grpcWeb.MethodType.UNARY,
    powertrade_powerusage_v1alpha_powerusage_pb.GetHistoricalPowerUsageRequest,
    powertrade_powerusage_v1alpha_powerusage_pb.GetHistoricalPowerUsageResponse,
    (request: powertrade_powerusage_v1alpha_powerusage_pb.GetHistoricalPowerUsageRequest) => {
      return request.serializeBinary();
    },
    powertrade_powerusage_v1alpha_powerusage_pb.GetHistoricalPowerUsageResponse.deserializeBinary
  );

  getHistoricalPowerUsage(
    request: powertrade_powerusage_v1alpha_powerusage_pb.GetHistoricalPowerUsageRequest,
    metadata: grpcWeb.Metadata | null): Promise<powertrade_powerusage_v1alpha_powerusage_pb.GetHistoricalPowerUsageResponse>;

  getHistoricalPowerUsage(
    request: powertrade_powerusage_v1alpha_powerusage_pb.GetHistoricalPowerUsageRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: powertrade_powerusage_v1alpha_powerusage_pb.GetHistoricalPowerUsageResponse) => void): grpcWeb.ClientReadableStream<powertrade_powerusage_v1alpha_powerusage_pb.GetHistoricalPowerUsageResponse>;

  getHistoricalPowerUsage(
    request: powertrade_powerusage_v1alpha_powerusage_pb.GetHistoricalPowerUsageRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: powertrade_powerusage_v1alpha_powerusage_pb.GetHistoricalPowerUsageResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/powertrade.powerusage.v1alpha.PowerUsageService/GetHistoricalPowerUsage',
        request,
        metadata || {},
        this.methodDescriptorGetHistoricalPowerUsage,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/powertrade.powerusage.v1alpha.PowerUsageService/GetHistoricalPowerUsage',
    request,
    metadata || {},
    this.methodDescriptorGetHistoricalPowerUsage);
  }

  methodDescriptorListHistoricalPowerUsage = new grpcWeb.MethodDescriptor(
    '/powertrade.powerusage.v1alpha.PowerUsageService/ListHistoricalPowerUsage',
    grpcWeb.MethodType.UNARY,
    powertrade_powerusage_v1alpha_powerusage_pb.ListHistoricalPowerUsageRequest,
    powertrade_powerusage_v1alpha_powerusage_pb.ListHistoricalPowerUsageResponse,
    (request: powertrade_powerusage_v1alpha_powerusage_pb.ListHistoricalPowerUsageRequest) => {
      return request.serializeBinary();
    },
    powertrade_powerusage_v1alpha_powerusage_pb.ListHistoricalPowerUsageResponse.deserializeBinary
  );

  listHistoricalPowerUsage(
    request: powertrade_powerusage_v1alpha_powerusage_pb.ListHistoricalPowerUsageRequest,
    metadata: grpcWeb.Metadata | null): Promise<powertrade_powerusage_v1alpha_powerusage_pb.ListHistoricalPowerUsageResponse>;

  listHistoricalPowerUsage(
    request: powertrade_powerusage_v1alpha_powerusage_pb.ListHistoricalPowerUsageRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: powertrade_powerusage_v1alpha_powerusage_pb.ListHistoricalPowerUsageResponse) => void): grpcWeb.ClientReadableStream<powertrade_powerusage_v1alpha_powerusage_pb.ListHistoricalPowerUsageResponse>;

  listHistoricalPowerUsage(
    request: powertrade_powerusage_v1alpha_powerusage_pb.ListHistoricalPowerUsageRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: powertrade_powerusage_v1alpha_powerusage_pb.ListHistoricalPowerUsageResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/powertrade.powerusage.v1alpha.PowerUsageService/ListHistoricalPowerUsage',
        request,
        metadata || {},
        this.methodDescriptorListHistoricalPowerUsage,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/powertrade.powerusage.v1alpha.PowerUsageService/ListHistoricalPowerUsage',
    request,
    metadata || {},
    this.methodDescriptorListHistoricalPowerUsage);
  }

  methodDescriptorGetStreamPowerUsage = new grpcWeb.MethodDescriptor(
    '/powertrade.powerusage.v1alpha.PowerUsageService/GetStreamPowerUsage',
    grpcWeb.MethodType.SERVER_STREAMING,
    powertrade_powerusage_v1alpha_powerusage_pb.GetStreamPowerUsageRequest,
    powertrade_powerusage_v1alpha_powerusage_pb.GetStreamPowerUsageResponse,
    (request: powertrade_powerusage_v1alpha_powerusage_pb.GetStreamPowerUsageRequest) => {
      return request.serializeBinary();
    },
    powertrade_powerusage_v1alpha_powerusage_pb.GetStreamPowerUsageResponse.deserializeBinary
  );

  getStreamPowerUsage(
    request: powertrade_powerusage_v1alpha_powerusage_pb.GetStreamPowerUsageRequest,
    metadata?: grpcWeb.Metadata): grpcWeb.ClientReadableStream<powertrade_powerusage_v1alpha_powerusage_pb.GetStreamPowerUsageResponse> {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/powertrade.powerusage.v1alpha.PowerUsageService/GetStreamPowerUsage',
      request,
      metadata || {},
      this.methodDescriptorGetStreamPowerUsage);
  }

}

