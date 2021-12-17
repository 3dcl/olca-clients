// Original file: ../olca-proto/proto/result_service.proto

import type { ProtoRef as _protolca_ProtoRef, ProtoRef__Output as _protolca_ProtoRef__Output } from '../../protolca/ProtoRef';
import type { ProtoEnviFlow as _protolca_services_ProtoEnviFlow, ProtoEnviFlow__Output as _protolca_services_ProtoEnviFlow__Output } from '../../protolca/services/ProtoEnviFlow';

export interface ImpactFactorResponse {
  'indicator'?: (_protolca_ProtoRef | null);
  'flow'?: (_protolca_services_ProtoEnviFlow | null);
  'value'?: (number | string);
}

export interface ImpactFactorResponse__Output {
  'indicator'?: (_protolca_ProtoRef__Output);
  'flow'?: (_protolca_services_ProtoEnviFlow__Output);
  'value'?: (number);
}
