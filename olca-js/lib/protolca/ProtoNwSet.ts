// Original file: ../olca-proto/proto/olca.proto

import type { ProtoNwFactor as _protolca_ProtoNwFactor, ProtoNwFactor__Output as _protolca_ProtoNwFactor__Output } from '../protolca/ProtoNwFactor';

/**
 * A normalization and weighting set.
 */
export interface ProtoNwSet {
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
   * This is the optional unit of the (normalized and) weighted score when this
   * normalization and weighting set was applied on a LCIA result.
   */
  'weightedScoreUnit'?: (string);
  /**
   * The list of normalization and weighting factors of this set.
   */
  'factors'?: (_protolca_ProtoNwFactor)[];
}

/**
 * A normalization and weighting set.
 */
export interface ProtoNwSet__Output {
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
   * This is the optional unit of the (normalized and) weighted score when this
   * normalization and weighting set was applied on a LCIA result.
   */
  'weightedScoreUnit'?: (string);
  /**
   * The list of normalization and weighting factors of this set.
   */
  'factors'?: (_protolca_ProtoNwFactor__Output)[];
}
