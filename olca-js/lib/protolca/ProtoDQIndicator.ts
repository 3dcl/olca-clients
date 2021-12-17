// Original file: ../olca-proto/proto/olca.proto

import type { ProtoDQScore as _protolca_ProtoDQScore, ProtoDQScore__Output as _protolca_ProtoDQScore__Output } from '../protolca/ProtoDQScore';

/**
 * An indicator of a data quality system ([DQSystem]).
 */
export interface ProtoDQIndicator {
  'name'?: (string);
  'position'?: (number);
  'scores'?: (_protolca_ProtoDQScore)[];
}

/**
 * An indicator of a data quality system ([DQSystem]).
 */
export interface ProtoDQIndicator__Output {
  'name'?: (string);
  'position'?: (number);
  'scores'?: (_protolca_ProtoDQScore__Output)[];
}
