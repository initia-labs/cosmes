// @generated by protoc-gen-es v1.7.0 with parameter "target=ts"
// @generated from file injective/insurance/v1beta1/query.proto (package injective.insurance.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { InsuranceFund, Params } from "./insurance_pb.js";
import { Coin } from "../../../cosmos/base/v1beta1/coin_pb.js";
import { GenesisState } from "./genesis_pb.js";

/**
 * QueryInsuranceParamsRequest is the request type for the Query/InsuranceParams
 * RPC method.
 *
 * @generated from message injective.insurance.v1beta1.QueryInsuranceParamsRequest
 */
export class QueryInsuranceParamsRequest extends Message<QueryInsuranceParamsRequest> {
  constructor(data?: PartialMessage<QueryInsuranceParamsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "injective.insurance.v1beta1.QueryInsuranceParamsRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryInsuranceParamsRequest {
    return new QueryInsuranceParamsRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryInsuranceParamsRequest {
    return new QueryInsuranceParamsRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryInsuranceParamsRequest {
    return new QueryInsuranceParamsRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryInsuranceParamsRequest | PlainMessage<QueryInsuranceParamsRequest> | undefined, b: QueryInsuranceParamsRequest | PlainMessage<QueryInsuranceParamsRequest> | undefined): boolean {
    return proto3.util.equals(QueryInsuranceParamsRequest, a, b);
  }
}

/**
 * QueryInsuranceParamsRequest is the response type for the
 * Query/InsuranceParams RPC method.
 *
 * @generated from message injective.insurance.v1beta1.QueryInsuranceParamsResponse
 */
export class QueryInsuranceParamsResponse extends Message<QueryInsuranceParamsResponse> {
  /**
   * @generated from field: injective.insurance.v1beta1.Params params = 1;
   */
  params?: Params;

  constructor(data?: PartialMessage<QueryInsuranceParamsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "injective.insurance.v1beta1.QueryInsuranceParamsResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "params", kind: "message", T: Params },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryInsuranceParamsResponse {
    return new QueryInsuranceParamsResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryInsuranceParamsResponse {
    return new QueryInsuranceParamsResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryInsuranceParamsResponse {
    return new QueryInsuranceParamsResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryInsuranceParamsResponse | PlainMessage<QueryInsuranceParamsResponse> | undefined, b: QueryInsuranceParamsResponse | PlainMessage<QueryInsuranceParamsResponse> | undefined): boolean {
    return proto3.util.equals(QueryInsuranceParamsResponse, a, b);
  }
}

/**
 * QueryInsuranceFundRequest is the request type for the Query/InsuranceFunds
 * RPC method.
 *
 * @generated from message injective.insurance.v1beta1.QueryInsuranceFundRequest
 */
export class QueryInsuranceFundRequest extends Message<QueryInsuranceFundRequest> {
  /**
   * Market ID for the market
   *
   * @generated from field: string market_id = 1;
   */
  marketId = "";

  constructor(data?: PartialMessage<QueryInsuranceFundRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "injective.insurance.v1beta1.QueryInsuranceFundRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "market_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryInsuranceFundRequest {
    return new QueryInsuranceFundRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryInsuranceFundRequest {
    return new QueryInsuranceFundRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryInsuranceFundRequest {
    return new QueryInsuranceFundRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryInsuranceFundRequest | PlainMessage<QueryInsuranceFundRequest> | undefined, b: QueryInsuranceFundRequest | PlainMessage<QueryInsuranceFundRequest> | undefined): boolean {
    return proto3.util.equals(QueryInsuranceFundRequest, a, b);
  }
}

/**
 * QueryInsuranceFundResponse is the response type for the Query/InsuranceFund
 * RPC method.
 *
 * @generated from message injective.insurance.v1beta1.QueryInsuranceFundResponse
 */
export class QueryInsuranceFundResponse extends Message<QueryInsuranceFundResponse> {
  /**
   * @generated from field: injective.insurance.v1beta1.InsuranceFund fund = 1;
   */
  fund?: InsuranceFund;

  constructor(data?: PartialMessage<QueryInsuranceFundResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "injective.insurance.v1beta1.QueryInsuranceFundResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "fund", kind: "message", T: InsuranceFund },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryInsuranceFundResponse {
    return new QueryInsuranceFundResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryInsuranceFundResponse {
    return new QueryInsuranceFundResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryInsuranceFundResponse {
    return new QueryInsuranceFundResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryInsuranceFundResponse | PlainMessage<QueryInsuranceFundResponse> | undefined, b: QueryInsuranceFundResponse | PlainMessage<QueryInsuranceFundResponse> | undefined): boolean {
    return proto3.util.equals(QueryInsuranceFundResponse, a, b);
  }
}

/**
 * QueryInsuranceFundsRequest is the request type for the Query/InsuranceFunds
 * RPC method.
 *
 * @generated from message injective.insurance.v1beta1.QueryInsuranceFundsRequest
 */
export class QueryInsuranceFundsRequest extends Message<QueryInsuranceFundsRequest> {
  constructor(data?: PartialMessage<QueryInsuranceFundsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "injective.insurance.v1beta1.QueryInsuranceFundsRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryInsuranceFundsRequest {
    return new QueryInsuranceFundsRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryInsuranceFundsRequest {
    return new QueryInsuranceFundsRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryInsuranceFundsRequest {
    return new QueryInsuranceFundsRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryInsuranceFundsRequest | PlainMessage<QueryInsuranceFundsRequest> | undefined, b: QueryInsuranceFundsRequest | PlainMessage<QueryInsuranceFundsRequest> | undefined): boolean {
    return proto3.util.equals(QueryInsuranceFundsRequest, a, b);
  }
}

/**
 * QueryInsuranceFundsResponse is the response type for the Query/InsuranceFunds
 * RPC method.
 *
 * @generated from message injective.insurance.v1beta1.QueryInsuranceFundsResponse
 */
export class QueryInsuranceFundsResponse extends Message<QueryInsuranceFundsResponse> {
  /**
   * @generated from field: repeated injective.insurance.v1beta1.InsuranceFund funds = 1;
   */
  funds: InsuranceFund[] = [];

  constructor(data?: PartialMessage<QueryInsuranceFundsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "injective.insurance.v1beta1.QueryInsuranceFundsResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "funds", kind: "message", T: InsuranceFund, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryInsuranceFundsResponse {
    return new QueryInsuranceFundsResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryInsuranceFundsResponse {
    return new QueryInsuranceFundsResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryInsuranceFundsResponse {
    return new QueryInsuranceFundsResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryInsuranceFundsResponse | PlainMessage<QueryInsuranceFundsResponse> | undefined, b: QueryInsuranceFundsResponse | PlainMessage<QueryInsuranceFundsResponse> | undefined): boolean {
    return proto3.util.equals(QueryInsuranceFundsResponse, a, b);
  }
}

/**
 * QueryEstimatedRedemptionsRequest is the request type for the
 * Query/EstimatedRedemptions RPC method.
 *
 * @generated from message injective.insurance.v1beta1.QueryEstimatedRedemptionsRequest
 */
export class QueryEstimatedRedemptionsRequest extends Message<QueryEstimatedRedemptionsRequest> {
  /**
   * @generated from field: string marketId = 1;
   */
  marketId = "";

  /**
   * @generated from field: string address = 2;
   */
  address = "";

  constructor(data?: PartialMessage<QueryEstimatedRedemptionsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "injective.insurance.v1beta1.QueryEstimatedRedemptionsRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "marketId", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryEstimatedRedemptionsRequest {
    return new QueryEstimatedRedemptionsRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryEstimatedRedemptionsRequest {
    return new QueryEstimatedRedemptionsRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryEstimatedRedemptionsRequest {
    return new QueryEstimatedRedemptionsRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryEstimatedRedemptionsRequest | PlainMessage<QueryEstimatedRedemptionsRequest> | undefined, b: QueryEstimatedRedemptionsRequest | PlainMessage<QueryEstimatedRedemptionsRequest> | undefined): boolean {
    return proto3.util.equals(QueryEstimatedRedemptionsRequest, a, b);
  }
}

/**
 * QueryEstimatedRedemptionsResponse is the response type for the
 * Query/EstimatedRedemptions RPC method.
 *
 * @generated from message injective.insurance.v1beta1.QueryEstimatedRedemptionsResponse
 */
export class QueryEstimatedRedemptionsResponse extends Message<QueryEstimatedRedemptionsResponse> {
  /**
   * @generated from field: repeated cosmos.base.v1beta1.Coin amount = 1;
   */
  amount: Coin[] = [];

  constructor(data?: PartialMessage<QueryEstimatedRedemptionsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "injective.insurance.v1beta1.QueryEstimatedRedemptionsResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "amount", kind: "message", T: Coin, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryEstimatedRedemptionsResponse {
    return new QueryEstimatedRedemptionsResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryEstimatedRedemptionsResponse {
    return new QueryEstimatedRedemptionsResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryEstimatedRedemptionsResponse {
    return new QueryEstimatedRedemptionsResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryEstimatedRedemptionsResponse | PlainMessage<QueryEstimatedRedemptionsResponse> | undefined, b: QueryEstimatedRedemptionsResponse | PlainMessage<QueryEstimatedRedemptionsResponse> | undefined): boolean {
    return proto3.util.equals(QueryEstimatedRedemptionsResponse, a, b);
  }
}

/**
 * QueryPendingRedemptionsRequest is the request type for the
 * Query/PendingRedemptions RPC method.
 *
 * @generated from message injective.insurance.v1beta1.QueryPendingRedemptionsRequest
 */
export class QueryPendingRedemptionsRequest extends Message<QueryPendingRedemptionsRequest> {
  /**
   * @generated from field: string marketId = 1;
   */
  marketId = "";

  /**
   * @generated from field: string address = 2;
   */
  address = "";

  constructor(data?: PartialMessage<QueryPendingRedemptionsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "injective.insurance.v1beta1.QueryPendingRedemptionsRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "marketId", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryPendingRedemptionsRequest {
    return new QueryPendingRedemptionsRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryPendingRedemptionsRequest {
    return new QueryPendingRedemptionsRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryPendingRedemptionsRequest {
    return new QueryPendingRedemptionsRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryPendingRedemptionsRequest | PlainMessage<QueryPendingRedemptionsRequest> | undefined, b: QueryPendingRedemptionsRequest | PlainMessage<QueryPendingRedemptionsRequest> | undefined): boolean {
    return proto3.util.equals(QueryPendingRedemptionsRequest, a, b);
  }
}

/**
 * QueryPendingRedemptionsResponse is the response type for the
 * Query/PendingRedemptions RPC method.
 *
 * @generated from message injective.insurance.v1beta1.QueryPendingRedemptionsResponse
 */
export class QueryPendingRedemptionsResponse extends Message<QueryPendingRedemptionsResponse> {
  /**
   * @generated from field: repeated cosmos.base.v1beta1.Coin amount = 1;
   */
  amount: Coin[] = [];

  constructor(data?: PartialMessage<QueryPendingRedemptionsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "injective.insurance.v1beta1.QueryPendingRedemptionsResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "amount", kind: "message", T: Coin, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryPendingRedemptionsResponse {
    return new QueryPendingRedemptionsResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryPendingRedemptionsResponse {
    return new QueryPendingRedemptionsResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryPendingRedemptionsResponse {
    return new QueryPendingRedemptionsResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryPendingRedemptionsResponse | PlainMessage<QueryPendingRedemptionsResponse> | undefined, b: QueryPendingRedemptionsResponse | PlainMessage<QueryPendingRedemptionsResponse> | undefined): boolean {
    return proto3.util.equals(QueryPendingRedemptionsResponse, a, b);
  }
}

/**
 * QueryModuleStateRequest is the request type for the
 * Query/InsuranceModuleState RPC method.
 *
 * @generated from message injective.insurance.v1beta1.QueryModuleStateRequest
 */
export class QueryModuleStateRequest extends Message<QueryModuleStateRequest> {
  constructor(data?: PartialMessage<QueryModuleStateRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "injective.insurance.v1beta1.QueryModuleStateRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryModuleStateRequest {
    return new QueryModuleStateRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryModuleStateRequest {
    return new QueryModuleStateRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryModuleStateRequest {
    return new QueryModuleStateRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryModuleStateRequest | PlainMessage<QueryModuleStateRequest> | undefined, b: QueryModuleStateRequest | PlainMessage<QueryModuleStateRequest> | undefined): boolean {
    return proto3.util.equals(QueryModuleStateRequest, a, b);
  }
}

/**
 * QueryModuleStateResponse is the response type for the
 * Query/InsuranceModuleState RPC method.
 *
 * @generated from message injective.insurance.v1beta1.QueryModuleStateResponse
 */
export class QueryModuleStateResponse extends Message<QueryModuleStateResponse> {
  /**
   * @generated from field: injective.insurance.v1beta1.GenesisState state = 1;
   */
  state?: GenesisState;

  constructor(data?: PartialMessage<QueryModuleStateResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "injective.insurance.v1beta1.QueryModuleStateResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "state", kind: "message", T: GenesisState },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryModuleStateResponse {
    return new QueryModuleStateResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryModuleStateResponse {
    return new QueryModuleStateResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryModuleStateResponse {
    return new QueryModuleStateResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryModuleStateResponse | PlainMessage<QueryModuleStateResponse> | undefined, b: QueryModuleStateResponse | PlainMessage<QueryModuleStateResponse> | undefined): boolean {
    return proto3.util.equals(QueryModuleStateResponse, a, b);
  }
}

