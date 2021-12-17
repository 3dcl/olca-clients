// Original file: ../olca-proto/proto/about_service.proto


export interface AboutResponse {
  /**
   * The name of the database to which the service is connected.
   */
  'database'?: (string);
  /**
   * The version of the service interface.
   */
  'version'?: (number);
  /**
   * The minimum service version to which this service is backwards
   * compatible (means that all versions from this version to the
   * the current version of this service are supported).
   */
  'minSupportedVersion'?: (number);
}

export interface AboutResponse__Output {
  /**
   * The name of the database to which the service is connected.
   */
  'database'?: (string);
  /**
   * The version of the service interface.
   */
  'version'?: (number);
  /**
   * The minimum service version to which this service is backwards
   * compatible (means that all versions from this version to the
   * the current version of this service are supported).
   */
  'minSupportedVersion'?: (number);
}
