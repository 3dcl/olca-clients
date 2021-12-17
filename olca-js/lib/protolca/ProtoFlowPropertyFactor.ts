// Original file: ../olca-proto/proto/olca.proto

import type { ProtoRef as _protolca_ProtoRef, ProtoRef__Output as _protolca_ProtoRef__Output } from '../protolca/ProtoRef';

/**
 * A FlowPropertyFactor is a conversion factor between <a
 * href="./FlowProperty.html">flow properties (quantities)</a> of a <a
 * href="./Flow.html">flow</a>. As an example the amount of the flow 'water' in
 * a process could be expressed in 'kg' mass or 'm3' volume. In this case the
 * flow water would have two flow property factors: one for the flow property
 * 'mass' and one for 'volume'. Each of these flow properties has a reference
 * to a <a href="./UnitGroup.html">unit group</a> which again has a reference
 * unit. In the example the flow property 'mass' could reference the unit group
 * 'units of mass' with 'kg' as reference unit and volume could reference the
 * unit group 'units of volume' with 'm3' as reference unit. The flow property
 * factor is now the conversion factor between these two reference units where
 * the factor of the reference flow property of the flow is 1. If the reference
 * flow property of 'water' in the example would be 'mass' the respective flow
 * property factor would be 1 and the factor for 'volume' would be 0.001 (as 1
 * kg water is 0.001 m3). The amount of water in a process can now be also
 * given in liter, tons, grams etc. For this, the unit conversion factor of the
 * respective unit group can be used to convert into the reference unit (which
 * then can be used to convert to the reference unit of another flow property).
 * Another thing to note is that different flow properties can refer to the
 * same unit group (e.g. MJ upper calorific value and MJ lower calorific
 * value.)
 */
export interface ProtoFlowPropertyFactor {
  /**
   * The flow property (quantity) of the factor.
   */
  'flowProperty'?: (_protolca_ProtoRef | null);
  /**
   * The value of the conversion factor.
   */
  'conversionFactor'?: (number | string);
  /**
   * Indicates whether the flow property of the factor is the reference flow
   * property of the flow. The reference flow property must have a conversion
   * factor of 1.0 and there should be only one reference flow property.
   */
  'referenceFlowProperty'?: (boolean);
}

/**
 * A FlowPropertyFactor is a conversion factor between <a
 * href="./FlowProperty.html">flow properties (quantities)</a> of a <a
 * href="./Flow.html">flow</a>. As an example the amount of the flow 'water' in
 * a process could be expressed in 'kg' mass or 'm3' volume. In this case the
 * flow water would have two flow property factors: one for the flow property
 * 'mass' and one for 'volume'. Each of these flow properties has a reference
 * to a <a href="./UnitGroup.html">unit group</a> which again has a reference
 * unit. In the example the flow property 'mass' could reference the unit group
 * 'units of mass' with 'kg' as reference unit and volume could reference the
 * unit group 'units of volume' with 'm3' as reference unit. The flow property
 * factor is now the conversion factor between these two reference units where
 * the factor of the reference flow property of the flow is 1. If the reference
 * flow property of 'water' in the example would be 'mass' the respective flow
 * property factor would be 1 and the factor for 'volume' would be 0.001 (as 1
 * kg water is 0.001 m3). The amount of water in a process can now be also
 * given in liter, tons, grams etc. For this, the unit conversion factor of the
 * respective unit group can be used to convert into the reference unit (which
 * then can be used to convert to the reference unit of another flow property).
 * Another thing to note is that different flow properties can refer to the
 * same unit group (e.g. MJ upper calorific value and MJ lower calorific
 * value.)
 */
export interface ProtoFlowPropertyFactor__Output {
  /**
   * The flow property (quantity) of the factor.
   */
  'flowProperty'?: (_protolca_ProtoRef__Output);
  /**
   * The value of the conversion factor.
   */
  'conversionFactor'?: (number);
  /**
   * Indicates whether the flow property of the factor is the reference flow
   * property of the flow. The reference flow property must have a conversion
   * factor of 1.0 and there should be only one reference flow property.
   */
  'referenceFlowProperty'?: (boolean);
}
