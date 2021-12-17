// Original file: ../olca-proto/proto/data_fetch_service.proto

import type { ProtoType as _protolca_ProtoType } from '../../protolca/ProtoType';
import type { ProtoDataSet as _protolca_services_ProtoDataSet, ProtoDataSet__Output as _protolca_services_ProtoDataSet__Output } from '../../protolca/services/ProtoDataSet';

export interface GetAllResponse {
  'type'?: (_protolca_ProtoType | keyof typeof _protolca_ProtoType);
  'totalCount'?: (number);
  'pageSize'?: (number);
  'page'?: (number);
  'dataSet'?: (_protolca_services_ProtoDataSet)[];
}

export interface GetAllResponse__Output {
  'type'?: (_protolca_ProtoType);
  'totalCount'?: (number);
  'pageSize'?: (number);
  'page'?: (number);
  'dataSet'?: (_protolca_services_ProtoDataSet__Output)[];
}
