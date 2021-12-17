// Original file: ../olca-proto/proto/data_fetch_service.proto

import type { ProtoType as _protolca_ProtoType } from '../../protolca/ProtoType';
import type { CategoryTree as _protolca_services_CategoryTree, CategoryTree__Output as _protolca_services_CategoryTree__Output } from '../../protolca/services/CategoryTree';

export interface CategoryTree {
  'type'?: (_protolca_ProtoType | keyof typeof _protolca_ProtoType);
  'id'?: (string);
  'name'?: (string);
  'subTree'?: (_protolca_services_CategoryTree)[];
}

export interface CategoryTree__Output {
  'type'?: (_protolca_ProtoType);
  'id'?: (string);
  'name'?: (string);
  'subTree'?: (_protolca_services_CategoryTree__Output)[];
}
