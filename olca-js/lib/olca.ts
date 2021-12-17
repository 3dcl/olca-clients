import type * as grpc from '@grpc/grpc-js';
import type { EnumTypeDefinition, MessageTypeDefinition } from '@grpc/proto-loader';


type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
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
  }
}

