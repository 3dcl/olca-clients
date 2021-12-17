// Original file: ../olca-proto/proto/result_service.proto


/**
 * A `ProtoResultRef` message is just a reference to a real result on the server
 * side. As result data can be really large, we do not add them directly to the
 * result. Instead you call the respective methods of the result service to get
 * them. Because of this, you need to explicitly call `Dispose` when you do not
 * need a result anymore. Otherwise you will create memory leaks as the result
 * still exists on the server side.
 */
export interface ProtoResultRef {
  'id'?: (string);
}

/**
 * A `ProtoResultRef` message is just a reference to a real result on the server
 * side. As result data can be really large, we do not add them directly to the
 * result. Instead you call the respective methods of the result service to get
 * them. Because of this, you need to explicitly call `Dispose` when you do not
 * need a result anymore. Otherwise you will create memory leaks as the result
 * still exists on the server side.
 */
export interface ProtoResultRef__Output {
  'id'?: (string);
}
