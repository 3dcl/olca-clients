// Original file: ../olca-proto/proto/olca.proto

import type { ProtoRef as _protolca_ProtoRef, ProtoRef__Output as _protolca_ProtoRef__Output } from '../protolca/ProtoRef';

/**
 * A normalization and weighting factor of a [NwSet] related to an impact
 * category. Depending on the purpose of the [NwSet] (normalization, weighting,
 * or both) the normalization and weighting factor can be present or not.
 */
export interface ProtoNwFactor {
  'impactCategory'?: (_protolca_ProtoRef | null);
  'normalisationFactor'?: (number | string);
  'weightingFactor'?: (number | string);
}

/**
 * A normalization and weighting factor of a [NwSet] related to an impact
 * category. Depending on the purpose of the [NwSet] (normalization, weighting,
 * or both) the normalization and weighting factor can be present or not.
 */
export interface ProtoNwFactor__Output {
  'impactCategory'?: (_protolca_ProtoRef__Output);
  'normalisationFactor'?: (number);
  'weightingFactor'?: (number);
}
