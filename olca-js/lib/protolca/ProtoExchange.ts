// Original file: ../olca-proto/proto/olca.proto

import type { ProtoRef as _protolca_ProtoRef, ProtoRef__Output as _protolca_ProtoRef__Output } from '../protolca/ProtoRef';
import type { ProtoUncertainty as _protolca_ProtoUncertainty, ProtoUncertainty__Output as _protolca_ProtoUncertainty__Output } from '../protolca/ProtoUncertainty';

/**
 * An Exchange is an input or output of a [Flow] in a [Process]. The amount of
 * an exchange is given in a specific unit of a quantity ([FlowProperty]) of
 * the flow. The allowed units and flow properties that can be used for a flow
 * in an exchange are defined by the flow property information in that flow
 * (see also the [FlowPropertyFactor] type).
 */
export interface ProtoExchange {
  /**
   * Indicates whether this exchange is an avoided product.
   */
  'avoidedProduct'?: (boolean);
  /**
   * A formula for calculating the costs of this exchange.
   */
  'costFormula'?: (string);
  /**
   * The costs of this exchange.
   */
  'costValue'?: (number | string);
  /**
   * The currency in which the costs of this exchange are given.
   */
  'currency'?: (_protolca_ProtoRef | null);
  /**
   * The process internal ID of the exchange. This is used to identify
   * exchanges unambiguously within a process (e.g. when linking exchanges in a
   * product system where multiple exchanges with the same flow are allowed).
   * The value should be >= 1.
   */
  'internalId'?: (number);
  /**
   * The reference to the flow of the exchange.
   */
  'flow'?: (_protolca_ProtoRef | null);
  /**
   * The quantity in which the amount is given.
   */
  'flowProperty'?: (_protolca_ProtoRef | null);
  'input'?: (boolean);
  /**
   * Indicates whether the exchange is the quantitative reference of the
   * process.
   */
  'quantitativeReference'?: (boolean);
  'baseUncertainty'?: (number | string);
  /**
   * A default provider is a [Process] that is linked as the provider of a
   * product input or the waste treatment provider of a waste output. It is
   * just an optional default setting which can be also ignored when building
   * product systems in openLCA. The user is always free to link processes in
   * product systems ignoring these defaults (but the flows and flow directions
   * have to match of course).
   */
  'defaultProvider'?: (_protolca_ProtoRef | null);
  'amount'?: (number | string);
  'amountFormula'?: (string);
  'unit'?: (_protolca_ProtoRef | null);
  /**
   * A data quality entry like `(1;3;2;5;1)`. The entry is a vector of data
   * quality values that need to match the data quality scheme for flow inputs
   * and outputs that is assigned to the [Process]. In such a scheme the data
   * quality indicators have fixed positions and the respective values in the
   * `dqEntry` vector map to these positions.
   */
  'dqEntry'?: (string);
  'uncertainty'?: (_protolca_ProtoUncertainty | null);
  /**
   * A general comment about the input or output.
   */
  'description'?: (string);
}

/**
 * An Exchange is an input or output of a [Flow] in a [Process]. The amount of
 * an exchange is given in a specific unit of a quantity ([FlowProperty]) of
 * the flow. The allowed units and flow properties that can be used for a flow
 * in an exchange are defined by the flow property information in that flow
 * (see also the [FlowPropertyFactor] type).
 */
export interface ProtoExchange__Output {
  /**
   * Indicates whether this exchange is an avoided product.
   */
  'avoidedProduct'?: (boolean);
  /**
   * A formula for calculating the costs of this exchange.
   */
  'costFormula'?: (string);
  /**
   * The costs of this exchange.
   */
  'costValue'?: (number);
  /**
   * The currency in which the costs of this exchange are given.
   */
  'currency'?: (_protolca_ProtoRef__Output);
  /**
   * The process internal ID of the exchange. This is used to identify
   * exchanges unambiguously within a process (e.g. when linking exchanges in a
   * product system where multiple exchanges with the same flow are allowed).
   * The value should be >= 1.
   */
  'internalId'?: (number);
  /**
   * The reference to the flow of the exchange.
   */
  'flow'?: (_protolca_ProtoRef__Output);
  /**
   * The quantity in which the amount is given.
   */
  'flowProperty'?: (_protolca_ProtoRef__Output);
  'input'?: (boolean);
  /**
   * Indicates whether the exchange is the quantitative reference of the
   * process.
   */
  'quantitativeReference'?: (boolean);
  'baseUncertainty'?: (number);
  /**
   * A default provider is a [Process] that is linked as the provider of a
   * product input or the waste treatment provider of a waste output. It is
   * just an optional default setting which can be also ignored when building
   * product systems in openLCA. The user is always free to link processes in
   * product systems ignoring these defaults (but the flows and flow directions
   * have to match of course).
   */
  'defaultProvider'?: (_protolca_ProtoRef__Output);
  'amount'?: (number);
  'amountFormula'?: (string);
  'unit'?: (_protolca_ProtoRef__Output);
  /**
   * A data quality entry like `(1;3;2;5;1)`. The entry is a vector of data
   * quality values that need to match the data quality scheme for flow inputs
   * and outputs that is assigned to the [Process]. In such a scheme the data
   * quality indicators have fixed positions and the respective values in the
   * `dqEntry` vector map to these positions.
   */
  'dqEntry'?: (string);
  'uncertainty'?: (_protolca_ProtoUncertainty__Output);
  /**
   * A general comment about the input or output.
   */
  'description'?: (string);
}
