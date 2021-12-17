// Original file: ../olca-proto/proto/commons.proto

import type { ProtoRef as _protolca_ProtoRef, ProtoRef__Output as _protolca_ProtoRef__Output } from '../../protolca/ProtoRef';

/**
 * A technosphere flow is a pair of a process and a flow where the flow can be a
 * product or waste flow. For products flows, the process is a process that
 * produces this product; thus, has it on the output side. For waste flows, the
 * process is a process that consumes this waste flow; thus, has it on the input
 * side. In a product system, there can be multiple tech-flows with the same
 * product or waste flow but different processes, e.g. when there are multiple
 * processes that produce the same product.
 */
export interface ProtoTechFlow {
  'process'?: (_protolca_ProtoRef | null);
  'product'?: (_protolca_ProtoRef | null);
  'waste'?: (_protolca_ProtoRef | null);
  'flow'?: "product"|"waste";
}

/**
 * A technosphere flow is a pair of a process and a flow where the flow can be a
 * product or waste flow. For products flows, the process is a process that
 * produces this product; thus, has it on the output side. For waste flows, the
 * process is a process that consumes this waste flow; thus, has it on the input
 * side. In a product system, there can be multiple tech-flows with the same
 * product or waste flow but different processes, e.g. when there are multiple
 * processes that produce the same product.
 */
export interface ProtoTechFlow__Output {
  'process'?: (_protolca_ProtoRef__Output);
  'product'?: (_protolca_ProtoRef__Output);
  'waste'?: (_protolca_ProtoRef__Output);
}
