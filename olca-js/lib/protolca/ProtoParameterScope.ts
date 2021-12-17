// Original file: ../olca-proto/proto/olca.proto

/**
 * The possible scopes of parameters. Parameters can be defined globally, in
 * processes, or impact categories. They can be redefined in calculation setups
 * on the project and product system level, but the initial definition is
 * always only global, in a process, or an LCIA category.
 */
export enum ProtoParameterScope {
  /**
   * This default option was added automatically
   * and means that no values was set.
   */
  UNDEFINED_PARAMETER_SCOPE = 0,
  /**
   * Indicates that the evaluation scope of a parameter is the process where it
   * is defined.
   */
  PROCESS_SCOPE = 1,
  /**
   * Indicates that the evaluation scope of a parameter is the impact category
   * where it is defined.
   */
  IMPACT_SCOPE = 2,
  /**
   * Indicates that the evaluation scope of a parameter is the global scope.
   */
  GLOBAL_SCOPE = 3,
}
