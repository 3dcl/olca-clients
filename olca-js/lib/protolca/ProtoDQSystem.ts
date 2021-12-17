// Original file: ../olca-proto/proto/olca.proto

import type { ProtoType as _protolca_ProtoType } from '../protolca/ProtoType';
import type { ProtoRef as _protolca_ProtoRef, ProtoRef__Output as _protolca_ProtoRef__Output } from '../protolca/ProtoRef';
import type { ProtoDQIndicator as _protolca_ProtoDQIndicator, ProtoDQIndicator__Output as _protolca_ProtoDQIndicator__Output } from '../protolca/ProtoDQIndicator';

/**
 * A data quality system (DQS) in openLCA describes a pedigree matrix of $m$
 * data quality indicators (DQIs) and $n$ data quality scores (DQ scores). Such
 * a system can then be used to assess the data quality of processes and
 * exchanges by tagging them with an instance of the system $D$ where $D$ is a
 * $m * n$ matrix with an entry $d_{ij}$ containing the value of the data
 * quality score $j$ for indicator $i$. As each indicator in $D$ can only have
 * a single score value, $D$ can be stored in a vector $d$ where $d_i$ contains
 * the data quality score for indicator $i$. The possible values of the data
 * quality scores are defined as a linear order $1 \dots n$. In openLCA, the
 * data quality entry $d$ of a process or exchange is stored as a string like
 * `(3;2;4;n.a.;2)` which means the data quality score for the first indicator
 * is `3`, for the second `2` etc. A specific value is `n.a.` which stands for
 * _not applicable_. In calculations, these data quality entries can be
 * aggregated in different ways. For example, the data quality entry of a flow
 * $f$ with a contribution of `0.5 kg` and a data quality entry of
 * `(3;2;4;n.a.;2)` in a process $p$ and a contribution of `1.5 kg` and a data
 * quality entry of `(2;3;1;n.a.;5)` in a process $q$ could be aggregated to
 * `(2;3;2;n.a.;4)` by applying an weighted average and rounding. Finally,
 * custom labels like `A, B, C, ...` or `Very good, Good, Fair, ...` for the DQ
 * scores can be assigned by the user. These labels are then displayed instead
 * of `1, 2, 3 ...` in the user interface or result exports. However,
 * internally the numeric values are used in the data model and calculations.
 */
export interface ProtoDQSystem {
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
   * The type name of the respective entity.
   */
  'type'?: (_protolca_ProtoType | keyof typeof _protolca_ProtoType);
  /**
   * The category of the entity.
   */
  'category'?: (_protolca_ProtoRef | null);
  /**
   * A list of optional tags. A tag is just a string which should not contain
   * commas (and other special characters).
   */
  'tags'?: (string)[];
  /**
   * If this entity is part of a library, this field contains the identifier of
   * that library. The identifier is typically just the combination of the
   * library name and version.
   */
  'library'?: (string);
  'hasUncertainties'?: (boolean);
  'source'?: (_protolca_ProtoRef | null);
  'indicators'?: (_protolca_ProtoDQIndicator)[];
}

/**
 * A data quality system (DQS) in openLCA describes a pedigree matrix of $m$
 * data quality indicators (DQIs) and $n$ data quality scores (DQ scores). Such
 * a system can then be used to assess the data quality of processes and
 * exchanges by tagging them with an instance of the system $D$ where $D$ is a
 * $m * n$ matrix with an entry $d_{ij}$ containing the value of the data
 * quality score $j$ for indicator $i$. As each indicator in $D$ can only have
 * a single score value, $D$ can be stored in a vector $d$ where $d_i$ contains
 * the data quality score for indicator $i$. The possible values of the data
 * quality scores are defined as a linear order $1 \dots n$. In openLCA, the
 * data quality entry $d$ of a process or exchange is stored as a string like
 * `(3;2;4;n.a.;2)` which means the data quality score for the first indicator
 * is `3`, for the second `2` etc. A specific value is `n.a.` which stands for
 * _not applicable_. In calculations, these data quality entries can be
 * aggregated in different ways. For example, the data quality entry of a flow
 * $f$ with a contribution of `0.5 kg` and a data quality entry of
 * `(3;2;4;n.a.;2)` in a process $p$ and a contribution of `1.5 kg` and a data
 * quality entry of `(2;3;1;n.a.;5)` in a process $q$ could be aggregated to
 * `(2;3;2;n.a.;4)` by applying an weighted average and rounding. Finally,
 * custom labels like `A, B, C, ...` or `Very good, Good, Fair, ...` for the DQ
 * scores can be assigned by the user. These labels are then displayed instead
 * of `1, 2, 3 ...` in the user interface or result exports. However,
 * internally the numeric values are used in the data model and calculations.
 */
export interface ProtoDQSystem__Output {
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
   * The type name of the respective entity.
   */
  'type'?: (_protolca_ProtoType);
  /**
   * The category of the entity.
   */
  'category'?: (_protolca_ProtoRef__Output);
  /**
   * A list of optional tags. A tag is just a string which should not contain
   * commas (and other special characters).
   */
  'tags'?: (string)[];
  /**
   * If this entity is part of a library, this field contains the identifier of
   * that library. The identifier is typically just the combination of the
   * library name and version.
   */
  'library'?: (string);
  'hasUncertainties'?: (boolean);
  'source'?: (_protolca_ProtoRef__Output);
  'indicators'?: (_protolca_ProtoDQIndicator__Output)[];
}
