// Original file: ../olca-proto/proto/olca.proto

import type { ProtoUncertaintyType as _protolca_ProtoUncertaintyType } from '../protolca/ProtoUncertaintyType';

/**
 * Defines the parameter values of an uncertainty distribution. Depending on
 * the uncertainty distribution type different parameters could be used.
 */
export interface ProtoUncertainty {
  /**
   * The uncertainty distribution type
   */
  'distributionType'?: (_protolca_ProtoUncertaintyType | keyof typeof _protolca_ProtoUncertaintyType);
  /**
   * The arithmetic mean (used for normal distributions).
   */
  'mean'?: (number | string);
  /**
   * A mathematical formula for the arithmetic mean.
   */
  'meanFormula'?: (string);
  /**
   * The geometric mean value (used for log-normal distributions).
   */
  'geomMean'?: (number | string);
  /**
   * A mathematical formula for the geometric mean.
   */
  'geomMeanFormula'?: (string);
  /**
   * The minimum value (used for uniform and triangle distributions).
   */
  'minimum'?: (number | string);
  /**
   * A mathematical formula for the minimum value.
   */
  'minimumFormula'?: (string);
  /**
   * The arithmetic standard deviation (used for normal distributions).
   */
  'sd'?: (number | string);
  /**
   * A mathematical formula for the arithmetic standard deviation.
   */
  'sdFormula'?: (string);
  /**
   * The geometric standard deviation (used for log-normal distributions).
   */
  'geomSd'?: (number | string);
  /**
   * A mathematical formula for the geometric standard deviation.
   */
  'geomSdFormula'?: (string);
  /**
   * The most likely value (used for triangle distributions).
   */
  'mode'?: (number | string);
  /**
   * A mathematical formula for the most likely value.
   */
  'modeFormula'?: (string);
  /**
   * The maximum value (used for uniform and triangle distributions).
   */
  'maximum'?: (number | string);
  /**
   * A mathematical formula for the maximum value.
   */
  'maximumFormula'?: (string);
}

/**
 * Defines the parameter values of an uncertainty distribution. Depending on
 * the uncertainty distribution type different parameters could be used.
 */
export interface ProtoUncertainty__Output {
  /**
   * The uncertainty distribution type
   */
  'distributionType'?: (_protolca_ProtoUncertaintyType);
  /**
   * The arithmetic mean (used for normal distributions).
   */
  'mean'?: (number);
  /**
   * A mathematical formula for the arithmetic mean.
   */
  'meanFormula'?: (string);
  /**
   * The geometric mean value (used for log-normal distributions).
   */
  'geomMean'?: (number);
  /**
   * A mathematical formula for the geometric mean.
   */
  'geomMeanFormula'?: (string);
  /**
   * The minimum value (used for uniform and triangle distributions).
   */
  'minimum'?: (number);
  /**
   * A mathematical formula for the minimum value.
   */
  'minimumFormula'?: (string);
  /**
   * The arithmetic standard deviation (used for normal distributions).
   */
  'sd'?: (number);
  /**
   * A mathematical formula for the arithmetic standard deviation.
   */
  'sdFormula'?: (string);
  /**
   * The geometric standard deviation (used for log-normal distributions).
   */
  'geomSd'?: (number);
  /**
   * A mathematical formula for the geometric standard deviation.
   */
  'geomSdFormula'?: (string);
  /**
   * The most likely value (used for triangle distributions).
   */
  'mode'?: (number);
  /**
   * A mathematical formula for the most likely value.
   */
  'modeFormula'?: (string);
  /**
   * The maximum value (used for uniform and triangle distributions).
   */
  'maximum'?: (number);
  /**
   * A mathematical formula for the maximum value.
   */
  'maximumFormula'?: (string);
}
