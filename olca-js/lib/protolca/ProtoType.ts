// Original file: ../olca-proto/proto/olca.proto

/**
 * This enumeration type is added for compatibility with the @type attribute of
 * the openLCA JSON-LD format. In the proto messages we limit its usage to
 * instances of CategorizedEntity and Ref while it is allowed for every type in
 * the JSON-LD format. Thus, you should use ignoringUnknownFields flag when
 * parsing openLCA JSON-LD messages with the generated proto parsers.
 */
export enum ProtoType {
  Undefined = 0,
  Actor = 1,
  Category = 2,
  Currency = 3,
  DQSystem = 4,
  Flow = 5,
  FlowProperty = 6,
  ImpactCategory = 7,
  ImpactMethod = 8,
  Location = 9,
  NwSet = 10,
  Parameter = 11,
  Process = 12,
  ProductSystem = 13,
  Project = 14,
  Result = 15,
  SocialIndicator = 16,
  Source = 17,
  Unit = 18,
  UnitGroup = 19,
}
