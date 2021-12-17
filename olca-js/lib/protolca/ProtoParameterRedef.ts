// Original file: ../olca-proto/proto/olca.proto

import type { ProtoRef as _protolca_ProtoRef, ProtoRef__Output as _protolca_ProtoRef__Output } from '../protolca/ProtoRef';
import type { ProtoUncertainty as _protolca_ProtoUncertainty, ProtoUncertainty__Output as _protolca_ProtoUncertainty__Output } from '../protolca/ProtoUncertainty';

/**
 * A redefinition of a parameter in a product system.
 */
export interface ProtoParameterRedef {
  /**
   * The context of the paramater (a process or LCIA method). If no context is
   * provided it is assumed that this is a redefinition of a global parameter.
   */
  'context'?: (_protolca_ProtoRef | null);
  /**
   * A description of this parameter redefinition.
   */
  'description'?: (string);
  /**
   * The name of the redefined parameter. Note that parameter names are used in
   * formulas so they need to follow specific syntax rules. A redefinition
   * replaces a bound parameter in a specific context and thus has to exactly
   * match the respective name.
   */
  'name'?: (string);
  /**
   * An uncertainty distribution for the redefined parameter value.
   */
  'uncertainty'?: (_protolca_ProtoUncertainty | null);
  /**
   * The value of the redefined parameter.
   */
  'value'?: (number | string);
}

/**
 * A redefinition of a parameter in a product system.
 */
export interface ProtoParameterRedef__Output {
  /**
   * The context of the paramater (a process or LCIA method). If no context is
   * provided it is assumed that this is a redefinition of a global parameter.
   */
  'context'?: (_protolca_ProtoRef__Output);
  /**
   * A description of this parameter redefinition.
   */
  'description'?: (string);
  /**
   * The name of the redefined parameter. Note that parameter names are used in
   * formulas so they need to follow specific syntax rules. A redefinition
   * replaces a bound parameter in a specific context and thus has to exactly
   * match the respective name.
   */
  'name'?: (string);
  /**
   * An uncertainty distribution for the redefined parameter value.
   */
  'uncertainty'?: (_protolca_ProtoUncertainty__Output);
  /**
   * The value of the redefined parameter.
   */
  'value'?: (number);
}
