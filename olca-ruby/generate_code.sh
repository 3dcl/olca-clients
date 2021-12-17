#!/bin/bash
TARGET_DIR=lib/protoolca/services
PROTO_DIR=../olca-proto/proto
echo "Gerating proto stubs from $PROTO_DIR to $TARGET_DIR"
grpc_tools_ruby_protoc -I $PROTO_DIR --ruby_out=$TARGET_DIR --grpc_out=$TARGET_DIR $PROTO_DIR/*.proto