// Original file: ../olca-proto/proto/flow_map_service.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { Empty as _google_protobuf_Empty, Empty__Output as _google_protobuf_Empty__Output } from '../../google/protobuf/Empty';
import type { ProtoFlowMap as _protolca_ProtoFlowMap, ProtoFlowMap__Output as _protolca_ProtoFlowMap__Output } from '../../protolca/ProtoFlowMap';
import type { ProtoFlowMapName as _protolca_services_ProtoFlowMapName, ProtoFlowMapName__Output as _protolca_services_ProtoFlowMapName__Output } from '../../protolca/services/ProtoFlowMapName';

export interface FlowMapServiceClient extends grpc.Client {
  /**
   * Delete the flow map with the given name.
   */
  Delete(argument: _protolca_services_ProtoFlowMapName, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  Delete(argument: _protolca_services_ProtoFlowMapName, metadata: grpc.Metadata, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  Delete(argument: _protolca_services_ProtoFlowMapName, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  Delete(argument: _protolca_services_ProtoFlowMapName, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  /**
   * Delete the flow map with the given name.
   */
  delete(argument: _protolca_services_ProtoFlowMapName, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  delete(argument: _protolca_services_ProtoFlowMapName, metadata: grpc.Metadata, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  delete(argument: _protolca_services_ProtoFlowMapName, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  delete(argument: _protolca_services_ProtoFlowMapName, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  
  /**
   * Get the flow map with the given name form the database.
   */
  Get(argument: _protolca_services_ProtoFlowMapName, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_protolca_ProtoFlowMap__Output>): grpc.ClientUnaryCall;
  Get(argument: _protolca_services_ProtoFlowMapName, metadata: grpc.Metadata, callback: grpc.requestCallback<_protolca_ProtoFlowMap__Output>): grpc.ClientUnaryCall;
  Get(argument: _protolca_services_ProtoFlowMapName, options: grpc.CallOptions, callback: grpc.requestCallback<_protolca_ProtoFlowMap__Output>): grpc.ClientUnaryCall;
  Get(argument: _protolca_services_ProtoFlowMapName, callback: grpc.requestCallback<_protolca_ProtoFlowMap__Output>): grpc.ClientUnaryCall;
  /**
   * Get the flow map with the given name form the database.
   */
  get(argument: _protolca_services_ProtoFlowMapName, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_protolca_ProtoFlowMap__Output>): grpc.ClientUnaryCall;
  get(argument: _protolca_services_ProtoFlowMapName, metadata: grpc.Metadata, callback: grpc.requestCallback<_protolca_ProtoFlowMap__Output>): grpc.ClientUnaryCall;
  get(argument: _protolca_services_ProtoFlowMapName, options: grpc.CallOptions, callback: grpc.requestCallback<_protolca_ProtoFlowMap__Output>): grpc.ClientUnaryCall;
  get(argument: _protolca_services_ProtoFlowMapName, callback: grpc.requestCallback<_protolca_ProtoFlowMap__Output>): grpc.ClientUnaryCall;
  
  /**
   * Get the information (basically just the names) of all flow maps that are
   * available in the database.
   */
  GetAll(argument: _google_protobuf_Empty, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_protolca_services_ProtoFlowMapName__Output>;
  GetAll(argument: _google_protobuf_Empty, options?: grpc.CallOptions): grpc.ClientReadableStream<_protolca_services_ProtoFlowMapName__Output>;
  /**
   * Get the information (basically just the names) of all flow maps that are
   * available in the database.
   */
  getAll(argument: _google_protobuf_Empty, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_protolca_services_ProtoFlowMapName__Output>;
  getAll(argument: _google_protobuf_Empty, options?: grpc.CallOptions): grpc.ClientReadableStream<_protolca_services_ProtoFlowMapName__Output>;
  
  /**
   * Inserts the given flow map into the database. It overwrites an existing
   * flow map if there is a flow map with the same name already available in the
   * database.
   */
  Put(argument: _protolca_ProtoFlowMap, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  Put(argument: _protolca_ProtoFlowMap, metadata: grpc.Metadata, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  Put(argument: _protolca_ProtoFlowMap, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  Put(argument: _protolca_ProtoFlowMap, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  /**
   * Inserts the given flow map into the database. It overwrites an existing
   * flow map if there is a flow map with the same name already available in the
   * database.
   */
  put(argument: _protolca_ProtoFlowMap, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  put(argument: _protolca_ProtoFlowMap, metadata: grpc.Metadata, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  put(argument: _protolca_ProtoFlowMap, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  put(argument: _protolca_ProtoFlowMap, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  
}

export interface FlowMapServiceHandlers extends grpc.UntypedServiceImplementation {
  /**
   * Delete the flow map with the given name.
   */
  Delete: grpc.handleUnaryCall<_protolca_services_ProtoFlowMapName__Output, _google_protobuf_Empty>;
  
  /**
   * Get the flow map with the given name form the database.
   */
  Get: grpc.handleUnaryCall<_protolca_services_ProtoFlowMapName__Output, _protolca_ProtoFlowMap>;
  
  /**
   * Get the information (basically just the names) of all flow maps that are
   * available in the database.
   */
  GetAll: grpc.handleServerStreamingCall<_google_protobuf_Empty__Output, _protolca_services_ProtoFlowMapName>;
  
  /**
   * Inserts the given flow map into the database. It overwrites an existing
   * flow map if there is a flow map with the same name already available in the
   * database.
   */
  Put: grpc.handleUnaryCall<_protolca_ProtoFlowMap__Output, _google_protobuf_Empty>;
  
}

export interface FlowMapServiceDefinition extends grpc.ServiceDefinition {
  Delete: MethodDefinition<_protolca_services_ProtoFlowMapName, _google_protobuf_Empty, _protolca_services_ProtoFlowMapName__Output, _google_protobuf_Empty__Output>
  Get: MethodDefinition<_protolca_services_ProtoFlowMapName, _protolca_ProtoFlowMap, _protolca_services_ProtoFlowMapName__Output, _protolca_ProtoFlowMap__Output>
  GetAll: MethodDefinition<_google_protobuf_Empty, _protolca_services_ProtoFlowMapName, _google_protobuf_Empty__Output, _protolca_services_ProtoFlowMapName__Output>
  Put: MethodDefinition<_protolca_ProtoFlowMap, _google_protobuf_Empty, _protolca_ProtoFlowMap__Output, _google_protobuf_Empty__Output>
}
