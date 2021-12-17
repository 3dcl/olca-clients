# Generated by the protocol buffer compiler.  DO NOT EDIT!
# Source: data_update_service.proto for package 'protolca.services'

require 'grpc'
require 'data_update_service_pb'

module Protolca
  module Services
    module DataUpdateService
      class Service

        include ::GRPC::GenericService

        self.marshal_class_method = :encode
        self.unmarshal_class_method = :decode
        self.service_name = 'protolca.services.DataUpdateService'

        # Inserts or updates the given data set in the database. Returns the data
        # set reference of the inserted or updated data set.
        rpc :Put, ::Protolca::Services::ProtoDataSet, ::Protolca::ProtoRef
        # Deletes the object with the ID and type of the request message from the
        # database.
        rpc :Delete, ::Protolca::Services::DeleteRequest, ::Google::Protobuf::Empty
        # Creates a new product system.
        rpc :CreateProductSystem, ::Protolca::Services::CreateSystemRequest, ::Protolca::ProtoRef
      end

      Stub = Service.rpc_stub_class
    end
  end
end
