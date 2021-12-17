// Original file: ../olca-proto/proto/data_fetch_service.proto

import type { ProtoType as _protolca_ProtoType } from '../../protolca/ProtoType';

export interface SearchRequest {
  /**
   * The model type of the searched entities.
   */
  'type'?: (_protolca_ProtoType | keyof typeof _protolca_ProtoType);
  /**
   * The search query.
   */
  'query'?: (string);
}

export interface SearchRequest__Output {
  /**
   * The model type of the searched entities.
   */
  'type'?: (_protolca_ProtoType);
  /**
   * The search query.
   */
  'query'?: (string);
}
