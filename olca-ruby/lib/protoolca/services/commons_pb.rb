# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: commons.proto

require 'olca_pb'
require 'google/protobuf'

Google::Protobuf::DescriptorPool.generated_pool.build do
  add_file("commons.proto", :syntax => :proto3) do
    add_message "protolca.services.ProtoDataSet" do
      oneof :model do
        optional :actor, :message, 1, "protolca.ProtoActor"
        optional :category, :message, 2, "protolca.ProtoCategory"
        optional :currency, :message, 3, "protolca.ProtoCurrency"
        optional :dq_system, :message, 4, "protolca.ProtoDQSystem"
        optional :flow, :message, 5, "protolca.ProtoFlow"
        optional :flow_property, :message, 6, "protolca.ProtoFlowProperty"
        optional :impact_category, :message, 7, "protolca.ProtoImpactCategory"
        optional :impact_method, :message, 8, "protolca.ProtoImpactMethod"
        optional :location, :message, 9, "protolca.ProtoLocation"
        optional :parameter, :message, 10, "protolca.ProtoParameter"
        optional :process, :message, 11, "protolca.ProtoProcess"
        optional :product_system, :message, 12, "protolca.ProtoProductSystem"
        optional :project, :message, 13, "protolca.ProtoProject"
        optional :social_indicator, :message, 14, "protolca.ProtoSocialIndicator"
        optional :source, :message, 15, "protolca.ProtoSource"
        optional :unit_group, :message, 16, "protolca.ProtoUnitGroup"
      end
    end
    add_message "protolca.services.ProtoTechFlow" do
      optional :process, :message, 1, "protolca.ProtoRef"
      oneof :flow do
        optional :product, :message, 2, "protolca.ProtoRef"
        optional :waste, :message, 3, "protolca.ProtoRef"
      end
    end
    add_message "protolca.services.ProtoEnviFlow" do
      optional :flow, :message, 1, "protolca.ProtoRef"
      optional :location, :message, 2, "protolca.ProtoRef"
      optional :is_input, :bool, 3
    end
  end
end

module Protolca
  module Services
    ProtoDataSet = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("protolca.services.ProtoDataSet").msgclass
    ProtoTechFlow = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("protolca.services.ProtoTechFlow").msgclass
    ProtoEnviFlow = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("protolca.services.ProtoEnviFlow").msgclass
  end
end