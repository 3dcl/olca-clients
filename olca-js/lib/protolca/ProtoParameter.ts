// Original file: ../olca-proto/proto/olca.proto

import type { ProtoType as _protolca_ProtoType } from '../protolca/ProtoType';
import type { ProtoRef as _protolca_ProtoRef, ProtoRef__Output as _protolca_ProtoRef__Output } from '../protolca/ProtoRef';
import type { ProtoParameterScope as _protolca_ProtoParameterScope } from '../protolca/ProtoParameterScope';
import type { ProtoUncertainty as _protolca_ProtoUncertainty, ProtoUncertainty__Output as _protolca_ProtoUncertainty__Output } from '../protolca/ProtoUncertainty';

/**
 * In openLCA, parameters can be defined in different scopes: global, process,
 * or LCIA method. The parameter name can be used in formulas and, thus, need
 * to conform to a specific syntax. Within a scope the parameter name should be
 * unique (otherwise the evaluation is not deterministic). There are two types
 * of parameters in openLCA: input parameters and dependent parameters. An
 * input parameter can have an optional uncertainty distribution but not a
 * formula. A dependent parameter can (should) have a formula (where also other
 * parameters can be used) but no uncertainty distribution.
 */
export interface ProtoParameter {
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
   * The scope where the parameter is valid.
   */
  'parameterScope'?: (_protolca_ProtoParameterScope | keyof typeof _protolca_ProtoParameterScope);
  /**
   * Indicates whether the parameter is an input parameter (true) or a
   * dependent/calculated parameter (false). A parameter can have a formula if
   * it is not an input parameter.
   */
  'inputParameter'?: (boolean);
  /**
   * The parameter value.
   */
  'value'?: (number | string);
  /**
   * A mathematical expression to calculate the parameter value.
   */
  'formula'?: (string);
  /**
   * An uncertainty distribution of the parameter value. This is only valid for
   * input parameters.
   */
  'uncertainty'?: (_protolca_ProtoUncertainty | null);
}

/**
 * In openLCA, parameters can be defined in different scopes: global, process,
 * or LCIA method. The parameter name can be used in formulas and, thus, need
 * to conform to a specific syntax. Within a scope the parameter name should be
 * unique (otherwise the evaluation is not deterministic). There are two types
 * of parameters in openLCA: input parameters and dependent parameters. An
 * input parameter can have an optional uncertainty distribution but not a
 * formula. A dependent parameter can (should) have a formula (where also other
 * parameters can be used) but no uncertainty distribution.
 */
export interface ProtoParameter__Output {
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
   * The scope where the parameter is valid.
   */
  'parameterScope'?: (_protolca_ProtoParameterScope);
  /**
   * Indicates whether the parameter is an input parameter (true) or a
   * dependent/calculated parameter (false). A parameter can have a formula if
   * it is not an input parameter.
   */
  'inputParameter'?: (boolean);
  /**
   * The parameter value.
   */
  'value'?: (number);
  /**
   * A mathematical expression to calculate the parameter value.
   */
  'formula'?: (string);
  /**
   * An uncertainty distribution of the parameter value. This is only valid for
   * input parameters.
   */
  'uncertainty'?: (_protolca_ProtoUncertainty__Output);
}
