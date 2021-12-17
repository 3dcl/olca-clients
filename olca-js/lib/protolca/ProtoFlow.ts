// Original file: ../olca-proto/proto/olca.proto

import type { ProtoType as _protolca_ProtoType } from '../protolca/ProtoType';
import type { ProtoRef as _protolca_ProtoRef, ProtoRef__Output as _protolca_ProtoRef__Output } from '../protolca/ProtoRef';
import type { ProtoFlowType as _protolca_ProtoFlowType } from '../protolca/ProtoFlowType';
import type { ProtoFlowPropertyFactor as _protolca_ProtoFlowPropertyFactor, ProtoFlowPropertyFactor__Output as _protolca_ProtoFlowPropertyFactor__Output } from '../protolca/ProtoFlowPropertyFactor';

/**
 * Everything that can be an input or output of a process (e.g. a substance, a
 * product, a waste, a service etc.)
 */
export interface ProtoFlow {
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
   * The type of the flow. Note that this type is more a descriptor of how the
   * flow is handled in calculations.
   */
  'flowType'?: (_protolca_ProtoFlowType | keyof typeof _protolca_ProtoFlowType);
  /**
   * A CAS number of the flow.
   */
  'cas'?: (string);
  /**
   * A chemical formula of the flow.
   */
  'formula'?: (string);
  /**
   * The flow properties (quantities) in which amounts of the flow can be
   * expressed together with conversion factors between these flow flow
   * properties.
   */
  'flowProperties'?: (_protolca_ProtoFlowPropertyFactor)[];
  /**
   * The location of the flow. Normally the location of a flow is defined by
   * the process location where the flow is an input or output. However, some
   * data formats define a location as a property of a flow.
   */
  'location'?: (_protolca_ProtoRef | null);
  /**
   * A list of synonyms but packed into a single field. Best is to use
   * semicolons as separator as commas are sometimes used in names of
   * chemicals.
   */
  'synonyms'?: (string);
  /**
   * Indicates whether this flow describes an infrastructure product. This
   * field is part of the openLCA schema because of backward compatibility with
   * EcoSpold 1. It does not really have a meaning in openLCA and should not be
   * used anymore.
   */
  'infrastructureFlow'?: (boolean);
}

/**
 * Everything that can be an input or output of a process (e.g. a substance, a
 * product, a waste, a service etc.)
 */
export interface ProtoFlow__Output {
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
   * The type of the flow. Note that this type is more a descriptor of how the
   * flow is handled in calculations.
   */
  'flowType'?: (_protolca_ProtoFlowType);
  /**
   * A CAS number of the flow.
   */
  'cas'?: (string);
  /**
   * A chemical formula of the flow.
   */
  'formula'?: (string);
  /**
   * The flow properties (quantities) in which amounts of the flow can be
   * expressed together with conversion factors between these flow flow
   * properties.
   */
  'flowProperties'?: (_protolca_ProtoFlowPropertyFactor__Output)[];
  /**
   * The location of the flow. Normally the location of a flow is defined by
   * the process location where the flow is an input or output. However, some
   * data formats define a location as a property of a flow.
   */
  'location'?: (_protolca_ProtoRef__Output);
  /**
   * A list of synonyms but packed into a single field. Best is to use
   * semicolons as separator as commas are sometimes used in names of
   * chemicals.
   */
  'synonyms'?: (string);
  /**
   * Indicates whether this flow describes an infrastructure product. This
   * field is part of the openLCA schema because of backward compatibility with
   * EcoSpold 1. It does not really have a meaning in openLCA and should not be
   * used anymore.
   */
  'infrastructureFlow'?: (boolean);
}
