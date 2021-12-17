// Original file: ../olca-proto/proto/data_update_service.proto

import type { ProtoType as _protolca_ProtoType } from '../../protolca/ProtoType';

export interface DeleteRequest {
  'type'?: (_protolca_ProtoType | keyof typeof _protolca_ProtoType);
  'id'?: (string);
}

export interface DeleteRequest__Output {
  'type'?: (_protolca_ProtoType);
  'id'?: (string);
}
