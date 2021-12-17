// Original file: ../olca-proto/proto/olca.proto

/**
 * Enumeration of uncertainty distribution types that can be used in exchanges,
 * parameters, LCIA factors, etc.
 */
export enum ProtoUncertaintyType {
  /**
   * This default option was added automatically
   * and means that no values was set.
   */
  UNDEFINED_UNCERTAINTY_TYPE = 0,
  LOG_NORMAL_DISTRIBUTION = 1,
  NORMAL_DISTRIBUTION = 2,
  TRIANGLE_DISTRIBUTION = 3,
  UNIFORM_DISTRIBUTION = 4,
}
