// Original file: ../olca-proto/proto/olca.proto

import type { ProtoType as _protolca_ProtoType } from '../protolca/ProtoType';
import type { ProtoRef as _protolca_ProtoRef, ProtoRef__Output as _protolca_ProtoRef__Output } from '../protolca/ProtoRef';
import type { ProtoAllocationFactor as _protolca_ProtoAllocationFactor, ProtoAllocationFactor__Output as _protolca_ProtoAllocationFactor__Output } from '../protolca/ProtoAllocationFactor';
import type { ProtoAllocationType as _protolca_ProtoAllocationType } from '../protolca/ProtoAllocationType';
import type { ProtoExchange as _protolca_ProtoExchange, ProtoExchange__Output as _protolca_ProtoExchange__Output } from '../protolca/ProtoExchange';
import type { ProtoParameter as _protolca_ProtoParameter, ProtoParameter__Output as _protolca_ProtoParameter__Output } from '../protolca/ProtoParameter';
import type { ProtoProcessDocumentation as _protolca_ProtoProcessDocumentation, ProtoProcessDocumentation__Output as _protolca_ProtoProcessDocumentation__Output } from '../protolca/ProtoProcessDocumentation';
import type { ProtoProcessType as _protolca_ProtoProcessType } from '../protolca/ProtoProcessType';
import type { ProtoSocialAspect as _protolca_ProtoSocialAspect, ProtoSocialAspect__Output as _protolca_ProtoSocialAspect__Output } from '../protolca/ProtoSocialAspect';

export interface ProtoProcess {
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
  'allocationFactors'?: (_protolca_ProtoAllocationFactor)[];
  'defaultAllocationMethod'?: (_protolca_ProtoAllocationType | keyof typeof _protolca_ProtoAllocationType);
  /**
   * The inputs and outputs of the process.
   */
  'exchanges'?: (_protolca_ProtoExchange)[];
  /**
   * This field holds the last internal ID that was used in an exchange (which
   * may have been deleted, so it can be larger than the largest internal ID of
   * the exchanges of the process.) The internal ID of an exchange is used to
   * identify exchanges within a process (for updates, data exchanges (see
   * process links), etc.). When you add an exchange to a process, you should
   * increment this field in the process and set the resulting value as the
   * internal ID of that exchange. The sequence of internal IDs should start
   * with `1`.
   */
  'lastInternalId'?: (number);
  /**
   * The location of the process.
   */
  'location'?: (_protolca_ProtoRef | null);
  'parameters'?: (_protolca_ProtoParameter)[];
  'processDocumentation'?: (_protolca_ProtoProcessDocumentation | null);
  'processType'?: (_protolca_ProtoProcessType | keyof typeof _protolca_ProtoProcessType);
  /**
   * A reference to a data quality system ([DQSystem]) with which the overall
   * quality of the process can be assessed.
   */
  'dqSystem'?: (_protolca_ProtoRef | null);
  /**
   * A reference to a data quality system ([DQSystem]) with which the quality
   * of individual inputs and outputs ([Exchange]s) of the process can be
   * assessed.
   */
  'exchangeDqSystem'?: (_protolca_ProtoRef | null);
  /**
   * A reference to a data quality system ([DQSystem]) with which the quality
   * of individual social aspects of the process can be assessed.
   */
  'socialDqSystem'?: (_protolca_ProtoRef | null);
  /**
   * A data quality entry like `(1;3;2;5;1)`. The entry is a vector of data
   * quality values that need to match the overall data quality system of the
   * process (the system that is stored in the `dqSystem` property). In such a
   * system the data quality indicators have fixed positions and the respective
   * values in the `dqEntry` vector map to these positions.
   */
  'dqEntry'?: (string);
  /**
   * Indicates whether this process describes an infrastructure process. This
   * field is part of the openLCA schema because of backward compatibility with
   * EcoSpold 1. It does not really have a meaning in openLCA and should not be
   * used anymore.
   */
  'infrastructureProcess'?: (boolean);
  /**
   * A set of social aspects related to this process.
   */
  'socialAspects'?: (_protolca_ProtoSocialAspect)[];
}

export interface ProtoProcess__Output {
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
  'allocationFactors'?: (_protolca_ProtoAllocationFactor__Output)[];
  'defaultAllocationMethod'?: (_protolca_ProtoAllocationType);
  /**
   * The inputs and outputs of the process.
   */
  'exchanges'?: (_protolca_ProtoExchange__Output)[];
  /**
   * This field holds the last internal ID that was used in an exchange (which
   * may have been deleted, so it can be larger than the largest internal ID of
   * the exchanges of the process.) The internal ID of an exchange is used to
   * identify exchanges within a process (for updates, data exchanges (see
   * process links), etc.). When you add an exchange to a process, you should
   * increment this field in the process and set the resulting value as the
   * internal ID of that exchange. The sequence of internal IDs should start
   * with `1`.
   */
  'lastInternalId'?: (number);
  /**
   * The location of the process.
   */
  'location'?: (_protolca_ProtoRef__Output);
  'parameters'?: (_protolca_ProtoParameter__Output)[];
  'processDocumentation'?: (_protolca_ProtoProcessDocumentation__Output);
  'processType'?: (_protolca_ProtoProcessType);
  /**
   * A reference to a data quality system ([DQSystem]) with which the overall
   * quality of the process can be assessed.
   */
  'dqSystem'?: (_protolca_ProtoRef__Output);
  /**
   * A reference to a data quality system ([DQSystem]) with which the quality
   * of individual inputs and outputs ([Exchange]s) of the process can be
   * assessed.
   */
  'exchangeDqSystem'?: (_protolca_ProtoRef__Output);
  /**
   * A reference to a data quality system ([DQSystem]) with which the quality
   * of individual social aspects of the process can be assessed.
   */
  'socialDqSystem'?: (_protolca_ProtoRef__Output);
  /**
   * A data quality entry like `(1;3;2;5;1)`. The entry is a vector of data
   * quality values that need to match the overall data quality system of the
   * process (the system that is stored in the `dqSystem` property). In such a
   * system the data quality indicators have fixed positions and the respective
   * values in the `dqEntry` vector map to these positions.
   */
  'dqEntry'?: (string);
  /**
   * Indicates whether this process describes an infrastructure process. This
   * field is part of the openLCA schema because of backward compatibility with
   * EcoSpold 1. It does not really have a meaning in openLCA and should not be
   * used anymore.
   */
  'infrastructureProcess'?: (boolean);
  /**
   * A set of social aspects related to this process.
   */
  'socialAspects'?: (_protolca_ProtoSocialAspect__Output)[];
}
