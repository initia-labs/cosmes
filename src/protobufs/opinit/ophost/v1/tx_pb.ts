// @generated by protoc-gen-es v1.7.0 with parameter "target=ts"
// @generated from file opinit/ophost/v1/tx.proto (package opinit.ophost.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { BridgeConfig, Params } from "./types_pb.js";
import { Coin } from "../../../cosmos/base/v1beta1/coin_pb.js";

/**
 * MsgRecordBatch is no_op message, which is only for tx indexing.
 *
 * @generated from message opinit.ophost.v1.MsgRecordBatch
 */
export class MsgRecordBatch extends Message<MsgRecordBatch> {
  /**
   * @generated from field: string submitter = 1;
   */
  submitter = "";

  /**
   * @generated from field: uint64 bridge_id = 2;
   */
  bridgeId = protoInt64.zero;

  /**
   * @generated from field: bytes batch_bytes = 3;
   */
  batchBytes = new Uint8Array(0);

  constructor(data?: PartialMessage<MsgRecordBatch>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "opinit.ophost.v1.MsgRecordBatch";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "submitter", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "bridge_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "batch_bytes", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgRecordBatch {
    return new MsgRecordBatch().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgRecordBatch {
    return new MsgRecordBatch().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgRecordBatch {
    return new MsgRecordBatch().fromJsonString(jsonString, options);
  }

  static equals(a: MsgRecordBatch | PlainMessage<MsgRecordBatch> | undefined, b: MsgRecordBatch | PlainMessage<MsgRecordBatch> | undefined): boolean {
    return proto3.util.equals(MsgRecordBatch, a, b);
  }
}

/**
 * MsgRecordBatchResponse returns MsgRecordBatch message result data
 *
 * @generated from message opinit.ophost.v1.MsgRecordBatchResponse
 */
export class MsgRecordBatchResponse extends Message<MsgRecordBatchResponse> {
  constructor(data?: PartialMessage<MsgRecordBatchResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "opinit.ophost.v1.MsgRecordBatchResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgRecordBatchResponse {
    return new MsgRecordBatchResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgRecordBatchResponse {
    return new MsgRecordBatchResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgRecordBatchResponse {
    return new MsgRecordBatchResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgRecordBatchResponse | PlainMessage<MsgRecordBatchResponse> | undefined, b: MsgRecordBatchResponse | PlainMessage<MsgRecordBatchResponse> | undefined): boolean {
    return proto3.util.equals(MsgRecordBatchResponse, a, b);
  }
}

/**
 * MsgCreateBridge is a message to register a new bridge with
 * new bridge id.
 *
 * @generated from message opinit.ophost.v1.MsgCreateBridge
 */
export class MsgCreateBridge extends Message<MsgCreateBridge> {
  /**
   * @generated from field: string creator = 1;
   */
  creator = "";

  /**
   * @generated from field: opinit.ophost.v1.BridgeConfig config = 2;
   */
  config?: BridgeConfig;

  constructor(data?: PartialMessage<MsgCreateBridge>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "opinit.ophost.v1.MsgCreateBridge";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "creator", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "config", kind: "message", T: BridgeConfig },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgCreateBridge {
    return new MsgCreateBridge().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgCreateBridge {
    return new MsgCreateBridge().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgCreateBridge {
    return new MsgCreateBridge().fromJsonString(jsonString, options);
  }

  static equals(a: MsgCreateBridge | PlainMessage<MsgCreateBridge> | undefined, b: MsgCreateBridge | PlainMessage<MsgCreateBridge> | undefined): boolean {
    return proto3.util.equals(MsgCreateBridge, a, b);
  }
}

/**
 * MsgCreateBridgeResponse returns MsgCreateBridge message
 * result data
 *
 * @generated from message opinit.ophost.v1.MsgCreateBridgeResponse
 */
export class MsgCreateBridgeResponse extends Message<MsgCreateBridgeResponse> {
  /**
   * @generated from field: uint64 bridge_id = 1;
   */
  bridgeId = protoInt64.zero;

  constructor(data?: PartialMessage<MsgCreateBridgeResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "opinit.ophost.v1.MsgCreateBridgeResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "bridge_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgCreateBridgeResponse {
    return new MsgCreateBridgeResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgCreateBridgeResponse {
    return new MsgCreateBridgeResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgCreateBridgeResponse {
    return new MsgCreateBridgeResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgCreateBridgeResponse | PlainMessage<MsgCreateBridgeResponse> | undefined, b: MsgCreateBridgeResponse | PlainMessage<MsgCreateBridgeResponse> | undefined): boolean {
    return proto3.util.equals(MsgCreateBridgeResponse, a, b);
  }
}

/**
 * MsgProposeOutput is a message to submit l2 block proposal.
 *
 * @generated from message opinit.ophost.v1.MsgProposeOutput
 */
export class MsgProposeOutput extends Message<MsgProposeOutput> {
  /**
   * @generated from field: string proposer = 1;
   */
  proposer = "";

  /**
   * @generated from field: uint64 bridge_id = 2;
   */
  bridgeId = protoInt64.zero;

  /**
   * @generated from field: uint64 l2_block_number = 3;
   */
  l2BlockNumber = protoInt64.zero;

  /**
   * @generated from field: bytes output_root = 4;
   */
  outputRoot = new Uint8Array(0);

  constructor(data?: PartialMessage<MsgProposeOutput>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "opinit.ophost.v1.MsgProposeOutput";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "proposer", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "bridge_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "l2_block_number", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 4, name: "output_root", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgProposeOutput {
    return new MsgProposeOutput().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgProposeOutput {
    return new MsgProposeOutput().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgProposeOutput {
    return new MsgProposeOutput().fromJsonString(jsonString, options);
  }

  static equals(a: MsgProposeOutput | PlainMessage<MsgProposeOutput> | undefined, b: MsgProposeOutput | PlainMessage<MsgProposeOutput> | undefined): boolean {
    return proto3.util.equals(MsgProposeOutput, a, b);
  }
}

/**
 * MsgProposeOutputResponse returns deposit result data
 *
 * @generated from message opinit.ophost.v1.MsgProposeOutputResponse
 */
export class MsgProposeOutputResponse extends Message<MsgProposeOutputResponse> {
  /**
   * @generated from field: uint64 output_index = 1;
   */
  outputIndex = protoInt64.zero;

  constructor(data?: PartialMessage<MsgProposeOutputResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "opinit.ophost.v1.MsgProposeOutputResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "output_index", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgProposeOutputResponse {
    return new MsgProposeOutputResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgProposeOutputResponse {
    return new MsgProposeOutputResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgProposeOutputResponse {
    return new MsgProposeOutputResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgProposeOutputResponse | PlainMessage<MsgProposeOutputResponse> | undefined, b: MsgProposeOutputResponse | PlainMessage<MsgProposeOutputResponse> | undefined): boolean {
    return proto3.util.equals(MsgProposeOutputResponse, a, b);
  }
}

/**
 * MsgDeleteOutput is a message to delete unfinalized l2 output proposal.
 *
 * @generated from message opinit.ophost.v1.MsgDeleteOutput
 */
export class MsgDeleteOutput extends Message<MsgDeleteOutput> {
  /**
   * @generated from field: string challenger = 1;
   */
  challenger = "";

  /**
   * @generated from field: uint64 bridge_id = 2;
   */
  bridgeId = protoInt64.zero;

  /**
   * @generated from field: uint64 output_index = 3;
   */
  outputIndex = protoInt64.zero;

  constructor(data?: PartialMessage<MsgDeleteOutput>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "opinit.ophost.v1.MsgDeleteOutput";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "challenger", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "bridge_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "output_index", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgDeleteOutput {
    return new MsgDeleteOutput().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgDeleteOutput {
    return new MsgDeleteOutput().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgDeleteOutput {
    return new MsgDeleteOutput().fromJsonString(jsonString, options);
  }

  static equals(a: MsgDeleteOutput | PlainMessage<MsgDeleteOutput> | undefined, b: MsgDeleteOutput | PlainMessage<MsgDeleteOutput> | undefined): boolean {
    return proto3.util.equals(MsgDeleteOutput, a, b);
  }
}

/**
 * MsgDeleteOutputResponse returns a message handle result.
 *
 * @generated from message opinit.ophost.v1.MsgDeleteOutputResponse
 */
export class MsgDeleteOutputResponse extends Message<MsgDeleteOutputResponse> {
  constructor(data?: PartialMessage<MsgDeleteOutputResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "opinit.ophost.v1.MsgDeleteOutputResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgDeleteOutputResponse {
    return new MsgDeleteOutputResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgDeleteOutputResponse {
    return new MsgDeleteOutputResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgDeleteOutputResponse {
    return new MsgDeleteOutputResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgDeleteOutputResponse | PlainMessage<MsgDeleteOutputResponse> | undefined, b: MsgDeleteOutputResponse | PlainMessage<MsgDeleteOutputResponse> | undefined): boolean {
    return proto3.util.equals(MsgDeleteOutputResponse, a, b);
  }
}

/**
 * MsgInitiateTokenDeposit defines a SDK message for adding a new validator.
 *
 * @generated from message opinit.ophost.v1.MsgInitiateTokenDeposit
 */
export class MsgInitiateTokenDeposit extends Message<MsgInitiateTokenDeposit> {
  /**
   * @generated from field: string sender = 1;
   */
  sender = "";

  /**
   * @generated from field: uint64 bridge_id = 2;
   */
  bridgeId = protoInt64.zero;

  /**
   * @generated from field: string to = 3;
   */
  to = "";

  /**
   * @generated from field: cosmos.base.v1beta1.Coin amount = 4;
   */
  amount?: Coin;

  /**
   * @generated from field: bytes data = 5;
   */
  data = new Uint8Array(0);

  constructor(data?: PartialMessage<MsgInitiateTokenDeposit>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "opinit.ophost.v1.MsgInitiateTokenDeposit";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "sender", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "bridge_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "to", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "amount", kind: "message", T: Coin },
    { no: 5, name: "data", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgInitiateTokenDeposit {
    return new MsgInitiateTokenDeposit().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgInitiateTokenDeposit {
    return new MsgInitiateTokenDeposit().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgInitiateTokenDeposit {
    return new MsgInitiateTokenDeposit().fromJsonString(jsonString, options);
  }

  static equals(a: MsgInitiateTokenDeposit | PlainMessage<MsgInitiateTokenDeposit> | undefined, b: MsgInitiateTokenDeposit | PlainMessage<MsgInitiateTokenDeposit> | undefined): boolean {
    return proto3.util.equals(MsgInitiateTokenDeposit, a, b);
  }
}

/**
 * MsgInitiateTokenDepositResponse returns a message handle result.
 *
 * @generated from message opinit.ophost.v1.MsgInitiateTokenDepositResponse
 */
export class MsgInitiateTokenDepositResponse extends Message<MsgInitiateTokenDepositResponse> {
  /**
   * @generated from field: uint64 sequence = 1;
   */
  sequence = protoInt64.zero;

  constructor(data?: PartialMessage<MsgInitiateTokenDepositResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "opinit.ophost.v1.MsgInitiateTokenDepositResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "sequence", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgInitiateTokenDepositResponse {
    return new MsgInitiateTokenDepositResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgInitiateTokenDepositResponse {
    return new MsgInitiateTokenDepositResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgInitiateTokenDepositResponse {
    return new MsgInitiateTokenDepositResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgInitiateTokenDepositResponse | PlainMessage<MsgInitiateTokenDepositResponse> | undefined, b: MsgInitiateTokenDepositResponse | PlainMessage<MsgInitiateTokenDepositResponse> | undefined): boolean {
    return proto3.util.equals(MsgInitiateTokenDepositResponse, a, b);
  }
}

/**
 * MsgFinalizeTokenWithdrawal is a message to remove a validator from designated list
 *
 * @generated from message opinit.ophost.v1.MsgFinalizeTokenWithdrawal
 */
export class MsgFinalizeTokenWithdrawal extends Message<MsgFinalizeTokenWithdrawal> {
  /**
   * @generated from field: uint64 bridge_id = 2;
   */
  bridgeId = protoInt64.zero;

  /**
   * @generated from field: uint64 output_index = 3;
   */
  outputIndex = protoInt64.zero;

  /**
   * @generated from field: repeated bytes withdrawal_proofs = 4;
   */
  withdrawalProofs: Uint8Array[] = [];

  /**
   * @generated from field: string sender = 1;
   */
  sender = "";

  /**
   * @generated from field: string receiver = 5;
   */
  receiver = "";

  /**
   * @generated from field: uint64 sequence = 6;
   */
  sequence = protoInt64.zero;

  /**
   * @generated from field: cosmos.base.v1beta1.Coin amount = 7;
   */
  amount?: Coin;

  /**
   * version of the output root
   *
   * @generated from field: bytes version = 8;
   */
  version = new Uint8Array(0);

  /**
   * @generated from field: bytes state_root = 9;
   */
  stateRoot = new Uint8Array(0);

  /**
   * @generated from field: bytes storage_root = 10;
   */
  storageRoot = new Uint8Array(0);

  /**
   * @generated from field: bytes latest_block_hash = 11;
   */
  latestBlockHash = new Uint8Array(0);

  constructor(data?: PartialMessage<MsgFinalizeTokenWithdrawal>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "opinit.ophost.v1.MsgFinalizeTokenWithdrawal";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 2, name: "bridge_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "output_index", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 4, name: "withdrawal_proofs", kind: "scalar", T: 12 /* ScalarType.BYTES */, repeated: true },
    { no: 1, name: "sender", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "receiver", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "sequence", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 7, name: "amount", kind: "message", T: Coin },
    { no: 8, name: "version", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 9, name: "state_root", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 10, name: "storage_root", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 11, name: "latest_block_hash", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgFinalizeTokenWithdrawal {
    return new MsgFinalizeTokenWithdrawal().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgFinalizeTokenWithdrawal {
    return new MsgFinalizeTokenWithdrawal().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgFinalizeTokenWithdrawal {
    return new MsgFinalizeTokenWithdrawal().fromJsonString(jsonString, options);
  }

  static equals(a: MsgFinalizeTokenWithdrawal | PlainMessage<MsgFinalizeTokenWithdrawal> | undefined, b: MsgFinalizeTokenWithdrawal | PlainMessage<MsgFinalizeTokenWithdrawal> | undefined): boolean {
    return proto3.util.equals(MsgFinalizeTokenWithdrawal, a, b);
  }
}

/**
 * MsgFinalizeTokenWithdrawalResponse returns a message handle result.
 *
 * @generated from message opinit.ophost.v1.MsgFinalizeTokenWithdrawalResponse
 */
export class MsgFinalizeTokenWithdrawalResponse extends Message<MsgFinalizeTokenWithdrawalResponse> {
  constructor(data?: PartialMessage<MsgFinalizeTokenWithdrawalResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "opinit.ophost.v1.MsgFinalizeTokenWithdrawalResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgFinalizeTokenWithdrawalResponse {
    return new MsgFinalizeTokenWithdrawalResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgFinalizeTokenWithdrawalResponse {
    return new MsgFinalizeTokenWithdrawalResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgFinalizeTokenWithdrawalResponse {
    return new MsgFinalizeTokenWithdrawalResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgFinalizeTokenWithdrawalResponse | PlainMessage<MsgFinalizeTokenWithdrawalResponse> | undefined, b: MsgFinalizeTokenWithdrawalResponse | PlainMessage<MsgFinalizeTokenWithdrawalResponse> | undefined): boolean {
    return proto3.util.equals(MsgFinalizeTokenWithdrawalResponse, a, b);
  }
}

/**
 * MsgUpdateProposer is a message to change a proposer
 *
 * @generated from message opinit.ophost.v1.MsgUpdateProposer
 */
export class MsgUpdateProposer extends Message<MsgUpdateProposer> {
  /**
   * authority is the address that controls the module
   * (defaults to x/gov unless overwritten).
   *
   * @generated from field: string authority = 1;
   */
  authority = "";

  /**
   * @generated from field: uint64 bridge_id = 2;
   */
  bridgeId = protoInt64.zero;

  /**
   * @generated from field: string new_proposer = 3;
   */
  newProposer = "";

  constructor(data?: PartialMessage<MsgUpdateProposer>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "opinit.ophost.v1.MsgUpdateProposer";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "authority", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "bridge_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "new_proposer", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUpdateProposer {
    return new MsgUpdateProposer().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUpdateProposer {
    return new MsgUpdateProposer().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUpdateProposer {
    return new MsgUpdateProposer().fromJsonString(jsonString, options);
  }

  static equals(a: MsgUpdateProposer | PlainMessage<MsgUpdateProposer> | undefined, b: MsgUpdateProposer | PlainMessage<MsgUpdateProposer> | undefined): boolean {
    return proto3.util.equals(MsgUpdateProposer, a, b);
  }
}

/**
 * MsgUpdateProposerResponse returns a message handle result.
 *
 * @generated from message opinit.ophost.v1.MsgUpdateProposerResponse
 */
export class MsgUpdateProposerResponse extends Message<MsgUpdateProposerResponse> {
  constructor(data?: PartialMessage<MsgUpdateProposerResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "opinit.ophost.v1.MsgUpdateProposerResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUpdateProposerResponse {
    return new MsgUpdateProposerResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUpdateProposerResponse {
    return new MsgUpdateProposerResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUpdateProposerResponse {
    return new MsgUpdateProposerResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgUpdateProposerResponse | PlainMessage<MsgUpdateProposerResponse> | undefined, b: MsgUpdateProposerResponse | PlainMessage<MsgUpdateProposerResponse> | undefined): boolean {
    return proto3.util.equals(MsgUpdateProposerResponse, a, b);
  }
}

/**
 * MsgUpdateChallenger is a message to change a challenger
 *
 * @generated from message opinit.ophost.v1.MsgUpdateChallenger
 */
export class MsgUpdateChallenger extends Message<MsgUpdateChallenger> {
  /**
   * authority is the address that controls the module
   * (defaults to x/gov unless overwritten).
   *
   * @generated from field: string authority = 1;
   */
  authority = "";

  /**
   * @generated from field: uint64 bridge_id = 2;
   */
  bridgeId = protoInt64.zero;

  /**
   * @generated from field: string new_challenger = 3;
   */
  newChallenger = "";

  constructor(data?: PartialMessage<MsgUpdateChallenger>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "opinit.ophost.v1.MsgUpdateChallenger";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "authority", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "bridge_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "new_challenger", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUpdateChallenger {
    return new MsgUpdateChallenger().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUpdateChallenger {
    return new MsgUpdateChallenger().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUpdateChallenger {
    return new MsgUpdateChallenger().fromJsonString(jsonString, options);
  }

  static equals(a: MsgUpdateChallenger | PlainMessage<MsgUpdateChallenger> | undefined, b: MsgUpdateChallenger | PlainMessage<MsgUpdateChallenger> | undefined): boolean {
    return proto3.util.equals(MsgUpdateChallenger, a, b);
  }
}

/**
 * MsgUpdateChallengerResponse returns a message handle result.
 *
 * @generated from message opinit.ophost.v1.MsgUpdateChallengerResponse
 */
export class MsgUpdateChallengerResponse extends Message<MsgUpdateChallengerResponse> {
  constructor(data?: PartialMessage<MsgUpdateChallengerResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "opinit.ophost.v1.MsgUpdateChallengerResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUpdateChallengerResponse {
    return new MsgUpdateChallengerResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUpdateChallengerResponse {
    return new MsgUpdateChallengerResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUpdateChallengerResponse {
    return new MsgUpdateChallengerResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgUpdateChallengerResponse | PlainMessage<MsgUpdateChallengerResponse> | undefined, b: MsgUpdateChallengerResponse | PlainMessage<MsgUpdateChallengerResponse> | undefined): boolean {
    return proto3.util.equals(MsgUpdateChallengerResponse, a, b);
  }
}

/**
 * MsgUpdateParams is a message to update parameters
 *
 * @generated from message opinit.ophost.v1.MsgUpdateParams
 */
export class MsgUpdateParams extends Message<MsgUpdateParams> {
  /**
   * authority is the address that controls the module
   * (defaults to x/gov unless overwritten).
   *
   * @generated from field: string authority = 1;
   */
  authority = "";

  /**
   * params are the arbitrary parameters to be updated.
   *
   * @generated from field: opinit.ophost.v1.Params params = 2;
   */
  params?: Params;

  constructor(data?: PartialMessage<MsgUpdateParams>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "opinit.ophost.v1.MsgUpdateParams";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "authority", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "params", kind: "message", T: Params },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUpdateParams {
    return new MsgUpdateParams().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUpdateParams {
    return new MsgUpdateParams().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUpdateParams {
    return new MsgUpdateParams().fromJsonString(jsonString, options);
  }

  static equals(a: MsgUpdateParams | PlainMessage<MsgUpdateParams> | undefined, b: MsgUpdateParams | PlainMessage<MsgUpdateParams> | undefined): boolean {
    return proto3.util.equals(MsgUpdateParams, a, b);
  }
}

/**
 * MsgUpdateParamsResponse returns a message handle result.
 *
 * @generated from message opinit.ophost.v1.MsgUpdateParamsResponse
 */
export class MsgUpdateParamsResponse extends Message<MsgUpdateParamsResponse> {
  constructor(data?: PartialMessage<MsgUpdateParamsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "opinit.ophost.v1.MsgUpdateParamsResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUpdateParamsResponse {
    return new MsgUpdateParamsResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUpdateParamsResponse {
    return new MsgUpdateParamsResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUpdateParamsResponse {
    return new MsgUpdateParamsResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgUpdateParamsResponse | PlainMessage<MsgUpdateParamsResponse> | undefined, b: MsgUpdateParamsResponse | PlainMessage<MsgUpdateParamsResponse> | undefined): boolean {
    return proto3.util.equals(MsgUpdateParamsResponse, a, b);
  }
}

