// @generated by protoc-gen-es v1.7.0 with parameter "target=ts"
// @generated from file cosmwasm/wasm/v1/ibc.proto (package cosmwasm.wasm.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";

/**
 * MsgIBCSend
 *
 * @generated from message cosmwasm.wasm.v1.MsgIBCSend
 */
export class MsgIBCSend extends Message<MsgIBCSend> {
  /**
   * the channel by which the packet will be sent
   *
   * @generated from field: string channel = 2;
   */
  channel = "";

  /**
   * Timeout height relative to the current block height.
   * The timeout is disabled when set to 0.
   *
   * @generated from field: uint64 timeout_height = 4;
   */
  timeoutHeight = protoInt64.zero;

  /**
   * Timeout timestamp (in nanoseconds) relative to the current block timestamp.
   * The timeout is disabled when set to 0.
   *
   * @generated from field: uint64 timeout_timestamp = 5;
   */
  timeoutTimestamp = protoInt64.zero;

  /**
   * Data is the payload to transfer. We must not make assumption what format or
   * content is in here.
   *
   * @generated from field: bytes data = 6;
   */
  data = new Uint8Array(0);

  constructor(data?: PartialMessage<MsgIBCSend>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmwasm.wasm.v1.MsgIBCSend";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 2, name: "channel", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "timeout_height", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 5, name: "timeout_timestamp", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 6, name: "data", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgIBCSend {
    return new MsgIBCSend().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgIBCSend {
    return new MsgIBCSend().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgIBCSend {
    return new MsgIBCSend().fromJsonString(jsonString, options);
  }

  static equals(a: MsgIBCSend | PlainMessage<MsgIBCSend> | undefined, b: MsgIBCSend | PlainMessage<MsgIBCSend> | undefined): boolean {
    return proto3.util.equals(MsgIBCSend, a, b);
  }
}

/**
 * MsgIBCSendResponse
 *
 * @generated from message cosmwasm.wasm.v1.MsgIBCSendResponse
 */
export class MsgIBCSendResponse extends Message<MsgIBCSendResponse> {
  /**
   * Sequence number of the IBC packet sent
   *
   * @generated from field: uint64 sequence = 1;
   */
  sequence = protoInt64.zero;

  constructor(data?: PartialMessage<MsgIBCSendResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmwasm.wasm.v1.MsgIBCSendResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "sequence", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgIBCSendResponse {
    return new MsgIBCSendResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgIBCSendResponse {
    return new MsgIBCSendResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgIBCSendResponse {
    return new MsgIBCSendResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgIBCSendResponse | PlainMessage<MsgIBCSendResponse> | undefined, b: MsgIBCSendResponse | PlainMessage<MsgIBCSendResponse> | undefined): boolean {
    return proto3.util.equals(MsgIBCSendResponse, a, b);
  }
}

/**
 * MsgIBCCloseChannel port and channel need to be owned by the contract
 *
 * @generated from message cosmwasm.wasm.v1.MsgIBCCloseChannel
 */
export class MsgIBCCloseChannel extends Message<MsgIBCCloseChannel> {
  /**
   * @generated from field: string channel = 2;
   */
  channel = "";

  constructor(data?: PartialMessage<MsgIBCCloseChannel>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmwasm.wasm.v1.MsgIBCCloseChannel";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 2, name: "channel", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgIBCCloseChannel {
    return new MsgIBCCloseChannel().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgIBCCloseChannel {
    return new MsgIBCCloseChannel().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgIBCCloseChannel {
    return new MsgIBCCloseChannel().fromJsonString(jsonString, options);
  }

  static equals(a: MsgIBCCloseChannel | PlainMessage<MsgIBCCloseChannel> | undefined, b: MsgIBCCloseChannel | PlainMessage<MsgIBCCloseChannel> | undefined): boolean {
    return proto3.util.equals(MsgIBCCloseChannel, a, b);
  }
}

