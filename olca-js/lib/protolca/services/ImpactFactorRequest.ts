// Original file: ../olca-proto/proto/result_service.proto

import type { ProtoResultRef as _protolca_services_ProtoResultRef, ProtoResultRef__Output as _protolca_services_ProtoResultRef__Output } from '../../protolca/services/ProtoResultRef';
import type { ProtoRef as _protolca_ProtoRef, ProtoRef__Output as _protolca_ProtoRef__Output } from '../../protolca/ProtoRef';
import type { ProtoEnviFlow as _protolca_services_ProtoEnviFlow, ProtoEnviFlow__Output as _protolca_services_ProtoEnviFlow__Output } from '../../protolca/services/ProtoEnviFlow';

export interface ImpactFactorRequest {
  'result'?: (_protolca_services_ProtoResultRef | null);
  'indicator'?: (_protolca_ProtoRef | null);
  'flow'?: (_protolca_services_ProtoEnviFlow | null);
}

export interface ImpactFactorRequest__Output {
  'result'?: (_protolca_services_ProtoResultRef__Output);
  'indicator'?: (_protolca_ProtoRef__Output);
  'flow'?: (_protolca_services_ProtoEnviFlow__Output);
}
