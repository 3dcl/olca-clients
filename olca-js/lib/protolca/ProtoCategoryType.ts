// Original file: ../olca-proto/proto/olca.proto

/**
 * We map the openLCA ModelType to this enumeration type because it is only
 * used in the categories. In order to be compatible with the JSON-LD '@type'
 * field we use the ProtoType enumeration type
 */
export enum ProtoCategoryType {
  UNDEFINED_CATEGORY_TYPE = 0,
  ACTOR = 1,
  CURRENCY = 3,
  DQ_SYSTEM = 4,
  FLOW = 5,
  FLOW_PROPERTY = 6,
  IMPACT_CATEGORY = 7,
  IMPACT_METHOD = 8,
  LOCATION = 9,
  PARAMETER = 11,
  PROCESS = 12,
  PRODUCT_SYSTEM = 13,
  PROJECT = 14,
  SOCIAL_INDICATOR = 15,
  SOURCE = 16,
  UNIT_GROUP = 18,
  RESULT = 19,
}
