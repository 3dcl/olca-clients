// Original file: ../olca-proto/proto/olca.proto


/**
 * An unit of measure
 */
export interface ProtoUnit {
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
   * The conversion factor to the reference unit of the unit group to which
   * this unit belongs.
   */
  'conversionFactor'?: (number | string);
  /**
   * Indicates whether the unit is the reference unit of the unit group to
   * which this unit belongs. If it is the reference unit the conversion factor
   * must be 1.0. There should be always only one reference unit in a unit
   * group. The reference unit is used to convert amounts given in one unit to
   * amounts given in another unit of the respective unit group.
   */
  'referenceUnit'?: (boolean);
  /**
   * A list of synonyms for the unit.
   */
  'synonyms'?: (string)[];
}

/**
 * An unit of measure
 */
export interface ProtoUnit__Output {
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
   * The conversion factor to the reference unit of the unit group to which
   * this unit belongs.
   */
  'conversionFactor'?: (number);
  /**
   * Indicates whether the unit is the reference unit of the unit group to
   * which this unit belongs. If it is the reference unit the conversion factor
   * must be 1.0. There should be always only one reference unit in a unit
   * group. The reference unit is used to convert amounts given in one unit to
   * amounts given in another unit of the respective unit group.
   */
  'referenceUnit'?: (boolean);
  /**
   * A list of synonyms for the unit.
   */
  'synonyms'?: (string)[];
}
