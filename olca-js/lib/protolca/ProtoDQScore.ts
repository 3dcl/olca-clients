// Original file: ../olca-proto/proto/olca.proto


/**
 * An score value of an indicator ([DQIndicator]) in a data quality system
 * ([DQSystem]).
 */
export interface ProtoDQScore {
  'position'?: (number);
  'label'?: (string);
  'description'?: (string);
  'uncertainty'?: (number | string);
}

/**
 * An score value of an indicator ([DQIndicator]) in a data quality system
 * ([DQSystem]).
 */
export interface ProtoDQScore__Output {
  'position'?: (number);
  'label'?: (string);
  'description'?: (string);
  'uncertainty'?: (number);
}
