// Original file: ../olca-proto/proto/olca.proto

import type { ProtoCalculationType as _protolca_ProtoCalculationType } from '../protolca/ProtoCalculationType';
import type { ProtoRef as _protolca_ProtoRef, ProtoRef__Output as _protolca_ProtoRef__Output } from '../protolca/ProtoRef';
import type { ProtoParameterRedef as _protolca_ProtoParameterRedef, ProtoParameterRedef__Output as _protolca_ProtoParameterRedef__Output } from '../protolca/ProtoParameterRedef';
import type { ProtoAllocationType as _protolca_ProtoAllocationType } from '../protolca/ProtoAllocationType';

/**
 * A setup for a product system calculation.
 */
export interface ProtoCalculationSetup {
  /**
   * The type of calculation that should be performed.
   */
  'calculationType'?: (_protolca_ProtoCalculationType | keyof typeof _protolca_ProtoCalculationType);
  /**
   * The product system that should be calculated.
   */
  'productSystem'?: (_protolca_ProtoRef | null);
  /**
   * The process that should be calculated.
   */
  'process'?: (_protolca_ProtoRef | null);
  /**
   * The LCIA method for the calculation.
   */
  'impactMethod'?: (_protolca_ProtoRef | null);
  /**
   * The normalisation and weighting set for the calculation.
   */
  'nwSet'?: (_protolca_ProtoRef | null);
  /**
   * A list of parameter redefinitions that should be used in the calculation.
   */
  'parameters'?: (_protolca_ProtoParameterRedef)[];
  /**
   * The calculation type to be used in the calculation.
   */
  'allocation'?: (_protolca_ProtoAllocationType | keyof typeof _protolca_ProtoAllocationType);
  /**
   * Indicates whether life cycle costs should be also calculated.
   */
  'withCosts'?: (boolean);
  /**
   * Indicates whether a regionalized result should be calculated or not.
   */
  'withRegionalization'?: (boolean);
  'unit'?: (_protolca_ProtoRef | null);
  'amount'?: (number | string);
  'flowProperty'?: (_protolca_ProtoRef | null);
  /**
   * This field is only valid when this setup describes a Monte Carlo
   * simulation and contains the number of simulation runs in that case.
   */
  'numberOfRuns'?: (number);
}

/**
 * A setup for a product system calculation.
 */
export interface ProtoCalculationSetup__Output {
  /**
   * The type of calculation that should be performed.
   */
  'calculationType'?: (_protolca_ProtoCalculationType);
  /**
   * The product system that should be calculated.
   */
  'productSystem'?: (_protolca_ProtoRef__Output);
  /**
   * The process that should be calculated.
   */
  'process'?: (_protolca_ProtoRef__Output);
  /**
   * The LCIA method for the calculation.
   */
  'impactMethod'?: (_protolca_ProtoRef__Output);
  /**
   * The normalisation and weighting set for the calculation.
   */
  'nwSet'?: (_protolca_ProtoRef__Output);
  /**
   * A list of parameter redefinitions that should be used in the calculation.
   */
  'parameters'?: (_protolca_ProtoParameterRedef__Output)[];
  /**
   * The calculation type to be used in the calculation.
   */
  'allocation'?: (_protolca_ProtoAllocationType);
  /**
   * Indicates whether life cycle costs should be also calculated.
   */
  'withCosts'?: (boolean);
  /**
   * Indicates whether a regionalized result should be calculated or not.
   */
  'withRegionalization'?: (boolean);
  'unit'?: (_protolca_ProtoRef__Output);
  'amount'?: (number);
  'flowProperty'?: (_protolca_ProtoRef__Output);
  /**
   * This field is only valid when this setup describes a Monte Carlo
   * simulation and contains the number of simulation runs in that case.
   */
  'numberOfRuns'?: (number);
}
