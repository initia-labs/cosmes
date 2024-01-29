// @generated by protoc-gen-es v1.7.0 with parameter "target=ts"
// @generated from file cosmos/nft/v1beta1/query.proto (package cosmos.nft.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination_pb.js";
import { Class, NFT } from "./nft_pb.js";

/**
 * QueryBalanceRequest is the request type for the Query/Balance RPC method
 *
 * @generated from message cosmos.nft.v1beta1.QueryBalanceRequest
 */
export class QueryBalanceRequest extends Message<QueryBalanceRequest> {
  /**
   * class_id associated with the nft
   *
   * @generated from field: string class_id = 1;
   */
  classId = "";

  /**
   * owner is the owner address of the nft
   *
   * @generated from field: string owner = 2;
   */
  owner = "";

  constructor(data?: PartialMessage<QueryBalanceRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.nft.v1beta1.QueryBalanceRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "class_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "owner", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryBalanceRequest {
    return new QueryBalanceRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryBalanceRequest {
    return new QueryBalanceRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryBalanceRequest {
    return new QueryBalanceRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryBalanceRequest | PlainMessage<QueryBalanceRequest> | undefined, b: QueryBalanceRequest | PlainMessage<QueryBalanceRequest> | undefined): boolean {
    return proto3.util.equals(QueryBalanceRequest, a, b);
  }
}

/**
 * QueryBalanceResponse is the response type for the Query/Balance RPC method
 *
 * @generated from message cosmos.nft.v1beta1.QueryBalanceResponse
 */
export class QueryBalanceResponse extends Message<QueryBalanceResponse> {
  /**
   * amount is the number of all NFTs of a given class owned by the owner
   *
   * @generated from field: uint64 amount = 1;
   */
  amount = protoInt64.zero;

  constructor(data?: PartialMessage<QueryBalanceResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.nft.v1beta1.QueryBalanceResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "amount", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryBalanceResponse {
    return new QueryBalanceResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryBalanceResponse {
    return new QueryBalanceResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryBalanceResponse {
    return new QueryBalanceResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryBalanceResponse | PlainMessage<QueryBalanceResponse> | undefined, b: QueryBalanceResponse | PlainMessage<QueryBalanceResponse> | undefined): boolean {
    return proto3.util.equals(QueryBalanceResponse, a, b);
  }
}

/**
 * QueryOwnerRequest is the request type for the Query/Owner RPC method
 *
 * @generated from message cosmos.nft.v1beta1.QueryOwnerRequest
 */
export class QueryOwnerRequest extends Message<QueryOwnerRequest> {
  /**
   * class_id associated with the nft
   *
   * @generated from field: string class_id = 1;
   */
  classId = "";

  /**
   * id is a unique identifier of the NFT
   *
   * @generated from field: string id = 2;
   */
  id = "";

  constructor(data?: PartialMessage<QueryOwnerRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.nft.v1beta1.QueryOwnerRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "class_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryOwnerRequest {
    return new QueryOwnerRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryOwnerRequest {
    return new QueryOwnerRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryOwnerRequest {
    return new QueryOwnerRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryOwnerRequest | PlainMessage<QueryOwnerRequest> | undefined, b: QueryOwnerRequest | PlainMessage<QueryOwnerRequest> | undefined): boolean {
    return proto3.util.equals(QueryOwnerRequest, a, b);
  }
}

/**
 * QueryOwnerResponse is the response type for the Query/Owner RPC method
 *
 * @generated from message cosmos.nft.v1beta1.QueryOwnerResponse
 */
export class QueryOwnerResponse extends Message<QueryOwnerResponse> {
  /**
   * owner is the owner address of the nft
   *
   * @generated from field: string owner = 1;
   */
  owner = "";

  constructor(data?: PartialMessage<QueryOwnerResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.nft.v1beta1.QueryOwnerResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "owner", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryOwnerResponse {
    return new QueryOwnerResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryOwnerResponse {
    return new QueryOwnerResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryOwnerResponse {
    return new QueryOwnerResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryOwnerResponse | PlainMessage<QueryOwnerResponse> | undefined, b: QueryOwnerResponse | PlainMessage<QueryOwnerResponse> | undefined): boolean {
    return proto3.util.equals(QueryOwnerResponse, a, b);
  }
}

/**
 * QuerySupplyRequest is the request type for the Query/Supply RPC method
 *
 * @generated from message cosmos.nft.v1beta1.QuerySupplyRequest
 */
export class QuerySupplyRequest extends Message<QuerySupplyRequest> {
  /**
   * class_id associated with the nft
   *
   * @generated from field: string class_id = 1;
   */
  classId = "";

  constructor(data?: PartialMessage<QuerySupplyRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.nft.v1beta1.QuerySupplyRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "class_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuerySupplyRequest {
    return new QuerySupplyRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuerySupplyRequest {
    return new QuerySupplyRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuerySupplyRequest {
    return new QuerySupplyRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QuerySupplyRequest | PlainMessage<QuerySupplyRequest> | undefined, b: QuerySupplyRequest | PlainMessage<QuerySupplyRequest> | undefined): boolean {
    return proto3.util.equals(QuerySupplyRequest, a, b);
  }
}

/**
 * QuerySupplyResponse is the response type for the Query/Supply RPC method
 *
 * @generated from message cosmos.nft.v1beta1.QuerySupplyResponse
 */
export class QuerySupplyResponse extends Message<QuerySupplyResponse> {
  /**
   * amount is the number of all NFTs from the given class
   *
   * @generated from field: uint64 amount = 1;
   */
  amount = protoInt64.zero;

  constructor(data?: PartialMessage<QuerySupplyResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.nft.v1beta1.QuerySupplyResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "amount", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuerySupplyResponse {
    return new QuerySupplyResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuerySupplyResponse {
    return new QuerySupplyResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuerySupplyResponse {
    return new QuerySupplyResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QuerySupplyResponse | PlainMessage<QuerySupplyResponse> | undefined, b: QuerySupplyResponse | PlainMessage<QuerySupplyResponse> | undefined): boolean {
    return proto3.util.equals(QuerySupplyResponse, a, b);
  }
}

/**
 * QueryNFTstRequest is the request type for the Query/NFTs RPC method
 *
 * @generated from message cosmos.nft.v1beta1.QueryNFTsRequest
 */
export class QueryNFTsRequest extends Message<QueryNFTsRequest> {
  /**
   * class_id associated with the nft
   *
   * @generated from field: string class_id = 1;
   */
  classId = "";

  /**
   * owner is the owner address of the nft
   *
   * @generated from field: string owner = 2;
   */
  owner = "";

  /**
   * pagination defines an optional pagination for the request.
   *
   * @generated from field: cosmos.base.query.v1beta1.PageRequest pagination = 3;
   */
  pagination?: PageRequest;

  constructor(data?: PartialMessage<QueryNFTsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.nft.v1beta1.QueryNFTsRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "class_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "owner", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "pagination", kind: "message", T: PageRequest },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryNFTsRequest {
    return new QueryNFTsRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryNFTsRequest {
    return new QueryNFTsRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryNFTsRequest {
    return new QueryNFTsRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryNFTsRequest | PlainMessage<QueryNFTsRequest> | undefined, b: QueryNFTsRequest | PlainMessage<QueryNFTsRequest> | undefined): boolean {
    return proto3.util.equals(QueryNFTsRequest, a, b);
  }
}

/**
 * QueryNFTsResponse is the response type for the Query/NFTs RPC methods
 *
 * @generated from message cosmos.nft.v1beta1.QueryNFTsResponse
 */
export class QueryNFTsResponse extends Message<QueryNFTsResponse> {
  /**
   * NFT defines the NFT
   *
   * @generated from field: repeated cosmos.nft.v1beta1.NFT nfts = 1;
   */
  nfts: NFT[] = [];

  /**
   * pagination defines the pagination in the response.
   *
   * @generated from field: cosmos.base.query.v1beta1.PageResponse pagination = 2;
   */
  pagination?: PageResponse;

  constructor(data?: PartialMessage<QueryNFTsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.nft.v1beta1.QueryNFTsResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "nfts", kind: "message", T: NFT, repeated: true },
    { no: 2, name: "pagination", kind: "message", T: PageResponse },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryNFTsResponse {
    return new QueryNFTsResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryNFTsResponse {
    return new QueryNFTsResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryNFTsResponse {
    return new QueryNFTsResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryNFTsResponse | PlainMessage<QueryNFTsResponse> | undefined, b: QueryNFTsResponse | PlainMessage<QueryNFTsResponse> | undefined): boolean {
    return proto3.util.equals(QueryNFTsResponse, a, b);
  }
}

/**
 * QueryNFTRequest is the request type for the Query/NFT RPC method
 *
 * @generated from message cosmos.nft.v1beta1.QueryNFTRequest
 */
export class QueryNFTRequest extends Message<QueryNFTRequest> {
  /**
   * class_id associated with the nft
   *
   * @generated from field: string class_id = 1;
   */
  classId = "";

  /**
   * id is a unique identifier of the NFT
   *
   * @generated from field: string id = 2;
   */
  id = "";

  constructor(data?: PartialMessage<QueryNFTRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.nft.v1beta1.QueryNFTRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "class_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryNFTRequest {
    return new QueryNFTRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryNFTRequest {
    return new QueryNFTRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryNFTRequest {
    return new QueryNFTRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryNFTRequest | PlainMessage<QueryNFTRequest> | undefined, b: QueryNFTRequest | PlainMessage<QueryNFTRequest> | undefined): boolean {
    return proto3.util.equals(QueryNFTRequest, a, b);
  }
}

/**
 * QueryNFTResponse is the response type for the Query/NFT RPC method
 *
 * @generated from message cosmos.nft.v1beta1.QueryNFTResponse
 */
export class QueryNFTResponse extends Message<QueryNFTResponse> {
  /**
   * owner is the owner address of the nft
   *
   * @generated from field: cosmos.nft.v1beta1.NFT nft = 1;
   */
  nft?: NFT;

  constructor(data?: PartialMessage<QueryNFTResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.nft.v1beta1.QueryNFTResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "nft", kind: "message", T: NFT },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryNFTResponse {
    return new QueryNFTResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryNFTResponse {
    return new QueryNFTResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryNFTResponse {
    return new QueryNFTResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryNFTResponse | PlainMessage<QueryNFTResponse> | undefined, b: QueryNFTResponse | PlainMessage<QueryNFTResponse> | undefined): boolean {
    return proto3.util.equals(QueryNFTResponse, a, b);
  }
}

/**
 * QueryClassRequest is the request type for the Query/Class RPC method
 *
 * @generated from message cosmos.nft.v1beta1.QueryClassRequest
 */
export class QueryClassRequest extends Message<QueryClassRequest> {
  /**
   * class_id associated with the nft
   *
   * @generated from field: string class_id = 1;
   */
  classId = "";

  constructor(data?: PartialMessage<QueryClassRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.nft.v1beta1.QueryClassRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "class_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryClassRequest {
    return new QueryClassRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryClassRequest {
    return new QueryClassRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryClassRequest {
    return new QueryClassRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryClassRequest | PlainMessage<QueryClassRequest> | undefined, b: QueryClassRequest | PlainMessage<QueryClassRequest> | undefined): boolean {
    return proto3.util.equals(QueryClassRequest, a, b);
  }
}

/**
 * QueryClassResponse is the response type for the Query/Class RPC method
 *
 * @generated from message cosmos.nft.v1beta1.QueryClassResponse
 */
export class QueryClassResponse extends Message<QueryClassResponse> {
  /**
   * class defines the class of the nft type.
   *
   * @generated from field: cosmos.nft.v1beta1.Class class = 1;
   */
  class?: Class;

  constructor(data?: PartialMessage<QueryClassResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.nft.v1beta1.QueryClassResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "class", kind: "message", T: Class },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryClassResponse {
    return new QueryClassResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryClassResponse {
    return new QueryClassResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryClassResponse {
    return new QueryClassResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryClassResponse | PlainMessage<QueryClassResponse> | undefined, b: QueryClassResponse | PlainMessage<QueryClassResponse> | undefined): boolean {
    return proto3.util.equals(QueryClassResponse, a, b);
  }
}

/**
 * QueryClassesRequest is the request type for the Query/Classes RPC method
 *
 * @generated from message cosmos.nft.v1beta1.QueryClassesRequest
 */
export class QueryClassesRequest extends Message<QueryClassesRequest> {
  /**
   * pagination defines an optional pagination for the request.
   *
   * @generated from field: cosmos.base.query.v1beta1.PageRequest pagination = 1;
   */
  pagination?: PageRequest;

  constructor(data?: PartialMessage<QueryClassesRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.nft.v1beta1.QueryClassesRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "pagination", kind: "message", T: PageRequest },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryClassesRequest {
    return new QueryClassesRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryClassesRequest {
    return new QueryClassesRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryClassesRequest {
    return new QueryClassesRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryClassesRequest | PlainMessage<QueryClassesRequest> | undefined, b: QueryClassesRequest | PlainMessage<QueryClassesRequest> | undefined): boolean {
    return proto3.util.equals(QueryClassesRequest, a, b);
  }
}

/**
 * QueryClassesResponse is the response type for the Query/Classes RPC method
 *
 * @generated from message cosmos.nft.v1beta1.QueryClassesResponse
 */
export class QueryClassesResponse extends Message<QueryClassesResponse> {
  /**
   * class defines the class of the nft type.
   *
   * @generated from field: repeated cosmos.nft.v1beta1.Class classes = 1;
   */
  classes: Class[] = [];

  /**
   * pagination defines the pagination in the response.
   *
   * @generated from field: cosmos.base.query.v1beta1.PageResponse pagination = 2;
   */
  pagination?: PageResponse;

  constructor(data?: PartialMessage<QueryClassesResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.nft.v1beta1.QueryClassesResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "classes", kind: "message", T: Class, repeated: true },
    { no: 2, name: "pagination", kind: "message", T: PageResponse },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryClassesResponse {
    return new QueryClassesResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryClassesResponse {
    return new QueryClassesResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryClassesResponse {
    return new QueryClassesResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryClassesResponse | PlainMessage<QueryClassesResponse> | undefined, b: QueryClassesResponse | PlainMessage<QueryClassesResponse> | undefined): boolean {
    return proto3.util.equals(QueryClassesResponse, a, b);
  }
}

