// Original file: ../olca-proto/proto/data_update_service.proto

import type { ProtoRef as _protolca_ProtoRef, ProtoRef__Output as _protolca_ProtoRef__Output } from '../../protolca/ProtoRef';
import type { ProtoProcessType as _protolca_ProtoProcessType } from '../../protolca/ProtoProcessType';

// Original file: ../olca-proto/proto/data_update_service.proto

export enum _protolca_services_CreateSystemRequest_DefaultProviders {
  Prefer = 0,
  Ignore = 1,
  Only = 2,
}

export interface CreateSystemRequest {
  /**
   * The (reference of the) process from which the product system should be
   * generated. This will be the reference process of the product system
   * with upstream and downstream processes added recursively.
   */
  'process'?: (_protolca_ProtoRef | null);
  /**
   * Indicates how default providers of product inputs and waste outputs
   * should be considered during the linking. `only` means that only
   * product inputs and waste outputs should be linked that have a
   * default provider and that this default provider is used. `prefer`
   * means that a default provider is used during the linking if there
   * are multiple options. `ignore` means that the default providers
   * have no specific role.
   */
  'defaultProviders'?: (_protolca_services_CreateSystemRequest_DefaultProviders | keyof typeof _protolca_services_CreateSystemRequest_DefaultProviders);
  /**
   * When there are multiple provider processes available for linking a
   * product input or waste output the `preferred_type` indicates which
   * type of process (LCI results or unit processes) should be preferred
   * during the linking.
   */
  'preferredType'?: (_protolca_ProtoProcessType | keyof typeof _protolca_ProtoProcessType);
}

export interface CreateSystemRequest__Output {
  /**
   * The (reference of the) process from which the product system should be
   * generated. This will be the reference process of the product system
   * with upstream and downstream processes added recursively.
   */
  'process'?: (_protolca_ProtoRef__Output);
  /**
   * Indicates how default providers of product inputs and waste outputs
   * should be considered during the linking. `only` means that only
   * product inputs and waste outputs should be linked that have a
   * default provider and that this default provider is used. `prefer`
   * means that a default provider is used during the linking if there
   * are multiple options. `ignore` means that the default providers
   * have no specific role.
   */
  'defaultProviders'?: (_protolca_services_CreateSystemRequest_DefaultProviders);
  /**
   * When there are multiple provider processes available for linking a
   * product input or waste output the `preferred_type` indicates which
   * type of process (LCI results or unit processes) should be preferred
   * during the linking.
   */
  'preferredType'?: (_protolca_ProtoProcessType);
}
