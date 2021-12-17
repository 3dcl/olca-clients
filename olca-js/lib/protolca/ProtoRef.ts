// Original file: ../olca-proto/proto/olca.proto

import type { ProtoType as _protolca_ProtoType } from '../protolca/ProtoType';
import type { ProtoFlowType as _protolca_ProtoFlowType } from '../protolca/ProtoFlowType';
import type { ProtoProcessType as _protolca_ProtoProcessType } from '../protolca/ProtoProcessType';

/**
 * A Ref is a reference to a [RootEntity]. When serializing an entity (e.g. a
 * [Process]) that references another standalone entity (e.g. a [Flow] in an
 * [Exchange]) we do not want to write the complete referenced entity into the
 * serialized JSON object but just a reference. However, the reference contains
 * some meta-data like name, category path etc. that are useful to display.
 */
export interface ProtoRef {
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
   * The full path of the category of the referenced entity from top to bottom,
   * e.g. `"Elementary flows", "Emissions to air", "unspecified"`.
   */
  'categoryPath'?: (string)[];
  /**
   * If the entity that is described by this reference is part of a library,
   * this field contains the identifier of that library. The identifier is
   * typically just the combination of the library name and version.
   */
  'library'?: (string);
  /**
   * This field is only valid for references of flows or impact categories and
   * contains the name (symbol) of the reference unit of that respective flow
   * or impact category.
   */
  'refUnit'?: (string);
  /**
   * This field is only valid for references of processes or flows and contains
   * the location name or code of that respective process or flow.
   */
  'location'?: (string);
  /**
   * In case of a reference to a flow, this field can contain the type of flow
   * that is referenced.
   */
  'flowType'?: (_protolca_ProtoFlowType | keyof typeof _protolca_ProtoFlowType);
  /**
   * In case of a reference to a process, this fiel can contain the type of
   * process that is referenced.
   */
  'processType'?: (_protolca_ProtoProcessType | keyof typeof _protolca_ProtoProcessType);
}

/**
 * A Ref is a reference to a [RootEntity]. When serializing an entity (e.g. a
 * [Process]) that references another standalone entity (e.g. a [Flow] in an
 * [Exchange]) we do not want to write the complete referenced entity into the
 * serialized JSON object but just a reference. However, the reference contains
 * some meta-data like name, category path etc. that are useful to display.
 */
export interface ProtoRef__Output {
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
   * The full path of the category of the referenced entity from top to bottom,
   * e.g. `"Elementary flows", "Emissions to air", "unspecified"`.
   */
  'categoryPath'?: (string)[];
  /**
   * If the entity that is described by this reference is part of a library,
   * this field contains the identifier of that library. The identifier is
   * typically just the combination of the library name and version.
   */
  'library'?: (string);
  /**
   * This field is only valid for references of flows or impact categories and
   * contains the name (symbol) of the reference unit of that respective flow
   * or impact category.
   */
  'refUnit'?: (string);
  /**
   * This field is only valid for references of processes or flows and contains
   * the location name or code of that respective process or flow.
   */
  'location'?: (string);
  /**
   * In case of a reference to a flow, this field can contain the type of flow
   * that is referenced.
   */
  'flowType'?: (_protolca_ProtoFlowType);
  /**
   * In case of a reference to a process, this fiel can contain the type of
   * process that is referenced.
   */
  'processType'?: (_protolca_ProtoProcessType);
}
