// Original file: ../olca-proto/proto/data_fetch_service.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { CategoryTree as _protolca_services_CategoryTree, CategoryTree__Output as _protolca_services_CategoryTree__Output } from '../../protolca/services/CategoryTree';
import type { Empty as _google_protobuf_Empty, Empty__Output as _google_protobuf_Empty__Output } from '../../google/protobuf/Empty';
import type { FindRequest as _protolca_services_FindRequest, FindRequest__Output as _protolca_services_FindRequest__Output } from '../../protolca/services/FindRequest';
import type { GetAllRequest as _protolca_services_GetAllRequest, GetAllRequest__Output as _protolca_services_GetAllRequest__Output } from '../../protolca/services/GetAllRequest';
import type { GetAllResponse as _protolca_services_GetAllResponse, GetAllResponse__Output as _protolca_services_GetAllResponse__Output } from '../../protolca/services/GetAllResponse';
import type { GetCategoryContentRequest as _protolca_services_GetCategoryContentRequest, GetCategoryContentRequest__Output as _protolca_services_GetCategoryContentRequest__Output } from '../../protolca/services/GetCategoryContentRequest';
import type { GetCategoryTreeRequest as _protolca_services_GetCategoryTreeRequest, GetCategoryTreeRequest__Output as _protolca_services_GetCategoryTreeRequest__Output } from '../../protolca/services/GetCategoryTreeRequest';
import type { GetCountRequest as _protolca_services_GetCountRequest, GetCountRequest__Output as _protolca_services_GetCountRequest__Output } from '../../protolca/services/GetCountRequest';
import type { GetCountResponse as _protolca_services_GetCountResponse, GetCountResponse__Output as _protolca_services_GetCountResponse__Output } from '../../protolca/services/GetCountResponse';
import type { GetDescriptorsRequest as _protolca_services_GetDescriptorsRequest, GetDescriptorsRequest__Output as _protolca_services_GetDescriptorsRequest__Output } from '../../protolca/services/GetDescriptorsRequest';
import type { GetRequest as _protolca_services_GetRequest, GetRequest__Output as _protolca_services_GetRequest__Output } from '../../protolca/services/GetRequest';
import type { ProtoDataSet as _protolca_services_ProtoDataSet, ProtoDataSet__Output as _protolca_services_ProtoDataSet__Output } from '../../protolca/services/ProtoDataSet';
import type { ProtoRef as _protolca_ProtoRef, ProtoRef__Output as _protolca_ProtoRef__Output } from '../../protolca/ProtoRef';
import type { ProtoTechFlow as _protolca_services_ProtoTechFlow, ProtoTechFlow__Output as _protolca_services_ProtoTechFlow__Output } from '../../protolca/services/ProtoTechFlow';
import type { SearchRequest as _protolca_services_SearchRequest, SearchRequest__Output as _protolca_services_SearchRequest__Output } from '../../protolca/services/SearchRequest';

export interface DataFetchServiceClient extends grpc.Client {
  /**
   * Get a data set by ID or name. Returns an empty data set if there is no such
   * data set in the database. If there are multiple data sets with the same
   * name in the database it returns the first of these data sets.
   */
  Find(argument: _protolca_services_FindRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_protolca_services_ProtoDataSet__Output>): grpc.ClientUnaryCall;
  Find(argument: _protolca_services_FindRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_protolca_services_ProtoDataSet__Output>): grpc.ClientUnaryCall;
  Find(argument: _protolca_services_FindRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_protolca_services_ProtoDataSet__Output>): grpc.ClientUnaryCall;
  Find(argument: _protolca_services_FindRequest, callback: grpc.requestCallback<_protolca_services_ProtoDataSet__Output>): grpc.ClientUnaryCall;
  /**
   * Get a data set by ID or name. Returns an empty data set if there is no such
   * data set in the database. If there are multiple data sets with the same
   * name in the database it returns the first of these data sets.
   */
  find(argument: _protolca_services_FindRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_protolca_services_ProtoDataSet__Output>): grpc.ClientUnaryCall;
  find(argument: _protolca_services_FindRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_protolca_services_ProtoDataSet__Output>): grpc.ClientUnaryCall;
  find(argument: _protolca_services_FindRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_protolca_services_ProtoDataSet__Output>): grpc.ClientUnaryCall;
  find(argument: _protolca_services_FindRequest, callback: grpc.requestCallback<_protolca_services_ProtoDataSet__Output>): grpc.ClientUnaryCall;
  
