// Original file: ../olca-proto/proto/result_service.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { Empty as _google_protobuf_Empty, Empty__Output as _google_protobuf_Empty__Output } from '../../google/protobuf/Empty';
import type { ImpactFactorRequest as _protolca_services_ImpactFactorRequest, ImpactFactorRequest__Output as _protolca_services_ImpactFactorRequest__Output } from '../../protolca/services/ImpactFactorRequest';
import type { ImpactFactorResponse as _protolca_services_ImpactFactorResponse, ImpactFactorResponse__Output as _protolca_services_ImpactFactorResponse__Output } from '../../protolca/services/ImpactFactorResponse';
import type { ProtoCalculationSetup as _protolca_ProtoCalculationSetup, ProtoCalculationSetup__Output as _protolca_ProtoCalculationSetup__Output } from '../../protolca/ProtoCalculationSetup';
import type { ProtoEnviFlow as _protolca_services_ProtoEnviFlow, ProtoEnviFlow__Output as _protolca_services_ProtoEnviFlow__Output } from '../../protolca/services/ProtoEnviFlow';
import type { ProtoRef as _protolca_ProtoRef, ProtoRef__Output as _protolca_ProtoRef__Output } from '../../protolca/ProtoRef';
import type { ProtoResultRef as _protolca_services_ProtoResultRef, ProtoResultRef__Output as _protolca_services_ProtoResultRef__Output } from '../../protolca/services/ProtoResultRef';
import type { ProtoTechFlow as _protolca_services_ProtoTechFlow, ProtoTechFlow__Output as _protolca_services_ProtoTechFlow__Output } from '../../protolca/services/ProtoTechFlow';
import type { ResultValue as _protolca_services_ResultValue, ResultValue__Output as _protolca_services_ResultValue__Output } from '../../protolca/services/ResultValue';
import type { TechFlowContributionRequest as _protolca_services_TechFlowContributionRequest, TechFlowContributionRequest__Output as _protolca_services_TechFlowContributionRequest__Output } from '../../protolca/services/TechFlowContributionRequest';

export interface ResultServiceClient extends grpc.Client {
  /**
   * Calculates a result for the given calculation setup.
   */
  Calculate(argument: _protolca_ProtoCalculationSetup, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_protolca_services_ProtoResultRef__Output>): grpc.ClientUnaryCall;
  Calculate(argument: _protolca_ProtoCalculationSetup, metadata: grpc.Metadata, callback: grpc.requestCallback<_protolca_services_ProtoResultRef__Output>): grpc.ClientUnaryCall;
  Calculate(argument: _protolca_ProtoCalculationSetup, options: grpc.CallOptions, callback: grpc.requestCallback<_protolca_services_ProtoResultRef__Output>): grpc.ClientUnaryCall;
  Calculate(argument: _protolca_ProtoCalculationSetup, callback: grpc.requestCallback<_protolca_services_ProtoResultRef__Output>): grpc.ClientUnaryCall;
  /**
   * Calculates a result for the given calculation setup.
   */
  calculate(argument: _protolca_ProtoCalculationSetup, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_protolca_services_ProtoResultRef__Output>): grpc.ClientUnaryCall;
  calculate(argument: _protolca_ProtoCalculationSetup, metadata: grpc.Metadata, callback: grpc.requestCallback<_protolca_services_ProtoResultRef__Output>): grpc.ClientUnaryCall;
  calculate(argument: _protolca_ProtoCalculationSetup, options: grpc.CallOptions, callback: grpc.requestCallback<_protolca_services_ProtoResultRef__Output>): grpc.ClientUnaryCall;
  calculate(argument: _protolca_ProtoCalculationSetup, callback: grpc.requestCallback<_protolca_services_ProtoResultRef__Output>): grpc.ClientUnaryCall;
  
