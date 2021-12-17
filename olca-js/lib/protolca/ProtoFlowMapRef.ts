// Original file: ../olca-proto/proto/olca.proto

import type { ProtoRef as _protolca_ProtoRef, ProtoRef__Output as _protolca_ProtoRef__Output } from '../protolca/ProtoRef';

/**
 * Describes a source or target flow in a `FlowMappingEntry` of a `FlowMap`.
 * Such a flow reference can also optionally specify the unit and flow property
 * (quantity) for which the mapping is valid. If the unit or quantity is not
 * given, the mapping is based on the respective reference unit and reference
 * flow property of the flow.
 */
export interface ProtoFlowMapRef {
  /**
   * The reference to the flow data set.
   */
  'flow'?: (_protolca_ProtoRef | null);
  /**
   * An optional reference to a flow property of the flow for which the mapping
   * is valid.
   */
  'flowProperty'?: (_protolca_ProtoRef | null);
  /**
   * An optional reference to a unit of the flow for which the mapping is valid
   */
  'unit'?: (_protolca_ProtoRef | null);
  /**
   * In case of a product or waste flow a flow mapping can contain a provider
   * which is the process that produces the product or a waste treatment
   * process that consumes the waste flow. This is useful when we want to apply
   * mappings of product and waste flows on databases and link them in the
   * corresponding processes and product systems.
   */
  'provider'?: (_protolca_ProtoRef | null);
}

/**
 * Describes a source or target flow in a `FlowMappingEntry` of a `FlowMap`.
 * Such a flow reference can also optionally specify the unit and flow property
 * (quantity) for which the mapping is valid. If the unit or quantity is not
 * given, the mapping is based on the respective reference unit and reference
 * flow property of the flow.
 */
export interface ProtoFlowMapRef__Output {
  /**
   * The reference to the flow data set.
   */
  'flow'?: (_protolca_ProtoRef__Output);
  /**
   * An optional reference to a flow property of the flow for which the mapping
   * is valid.
   */
  'flowProperty'?: (_protolca_ProtoRef__Output);
  /**
   * An optional reference to a unit of the flow for which the mapping is valid
   */
  'unit'?: (_protolca_ProtoRef__Output);
  /**
   * In case of a product or waste flow a flow mapping can contain a provider
   * which is the process that produces the product or a waste treatment
   * process that consumes the waste flow. This is useful when we want to apply
   * mappings of product and waste flows on databases and link them in the
   * corresponding processes and product systems.
   */
  'provider'?: (_protolca_ProtoRef__Output);
}