  /**
   * Get a data set by ID. You use this method if you are sure that a data set
   * of the requested type and ID exists in the database. An error is returned
   * if this is not the case.
   */
  Get(argument: _protolca_services_GetRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_protolca_services_ProtoDataSet__Output>): grpc.ClientUnaryCall;
  Get(argument: _protolca_services_GetRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_protolca_services_ProtoDataSet__Output>): grpc.ClientUnaryCall;
  Get(argument: _protolca_services_GetRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_protolca_services_ProtoDataSet__Output>): grpc.ClientUnaryCall;
  Get(argument: _protolca_services_GetRequest, callback: grpc.requestCallback<_protolca_services_ProtoDataSet__Output>): grpc.ClientUnaryCall;
  /**
   * Get a data set by ID. You use this method if you are sure that a data set
   * of the requested type and ID exists in the database. An error is returned
   * if this is not the case.
   */
  get(argument: _protolca_services_GetRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_protolca_services_ProtoDataSet__Output>): grpc.ClientUnaryCall;
  get(argument: _protolca_services_GetRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_protolca_services_ProtoDataSet__Output>): grpc.ClientUnaryCall;
  get(argument: _protolca_services_GetRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_protolca_services_ProtoDataSet__Output>): grpc.ClientUnaryCall;
  get(argument: _protolca_services_GetRequest, callback: grpc.requestCallback<_protolca_services_ProtoDataSet__Output>): grpc.ClientUnaryCall;
  
  /**
   * Get (a page of) all data sets of a given type. If no page size is given
   * (page <= 0) it defaults to 100. An unset page (page <= 0) defaults to the
   * first page.
   */
  GetAll(argument: _protolca_services_GetAllRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_protolca_services_GetAllResponse__Output>): grpc.ClientUnaryCall;
  GetAll(argument: _protolca_services_GetAllRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_protolca_services_GetAllResponse__Output>): grpc.ClientUnaryCall;
  GetAll(argument: _protolca_services_GetAllRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_protolca_services_GetAllResponse__Output>): grpc.ClientUnaryCall;
  GetAll(argument: _protolca_services_GetAllRequest, callback: grpc.requestCallback<_protolca_services_GetAllResponse__Output>): grpc.ClientUnaryCall;
  /**
   * Get (a page of) all data sets of a given type. If no page size is given
   * (page <= 0) it defaults to 100. An unset page (page <= 0) defaults to the
   * first page.
   */
  getAll(argument: _protolca_services_GetAllRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_protolca_services_GetAllResponse__Output>): grpc.ClientUnaryCall;
  getAll(argument: _protolca_services_GetAllRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_protolca_services_GetAllResponse__Output>): grpc.ClientUnaryCall;
  getAll(argument: _protolca_services_GetAllRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_protolca_services_GetAllResponse__Output>): grpc.ClientUnaryCall;
  getAll(argument: _protolca_services_GetAllRequest, callback: grpc.requestCallback<_protolca_services_GetAllResponse__Output>): grpc.ClientUnaryCall;
  
