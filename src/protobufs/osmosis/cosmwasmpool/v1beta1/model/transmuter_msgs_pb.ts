// @generated by protoc-gen-es v1.7.0 with parameter "target=ts"
// @generated from file osmosis/cosmwasmpool/v1beta1/model/transmuter_msgs.proto (package osmosis.cosmwasmpool.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * ===================== JoinPoolExecuteMsg
 *
 * @generated from message osmosis.cosmwasmpool.v1beta1.EmptyRequest
 */
export class EmptyRequest extends Message<EmptyRequest> {
  constructor(data?: PartialMessage<EmptyRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "osmosis.cosmwasmpool.v1beta1.EmptyRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EmptyRequest {
    return new EmptyRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EmptyRequest {
    return new EmptyRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EmptyRequest {
    return new EmptyRequest().fromJsonString(jsonString, options);
  }

  static equals(a: EmptyRequest | PlainMessage<EmptyRequest> | undefined, b: EmptyRequest | PlainMessage<EmptyRequest> | undefined): boolean {
    return proto3.util.equals(EmptyRequest, a, b);
  }
}

/**
 * @generated from message osmosis.cosmwasmpool.v1beta1.JoinPoolExecuteMsgRequest
 */
export class JoinPoolExecuteMsgRequest extends Message<JoinPoolExecuteMsgRequest> {
  /**
   * join_pool is the structure containing all request fields of the join pool
   * execute message.
   *
   * @generated from field: osmosis.cosmwasmpool.v1beta1.EmptyRequest join_pool = 1;
   */
  joinPool?: EmptyRequest;

  constructor(data?: PartialMessage<JoinPoolExecuteMsgRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "osmosis.cosmwasmpool.v1beta1.JoinPoolExecuteMsgRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "join_pool", kind: "message", T: EmptyRequest },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): JoinPoolExecuteMsgRequest {
    return new JoinPoolExecuteMsgRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): JoinPoolExecuteMsgRequest {
    return new JoinPoolExecuteMsgRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): JoinPoolExecuteMsgRequest {
    return new JoinPoolExecuteMsgRequest().fromJsonString(jsonString, options);
  }

  static equals(a: JoinPoolExecuteMsgRequest | PlainMessage<JoinPoolExecuteMsgRequest> | undefined, b: JoinPoolExecuteMsgRequest | PlainMessage<JoinPoolExecuteMsgRequest> | undefined): boolean {
    return proto3.util.equals(JoinPoolExecuteMsgRequest, a, b);
  }
}

/**
 * @generated from message osmosis.cosmwasmpool.v1beta1.JoinPoolExecuteMsgResponse
 */
export class JoinPoolExecuteMsgResponse extends Message<JoinPoolExecuteMsgResponse> {
  constructor(data?: PartialMessage<JoinPoolExecuteMsgResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "osmosis.cosmwasmpool.v1beta1.JoinPoolExecuteMsgResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): JoinPoolExecuteMsgResponse {
    return new JoinPoolExecuteMsgResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): JoinPoolExecuteMsgResponse {
    return new JoinPoolExecuteMsgResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): JoinPoolExecuteMsgResponse {
    return new JoinPoolExecuteMsgResponse().fromJsonString(jsonString, options);
  }

  static equals(a: JoinPoolExecuteMsgResponse | PlainMessage<JoinPoolExecuteMsgResponse> | undefined, b: JoinPoolExecuteMsgResponse | PlainMessage<JoinPoolExecuteMsgResponse> | undefined): boolean {
    return proto3.util.equals(JoinPoolExecuteMsgResponse, a, b);
  }
}

/**
 * ===================== ExitPoolExecuteMsg
 *
 * @generated from message osmosis.cosmwasmpool.v1beta1.ExitPoolExecuteMsgRequest
 */
export class ExitPoolExecuteMsgRequest extends Message<ExitPoolExecuteMsgRequest> {
  /**
   * exit_pool is the structure containing all request fields of the exit pool
   * execute message.
   *
   * @generated from field: osmosis.cosmwasmpool.v1beta1.EmptyRequest exit_pool = 1;
   */
  exitPool?: EmptyRequest;

  constructor(data?: PartialMessage<ExitPoolExecuteMsgRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "osmosis.cosmwasmpool.v1beta1.ExitPoolExecuteMsgRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "exit_pool", kind: "message", T: EmptyRequest },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ExitPoolExecuteMsgRequest {
    return new ExitPoolExecuteMsgRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ExitPoolExecuteMsgRequest {
    return new ExitPoolExecuteMsgRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ExitPoolExecuteMsgRequest {
    return new ExitPoolExecuteMsgRequest().fromJsonString(jsonString, options);
  }

  static equals(a: ExitPoolExecuteMsgRequest | PlainMessage<ExitPoolExecuteMsgRequest> | undefined, b: ExitPoolExecuteMsgRequest | PlainMessage<ExitPoolExecuteMsgRequest> | undefined): boolean {
    return proto3.util.equals(ExitPoolExecuteMsgRequest, a, b);
  }
}

/**
 * @generated from message osmosis.cosmwasmpool.v1beta1.ExitPoolExecuteMsgResponse
 */
export class ExitPoolExecuteMsgResponse extends Message<ExitPoolExecuteMsgResponse> {
  constructor(data?: PartialMessage<ExitPoolExecuteMsgResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "osmosis.cosmwasmpool.v1beta1.ExitPoolExecuteMsgResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ExitPoolExecuteMsgResponse {
    return new ExitPoolExecuteMsgResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ExitPoolExecuteMsgResponse {
    return new ExitPoolExecuteMsgResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ExitPoolExecuteMsgResponse {
    return new ExitPoolExecuteMsgResponse().fromJsonString(jsonString, options);
  }

  static equals(a: ExitPoolExecuteMsgResponse | PlainMessage<ExitPoolExecuteMsgResponse> | undefined, b: ExitPoolExecuteMsgResponse | PlainMessage<ExitPoolExecuteMsgResponse> | undefined): boolean {
    return proto3.util.equals(ExitPoolExecuteMsgResponse, a, b);
  }
}

