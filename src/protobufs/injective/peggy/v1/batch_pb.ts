// @generated by protoc-gen-es v1.7.0 with parameter "target=ts"
// @generated from file injective/peggy/v1/batch.proto (package injective.peggy.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { ERC20Token } from "./attestation_pb.js";

/**
 * OutgoingTxBatch represents a batch of transactions going from Peggy to ETH
 *
 * @generated from message injective.peggy.v1.OutgoingTxBatch
 */
export class OutgoingTxBatch extends Message<OutgoingTxBatch> {
  /**
   * @generated from field: uint64 batch_nonce = 1;
   */
  batchNonce = protoInt64.zero;

  /**
   * @generated from field: uint64 batch_timeout = 2;
   */
  batchTimeout = protoInt64.zero;

  /**
   * @generated from field: repeated injective.peggy.v1.OutgoingTransferTx transactions = 3;
   */
  transactions: OutgoingTransferTx[] = [];

  /**
   * @generated from field: string token_contract = 4;
   */
  tokenContract = "";

  /**
   * @generated from field: uint64 block = 5;
   */
  block = protoInt64.zero;

  constructor(data?: PartialMessage<OutgoingTxBatch>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "injective.peggy.v1.OutgoingTxBatch";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "batch_nonce", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "batch_timeout", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "transactions", kind: "message", T: OutgoingTransferTx, repeated: true },
    { no: 4, name: "token_contract", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "block", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OutgoingTxBatch {
    return new OutgoingTxBatch().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OutgoingTxBatch {
    return new OutgoingTxBatch().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OutgoingTxBatch {
    return new OutgoingTxBatch().fromJsonString(jsonString, options);
  }

  static equals(a: OutgoingTxBatch | PlainMessage<OutgoingTxBatch> | undefined, b: OutgoingTxBatch | PlainMessage<OutgoingTxBatch> | undefined): boolean {
    return proto3.util.equals(OutgoingTxBatch, a, b);
  }
}

/**
 * OutgoingTransferTx represents an individual send from Peggy to ETH
 *
 * @generated from message injective.peggy.v1.OutgoingTransferTx
 */
export class OutgoingTransferTx extends Message<OutgoingTransferTx> {
  /**
   * @generated from field: uint64 id = 1;
   */
  id = protoInt64.zero;

  /**
   * @generated from field: string sender = 2;
   */
  sender = "";

  /**
   * @generated from field: string dest_address = 3;
   */
  destAddress = "";

  /**
   * @generated from field: injective.peggy.v1.ERC20Token erc20_token = 4;
   */
  erc20Token?: ERC20Token;

  /**
   * @generated from field: injective.peggy.v1.ERC20Token erc20_fee = 5;
   */
  erc20Fee?: ERC20Token;

  constructor(data?: PartialMessage<OutgoingTransferTx>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "injective.peggy.v1.OutgoingTransferTx";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "sender", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "dest_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "erc20_token", kind: "message", T: ERC20Token },
    { no: 5, name: "erc20_fee", kind: "message", T: ERC20Token },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OutgoingTransferTx {
    return new OutgoingTransferTx().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OutgoingTransferTx {
    return new OutgoingTransferTx().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OutgoingTransferTx {
    return new OutgoingTransferTx().fromJsonString(jsonString, options);
  }

  static equals(a: OutgoingTransferTx | PlainMessage<OutgoingTransferTx> | undefined, b: OutgoingTransferTx | PlainMessage<OutgoingTransferTx> | undefined): boolean {
    return proto3.util.equals(OutgoingTransferTx, a, b);
  }
}

