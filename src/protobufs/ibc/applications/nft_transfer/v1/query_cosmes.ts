// @generated by protoc-gen-cosmes v0.0.1 with parameter "target=ts"
// @generated from file ibc/applications/nft_transfer/v1/query.proto (package ibc.applications.nft_transfer.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { QueryClassHashRequest, QueryClassHashResponse, QueryClassTraceRequest, QueryClassTraceResponse, QueryClassTracesRequest, QueryClassTracesResponse, QueryEscrowAddressRequest, QueryEscrowAddressResponse, QueryParamsRequest, QueryParamsResponse } from "./query_pb.js";

const TYPE_NAME = "ibc.applications.nft_transfer.v1.Query";

/**
 * ClassTrace queries a denomination trace information.
 *
 * @generated from rpc ibc.applications.nft_transfer.v1.Query.ClassTrace
 */
export const QueryClassTraceService = {
  typeName: TYPE_NAME,
  method: "ClassTrace",
  Request: QueryClassTraceRequest,
  Response: QueryClassTraceResponse,
} as const;

/**
 * ClassTraces queries all denomination traces.
 *
 * @generated from rpc ibc.applications.nft_transfer.v1.Query.ClassTraces
 */
export const QueryClassTracesService = {
  typeName: TYPE_NAME,
  method: "ClassTraces",
  Request: QueryClassTracesRequest,
  Response: QueryClassTracesResponse,
} as const;

/**
 * ClassHash queries a class id hash information.
 *
 * @generated from rpc ibc.applications.nft_transfer.v1.Query.ClassHash
 */
export const QueryClassHashService = {
  typeName: TYPE_NAME,
  method: "ClassHash",
  Request: QueryClassHashRequest,
  Response: QueryClassHashResponse,
} as const;

/**
 * EscrowAddress returns the escrow address for a particular port and channel id.
 *
 * @generated from rpc ibc.applications.nft_transfer.v1.Query.EscrowAddress
 */
export const QueryEscrowAddressService = {
  typeName: TYPE_NAME,
  method: "EscrowAddress",
  Request: QueryEscrowAddressRequest,
  Response: QueryEscrowAddressResponse,
} as const;

/**
 * Params queries all parameters of the ibc-transfer module.
 *
 * @generated from rpc ibc.applications.nft_transfer.v1.Query.Params
 */
export const QueryParamsService = {
  typeName: TYPE_NAME,
  method: "Params",
  Request: QueryParamsRequest,
  Response: QueryParamsResponse,
} as const;

