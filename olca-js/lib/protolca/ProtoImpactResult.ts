// Original file: ../olca-proto/proto/olca.proto

import type { ProtoRef as _protolca_ProtoRef, ProtoRef__Output as _protolca_ProtoRef__Output } from '../protolca/ProtoRef';

/**
 * A result value for an impact assessment category.
 */
export interface ProtoImpactResult {
  /**
   * The reference to the impact assessment category.
   */
  'impactCategory'?: (_protolca_ProtoRef | null);
  /**
   * The value of the flow amount.
   */
  'value'?: (number | string);
}

/**
 * A result value for an impact assessment category.
 */
export interface ProtoImpactResult__Output {
  /**
   * The reference to the impact assessment category.
   */
  'impactCategory'?: (_protolca_ProtoRef__Output);
  /**
   * The value of the flow amount.
   */
  'value'?: (number);
}
