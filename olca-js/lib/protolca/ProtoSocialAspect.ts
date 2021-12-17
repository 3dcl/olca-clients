// Original file: ../olca-proto/proto/olca.proto

import type { ProtoRiskLevel as _protolca_ProtoRiskLevel } from '../protolca/ProtoRiskLevel';
import type { ProtoRef as _protolca_ProtoRef, ProtoRef__Output as _protolca_ProtoRef__Output } from '../protolca/ProtoRef';

/**
 * An instance of this class describes a social aspect related to a social
 * indicator in a process.
 */
export interface ProtoSocialAspect {
  /**
   * The value of the activity variable of the related indicator.
   */
  'activityValue'?: (number | string);
  'comment'?: (string);
  /**
   * A data quality entry, e.g. `(3,1,2,4,1)`.
   */
  'quality'?: (string);
  /**
   * The raw amount of the indicator's unit of measurement (not required to be
   * numeric currently)
   */
  'rawAmount'?: (string);
  'riskLevel'?: (_protolca_ProtoRiskLevel | keyof typeof _protolca_ProtoRiskLevel);
  'socialIndicator'?: (_protolca_ProtoRef | null);
  'source'?: (_protolca_ProtoRef | null);
}

/**
 * An instance of this class describes a social aspect related to a social
 * indicator in a process.
 */
export interface ProtoSocialAspect__Output {
  /**
   * The value of the activity variable of the related indicator.
   */
  'activityValue'?: (number);
  'comment'?: (string);
  /**
   * A data quality entry, e.g. `(3,1,2,4,1)`.
   */
  'quality'?: (string);
  /**
   * The raw amount of the indicator's unit of measurement (not required to be
   * numeric currently)
   */
  'rawAmount'?: (string);
  'riskLevel'?: (_protolca_ProtoRiskLevel);
  'socialIndicator'?: (_protolca_ProtoRef__Output);
  'source'?: (_protolca_ProtoRef__Output);
}
