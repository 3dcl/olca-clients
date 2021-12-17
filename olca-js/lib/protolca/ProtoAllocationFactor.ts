// Original file: ../olca-proto/proto/olca.proto

import type { ProtoAllocationType as _protolca_ProtoAllocationType } from '../protolca/ProtoAllocationType';
import type { ProtoRef as _protolca_ProtoRef, ProtoRef__Output as _protolca_ProtoRef__Output } from '../protolca/ProtoRef';
import type { ProtoExchangeRef as _protolca_ProtoExchangeRef, ProtoExchangeRef__Output as _protolca_ProtoExchangeRef__Output } from '../protolca/ProtoExchangeRef';

/**
 * A single allocation factor in a process.
 */
export interface ProtoAllocationFactor {
  /**
   * The type of allocation.
   */
  'allocationType'?: (_protolca_ProtoAllocationType | keyof typeof _protolca_ProtoAllocationType);
  /**
   * The output product (or waste input) to which this allocation factor is
   * related. The must be an exchange with this product output (or waste input)
   * in this process.
   */
  'product'?: (_protolca_ProtoRef | null);
  /**
   * The value of the allocation factor.
   */
  'value'?: (number | string);
  /**
   * An optional formula from which the value of the allocation factor is
   * calculated.
   */
  'formula'?: (string);
  /**
   * A product input, waste output, or elementary flow exchange which is
   * allocated by this factor. This is only valid for causal allocation where
   * allocation factors can be assigned to single exchanges.
   */
  'exchange'?: (_protolca_ProtoExchangeRef | null);
}

/**
 * A single allocation factor in a process.
 */
export interface ProtoAllocationFactor__Output {
  /**
   * The type of allocation.
   */
  'allocationType'?: (_protolca_ProtoAllocationType);
  /**
   * The output product (or waste input) to which this allocation factor is
   * related. The must be an exchange with this product output (or waste input)
   * in this process.
   */
  'product'?: (_protolca_ProtoRef__Output);
  /**
   * The value of the allocation factor.
   */
  'value'?: (number);
  /**
   * An optional formula from which the value of the allocation factor is
   * calculated.
   */
  'formula'?: (string);
  /**
   * A product input, waste output, or elementary flow exchange which is
   * allocated by this factor. This is only valid for causal allocation where
   * allocation factors can be assigned to single exchanges.
   */
  'exchange'?: (_protolca_ProtoExchangeRef__Output);
}
