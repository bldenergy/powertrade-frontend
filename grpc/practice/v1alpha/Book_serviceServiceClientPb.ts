/**
 * @fileoverview gRPC-Web generated client stub for bldenergy.practice.v1alpha
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as practice_v1alpha_book_service_pb from '../../practice/v1alpha/book_service_pb';


export class BookServiceClient {
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
    '/bldenergy.practice.v1alpha.BookService/Liveness',
    grpcWeb.MethodType.UNARY,
    practice_v1alpha_book_service_pb.LivenessRequest,
    practice_v1alpha_book_service_pb.LivenessResponse,
    (request: practice_v1alpha_book_service_pb.LivenessRequest) => {
      return request.serializeBinary();
    },
    practice_v1alpha_book_service_pb.LivenessResponse.deserializeBinary
  );

  liveness(
    request: practice_v1alpha_book_service_pb.LivenessRequest,
    metadata: grpcWeb.Metadata | null): Promise<practice_v1alpha_book_service_pb.LivenessResponse>;

  liveness(
    request: practice_v1alpha_book_service_pb.LivenessRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: practice_v1alpha_book_service_pb.LivenessResponse) => void): grpcWeb.ClientReadableStream<practice_v1alpha_book_service_pb.LivenessResponse>;

  liveness(
    request: practice_v1alpha_book_service_pb.LivenessRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: practice_v1alpha_book_service_pb.LivenessResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/bldenergy.practice.v1alpha.BookService/Liveness',
        request,
        metadata || {},
        this.methodDescriptorLiveness,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/bldenergy.practice.v1alpha.BookService/Liveness',
    request,
    metadata || {},
    this.methodDescriptorLiveness);
  }

  methodDescriptorReadiness = new grpcWeb.MethodDescriptor(
    '/bldenergy.practice.v1alpha.BookService/Readiness',
    grpcWeb.MethodType.UNARY,
    practice_v1alpha_book_service_pb.ReadinessRequest,
    practice_v1alpha_book_service_pb.ReadinessResponse,
    (request: practice_v1alpha_book_service_pb.ReadinessRequest) => {
      return request.serializeBinary();
    },
    practice_v1alpha_book_service_pb.ReadinessResponse.deserializeBinary
  );

  readiness(
    request: practice_v1alpha_book_service_pb.ReadinessRequest,
    metadata: grpcWeb.Metadata | null): Promise<practice_v1alpha_book_service_pb.ReadinessResponse>;

  readiness(
    request: practice_v1alpha_book_service_pb.ReadinessRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: practice_v1alpha_book_service_pb.ReadinessResponse) => void): grpcWeb.ClientReadableStream<practice_v1alpha_book_service_pb.ReadinessResponse>;

  readiness(
    request: practice_v1alpha_book_service_pb.ReadinessRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: practice_v1alpha_book_service_pb.ReadinessResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/bldenergy.practice.v1alpha.BookService/Readiness',
        request,
        metadata || {},
        this.methodDescriptorReadiness,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/bldenergy.practice.v1alpha.BookService/Readiness',
    request,
    metadata || {},
    this.methodDescriptorReadiness);
  }

  methodDescriptorGetBook = new grpcWeb.MethodDescriptor(
    '/bldenergy.practice.v1alpha.BookService/GetBook',
    grpcWeb.MethodType.UNARY,
    practice_v1alpha_book_service_pb.GetBookRequest,
    practice_v1alpha_book_service_pb.Book,
    (request: practice_v1alpha_book_service_pb.GetBookRequest) => {
      return request.serializeBinary();
    },
    practice_v1alpha_book_service_pb.Book.deserializeBinary
  );

  getBook(
    request: practice_v1alpha_book_service_pb.GetBookRequest,
    metadata: grpcWeb.Metadata | null): Promise<practice_v1alpha_book_service_pb.Book>;

  getBook(
    request: practice_v1alpha_book_service_pb.GetBookRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: practice_v1alpha_book_service_pb.Book) => void): grpcWeb.ClientReadableStream<practice_v1alpha_book_service_pb.Book>;

  getBook(
    request: practice_v1alpha_book_service_pb.GetBookRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: practice_v1alpha_book_service_pb.Book) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/bldenergy.practice.v1alpha.BookService/GetBook',
        request,
        metadata || {},
        this.methodDescriptorGetBook,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/bldenergy.practice.v1alpha.BookService/GetBook',
    request,
    metadata || {},
    this.methodDescriptorGetBook);
  }

  methodDescriptorQueryBooks = new grpcWeb.MethodDescriptor(
    '/bldenergy.practice.v1alpha.BookService/QueryBooks',
    grpcWeb.MethodType.SERVER_STREAMING,
    practice_v1alpha_book_service_pb.QueryBooksRequest,
    practice_v1alpha_book_service_pb.Book,
    (request: practice_v1alpha_book_service_pb.QueryBooksRequest) => {
      return request.serializeBinary();
    },
    practice_v1alpha_book_service_pb.Book.deserializeBinary
  );

  queryBooks(
    request: practice_v1alpha_book_service_pb.QueryBooksRequest,
    metadata?: grpcWeb.Metadata): grpcWeb.ClientReadableStream<practice_v1alpha_book_service_pb.Book> {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/bldenergy.practice.v1alpha.BookService/QueryBooks',
      request,
      metadata || {},
      this.methodDescriptorQueryBooks);
  }

}
