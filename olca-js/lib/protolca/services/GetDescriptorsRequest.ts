// Original file: ../olca-proto/proto/data_fetch_service.proto

import type { ProtoType as _protolca_ProtoType } from '../../protolca/ProtoType';

export interface _protolca_services_GetDescriptorsRequest_Attributes {
  /**
   * The name of the requested descriptor(s).
   */
  'name'?: (string);
  /**
   * The ID or full path of the category. The string "/" identifies the root
   * or none-category which means that this will filter for descriptors that
   * do not have a specific category set.
   */
  'category'?: (string);
}

export interface _protolca_services_GetDescriptorsRequest_Attributes__Output {
  /**
   * The name of the requested descriptor(s).
   */
  'name'?: (string);
  /**
   * The ID or full path of the category. The string "/" identifies the root
   * or none-category which means that this will filter for descriptors that
   * do not have a specific category set.
   */
  'category'?: (string);
}

export interface GetDescriptorsRequest {
  /**
   * The model type of the requested descriptor(s).
   */
  'type'?: (_protolca_ProtoType | keyof typeof _protolca_ProtoType);
  /**
   * The ID of the requested descriptor. Setting this field means that you
   * typically want one specific descriptor.
   */
  'id'?: (string);
  'attributes'?: (_protolca_services_GetDescriptorsRequest_Attributes | null);
  'by'?: "id"|"attributes";
}

export interface GetDescriptorsRequest__Output {
  /**
   * The model type of the requested descriptor(s).
   */
  'type'?: (_protolca_ProtoType);
  /**
   * The ID of the requested descriptor. Setting this field means that you
   * typically want one specific descriptor.
   */
  'id'?: (string);
  'attributes'?: (_protolca_services_GetDescriptorsRequest_Attributes__Output);
}
