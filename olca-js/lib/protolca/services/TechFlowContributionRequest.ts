// Original file: ../olca-proto/proto/result_service.proto

import type { ProtoResultRef as _protolca_services_ProtoResultRef, ProtoResultRef__Output as _protolca_services_ProtoResultRef__Output } from '../../protolca/services/ProtoResultRef';
import type { ProtoTechFlow as _protolca_services_ProtoTechFlow, ProtoTechFlow__Output as _protolca_services_ProtoTechFlow__Output } from '../../protolca/services/ProtoTechFlow';
import type { ProtoEnviFlow as _protolca_services_ProtoEnviFlow, ProtoEnviFlow__Output as _protolca_services_ProtoEnviFlow__Output } from '../../protolca/services/ProtoEnviFlow';
import type { ProtoRef as _protolca_ProtoRef, ProtoRef__Output as _protolca_ProtoRef__Output } from '../../protolca/ProtoRef';

/**
 * The request for a contribution result of a tech-flow.
 */
export interface TechFlowContributionRequest {
  'result'?: (_protolca_services_ProtoResultRef | null);
  'techFlow'?: (_protolca_services_ProtoTechFlow | null);
  'enviFlow'?: (_protolca_services_ProtoEnviFlow | null);
  'impact'?: (_protolca_ProtoRef | null);
  'costs'?: (boolean);
  'resultRef'?: "enviFlow"|"impact"|"costs";
}

/**
 * The request for a contribution result of a tech-flow.
 */
export interface TechFlowContributionRequest__Output {
  'result'?: (_protolca_services_ProtoResultRef__Output);
  'techFlow'?: (_protolca_services_ProtoTechFlow__Output);
  'enviFlow'?: (_protolca_services_ProtoEnviFlow__Output);
  'impact'?: (_protolca_ProtoRef__Output);
  'costs'?: (boolean);
}
