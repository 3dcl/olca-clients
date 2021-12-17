// Original file: ../olca-proto/proto/olca.proto

import type { ProtoType as _protolca_ProtoType } from '../protolca/ProtoType';
import type { ProtoRef as _protolca_ProtoRef, ProtoRef__Output as _protolca_ProtoRef__Output } from '../protolca/ProtoRef';
import type { ProtoExchangeRef as _protolca_ProtoExchangeRef, ProtoExchangeRef__Output as _protolca_ProtoExchangeRef__Output } from '../protolca/ProtoExchangeRef';
import type { ProtoProcessLink as _protolca_ProtoProcessLink, ProtoProcessLink__Output as _protolca_ProtoProcessLink__Output } from '../protolca/ProtoProcessLink';
import type { ProtoParameterRedefSet as _protolca_ProtoParameterRedefSet, ProtoParameterRedefSet__Output as _protolca_ProtoParameterRedefSet__Output } from '../protolca/ProtoParameterRedefSet';

/**
 * A product system describes the supply chain of a product (the functional
 * unit) ...
 */
export interface ProtoProductSystem {
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
   * The descriptors of all processes and sub-systems that are contained in the
   * product system.
   */
  'processes'?: (_protolca_ProtoRef)[];
  /**
   * The descriptor of the process that provides the flow of the functional
   * unit of the product system.
   */
  'referenceProcess'?: (_protolca_ProtoRef | null);
  /**
   * The exchange of the reference processes (typically the product output)
   * that provides the flow of the functional unit of the product system.
   */
  'referenceExchange'?: (_protolca_ProtoExchangeRef | null);
  /**
   * The flow amount of the functional unit of the product system.
   */
  'targetAmount'?: (number | string);
  /**
   * The unit in which the flow amount of the functional unit is given.
   */
  'targetUnit'?: (_protolca_ProtoRef | null);
  /**
   * The flow property in which the flow amount of the functional unit is
   * given.
   */
  'targetFlowProperty'?: (_protolca_ProtoRef | null);
  /**
   * The process links of the product system.
   */
  'processLinks'?: (_protolca_ProtoProcessLink)[];
  /**
   * A list of possible sets of parameter redefinitions for this product
   * system.
   */
  'parameterSets'?: (_protolca_ProtoParameterRedefSet)[];
}

/**
 * A product system describes the supply chain of a product (the functional
 * unit) ...
 */
export interface ProtoProductSystem__Output {
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
   * The descriptors of all processes and sub-systems that are contained in the
   * product system.
   */
  'processes'?: (_protolca_ProtoRef__Output)[];
  /**
   * The descriptor of the process that provides the flow of the functional
   * unit of the product system.
   */
  'referenceProcess'?: (_protolca_ProtoRef__Output);
  /**
   * The exchange of the reference processes (typically the product output)
   * that provides the flow of the functional unit of the product system.
   */
  'referenceExchange'?: (_protolca_ProtoExchangeRef__Output);
  /**
   * The flow amount of the functional unit of the product system.
   */
  'targetAmount'?: (number);
  /**
   * The unit in which the flow amount of the functional unit is given.
   */
  'targetUnit'?: (_protolca_ProtoRef__Output);
  /**
   * The flow property in which the flow amount of the functional unit is
   * given.
   */
  'targetFlowProperty'?: (_protolca_ProtoRef__Output);
  /**
   * The process links of the product system.
   */
  'processLinks'?: (_protolca_ProtoProcessLink__Output)[];
  /**
   * A list of possible sets of parameter redefinitions for this product
   * system.
   */
  'parameterSets'?: (_protolca_ProtoParameterRedefSet__Output)[];
}