  /**
   * Disposes the given result on the server side.
   */
  Dispose(argument: _protolca_services_ProtoResultRef, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  Dispose(argument: _protolca_services_ProtoResultRef, metadata: grpc.Metadata, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  Dispose(argument: _protolca_services_ProtoResultRef, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  Dispose(argument: _protolca_services_ProtoResultRef, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  /**
   * Disposes the given result on the server side.
   */
  dispose(argument: _protolca_services_ProtoResultRef, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  dispose(argument: _protolca_services_ProtoResultRef, metadata: grpc.Metadata, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  dispose(argument: _protolca_services_ProtoResultRef, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  dispose(argument: _protolca_services_ProtoResultRef, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  
  /**
   * Get the direct contribution of a TechFlow to a flow, impact, or cost
   * result. 'Direct' means that this is only the contribution that is
   * directly associated with the production of a product or treatment of
   * a waste flow excluding contributions of upstream and downstream processes.
   */
  GetDirectContribution(argument: _protolca_services_TechFlowContributionRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_protolca_services_ResultValue__Output>): grpc.ClientUnaryCall;
  GetDirectContribution(argument: _protolca_services_TechFlowContributionRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_protolca_services_ResultValue__Output>): grpc.ClientUnaryCall;
  GetDirectContribution(argument: _protolca_services_TechFlowContributionRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_protolca_services_ResultValue__Output>): grpc.ClientUnaryCall;
  GetDirectContribution(argument: _protolca_services_TechFlowContributionRequest, callback: grpc.requestCallback<_protolca_services_ResultValue__Output>): grpc.ClientUnaryCall;
  /**
   * Get the direct contribution of a TechFlow to a flow, impact, or cost
   * result. 'Direct' means that this is only the contribution that is
   * directly associated with the production of a product or treatment of
   * a waste flow excluding contributions of upstream and downstream processes.
   */
  getDirectContribution(argument: _protolca_services_TechFlowContributionRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_protolca_services_ResultValue__Output>): grpc.ClientUnaryCall;
  getDirectContribution(argument: _protolca_services_TechFlowContributionRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_protolca_services_ResultValue__Output>): grpc.ClientUnaryCall;
  getDirectContribution(argument: _protolca_services_TechFlowContributionRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_protolca_services_ResultValue__Output>): grpc.ClientUnaryCall;
  getDirectContribution(argument: _protolca_services_TechFlowContributionRequest, callback: grpc.requestCallback<_protolca_services_ResultValue__Output>): grpc.ClientUnaryCall;
  
  /**
   * Get the environmental flows of the given result.
   */
  GetEnviFlows(argument: _protolca_services_ProtoResultRef, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_protolca_services_ProtoEnviFlow__Output>;
  GetEnviFlows(argument: _protolca_services_ProtoResultRef, options?: grpc.CallOptions): grpc.ClientReadableStream<_protolca_services_ProtoEnviFlow__Output>;
  /**
   * Get the environmental flows of the given result.
   */
  getEnviFlows(argument: _protolca_services_ProtoResultRef, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_protolca_services_ProtoEnviFlow__Output>;
  getEnviFlows(argument: _protolca_services_ProtoResultRef, options?: grpc.CallOptions): grpc.ClientReadableStream<_protolca_services_ProtoEnviFlow__Output>;
  
  /**
   * Get the impact categories of the given result.
   */
  GetImpactCategories(argument: _protolca_services_ProtoResultRef, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_protolca_ProtoRef__Output>;
  GetImpactCategories(argument: _protolca_services_ProtoResultRef, options?: grpc.CallOptions): grpc.ClientReadableStream<_protolca_ProtoRef__Output>;
  /**
   * Get the impact categories of the given result.
   */
  getImpactCategories(argument: _protolca_services_ProtoResultRef, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_protolca_ProtoRef__Output>;
  getImpactCategories(argument: _protolca_services_ProtoResultRef, options?: grpc.CallOptions): grpc.ClientReadableStream<_protolca_ProtoRef__Output>;
  
  /**
   * Get the used impact factors of a result. The request can be for:
   * 
   * * an indicator: returns the non-zero factors of that indicator
   * * a flow: returns the factors of that flow for all indicators (including
   * zero values)
   * * an indicator and flow: returns the factor for that flow which may be zero
   * 
   * Nothing is returned if no indicator and flow is given or if the result does
   * not have an impact assessment result.
   */
  GetImpactFactors(argument: _protolca_services_ImpactFactorRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_protolca_services_ImpactFactorResponse__Output>;
  GetImpactFactors(argument: _protolca_services_ImpactFactorRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_protolca_services_ImpactFactorResponse__Output>;
  /**
   * Get the used impact factors of a result. The request can be for:
   * 
   * * an indicator: returns the non-zero factors of that indicator
   * * a flow: returns the factors of that flow for all indicators (including
   * zero values)
   * * an indicator and flow: returns the factor for that flow which may be zero
   * 
   * Nothing is returned if no indicator and flow is given or if the result does
   * not have an impact assessment result.
   */
  getImpactFactors(argument: _protolca_services_ImpactFactorRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_protolca_services_ImpactFactorResponse__Output>;
  getImpactFactors(argument: _protolca_services_ImpactFactorRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_protolca_services_ImpactFactorResponse__Output>;
  
  /**
   * Get all technosphere flows of the underlying product system of the given
   * result.
   */
  GetTechFlows(argument: _protolca_services_ProtoResultRef, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_protolca_services_ProtoTechFlow__Output>;
  GetTechFlows(argument: _protolca_services_ProtoResultRef, options?: grpc.CallOptions): grpc.ClientReadableStream<_protolca_services_ProtoTechFlow__Output>;
  /**
   * Get all technosphere flows of the underlying product system of the given
   * result.
   */
  getTechFlows(argument: _protolca_services_ProtoResultRef, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_protolca_services_ProtoTechFlow__Output>;
  getTechFlows(argument: _protolca_services_ProtoResultRef, options?: grpc.CallOptions): grpc.ClientReadableStream<_protolca_services_ProtoTechFlow__Output>;
  
  GetTotalContribution(argument: _protolca_services_TechFlowContributionRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_protolca_services_ResultValue__Output>): grpc.ClientUnaryCall;
  GetTotalContribution(argument: _protolca_services_TechFlowContributionRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_protolca_services_ResultValue__Output>): grpc.ClientUnaryCall;
  GetTotalContribution(argument: _protolca_services_TechFlowContributionRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_protolca_services_ResultValue__Output>): grpc.ClientUnaryCall;
  GetTotalContribution(argument: _protolca_services_TechFlowContributionRequest, callback: grpc.requestCallback<_protolca_services_ResultValue__Output>): grpc.ClientUnaryCall;
  getTotalContribution(argument: _protolca_services_TechFlowContributionRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_protolca_services_ResultValue__Output>): grpc.ClientUnaryCall;
  getTotalContribution(argument: _protolca_services_TechFlowContributionRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_protolca_services_ResultValue__Output>): grpc.ClientUnaryCall;
  getTotalContribution(argument: _protolca_services_TechFlowContributionRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_protolca_services_ResultValue__Output>): grpc.ClientUnaryCall;
  getTotalContribution(argument: _protolca_services_TechFlowContributionRequest, callback: grpc.requestCallback<_protolca_services_ResultValue__Output>): grpc.ClientUnaryCall;
  
  GetTotalContributionOfOne(argument: _protolca_services_TechFlowContributionRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_protolca_services_ResultValue__Output>): grpc.ClientUnaryCall;
  GetTotalContributionOfOne(argument: _protolca_services_TechFlowContributionRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_protolca_services_ResultValue__Output>): grpc.ClientUnaryCall;
  GetTotalContributionOfOne(argument: _protolca_services_TechFlowContributionRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_protolca_services_ResultValue__Output>): grpc.ClientUnaryCall;
  GetTotalContributionOfOne(argument: _protolca_services_TechFlowContributionRequest, callback: grpc.requestCallback<_protolca_services_ResultValue__Output>): grpc.ClientUnaryCall;
  getTotalContributionOfOne(argument: _protolca_services_TechFlowContributionRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_protolca_services_ResultValue__Output>): grpc.ClientUnaryCall;
  getTotalContributionOfOne(argument: _protolca_services_TechFlowContributionRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_protolca_services_ResultValue__Output>): grpc.ClientUnaryCall;
  getTotalContributionOfOne(argument: _protolca_services_TechFlowContributionRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_protolca_services_ResultValue__Output>): grpc.ClientUnaryCall;
  getTotalContributionOfOne(argument: _protolca_services_TechFlowContributionRequest, callback: grpc.requestCallback<_protolca_services_ResultValue__Output>): grpc.ClientUnaryCall;
  
  /**
   * Get the total impact assessment result of the given result.
   */
  GetTotalImpacts(argument: _protolca_services_ProtoResultRef, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_protolca_services_ResultValue__Output>;
  GetTotalImpacts(argument: _protolca_services_ProtoResultRef, options?: grpc.CallOptions): grpc.ClientReadableStream<_protolca_services_ResultValue__Output>;
  /**
   * Get the total impact assessment result of the given result.
   */
  getTotalImpacts(argument: _protolca_services_ProtoResultRef, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_protolca_services_ResultValue__Output>;
  getTotalImpacts(argument: _protolca_services_ProtoResultRef, options?: grpc.CallOptions): grpc.ClientReadableStream<_protolca_services_ResultValue__Output>;
  
  /**
   * Get the inventory of the given result.
   */
  GetTotalInventory(argument: _protolca_services_ProtoResultRef, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_protolca_services_ResultValue__Output>;
  GetTotalInventory(argument: _protolca_services_ProtoResultRef, options?: grpc.CallOptions): grpc.ClientReadableStream<_protolca_services_ResultValue__Output>;
  /**
   * Get the inventory of the given result.
   */
  getTotalInventory(argument: _protolca_services_ProtoResultRef, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_protolca_services_ResultValue__Output>;
  getTotalInventory(argument: _protolca_services_ProtoResultRef, options?: grpc.CallOptions): grpc.ClientReadableStream<_protolca_services_ResultValue__Output>;
  
}

export interface ResultServiceHandlers extends grpc.UntypedServiceImplementation {
  /**
   * Calculates a result for the given calculation setup.
   */
  Calculate: grpc.handleUnaryCall<_protolca_ProtoCalculationSetup__Output, _protolca_services_ProtoResultRef>;
  
  /**
   * Disposes the given result on the server side.
   */
  Dispose: grpc.handleUnaryCall<_protolca_services_ProtoResultRef__Output, _google_protobuf_Empty>;
  
  /**
   * Get the direct contribution of a TechFlow to a flow, impact, or cost
   * result. 'Direct' means that this is only the contribution that is
   * directly associated with the production of a product or treatment of
   * a waste flow excluding contributions of upstream and downstream processes.
   */
  GetDirectContribution: grpc.handleUnaryCall<_protolca_services_TechFlowContributionRequest__Output, _protolca_services_ResultValue>;
  
  /**
   * Get the environmental flows of the given result.
   */
  GetEnviFlows: grpc.handleServerStreamingCall<_protolca_services_ProtoResultRef__Output, _protolca_services_ProtoEnviFlow>;
  
  /**
   * Get the impact categories of the given result.
   */
  GetImpactCategories: grpc.handleServerStreamingCall<_protolca_services_ProtoResultRef__Output, _protolca_ProtoRef>;
  
  /**
   * Get the used impact factors of a result. The request can be for:
   * 
   * * an indicator: returns the non-zero factors of that indicator
   * * a flow: returns the factors of that flow for all indicators (including
   * zero values)
   * * an indicator and flow: returns the factor for that flow which may be zero
   * 
   * Nothing is returned if no indicator and flow is given or if the result does
   * not have an impact assessment result.
   */
  GetImpactFactors: grpc.handleServerStreamingCall<_protolca_services_ImpactFactorRequest__Output, _protolca_services_ImpactFactorResponse>;
  
  /**
   * Get all technosphere flows of the underlying product system of the given
   * result.
   */
  GetTechFlows: grpc.handleServerStreamingCall<_protolca_services_ProtoResultRef__Output, _protolca_services_ProtoTechFlow>;
  
  GetTotalContribution: grpc.handleUnaryCall<_protolca_services_TechFlowContributionRequest__Output, _protolca_services_ResultValue>;
  
  GetTotalContributionOfOne: grpc.handleUnaryCall<_protolca_services_TechFlowContributionRequest__Output, _protolca_services_ResultValue>;
  
  /**
   * Get the total impact assessment result of the given result.
   */
  GetTotalImpacts: grpc.handleServerStreamingCall<_protolca_services_ProtoResultRef__Output, _protolca_services_ResultValue>;
  
  /**
   * Get the inventory of the given result.
   */
  GetTotalInventory: grpc.handleServerStreamingCall<_protolca_services_ProtoResultRef__Output, _protolca_services_ResultValue>;
  
}

export interface ResultServiceDefinition extends grpc.ServiceDefinition {
  Calculate: MethodDefinition<_protolca_ProtoCalculationSetup, _protolca_services_ProtoResultRef, _protolca_ProtoCalculationSetup__Output, _protolca_services_ProtoResultRef__Output>
  Dispose: MethodDefinition<_protolca_services_ProtoResultRef, _google_protobuf_Empty, _protolca_services_ProtoResultRef__Output, _google_protobuf_Empty__Output>
  GetDirectContribution: MethodDefinition<_protolca_services_TechFlowContributionRequest, _protolca_services_ResultValue, _protolca_services_TechFlowContributionRequest__Output, _protolca_services_ResultValue__Output>
  GetEnviFlows: MethodDefinition<_protolca_services_ProtoResultRef, _protolca_services_ProtoEnviFlow, _protolca_services_ProtoResultRef__Output, _protolca_services_ProtoEnviFlow__Output>
  GetImpactCategories: MethodDefinition<_protolca_services_ProtoResultRef, _protolca_ProtoRef, _protolca_services_ProtoResultRef__Output, _protolca_ProtoRef__Output>
  GetImpactFactors: MethodDefinition<_protolca_services_ImpactFactorRequest, _protolca_services_ImpactFactorResponse, _protolca_services_ImpactFactorRequest__Output, _protolca_services_ImpactFactorResponse__Output>
  GetTechFlows: MethodDefinition<_protolca_services_ProtoResultRef, _protolca_services_ProtoTechFlow, _protolca_services_ProtoResultRef__Output, _protolca_services_ProtoTechFlow__Output>
  GetTotalContribution: MethodDefinition<_protolca_services_TechFlowContributionRequest, _protolca_services_ResultValue, _protolca_services_TechFlowContributionRequest__Output, _protolca_services_ResultValue__Output>
  GetTotalContributionOfOne: MethodDefinition<_protolca_services_TechFlowContributionRequest, _protolca_services_ResultValue, _protolca_services_TechFlowContributionRequest__Output, _protolca_services_ResultValue__Output>
  GetTotalImpacts: MethodDefinition<_protolca_services_ProtoResultRef, _protolca_services_ResultValue, _protolca_services_ProtoResultRef__Output, _protolca_services_ResultValue__Output>
  GetTotalInventory: MethodDefinition<_protolca_services_ProtoResultRef, _protolca_services_ResultValue, _protolca_services_ProtoResultRef__Output, _protolca_services_ResultValue__Output>
}