  /**
   * Get the descriptors of the data sets that are contained in a given
   * category. The category can be identified by its full path or its ID where
   * an empty string or "/" identifies the root category (or "none-category") of
   * the respective model type.
   */
  GetCategoryContent(argument: _protolca_services_GetCategoryContentRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_protolca_ProtoRef__Output>;
  GetCategoryContent(argument: _protolca_services_GetCategoryContentRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_protolca_ProtoRef__Output>;
  /**
   * Get the descriptors of the data sets that are contained in a given
   * category. The category can be identified by its full path or its ID where
   * an empty string or "/" identifies the root category (or "none-category") of
   * the respective model type.
   */
  getCategoryContent(argument: _protolca_services_GetCategoryContentRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_protolca_ProtoRef__Output>;
  getCategoryContent(argument: _protolca_services_GetCategoryContentRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_protolca_ProtoRef__Output>;
  
  /**
   * Get the full category tree for the given model type.
   */
  GetCategoryTree(argument: _protolca_services_GetCategoryTreeRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_protolca_services_CategoryTree__Output>): grpc.ClientUnaryCall;
  GetCategoryTree(argument: _protolca_services_GetCategoryTreeRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_protolca_services_CategoryTree__Output>): grpc.ClientUnaryCall;
  GetCategoryTree(argument: _protolca_services_GetCategoryTreeRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_protolca_services_CategoryTree__Output>): grpc.ClientUnaryCall;
  GetCategoryTree(argument: _protolca_services_GetCategoryTreeRequest, callback: grpc.requestCallback<_protolca_services_CategoryTree__Output>): grpc.ClientUnaryCall;
  /**
   * Get the full category tree for the given model type.
   */
  getCategoryTree(argument: _protolca_services_GetCategoryTreeRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_protolca_services_CategoryTree__Output>): grpc.ClientUnaryCall;
  getCategoryTree(argument: _protolca_services_GetCategoryTreeRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_protolca_services_CategoryTree__Output>): grpc.ClientUnaryCall;
  getCategoryTree(argument: _protolca_services_GetCategoryTreeRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_protolca_services_CategoryTree__Output>): grpc.ClientUnaryCall;
  getCategoryTree(argument: _protolca_services_GetCategoryTreeRequest, callback: grpc.requestCallback<_protolca_services_CategoryTree__Output>): grpc.ClientUnaryCall;
  
  /**
   * Get the number of data sets of the given model type
   * that are stored in the database.
   */
  GetCount(argument: _protolca_services_GetCountRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_protolca_services_GetCountResponse__Output>): grpc.ClientUnaryCall;
  GetCount(argument: _protolca_services_GetCountRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_protolca_services_GetCountResponse__Output>): grpc.ClientUnaryCall;
  GetCount(argument: _protolca_services_GetCountRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_protolca_services_GetCountResponse__Output>): grpc.ClientUnaryCall;
  GetCount(argument: _protolca_services_GetCountRequest, callback: grpc.requestCallback<_protolca_services_GetCountResponse__Output>): grpc.ClientUnaryCall;
  /**
   * Get the number of data sets of the given model type
   * that are stored in the database.
   */
  getCount(argument: _protolca_services_GetCountRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_protolca_services_GetCountResponse__Output>): grpc.ClientUnaryCall;
  getCount(argument: _protolca_services_GetCountRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_protolca_services_GetCountResponse__Output>): grpc.ClientUnaryCall;
  getCount(argument: _protolca_services_GetCountRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_protolca_services_GetCountResponse__Output>): grpc.ClientUnaryCall;
  getCount(argument: _protolca_services_GetCountRequest, callback: grpc.requestCallback<_protolca_services_GetCountResponse__Output>): grpc.ClientUnaryCall;
  
  /**
   * Get all descriptors that match the given request.
   */
  GetDescriptors(argument: _protolca_services_GetDescriptorsRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_protolca_ProtoRef__Output>;
  GetDescriptors(argument: _protolca_services_GetDescriptorsRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_protolca_ProtoRef__Output>;
  /**
   * Get all descriptors that match the given request.
   */
  getDescriptors(argument: _protolca_services_GetDescriptorsRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_protolca_ProtoRef__Output>;
  getDescriptors(argument: _protolca_services_GetDescriptorsRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_protolca_ProtoRef__Output>;
  
  /**
   * Get possible providers for the given flow. For products these are processes
   * with that product on the output side and for waste flows processes with
   * that waste flow on the input side. For elementary flows, an empty stream is
   * returned.
   */
  GetProvidersFor(argument: _protolca_ProtoRef, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_protolca_ProtoRef__Output>;
  GetProvidersFor(argument: _protolca_ProtoRef, options?: grpc.CallOptions): grpc.ClientReadableStream<_protolca_ProtoRef__Output>;
  /**
   * Get possible providers for the given flow. For products these are processes
   * with that product on the output side and for waste flows processes with
   * that waste flow on the input side. For elementary flows, an empty stream is
   * returned.
   */
  getProvidersFor(argument: _protolca_ProtoRef, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_protolca_ProtoRef__Output>;
  getProvidersFor(argument: _protolca_ProtoRef, options?: grpc.CallOptions): grpc.ClientReadableStream<_protolca_ProtoRef__Output>;
  
  /**
   * Get all technosphere flows from the database. These are all process-flow
   * pairs that can be used as providers for product inputs or waste outputs in
   * other processes or product systems.
   */
  GetTechFlows(argument: _google_protobuf_Empty, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_protolca_services_ProtoTechFlow__Output>;
  GetTechFlows(argument: _google_protobuf_Empty, options?: grpc.CallOptions): grpc.ClientReadableStream<_protolca_services_ProtoTechFlow__Output>;
  /**
   * Get all technosphere flows from the database. These are all process-flow
   * pairs that can be used as providers for product inputs or waste outputs in
   * other processes or product systems.
   */
  getTechFlows(argument: _google_protobuf_Empty, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_protolca_services_ProtoTechFlow__Output>;
  getTechFlows(argument: _google_protobuf_Empty, options?: grpc.CallOptions): grpc.ClientReadableStream<_protolca_services_ProtoTechFlow__Output>;
  
  /**
   * Search for data sets.
   */
  Search(argument: _protolca_services_SearchRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_protolca_ProtoRef__Output>;
  Search(argument: _protolca_services_SearchRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_protolca_ProtoRef__Output>;
  /**
   * Search for data sets.
   */
  search(argument: _protolca_services_SearchRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_protolca_ProtoRef__Output>;
  search(argument: _protolca_services_SearchRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_protolca_ProtoRef__Output>;
  
}

export interface DataFetchServiceHandlers extends grpc.UntypedServiceImplementation {
  /**
   * Get a data set by ID or name. Returns an empty data set if there is no such
   * data set in the database. If there are multiple data sets with the same
   * name in the database it returns the first of these data sets.
   */
  Find: grpc.handleUnaryCall<_protolca_services_FindRequest__Output, _protolca_services_ProtoDataSet>;
  
  /**
   * Get a data set by ID. You use this method if you are sure that a data set
   * of the requested type and ID exists in the database. An error is returned
   * if this is not the case.
   */
  Get: grpc.handleUnaryCall<_protolca_services_GetRequest__Output, _protolca_services_ProtoDataSet>;
  
  /**
   * Get (a page of) all data sets of a given type. If no page size is given
   * (page <= 0) it defaults to 100. An unset page (page <= 0) defaults to the
   * first page.
   */
  GetAll: grpc.handleUnaryCall<_protolca_services_GetAllRequest__Output, _protolca_services_GetAllResponse>;
  
  /**
   * Get the descriptors of the data sets that are contained in a given
   * category. The category can be identified by its full path or its ID where
   * an empty string or "/" identifies the root category (or "none-category") of
   * the respective model type.
   */
  GetCategoryContent: grpc.handleServerStreamingCall<_protolca_services_GetCategoryContentRequest__Output, _protolca_ProtoRef>;
  
  /**
   * Get the full category tree for the given model type.
   */
  GetCategoryTree: grpc.handleUnaryCall<_protolca_services_GetCategoryTreeRequest__Output, _protolca_services_CategoryTree>;
  
  /**
   * Get the number of data sets of the given model type
   * that are stored in the database.
   */
  GetCount: grpc.handleUnaryCall<_protolca_services_GetCountRequest__Output, _protolca_services_GetCountResponse>;
  
  /**
   * Get all descriptors that match the given request.
   */
  GetDescriptors: grpc.handleServerStreamingCall<_protolca_services_GetDescriptorsRequest__Output, _protolca_ProtoRef>;
  
  /**
   * Get possible providers for the given flow. For products these are processes
   * with that product on the output side and for waste flows processes with
   * that waste flow on the input side. For elementary flows, an empty stream is
   * returned.
   */
  GetProvidersFor: grpc.handleServerStreamingCall<_protolca_ProtoRef__Output, _protolca_ProtoRef>;
  
  /**
   * Get all technosphere flows from the database. These are all process-flow
   * pairs that can be used as providers for product inputs or waste outputs in
   * other processes or product systems.
   */
  GetTechFlows: grpc.handleServerStreamingCall<_google_protobuf_Empty__Output, _protolca_services_ProtoTechFlow>;
  
  /**
   * Search for data sets.
   */
  Search: grpc.handleServerStreamingCall<_protolca_services_SearchRequest__Output, _protolca_ProtoRef>;
  
}

export interface DataFetchServiceDefinition extends grpc.ServiceDefinition {
  Find: MethodDefinition<_protolca_services_FindRequest, _protolca_services_ProtoDataSet, _protolca_services_FindRequest__Output, _protolca_services_ProtoDataSet__Output>
  Get: MethodDefinition<_protolca_services_GetRequest, _protolca_services_ProtoDataSet, _protolca_services_GetRequest__Output, _protolca_services_ProtoDataSet__Output>
  GetAll: MethodDefinition<_protolca_services_GetAllRequest, _protolca_services_GetAllResponse, _protolca_services_GetAllRequest__Output, _protolca_services_GetAllResponse__Output>
  GetCategoryContent: MethodDefinition<_protolca_services_GetCategoryContentRequest, _protolca_ProtoRef, _protolca_services_GetCategoryContentRequest__Output, _protolca_ProtoRef__Output>
  GetCategoryTree: MethodDefinition<_protolca_services_GetCategoryTreeRequest, _protolca_services_CategoryTree, _protolca_services_GetCategoryTreeRequest__Output, _protolca_services_CategoryTree__Output>
  GetCount: MethodDefinition<_protolca_services_GetCountRequest, _protolca_services_GetCountResponse, _protolca_services_GetCountRequest__Output, _protolca_services_GetCountResponse__Output>
  GetDescriptors: MethodDefinition<_protolca_services_GetDescriptorsRequest, _protolca_ProtoRef, _protolca_services_GetDescriptorsRequest__Output, _protolca_ProtoRef__Output>
  GetProvidersFor: MethodDefinition<_protolca_ProtoRef, _protolca_ProtoRef, _protolca_ProtoRef__Output, _protolca_ProtoRef__Output>
  GetTechFlows: MethodDefinition<_google_protobuf_Empty, _protolca_services_ProtoTechFlow, _google_protobuf_Empty__Output, _protolca_services_ProtoTechFlow__Output>
  Search: MethodDefinition<_protolca_services_SearchRequest, _protolca_ProtoRef, _protolca_services_SearchRequest__Output, _protolca_ProtoRef__Output>
}
