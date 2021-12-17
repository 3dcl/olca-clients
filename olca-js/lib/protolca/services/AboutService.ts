// Original file: ../olca-proto/proto/about_service.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { AboutResponse as _protolca_services_AboutResponse, AboutResponse__Output as _protolca_services_AboutResponse__Output } from '../../protolca/services/AboutResponse';
import type { Empty as _google_protobuf_Empty, Empty__Output as _google_protobuf_Empty__Output } from '../../google/protobuf/Empty';

/**
 * This service gives some general information of the service
 * interface.
 */
export interface AboutServiceClient extends grpc.Client {
  About(argument: _google_protobuf_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_protolca_services_AboutResponse__Output>): grpc.ClientUnaryCall;
  About(argument: _google_protobuf_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_protolca_services_AboutResponse__Output>): grpc.ClientUnaryCall;
  About(argument: _google_protobuf_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_protolca_services_AboutResponse__Output>): grpc.ClientUnaryCall;
  About(argument: _google_protobuf_Empty, callback: grpc.requestCallback<_protolca_services_AboutResponse__Output>): grpc.ClientUnaryCall;
  about(argument: _google_protobuf_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_protolca_services_AboutResponse__Output>): grpc.ClientUnaryCall;
  about(argument: _google_protobuf_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_protolca_services_AboutResponse__Output>): grpc.ClientUnaryCall;
  about(argument: _google_protobuf_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_protolca_services_AboutResponse__Output>): grpc.ClientUnaryCall;
  about(argument: _google_protobuf_Empty, callback: grpc.requestCallback<_protolca_services_AboutResponse__Output>): grpc.ClientUnaryCall;
  
}

/**
 * This service gives some general information of the service
 * interface.
 */
export interface AboutServiceHandlers extends grpc.UntypedServiceImplementation {
  About: grpc.handleUnaryCall<_google_protobuf_Empty__Output, _protolca_services_AboutResponse>;
  
}

export interface AboutServiceDefinition extends grpc.ServiceDefinition {
  About: MethodDefinition<_google_protobuf_Empty, _protolca_services_AboutResponse, _google_protobuf_Empty__Output, _protolca_services_AboutResponse__Output>
}
