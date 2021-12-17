import type * as grpc from '@grpc/grpc-js';
import type { EnumTypeDefinition, MessageTypeDefinition } from '@grpc/proto-loader';

import type { ResultServiceClient as _protolca_services_ResultServiceClient, ResultServiceDefinition as _protolca_services_ResultServiceDefinition } from './protolca/services/ResultService';

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
    ProtoActor: MessageTypeDefinition
    ProtoAllocationFactor: MessageTypeDefinition
    ProtoAllocationType: EnumTypeDefinition
    ProtoCalculationSetup: MessageTypeDefinition
    ProtoCalculationType: EnumTypeDefinition
    ProtoCategory: MessageTypeDefinition
    ProtoCategoryType: EnumTypeDefinition
    ProtoCurrency: MessageTypeDefinition
    ProtoDQIndicator: MessageTypeDefinition
    ProtoDQScore: MessageTypeDefinition
    ProtoDQSystem: MessageTypeDefinition
    ProtoExchange: MessageTypeDefinition
    ProtoExchangeRef: MessageTypeDefinition
    ProtoFlow: MessageTypeDefinition
    ProtoFlowMap: MessageTypeDefinition
    ProtoFlowMapEntry: MessageTypeDefinition
    ProtoFlowMapRef: MessageTypeDefinition
    ProtoFlowProperty: MessageTypeDefinition
    ProtoFlowPropertyFactor: MessageTypeDefinition
    ProtoFlowPropertyType: EnumTypeDefinition
    ProtoFlowResult: MessageTypeDefinition
    ProtoFlowType: EnumTypeDefinition
    ProtoImpactCategory: MessageTypeDefinition
    ProtoImpactFactor: MessageTypeDefinition
    ProtoImpactMethod: MessageTypeDefinition
    ProtoImpactResult: MessageTypeDefinition
    ProtoLocation: MessageTypeDefinition
    ProtoNwFactor: MessageTypeDefinition
    ProtoNwSet: MessageTypeDefinition
    ProtoParameter: MessageTypeDefinition
    ProtoParameterRedef: MessageTypeDefinition
    ProtoParameterRedefSet: MessageTypeDefinition
    ProtoParameterScope: EnumTypeDefinition
    ProtoProcess: MessageTypeDefinition
    ProtoProcessDocumentation: MessageTypeDefinition
    ProtoProcessLink: MessageTypeDefinition
    ProtoProcessType: EnumTypeDefinition
    ProtoProductSystem: MessageTypeDefinition
    ProtoProject: MessageTypeDefinition
    ProtoRef: MessageTypeDefinition
    ProtoRiskLevel: EnumTypeDefinition
    ProtoSimpleResult: MessageTypeDefinition
    ProtoSocialAspect: MessageTypeDefinition
    ProtoSocialIndicator: MessageTypeDefinition
    ProtoSource: MessageTypeDefinition
    ProtoType: EnumTypeDefinition
    ProtoUncertainty: MessageTypeDefinition
    ProtoUncertaintyType: EnumTypeDefinition
    ProtoUnit: MessageTypeDefinition
    ProtoUnitGroup: MessageTypeDefinition
    services: {
      ImpactFactorRequest: MessageTypeDefinition
      ImpactFactorResponse: MessageTypeDefinition
      ProtoDataSet: MessageTypeDefinition
      ProtoEnviFlow: MessageTypeDefinition
      ProtoResultRef: MessageTypeDefinition
      ProtoTechFlow: MessageTypeDefinition
      ResultService: SubtypeConstructor<typeof grpc.Client, _protolca_services_ResultServiceClient> & { service: _protolca_services_ResultServiceDefinition }
      ResultValue: MessageTypeDefinition
      TechFlowContributionRequest: MessageTypeDefinition
    }
  }
}

