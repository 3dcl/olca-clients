// Original file: ../olca-proto/proto/olca.proto

import type { ProtoParameterRedef as _protolca_ProtoParameterRedef, ProtoParameterRedef__Output as _protolca_ProtoParameterRedef__Output } from '../protolca/ProtoParameterRedef';

/**
 * An instance of this class is just a set of parameter redefinitions attached
 * to a product system. It can have a name and a description. One of the
 * parameter sets can be defined as the baseline of the product system. In the
 * calculation the baseline set is then taken by default.
 */
export interface ProtoParameterRedefSet {
  /**
   * The name of the parameter set.
   */
  'name'?: (string);
  /**
   * A description of the parameter set.
   */
  'description'?: (string);
  /**
   * Indicates if this set of parameter redefinitions is the baseline for a
   * product system.
   */
  'isBaseline'?: (boolean);
  /**
   * The parameter redefinitions of this redefinition set.
   */
  'parameters'?: (_protolca_ProtoParameterRedef)[];
}

/**
 * An instance of this class is just a set of parameter redefinitions attached
 * to a product system. It can have a name and a description. One of the
 * parameter sets can be defined as the baseline of the product system. In the
 * calculation the baseline set is then taken by default.
 */
export interface ProtoParameterRedefSet__Output {
  /**
   * The name of the parameter set.
   */
  'name'?: (string);
  /**
   * A description of the parameter set.
   */
  'description'?: (string);
  /**
   * Indicates if this set of parameter redefinitions is the baseline for a
   * product system.
   */
  'isBaseline'?: (boolean);
  /**
   * The parameter redefinitions of this redefinition set.
   */
  'parameters'?: (_protolca_ProtoParameterRedef__Output)[];
}
