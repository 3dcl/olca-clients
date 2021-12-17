// Original file: ../olca-proto/proto/olca.proto

import type { ProtoFlowResult as _protolca_ProtoFlowResult, ProtoFlowResult__Output as _protolca_ProtoFlowResult__Output } from '../protolca/ProtoFlowResult';
import type { ProtoImpactResult as _protolca_ProtoImpactResult, ProtoImpactResult__Output as _protolca_ProtoImpactResult__Output } from '../protolca/ProtoImpactResult';

export interface ProtoSimpleResult {
  'flowResults'?: (_protolca_ProtoFlowResult)[];
  'impactResults'?: (_protolca_ProtoImpactResult)[];
}

export interface ProtoSimpleResult__Output {
  'flowResults'?: (_protolca_ProtoFlowResult__Output)[];
  'impactResults'?: (_protolca_ProtoImpactResult__Output)[];
}
