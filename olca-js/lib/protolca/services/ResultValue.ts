// Original file: ../olca-proto/proto/result_service.proto

import type { ProtoTechFlow as _protolca_services_ProtoTechFlow, ProtoTechFlow__Output as _protolca_services_ProtoTechFlow__Output } from '../../protolca/services/ProtoTechFlow';
import type { ProtoEnviFlow as _protolca_services_ProtoEnviFlow, ProtoEnviFlow__Output as _protolca_services_ProtoEnviFlow__Output } from '../../protolca/services/ProtoEnviFlow';
import type { ProtoRef as _protolca_ProtoRef, ProtoRef__Output as _protolca_ProtoRef__Output } from '../../protolca/ProtoRef';

export interface ResultValue {
  'value'?: (number | string);
  'techFlow'?: (_protolca_services_ProtoTechFlow | null);
  'enviFlow'?: (_protolca_services_ProtoEnviFlow | null);
  'impact'?: (_protolca_ProtoRef | null);
  'costs'?: (boolean);
  'resultReference'?: "techFlow"|"enviFlow"|"impact"|"costs";
}

export interface ResultValue__Output {
  'value'?: (number);
  'techFlow'?: (_protolca_services_ProtoTechFlow__Output);
  'enviFlow'?: (_protolca_services_ProtoEnviFlow__Output);
  'impact'?: (_protolca_ProtoRef__Output);
  'costs'?: (boolean);
}
