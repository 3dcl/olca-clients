// Original file: ../olca-proto/proto/commons.proto

import type { ProtoActor as _protolca_ProtoActor, ProtoActor__Output as _protolca_ProtoActor__Output } from '../../protolca/ProtoActor';
import type { ProtoCategory as _protolca_ProtoCategory, ProtoCategory__Output as _protolca_ProtoCategory__Output } from '../../protolca/ProtoCategory';
import type { ProtoCurrency as _protolca_ProtoCurrency, ProtoCurrency__Output as _protolca_ProtoCurrency__Output } from '../../protolca/ProtoCurrency';
import type { ProtoDQSystem as _protolca_ProtoDQSystem, ProtoDQSystem__Output as _protolca_ProtoDQSystem__Output } from '../../protolca/ProtoDQSystem';
import type { ProtoFlow as _protolca_ProtoFlow, ProtoFlow__Output as _protolca_ProtoFlow__Output } from '../../protolca/ProtoFlow';
import type { ProtoFlowProperty as _protolca_ProtoFlowProperty, ProtoFlowProperty__Output as _protolca_ProtoFlowProperty__Output } from '../../protolca/ProtoFlowProperty';
import type { ProtoImpactCategory as _protolca_ProtoImpactCategory, ProtoImpactCategory__Output as _protolca_ProtoImpactCategory__Output } from '../../protolca/ProtoImpactCategory';
import type { ProtoImpactMethod as _protolca_ProtoImpactMethod, ProtoImpactMethod__Output as _protolca_ProtoImpactMethod__Output } from '../../protolca/ProtoImpactMethod';
import type { ProtoLocation as _protolca_ProtoLocation, ProtoLocation__Output as _protolca_ProtoLocation__Output } from '../../protolca/ProtoLocation';
import type { ProtoParameter as _protolca_ProtoParameter, ProtoParameter__Output as _protolca_ProtoParameter__Output } from '../../protolca/ProtoParameter';
import type { ProtoProcess as _protolca_ProtoProcess, ProtoProcess__Output as _protolca_ProtoProcess__Output } from '../../protolca/ProtoProcess';
import type { ProtoProductSystem as _protolca_ProtoProductSystem, ProtoProductSystem__Output as _protolca_ProtoProductSystem__Output } from '../../protolca/ProtoProductSystem';
import type { ProtoProject as _protolca_ProtoProject, ProtoProject__Output as _protolca_ProtoProject__Output } from '../../protolca/ProtoProject';
import type { ProtoSocialIndicator as _protolca_ProtoSocialIndicator, ProtoSocialIndicator__Output as _protolca_ProtoSocialIndicator__Output } from '../../protolca/ProtoSocialIndicator';
import type { ProtoSource as _protolca_ProtoSource, ProtoSource__Output as _protolca_ProtoSource__Output } from '../../protolca/ProtoSource';
import type { ProtoUnitGroup as _protolca_ProtoUnitGroup, ProtoUnitGroup__Output as _protolca_ProtoUnitGroup__Output } from '../../protolca/ProtoUnitGroup';

export interface ProtoDataSet {
  'actor'?: (_protolca_ProtoActor | null);
  'category'?: (_protolca_ProtoCategory | null);
  'currency'?: (_protolca_ProtoCurrency | null);
  'dqSystem'?: (_protolca_ProtoDQSystem | null);
  'flow'?: (_protolca_ProtoFlow | null);
  'flowProperty'?: (_protolca_ProtoFlowProperty | null);
  'impactCategory'?: (_protolca_ProtoImpactCategory | null);
  'impactMethod'?: (_protolca_ProtoImpactMethod | null);
  'location'?: (_protolca_ProtoLocation | null);
  'parameter'?: (_protolca_ProtoParameter | null);
  'process'?: (_protolca_ProtoProcess | null);
  'productSystem'?: (_protolca_ProtoProductSystem | null);
  'project'?: (_protolca_ProtoProject | null);
  'socialIndicator'?: (_protolca_ProtoSocialIndicator | null);
  'source'?: (_protolca_ProtoSource | null);
  'unitGroup'?: (_protolca_ProtoUnitGroup | null);
  'model'?: "actor"|"category"|"currency"|"dqSystem"|"flow"|"flowProperty"|"impactCategory"|"impactMethod"|"location"|"parameter"|"process"|"productSystem"|"project"|"socialIndicator"|"source"|"unitGroup";
}

export interface ProtoDataSet__Output {
  'actor'?: (_protolca_ProtoActor__Output);
  'category'?: (_protolca_ProtoCategory__Output);
  'currency'?: (_protolca_ProtoCurrency__Output);
  'dqSystem'?: (_protolca_ProtoDQSystem__Output);
  'flow'?: (_protolca_ProtoFlow__Output);
  'flowProperty'?: (_protolca_ProtoFlowProperty__Output);
  'impactCategory'?: (_protolca_ProtoImpactCategory__Output);
  'impactMethod'?: (_protolca_ProtoImpactMethod__Output);
  'location'?: (_protolca_ProtoLocation__Output);
  'parameter'?: (_protolca_ProtoParameter__Output);
  'process'?: (_protolca_ProtoProcess__Output);
  'productSystem'?: (_protolca_ProtoProductSystem__Output);
  'project'?: (_protolca_ProtoProject__Output);
  'socialIndicator'?: (_protolca_ProtoSocialIndicator__Output);
  'source'?: (_protolca_ProtoSource__Output);
  'unitGroup'?: (_protolca_ProtoUnitGroup__Output);
}
