// Original file: ../olca-proto/proto/olca.proto

import type { ProtoRef as _protolca_ProtoRef, ProtoRef__Output as _protolca_ProtoRef__Output } from '../protolca/ProtoRef';
import type { ProtoUncertainty as _protolca_ProtoUncertainty, ProtoUncertainty__Output as _protolca_ProtoUncertainty__Output } from '../protolca/ProtoUncertainty';

/**
 * A single characterisation factor of a LCIA category for a flow.
 */
export interface ProtoImpactFactor {
  /**
   * The [Flow] of the impact assessment factor.
   */
  'flow'?: (_protolca_ProtoRef | null);
  /**
   * In case of a regionalized impact category, this field can contain the
   * location for which this factor is valid.
   */
  'location'?: (_protolca_ProtoRef | null);
  /**
   * The quantity of the flow to which the LCIA factor is related (e.g. Mass).
   */
  'flowProperty'?: (_protolca_ProtoRef | null);
  /**
   * The flow unit to which the LCIA factor is related (e.g. kg).
   */
  'unit'?: (_protolca_ProtoRef | null);
  /**
   * The value of the impact assessment factor.
   */
  'value'?: (number | string);
  /**
   * A mathematical formula for calculating the value of the LCIA factor.
   */
  'formula'?: (string);
  /**
   * The uncertainty distribution of the factors' value.
   */
  'uncertainty'?: (_protolca_ProtoUncertainty | null);
}

/**
 * A single characterisation factor of a LCIA category for a flow.
 */
export interface ProtoImpactFactor__Output {
  /**
   * The [Flow] of the impact assessment factor.
   */
  'flow'?: (_protolca_ProtoRef__Output);
  /**
   * In case of a regionalized impact category, this field can contain the
   * location for which this factor is valid.
   */
  'location'?: (_protolca_ProtoRef__Output);
  /**
   * The quantity of the flow to which the LCIA factor is related (e.g. Mass).
   */
  'flowProperty'?: (_protolca_ProtoRef__Output);
  /**
   * The flow unit to which the LCIA factor is related (e.g. kg).
   */
  'unit'?: (_protolca_ProtoRef__Output);
  /**
   * The value of the impact assessment factor.
   */
  'value'?: (number);
  /**
   * A mathematical formula for calculating the value of the LCIA factor.
   */
  'formula'?: (string);
  /**
   * The uncertainty distribution of the factors' value.
   */
  'uncertainty'?: (_protolca_ProtoUncertainty__Output);
}
