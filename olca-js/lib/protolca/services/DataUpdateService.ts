// Original file: ../olca-proto/proto/data_update_service.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { CreateSystemRequest as _protolca_services_CreateSystemRequest, CreateSystemRequest__Output as _protolca_services_CreateSystemRequest__Output } from '../../protolca/services/CreateSystemRequest';
import type { DeleteRequest as _protolca_services_DeleteRequest, DeleteRequest__Output as _protolca_services_DeleteRequest__Output } from '../../protolca/services/DeleteRequest';
import type { Empty as _google_protobuf_Empty, Empty__Output as _google_protobuf_Empty__Output } from '../../google/protobuf/Empty';
import type { ProtoDataSet as _protolca_services_ProtoDataSet, ProtoDataSet__Output as _protolca_services_ProtoDataSet__Output } from '../../protolca/services/ProtoDataSet';
import type { ProtoRef as _protolca_ProtoRef, ProtoRef__Output as _protolca_ProtoRef__Output } from '../../protolca/ProtoRef';

export interface DataUpdateServiceClient extends grpc.Client {
  /**
   * Creates a new product system.
   */
  CreateProductSystem(argument: _protolca_services_CreateSystemRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_protolca_ProtoRef__Output>): grpc.ClientUnaryCall;
  CreateProductSystem(argument: _protolca_services_CreateSystemRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_protolca_ProtoRef__Output>): grpc.ClientUnaryCall;
  CreateProductSystem(argument: _protolca_services_CreateSystemRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_protolca_ProtoRef__Output>): grpc.ClientUnaryCall;
  CreateProductSystem(argument: _protolca_services_CreateSystemRequest, callback: grpc.requestCallback<_protolca_ProtoRef__Output>): grpc.ClientUnaryCall;
  /**
   * Creates a new product system.
   */
  createProductSystem(argument: _protolca_services_CreateSystemRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_protolca_ProtoRef__Output>): grpc.ClientUnaryCall;
  createProductSystem(argument: _protolca_services_CreateSystemRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_protolca_ProtoRef__Output>): grpc.ClientUnaryCall;
  createProductSystem(argument: _protolca_services_CreateSystemRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_protolca_ProtoRef__Output>): grpc.ClientUnaryCall;
  createProductSystem(argument: _protolca_services_CreateSystemRequest, callback: grpc.requestCallback<_protolca_ProtoRef__Output>): grpc.ClientUnaryCall;
  
  /**
   * Deletes the object with the ID and type of the request message from the
   * database.
   */
  Delete(argument: _protolca_services_DeleteRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  Delete(argument: _protolca_services_DeleteRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  Delete(argument: _protolca_services_DeleteRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  Delete(argument: _protolca_services_DeleteRequest, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  /**
   * Deletes the object with the ID and type of the request message from the
   * database.
   */
  delete(argument: _protolca_services_DeleteRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  delete(argument: _protolca_services_DeleteRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  delete(argument: _protolca_services_DeleteRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  delete(argument: _protolca_services_DeleteRequest, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  
  /**
   * Inserts or updates the given data set in the database. Returns the data
   * set reference of the inserted or updated data set.
   */
  Put(argument: _protolca_services_ProtoDataSet, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_protolca_ProtoRef__Output>): grpc.ClientUnaryCall;
  Put(argument: _protolca_services_ProtoDataSet, metadata: grpc.Metadata, callback: grpc.requestCallback<_protolca_ProtoRef__Output>): grpc.ClientUnaryCall;
  Put(argument: _protolca_services_ProtoDataSet, options: grpc.CallOptions, callback: grpc.requestCallback<_protolca_ProtoRef__Output>): grpc.ClientUnaryCall;
  Put(argument: _protolca_services_ProtoDataSet, callback: grpc.requestCallback<_protolca_ProtoRef__Output>): grpc.ClientUnaryCall;
  /**
   * Inserts or updates the given data set in the database. Returns the data
   * set reference of the inserted or updated data set.
   */
  put(argument: _protolca_services_ProtoDataSet, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_protolca_ProtoRef__Output>): grpc.ClientUnaryCall;
  put(argument: _protolca_services_ProtoDataSet, metadata: grpc.Metadata, callback: grpc.requestCallback<_protolca_ProtoRef__Output>): grpc.ClientUnaryCall;
  put(argument: _protolca_services_ProtoDataSet, options: grpc.CallOptions, callback: grpc.requestCallback<_protolca_ProtoRef__Output>): grpc.ClientUnaryCall;
  put(argument: _protolca_services_ProtoDataSet, callback: grpc.requestCallback<_protolca_ProtoRef__Output>): grpc.ClientUnaryCall;
  
}

export interface DataUpdateServiceHandlers extends grpc.UntypedServiceImplementation {
  /**
   * Creates a new product system.
   */
  CreateProductSystem: grpc.handleUnaryCall<_protolca_services_CreateSystemRequest__Output, _protolca_ProtoRef>;
  
  /**
   * Deletes the object with the ID and type of the request message from the
   * database.
   */
  Delete: grpc.handleUnaryCall<_protolca_services_DeleteRequest__Output, _google_protobuf_Empty>;
  
  /**
   * Inserts or updates the given data set in the database. Returns the data
   * set reference of the inserted or updated data set.
   */
  Put: grpc.handleUnaryCall<_protolca_services_ProtoDataSet__Output, _protolca_ProtoRef>;
  
}

export interface DataUpdateServiceDefinition extends grpc.ServiceDefinition {
  CreateProductSystem: MethodDefinition<_protolca_services_CreateSystemRequest, _protolca_ProtoRef, _protolca_services_CreateSystemRequest__Output, _protolca_ProtoRef__Output>
  Delete: MethodDefinition<_protolca_services_DeleteRequest, _google_protobuf_Empty, _protolca_services_DeleteRequest__Output, _google_protobuf_Empty__Output>
  Put: MethodDefinition<_protolca_services_ProtoDataSet, _protolca_ProtoRef, _protolca_services_ProtoDataSet__Output, _protolca_ProtoRef__Output>
}
