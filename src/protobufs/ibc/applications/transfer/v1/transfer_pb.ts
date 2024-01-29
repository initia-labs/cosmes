// @generated by protoc-gen-es v1.7.0 with parameter "target=ts"
// @generated from file ibc/applications/transfer/v1/transfer.proto (package ibc.applications.transfer.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * DenomTrace contains the base denomination for ICS20 fungible tokens and the
 * source tracing information path.
 *
 * @generated from message ibc.applications.transfer.v1.DenomTrace
 */
export class DenomTrace extends Message<DenomTrace> {
  /**
   * path defines the chain of port/channel identifiers used for tracing the
   * source of the fungible token.
   *
   * @generated from field: string path = 1;
   */
  path = "";

  /**
   * base denomination of the relayed fungible token.
   *
   * @generated from field: string base_denom = 2;
   */
  baseDenom = "";

  constructor(data?: PartialMessage<DenomTrace>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "ibc.applications.transfer.v1.DenomTrace";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "path", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "base_denom", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DenomTrace {
    return new DenomTrace().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DenomTrace {
    return new DenomTrace().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DenomTrace {
    return new DenomTrace().fromJsonString(jsonString, options);
  }

  static equals(a: DenomTrace | PlainMessage<DenomTrace> | undefined, b: DenomTrace | PlainMessage<DenomTrace> | undefined): boolean {
    return proto3.util.equals(DenomTrace, a, b);
  }
}

/**
 * Params defines the set of IBC transfer parameters.
 * NOTE: To prevent a single token from being transferred, set the
 * TransfersEnabled parameter to true and then set the bank module's SendEnabled
 * parameter for the denomination to false.
 *
 * @generated from message ibc.applications.transfer.v1.Params
 */
export class Params extends Message<Params> {
  /**
   * send_enabled enables or disables all cross-chain token transfers from this
   * chain.
   *
   * @generated from field: bool send_enabled = 1;
   */
  sendEnabled = false;

  /**
   * receive_enabled enables or disables all cross-chain token transfers to this
   * chain.
   *
   * @generated from field: bool receive_enabled = 2;
   */
  receiveEnabled = false;

  constructor(data?: PartialMessage<Params>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "ibc.applications.transfer.v1.Params";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "send_enabled", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "receive_enabled", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Params {
    return new Params().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Params {
    return new Params().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Params {
    return new Params().fromJsonString(jsonString, options);
  }

  static equals(a: Params | PlainMessage<Params> | undefined, b: Params | PlainMessage<Params> | undefined): boolean {
    return proto3.util.equals(Params, a, b);
  }
}

