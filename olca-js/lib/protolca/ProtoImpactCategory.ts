// Original file: ../olca-proto/proto/olca.proto

import type { ProtoType as _protolca_ProtoType } from '../protolca/ProtoType';
import type { ProtoRef as _protolca_ProtoRef, ProtoRef__Output as _protolca_ProtoRef__Output } from '../protolca/ProtoRef';
import type { ProtoParameter as _protolca_ProtoParameter, ProtoParameter__Output as _protolca_ProtoParameter__Output } from '../protolca/ProtoParameter';
import type { ProtoImpactFactor as _protolca_ProtoImpactFactor, ProtoImpactFactor__Output as _protolca_ProtoImpactFactor__Output } from '../protolca/ProtoImpactFactor';

export interface ProtoImpactCategory {
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
   * The type name of the respective entity.
   */
  'type'?: (_protolca_ProtoType | keyof typeof _protolca_ProtoType);
  /**
   * The category of the entity.
   */
  'category'?: (_protolca_ProtoRef | null);
  /**
   * A list of optional tags. A tag is just a string which should not contain
   * commas (and other special characters).
   */
  'tags'?: (string)[];
  /**
   * If this entity is part of a library, this field contains the identifier of
   * that library. The identifier is typically just the combination of the
   * library name and version.
   */
  'library'?: (string);
  /**
   * The name of the reference unit of the LCIA category (e.g. kg CO2-eq.).
   */
  'referenceUnitName'?: (string);
  /**
   * A set of parameters which can be used in formulas of the characterisation
   * factors in this impact category.
   */
  'parameters'?: (_protolca_ProtoParameter)[];
  /**
   * The characterisation factors of the LCIA category.
   */
  'impactFactors'?: (_protolca_ProtoImpactFactor)[];
}

export interface ProtoImpactCategory__Output {
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
   * The type name of the respective entity.
   */
  'type'?: (_protolca_ProtoType);
  /**
   * The category of the entity.
   */
  'category'?: (_protolca_ProtoRef__Output);
  /**
   * A list of optional tags. A tag is just a string which should not contain
   * commas (and other special characters).
   */
  'tags'?: (string)[];
  /**
   * If this entity is part of a library, this field contains the identifier of
   * that library. The identifier is typically just the combination of the
   * library name and version.
   */
  'library'?: (string);
  /**
   * The name of the reference unit of the LCIA category (e.g. kg CO2-eq.).
   */
  'referenceUnitName'?: (string);
  /**
   * A set of parameters which can be used in formulas of the characterisation
   * factors in this impact category.
   */
  'parameters'?: (_protolca_ProtoParameter__Output)[];
  /**
   * The characterisation factors of the LCIA category.
   */
  'impactFactors'?: (_protolca_ProtoImpactFactor__Output)[];
}
