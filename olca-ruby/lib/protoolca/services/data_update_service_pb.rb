# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: data_update_service.proto

require 'google/protobuf/empty_pb'
require 'olca_pb'
require 'commons_pb'
require 'google/protobuf'

Google::Protobuf::DescriptorPool.generated_pool.build do
  add_file("data_update_service.proto", :syntax => :proto3) do
    add_message "protolca.services.DeleteRequest" do
      optional :type, :enum, 1, "protolca.ProtoType"
      optional :id, :string, 2
    end
    add_message "protolca.services.CreateSystemRequest" do
      optional :process, :message, 1, "protolca.ProtoRef"
      optional :default_providers, :enum, 2, "protolca.services.CreateSystemRequest.DefaultProviders"
      optional :preferred_type, :enum, 3, "protolca.ProtoProcessType"
    end
    add_enum "protolca.services.CreateSystemRequest.DefaultProviders" do
      value :Prefer, 0
      value :Ignore, 1
      value :Only, 2
    end
  end
end

module Protolca
  module Services
    DeleteRequest = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("protolca.services.DeleteRequest").msgclass
    CreateSystemRequest = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("protolca.services.CreateSystemRequest").msgclass
    CreateSystemRequest::DefaultProviders = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("protolca.services.CreateSystemRequest.DefaultProviders").enummodule
  end
end
