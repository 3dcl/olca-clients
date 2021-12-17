// Original file: ../olca-proto/proto/olca.proto

/**
 * An enumeration type for allocation methods. This type is used to define the
 * type of an [AllocationFactor], the default allocation method of a
 * multi-functional [Process], or the allocation method in a
 * [CalculationSetup].
 */
export enum ProtoAllocationType {
  /**
   * This default option was added automatically
   * and means that no values was set.
   */
  UNDEFINED_ALLOCATION_TYPE = 0,
  PHYSICAL_ALLOCATION = 1,
  ECONOMIC_ALLOCATION = 2,
  CAUSAL_ALLOCATION = 3,
  USE_DEFAULT_ALLOCATION = 4,
  NO_ALLOCATION = 5,
}
