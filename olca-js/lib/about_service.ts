import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { AboutServiceClient as _protolca_services_AboutServiceClient, AboutServiceDefinition as _protolca_services_AboutServiceDefinition } from './protolca/services/AboutService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  google: {
    protobuf: {
      Empty: MessageTypeDefinition
    }
  }
  protolca: {
    services: {
      AboutResponse: MessageTypeDefinition
      /**
       * This service gives some general information of the service
       * interface.
       */
      AboutService: SubtypeConstructor<typeof grpc.Client, _protolca_services_AboutServiceClient> & { service: _protolca_services_AboutServiceDefinition }
    }
  }
}

