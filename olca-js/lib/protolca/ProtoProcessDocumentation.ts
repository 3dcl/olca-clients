// Original file: ../olca-proto/proto/olca.proto

import type { ProtoRef as _protolca_ProtoRef, ProtoRef__Output as _protolca_ProtoRef__Output } from '../protolca/ProtoRef';

export interface ProtoProcessDocumentation {
  'timeDescription'?: (string);
  'validUntil'?: (string);
  'validFrom'?: (string);
  'technologyDescription'?: (string);
  'dataCollectionDescription'?: (string);
  'completenessDescription'?: (string);
  'dataSelectionDescription'?: (string);
  'reviewDetails'?: (string);
  'dataTreatmentDescription'?: (string);
  'inventoryMethodDescription'?: (string);
  'modelingConstantsDescription'?: (string);
  'reviewer'?: (_protolca_ProtoRef | null);
  'samplingDescription'?: (string);
  'sources'?: (_protolca_ProtoRef)[];
  'restrictionsDescription'?: (string);
  'copyright'?: (boolean);
  'creationDate'?: (string);
  'dataDocumentor'?: (_protolca_ProtoRef | null);
  'dataGenerator'?: (_protolca_ProtoRef | null);
  'dataSetOwner'?: (_protolca_ProtoRef | null);
  'intendedApplication'?: (string);
  'projectDescription'?: (string);
  'publication'?: (_protolca_ProtoRef | null);
  'geographyDescription'?: (string);
}

export interface ProtoProcessDocumentation__Output {
  'timeDescription'?: (string);
  'validUntil'?: (string);
  'validFrom'?: (string);
  'technologyDescription'?: (string);
  'dataCollectionDescription'?: (string);
  'completenessDescription'?: (string);
  'dataSelectionDescription'?: (string);
  'reviewDetails'?: (string);
  'dataTreatmentDescription'?: (string);
  'inventoryMethodDescription'?: (string);
  'modelingConstantsDescription'?: (string);
  'reviewer'?: (_protolca_ProtoRef__Output);
  'samplingDescription'?: (string);
  'sources'?: (_protolca_ProtoRef__Output)[];
  'restrictionsDescription'?: (string);
  'copyright'?: (boolean);
  'creationDate'?: (string);
  'dataDocumentor'?: (_protolca_ProtoRef__Output);
  'dataGenerator'?: (_protolca_ProtoRef__Output);
  'dataSetOwner'?: (_protolca_ProtoRef__Output);
  'intendedApplication'?: (string);
  'projectDescription'?: (string);
  'publication'?: (_protolca_ProtoRef__Output);
  'geographyDescription'?: (string);
}
