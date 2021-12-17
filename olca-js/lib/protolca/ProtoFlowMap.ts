// Original file: ../olca-proto/proto/olca.proto

import type { ProtoRef as _protolca_ProtoRef, ProtoRef__Output as _protolca_ProtoRef__Output } from '../protolca/ProtoRef';
import type { ProtoFlowMapEntry as _protolca_ProtoFlowMapEntry, ProtoFlowMapEntry__Output as _protolca_ProtoFlowMapEntry__Output } from '../protolca/ProtoFlowMapEntry';

/**
 * A crosswalk of flows from a source flow list to a target flow list.
 */
export interface ProtoFlowMap {
  /**
   * The reference ID (typically an UUID) of the entity.
   */
  'id'?: (string);
  /**
   * The name of the entity.
   */
  'name'?: (string);
  /**
   * The description of the entity.
   */
  'description'?: (string);
  /**
   * A version number in MAJOR.MINOR.PATCH format where the MINOR and PATCH
   * fields are optional and the fields may have leading zeros (so 01.00.00 is
   * the same as 1.0.0 or 1).
   */
  'version'?: (string);
  /**
   * The timestamp when the entity was changed the last time.
   */
  'lastChange'?: (string);
  /**
   * The reference (id, name, description) of the source flow list.
   */
  'source'?: (_protolca_ProtoRef | null);
  /**
   * The reference (id, name, description) of the target flow list.
   */
  'target'?: (_protolca_ProtoRef | null);
  /**
   * A list of flow mappings from flows in a source flow list to flows in a
   * target flow list.
   */
  'mappings'?: (_protolca_ProtoFlowMapEntry)[];
}

/**
 * A crosswalk of flows from a source flow list to a target flow list.
 */
export interface ProtoFlowMap__Output {
  /**
   * The reference ID (typically an UUID) of the entity.
   */
  'id'?: (string);
  /**
   * The name of the entity.
   */
  'name'?: (string);
  /**
   * The description of the entity.
   */
  'description'?: (string);
  /**
   * A version number in MAJOR.MINOR.PATCH format where the MINOR and PATCH
   * fields are optional and the fields may have leading zeros (so 01.00.00 is
   * the same as 1.0.0 or 1).
   */
  'version'?: (string);
  /**
   * The timestamp when the entity was changed the last time.
   */
  'lastChange'?: (string);
  /**
   * The reference (id, name, description) of the source flow list.
   */
  'source'?: (_protolca_ProtoRef__Output);
  /**
   * The reference (id, name, description) of the target flow list.
   */
  'target'?: (_protolca_ProtoRef__Output);
  /**
   * A list of flow mappings from flows in a source flow list to flows in a
   * target flow list.
   */
  'mappings'?: (_protolca_ProtoFlowMapEntry__Output)[];
}
