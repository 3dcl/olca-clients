// Original file: ../olca-proto/proto/olca.proto

import type { ProtoFlowMapRef as _protolca_ProtoFlowMapRef, ProtoFlowMapRef__Output as _protolca_ProtoFlowMapRef__Output } from '../protolca/ProtoFlowMapRef';

/**
 * A mapping from a source flow to a target flow.
 */
export interface ProtoFlowMapEntry {
  /**
   * Describes the source flow of the mapping.
   */
  'from'?: (_protolca_ProtoFlowMapRef | null);
  /**
   * Describes the target of the mapping.
   */
  'to'?: (_protolca_ProtoFlowMapRef | null);
  /**
   * The conversion factor to convert the amount of 1 unit of the source flow
   * into the corresponding quantity of the target flow.
   */
  'conversionFactor'?: (number | string);
}

/**
 * A mapping from a source flow to a target flow.
 */
export interface ProtoFlowMapEntry__Output {
  /**
   * Describes the source flow of the mapping.
   */
  'from'?: (_protolca_ProtoFlowMapRef__Output);
  /**
   * Describes the target of the mapping.
   */
  'to'?: (_protolca_ProtoFlowMapRef__Output);
  /**
   * The conversion factor to convert the amount of 1 unit of the source flow
   * into the corresponding quantity of the target flow.
   */
  'conversionFactor'?: (number);
}
