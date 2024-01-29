// @generated by protoc-gen-es v1.7.0 with parameter "target=ts"
// @generated from file cosmos/upgrade/v1beta1/query.proto (package cosmos.upgrade.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { ModuleVersion, Plan } from "./upgrade_pb.js";

/**
 * QueryCurrentPlanRequest is the request type for the Query/CurrentPlan RPC
 * method.
 *
 * @generated from message cosmos.upgrade.v1beta1.QueryCurrentPlanRequest
 */
export class QueryCurrentPlanRequest extends Message<QueryCurrentPlanRequest> {
  constructor(data?: PartialMessage<QueryCurrentPlanRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.upgrade.v1beta1.QueryCurrentPlanRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryCurrentPlanRequest {
    return new QueryCurrentPlanRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryCurrentPlanRequest {
    return new QueryCurrentPlanRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryCurrentPlanRequest {
    return new QueryCurrentPlanRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryCurrentPlanRequest | PlainMessage<QueryCurrentPlanRequest> | undefined, b: QueryCurrentPlanRequest | PlainMessage<QueryCurrentPlanRequest> | undefined): boolean {
    return proto3.util.equals(QueryCurrentPlanRequest, a, b);
  }
}

/**
 * QueryCurrentPlanResponse is the response type for the Query/CurrentPlan RPC
 * method.
 *
 * @generated from message cosmos.upgrade.v1beta1.QueryCurrentPlanResponse
 */
export class QueryCurrentPlanResponse extends Message<QueryCurrentPlanResponse> {
  /**
   * plan is the current upgrade plan.
   *
   * @generated from field: cosmos.upgrade.v1beta1.Plan plan = 1;
   */
  plan?: Plan;

  constructor(data?: PartialMessage<QueryCurrentPlanResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.upgrade.v1beta1.QueryCurrentPlanResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "plan", kind: "message", T: Plan },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryCurrentPlanResponse {
    return new QueryCurrentPlanResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryCurrentPlanResponse {
    return new QueryCurrentPlanResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryCurrentPlanResponse {
    return new QueryCurrentPlanResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryCurrentPlanResponse | PlainMessage<QueryCurrentPlanResponse> | undefined, b: QueryCurrentPlanResponse | PlainMessage<QueryCurrentPlanResponse> | undefined): boolean {
    return proto3.util.equals(QueryCurrentPlanResponse, a, b);
  }
}

/**
 * QueryCurrentPlanRequest is the request type for the Query/AppliedPlan RPC
 * method.
 *
 * @generated from message cosmos.upgrade.v1beta1.QueryAppliedPlanRequest
 */
export class QueryAppliedPlanRequest extends Message<QueryAppliedPlanRequest> {
  /**
   * name is the name of the applied plan to query for.
   *
   * @generated from field: string name = 1;
   */
  name = "";

  constructor(data?: PartialMessage<QueryAppliedPlanRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.upgrade.v1beta1.QueryAppliedPlanRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryAppliedPlanRequest {
    return new QueryAppliedPlanRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryAppliedPlanRequest {
    return new QueryAppliedPlanRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryAppliedPlanRequest {
    return new QueryAppliedPlanRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryAppliedPlanRequest | PlainMessage<QueryAppliedPlanRequest> | undefined, b: QueryAppliedPlanRequest | PlainMessage<QueryAppliedPlanRequest> | undefined): boolean {
    return proto3.util.equals(QueryAppliedPlanRequest, a, b);
  }
}

/**
 * QueryAppliedPlanResponse is the response type for the Query/AppliedPlan RPC
 * method.
 *
 * @generated from message cosmos.upgrade.v1beta1.QueryAppliedPlanResponse
 */
export class QueryAppliedPlanResponse extends Message<QueryAppliedPlanResponse> {
  /**
   * height is the block height at which the plan was applied.
   *
   * @generated from field: int64 height = 1;
   */
  height = protoInt64.zero;

  constructor(data?: PartialMessage<QueryAppliedPlanResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.upgrade.v1beta1.QueryAppliedPlanResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "height", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryAppliedPlanResponse {
    return new QueryAppliedPlanResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryAppliedPlanResponse {
    return new QueryAppliedPlanResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryAppliedPlanResponse {
    return new QueryAppliedPlanResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryAppliedPlanResponse | PlainMessage<QueryAppliedPlanResponse> | undefined, b: QueryAppliedPlanResponse | PlainMessage<QueryAppliedPlanResponse> | undefined): boolean {
    return proto3.util.equals(QueryAppliedPlanResponse, a, b);
  }
}

/**
 * QueryUpgradedConsensusStateRequest is the request type for the Query/UpgradedConsensusState
 * RPC method.
 *
 * @generated from message cosmos.upgrade.v1beta1.QueryUpgradedConsensusStateRequest
 * @deprecated
 */
export class QueryUpgradedConsensusStateRequest extends Message<QueryUpgradedConsensusStateRequest> {
  /**
   * last height of the current chain must be sent in request
   * as this is the height under which next consensus state is stored
   *
   * @generated from field: int64 last_height = 1;
   */
  lastHeight = protoInt64.zero;

  constructor(data?: PartialMessage<QueryUpgradedConsensusStateRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.upgrade.v1beta1.QueryUpgradedConsensusStateRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "last_height", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryUpgradedConsensusStateRequest {
    return new QueryUpgradedConsensusStateRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryUpgradedConsensusStateRequest {
    return new QueryUpgradedConsensusStateRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryUpgradedConsensusStateRequest {
    return new QueryUpgradedConsensusStateRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryUpgradedConsensusStateRequest | PlainMessage<QueryUpgradedConsensusStateRequest> | undefined, b: QueryUpgradedConsensusStateRequest | PlainMessage<QueryUpgradedConsensusStateRequest> | undefined): boolean {
    return proto3.util.equals(QueryUpgradedConsensusStateRequest, a, b);
  }
}

/**
 * QueryUpgradedConsensusStateResponse is the response type for the Query/UpgradedConsensusState
 * RPC method.
 *
 * @generated from message cosmos.upgrade.v1beta1.QueryUpgradedConsensusStateResponse
 * @deprecated
 */
export class QueryUpgradedConsensusStateResponse extends Message<QueryUpgradedConsensusStateResponse> {
  /**
   * Since: cosmos-sdk 0.43
   *
   * @generated from field: bytes upgraded_consensus_state = 2;
   */
  upgradedConsensusState = new Uint8Array(0);

  constructor(data?: PartialMessage<QueryUpgradedConsensusStateResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.upgrade.v1beta1.QueryUpgradedConsensusStateResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 2, name: "upgraded_consensus_state", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryUpgradedConsensusStateResponse {
    return new QueryUpgradedConsensusStateResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryUpgradedConsensusStateResponse {
    return new QueryUpgradedConsensusStateResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryUpgradedConsensusStateResponse {
    return new QueryUpgradedConsensusStateResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryUpgradedConsensusStateResponse | PlainMessage<QueryUpgradedConsensusStateResponse> | undefined, b: QueryUpgradedConsensusStateResponse | PlainMessage<QueryUpgradedConsensusStateResponse> | undefined): boolean {
    return proto3.util.equals(QueryUpgradedConsensusStateResponse, a, b);
  }
}

/**
 * QueryModuleVersionsRequest is the request type for the Query/ModuleVersions
 * RPC method.
 *
 * Since: cosmos-sdk 0.43
 *
 * @generated from message cosmos.upgrade.v1beta1.QueryModuleVersionsRequest
 */
export class QueryModuleVersionsRequest extends Message<QueryModuleVersionsRequest> {
  /**
   * module_name is a field to query a specific module
   * consensus version from state. Leaving this empty will
   * fetch the full list of module versions from state
   *
   * @generated from field: string module_name = 1;
   */
  moduleName = "";

  constructor(data?: PartialMessage<QueryModuleVersionsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.upgrade.v1beta1.QueryModuleVersionsRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "module_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryModuleVersionsRequest {
    return new QueryModuleVersionsRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryModuleVersionsRequest {
    return new QueryModuleVersionsRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryModuleVersionsRequest {
    return new QueryModuleVersionsRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryModuleVersionsRequest | PlainMessage<QueryModuleVersionsRequest> | undefined, b: QueryModuleVersionsRequest | PlainMessage<QueryModuleVersionsRequest> | undefined): boolean {
    return proto3.util.equals(QueryModuleVersionsRequest, a, b);
  }
}

/**
 * QueryModuleVersionsResponse is the response type for the Query/ModuleVersions
 * RPC method.
 *
 * Since: cosmos-sdk 0.43
 *
 * @generated from message cosmos.upgrade.v1beta1.QueryModuleVersionsResponse
 */
export class QueryModuleVersionsResponse extends Message<QueryModuleVersionsResponse> {
  /**
   * module_versions is a list of module names with their consensus versions.
   *
   * @generated from field: repeated cosmos.upgrade.v1beta1.ModuleVersion module_versions = 1;
   */
  moduleVersions: ModuleVersion[] = [];

  constructor(data?: PartialMessage<QueryModuleVersionsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.upgrade.v1beta1.QueryModuleVersionsResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "module_versions", kind: "message", T: ModuleVersion, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryModuleVersionsResponse {
    return new QueryModuleVersionsResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryModuleVersionsResponse {
    return new QueryModuleVersionsResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryModuleVersionsResponse {
    return new QueryModuleVersionsResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryModuleVersionsResponse | PlainMessage<QueryModuleVersionsResponse> | undefined, b: QueryModuleVersionsResponse | PlainMessage<QueryModuleVersionsResponse> | undefined): boolean {
    return proto3.util.equals(QueryModuleVersionsResponse, a, b);
  }
}

/**
 * QueryAuthorityRequest is the request type for Query/Authority
 *
 * Since: cosmos-sdk 0.46
 *
 * @generated from message cosmos.upgrade.v1beta1.QueryAuthorityRequest
 */
export class QueryAuthorityRequest extends Message<QueryAuthorityRequest> {
  constructor(data?: PartialMessage<QueryAuthorityRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.upgrade.v1beta1.QueryAuthorityRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryAuthorityRequest {
    return new QueryAuthorityRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryAuthorityRequest {
    return new QueryAuthorityRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryAuthorityRequest {
    return new QueryAuthorityRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryAuthorityRequest | PlainMessage<QueryAuthorityRequest> | undefined, b: QueryAuthorityRequest | PlainMessage<QueryAuthorityRequest> | undefined): boolean {
    return proto3.util.equals(QueryAuthorityRequest, a, b);
  }
}

/**
 * QueryAuthorityResponse is the response type for Query/Authority
 *
 * Since: cosmos-sdk 0.46
 *
 * @generated from message cosmos.upgrade.v1beta1.QueryAuthorityResponse
 */
export class QueryAuthorityResponse extends Message<QueryAuthorityResponse> {
  /**
   * @generated from field: string address = 1;
   */
  address = "";

  constructor(data?: PartialMessage<QueryAuthorityResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.upgrade.v1beta1.QueryAuthorityResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryAuthorityResponse {
    return new QueryAuthorityResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryAuthorityResponse {
    return new QueryAuthorityResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryAuthorityResponse {
    return new QueryAuthorityResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryAuthorityResponse | PlainMessage<QueryAuthorityResponse> | undefined, b: QueryAuthorityResponse | PlainMessage<QueryAuthorityResponse> | undefined): boolean {
    return proto3.util.equals(QueryAuthorityResponse, a, b);
  }
}

