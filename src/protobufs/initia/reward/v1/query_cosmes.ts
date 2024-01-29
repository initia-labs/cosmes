// @generated by protoc-gen-cosmes v0.0.1 with parameter "target=ts"
// @generated from file initia/reward/v1/query.proto (package initia.reward.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { QueryAnnualProvisionsRequest, QueryAnnualProvisionsResponse, QueryLastDilutionTimestampRequest, QueryLastDilutionTimestampResponse, QueryParamsRequest, QueryParamsResponse } from "./query_pb.js";

const TYPE_NAME = "initia.reward.v1.Query";

/**
 * Params returns the total set of minting parameters.
 *
 * @generated from rpc initia.reward.v1.Query.Params
 */
export const QueryParamsService = {
  typeName: TYPE_NAME,
  method: "Params",
  Request: QueryParamsRequest,
  Response: QueryParamsResponse,
} as const;

/**
 * AnnualProvisions returns current minting annual provisions value.
 *
 * @generated from rpc initia.reward.v1.Query.AnnualProvisions
 */
export const QueryAnnualProvisionsService = {
  typeName: TYPE_NAME,
  method: "AnnualProvisions",
  Request: QueryAnnualProvisionsRequest,
  Response: QueryAnnualProvisionsResponse,
} as const;

/**
 * LastDilutionTimestamp returns the time when the last release rate dilution occurred.
 *
 * @generated from rpc initia.reward.v1.Query.LastDilutionTimestamp
 */
export const QueryLastDilutionTimestampService = {
  typeName: TYPE_NAME,
  method: "LastDilutionTimestamp",
  Request: QueryLastDilutionTimestampRequest,
  Response: QueryLastDilutionTimestampResponse,
} as const;

