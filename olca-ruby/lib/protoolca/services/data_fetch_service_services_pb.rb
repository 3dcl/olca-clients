# Generated by the protocol buffer compiler.  DO NOT EDIT!
# Source: data_fetch_service.proto for package 'protolca.services'

require 'grpc'
require 'data_fetch_service_pb'

module Protolca
  module Services
    module DataFetchService
      class Service

        include ::GRPC::GenericService

        self.marshal_class_method = :encode
        self.unmarshal_class_method = :decode
        self.service_name = 'protolca.services.DataFetchService'

        # Get a data set by ID. You use this method if you are sure that a data set
        # of the requested type and ID exists in the database. An error is returned
        # if this is not the case.
        rpc :Get, ::Protolca::Services::GetRequest, ::Protolca::Services::ProtoDataSet
        # Get a data set by ID or name. Returns an empty data set if there is no such
        # data set in the database. If there are multiple data sets with the same
        # name in the database it returns the first of these data sets.
        rpc :Find, ::Protolca::Services::FindRequest, ::Protolca::Services::ProtoDataSet
        # Get (a page of) all data sets of a given type. If no page size is given
        # (page <= 0) it defaults to 100. An unset page (page <= 0) defaults to the
        # first page.
        rpc :GetAll, ::Protolca::Services::GetAllRequest, ::Protolca::Services::GetAllResponse
        # Get the number of data sets of the given model type
        # that are stored in the database.
        rpc :GetCount, ::Protolca::Services::GetCountRequest, ::Protolca::Services::GetCountResponse
        # Get all descriptors that match the given request.
        rpc :GetDescriptors, ::Protolca::Services::GetDescriptorsRequest, stream(::Protolca::ProtoRef)
        # Search for data sets.
        rpc :Search, ::Protolca::Services::SearchRequest, stream(::Protolca::ProtoRef)
        # Get the descriptors of the data sets that are contained in a given
        # category. The category can be identified by its full path or its ID where
        # an empty string or "/" identifies the root category (or "none-category") of
        # the respective model type.
        rpc :GetCategoryContent, ::Protolca::Services::GetCategoryContentRequest, stream(::Protolca::ProtoRef)
        # Get the full category tree for the given model type.
        rpc :GetCategoryTree, ::Protolca::Services::GetCategoryTreeRequest, ::Protolca::Services::CategoryTree
        # Get possible providers for the given flow. For products these are processes
        # with that product on the output side and for waste flows processes with
        # that waste flow on the input side. For elementary flows, an empty stream is
        # returned.
        rpc :GetProvidersFor, ::Protolca::ProtoRef, stream(::Protolca::ProtoRef)
        # Get all technosphere flows from the database. These are all process-flow
        # pairs that can be used as providers for product inputs or waste outputs in
        # other processes or product systems.
        rpc :GetTechFlows, ::Google::Protobuf::Empty, stream(::Protolca::Services::ProtoTechFlow)
      end

      Stub = Service.rpc_stub_class
    end
  end
end