// Original file: ../olca-proto/proto/olca.proto

import type { ProtoRef as _protolca_ProtoRef, ProtoRef__Output as _protolca_ProtoRef__Output } from '../protolca/ProtoRef';
import type { ProtoExchangeRef as _protolca_ProtoExchangeRef, ProtoExchangeRef__Output as _protolca_ProtoExchangeRef__Output } from '../protolca/ProtoExchangeRef';

/**
 * A process link is a connection between two processes in a product system.
 */
export interface ProtoProcessLink {
  /**
   * The descriptor of the process or product system that provides a product or
   * a waste treatment.
   */
  'provider'?: (_protolca_ProtoRef | null);
  /**
   * The descriptor of the flow that is exchanged between the two processes.
   */
  'flow'?: (_protolca_ProtoRef | null);
  /**
   * The descriptor of the process that is linked to the provider.
   */
  'process'?: (_protolca_ProtoRef | null);
  /**
   * The exchange of the linked process (this is useful if the linked process
   * has multiple exchanges with the same flow that are linked to different
   * provides, e.g. in an electricity mix).
   */
  'exchange'?: (_protolca_ProtoExchangeRef | null);
}

/**
 * A process link is a connection between two processes in a product system.
 */
export interface ProtoProcessLink__Output {
  /**
   * The descriptor of the process or product system that provides a product or
   * a waste treatment.
   */
  'provider'?: (_protolca_ProtoRef__Output);
  /**
   * The descriptor of the flow that is exchanged between the two processes.
   */
  'flow'?: (_protolca_ProtoRef__Output);
  /**
   * The descriptor of the process that is linked to the provider.
   */
  'process'?: (_protolca_ProtoRef__Output);
  /**
   * The exchange of the linked process (this is useful if the linked process
   * has multiple exchanges with the same flow that are linked to different
   * provides, e.g. in an electricity mix).
   */
  'exchange'?: (_protolca_ProtoExchangeRef__Output);
}
