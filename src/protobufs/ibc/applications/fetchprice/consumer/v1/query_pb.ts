// @generated by protoc-gen-es v1.7.0 with parameter "target=ts"
// @generated from file ibc/applications/fetchprice/consumer/v1/query.proto (package ibc.applications.fetchprice.consumer.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { CurrencyPrice, QuotePrice } from "../../v1/types_pb.js";
import { PageRequest, PageResponse } from "../../../../../cosmos/base/query/v1beta1/pagination_pb.js";

/**
 * QueryPriceRequest is the request type for the Query/Price RPC
 * method
 *
 * @generated from message ibc.applications.fetchprice.consumer.v1.QueryPriceRequest
 */
export class QueryPriceRequest extends Message<QueryPriceRequest> {
  /**
   * @generated from field: string currency_id = 1;
   */
  currencyId = "";

  constructor(data?: PartialMessage<QueryPriceRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "ibc.applications.fetchprice.consumer.v1.QueryPriceRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "currency_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryPriceRequest {
    return new QueryPriceRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryPriceRequest {
    return new QueryPriceRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryPriceRequest {
    return new QueryPriceRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryPriceRequest | PlainMessage<QueryPriceRequest> | undefined, b: QueryPriceRequest | PlainMessage<QueryPriceRequest> | undefined): boolean {
    return proto3.util.equals(QueryPriceRequest, a, b);
  }
}

/**
 * QueryPriceResponse is the response type for the Query/Price RPC
 * method.
 *
 * @generated from message ibc.applications.fetchprice.consumer.v1.QueryPriceResponse
 */
export class QueryPriceResponse extends Message<QueryPriceResponse> {
  /**
   * @generated from field: ibc.applications.fetchprice.v1.QuotePrice price = 1;
   */
  price?: QuotePrice;

  constructor(data?: PartialMessage<QueryPriceResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "ibc.applications.fetchprice.consumer.v1.QueryPriceResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "price", kind: "message", T: QuotePrice },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryPriceResponse {
    return new QueryPriceResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryPriceResponse {
    return new QueryPriceResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryPriceResponse {
    return new QueryPriceResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryPriceResponse | PlainMessage<QueryPriceResponse> | undefined, b: QueryPriceResponse | PlainMessage<QueryPriceResponse> | undefined): boolean {
    return proto3.util.equals(QueryPriceResponse, a, b);
  }
}

/**
 * QueryPricesRequest is the request type for the Query/Prices RPC
 * method
 *
 * @generated from message ibc.applications.fetchprice.consumer.v1.QueryPricesRequest
 */
export class QueryPricesRequest extends Message<QueryPricesRequest> {
  /**
   * @generated from field: repeated string currency_ids = 1;
   */
  currencyIds: string[] = [];

  constructor(data?: PartialMessage<QueryPricesRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "ibc.applications.fetchprice.consumer.v1.QueryPricesRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "currency_ids", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryPricesRequest {
    return new QueryPricesRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryPricesRequest {
    return new QueryPricesRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryPricesRequest {
    return new QueryPricesRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryPricesRequest | PlainMessage<QueryPricesRequest> | undefined, b: QueryPricesRequest | PlainMessage<QueryPricesRequest> | undefined): boolean {
    return proto3.util.equals(QueryPricesRequest, a, b);
  }
}

/**
 * QueryPricesResponse is the response type for the Query/Prices RPC
 * method.
 *
 * @generated from message ibc.applications.fetchprice.consumer.v1.QueryPricesResponse
 */
export class QueryPricesResponse extends Message<QueryPricesResponse> {
  /**
   * @generated from field: repeated ibc.applications.fetchprice.v1.CurrencyPrice prices = 1;
   */
  prices: CurrencyPrice[] = [];

  constructor(data?: PartialMessage<QueryPricesResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "ibc.applications.fetchprice.consumer.v1.QueryPricesResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "prices", kind: "message", T: CurrencyPrice, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryPricesResponse {
    return new QueryPricesResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryPricesResponse {
    return new QueryPricesResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryPricesResponse {
    return new QueryPricesResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryPricesResponse | PlainMessage<QueryPricesResponse> | undefined, b: QueryPricesResponse | PlainMessage<QueryPricesResponse> | undefined): boolean {
    return proto3.util.equals(QueryPricesResponse, a, b);
  }
}

/**
 * QueryAllPricesRequest is the request type for the Query/AllPrices RPC
 * method
 *
 * @generated from message ibc.applications.fetchprice.consumer.v1.QueryAllPricesRequest
 */
export class QueryAllPricesRequest extends Message<QueryAllPricesRequest> {
  /**
   * pagination defines an optional pagination for the request.
   *
   * @generated from field: cosmos.base.query.v1beta1.PageRequest pagination = 1;
   */
  pagination?: PageRequest;

  constructor(data?: PartialMessage<QueryAllPricesRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "ibc.applications.fetchprice.consumer.v1.QueryAllPricesRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "pagination", kind: "message", T: PageRequest },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryAllPricesRequest {
    return new QueryAllPricesRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryAllPricesRequest {
    return new QueryAllPricesRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryAllPricesRequest {
    return new QueryAllPricesRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryAllPricesRequest | PlainMessage<QueryAllPricesRequest> | undefined, b: QueryAllPricesRequest | PlainMessage<QueryAllPricesRequest> | undefined): boolean {
    return proto3.util.equals(QueryAllPricesRequest, a, b);
  }
}

/**
 * QueryAllPricesResponse is the response type for the Query/AllPrices RPC
 * method.
 *
 * @generated from message ibc.applications.fetchprice.consumer.v1.QueryAllPricesResponse
 */
export class QueryAllPricesResponse extends Message<QueryAllPricesResponse> {
  /**
   * class_traces returns all class id traces information.
   *
   * @generated from field: repeated ibc.applications.fetchprice.v1.CurrencyPrice prices = 1;
   */
  prices: CurrencyPrice[] = [];

  /**
   * pagination defines the pagination in the response.
   *
   * @generated from field: cosmos.base.query.v1beta1.PageResponse pagination = 2;
   */
  pagination?: PageResponse;

  constructor(data?: PartialMessage<QueryAllPricesResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "ibc.applications.fetchprice.consumer.v1.QueryAllPricesResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "prices", kind: "message", T: CurrencyPrice, repeated: true },
    { no: 2, name: "pagination", kind: "message", T: PageResponse },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryAllPricesResponse {
    return new QueryAllPricesResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryAllPricesResponse {
    return new QueryAllPricesResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryAllPricesResponse {
    return new QueryAllPricesResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryAllPricesResponse | PlainMessage<QueryAllPricesResponse> | undefined, b: QueryAllPricesResponse | PlainMessage<QueryAllPricesResponse> | undefined): boolean {
    return proto3.util.equals(QueryAllPricesResponse, a, b);
  }
}

