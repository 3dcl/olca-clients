// Original file: ../olca-proto/proto/data_fetch_service.proto

import type { ProtoType as _protolca_ProtoType } from '../../protolca/ProtoType';

export interface GetRequest {
  'type'?: (_protolca_ProtoType | keyof typeof _protolca_ProtoType);
  'id'?: (string);
}

export interface GetRequest__Output {
  'type'?: (_protolca_ProtoType);
  'id'?: (string);
}
