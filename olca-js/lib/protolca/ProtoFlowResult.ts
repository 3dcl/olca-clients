// Original file: ../olca-proto/proto/olca.proto

import type { ProtoRef as _protolca_ProtoRef, ProtoRef__Output as _protolca_ProtoRef__Output } from '../protolca/ProtoRef';

/**
 * A result value for a flow; given in the reference unit of the flow.
 */
export interface ProtoFlowResult {
  /**
   * The flow reference.
   */
  'flow'?: (_protolca_ProtoRef | null);
  /**
   * Indicates whether the flow is an input or not.
   */
  'input'?: (boolean);
  /**
   * The value of the flow amount.
   */
  'value'?: (number | string);
  /**
   * The (reference to the) location of this flow result in case of a
   * regionalized result.
   */
  'location'?: (_protolca_ProtoRef | null);
}

/**
 * A result value for a flow; given in the reference unit of the flow.
 */
export interface ProtoFlowResult__Output {
  /**
   * The flow reference.
   */
  'flow'?: (_protolca_ProtoRef__Output);
  /**
   * Indicates whether the flow is an input or not.
   */
  'input'?: (boolean);
  /**
   * The value of the flow amount.
   */
  'value'?: (number);
  /**
   * The (reference to the) location of this flow result in case of a
   * regionalized result.
   */
  'location'?: (_protolca_ProtoRef__Output);
}
