// @generated by protoc-gen-es v1.7.0 with parameter "target=ts"
// @generated from file cosmos/slashing/v1beta1/genesis.proto (package cosmos.slashing.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { Params, ValidatorSigningInfo } from "./slashing_pb.js";

/**
 * GenesisState defines the slashing module's genesis state.
 *
 * @generated from message cosmos.slashing.v1beta1.GenesisState
 */
export class GenesisState extends Message<GenesisState> {
  /**
   * params defines all the parameters of the module.
   *
   * @generated from field: cosmos.slashing.v1beta1.Params params = 1;
   */
  params?: Params;

  /**
   * signing_infos represents a map between validator addresses and their
   * signing infos.
   *
   * @generated from field: repeated cosmos.slashing.v1beta1.SigningInfo signing_infos = 2;
   */
  signingInfos: SigningInfo[] = [];

  /**
   * missed_blocks represents a map between validator addresses and their
   * missed blocks.
   *
   * @generated from field: repeated cosmos.slashing.v1beta1.ValidatorMissedBlocks missed_blocks = 3;
   */
  missedBlocks: ValidatorMissedBlocks[] = [];

  constructor(data?: PartialMessage<GenesisState>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.slashing.v1beta1.GenesisState";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "params", kind: "message", T: Params },
    { no: 2, name: "signing_infos", kind: "message", T: SigningInfo, repeated: true },
    { no: 3, name: "missed_blocks", kind: "message", T: ValidatorMissedBlocks, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GenesisState {
    return new GenesisState().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GenesisState {
    return new GenesisState().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GenesisState {
    return new GenesisState().fromJsonString(jsonString, options);
  }

  static equals(a: GenesisState | PlainMessage<GenesisState> | undefined, b: GenesisState | PlainMessage<GenesisState> | undefined): boolean {
    return proto3.util.equals(GenesisState, a, b);
  }
}

/**
 * SigningInfo stores validator signing info of corresponding address.
 *
 * @generated from message cosmos.slashing.v1beta1.SigningInfo
 */
export class SigningInfo extends Message<SigningInfo> {
  /**
   * address is the validator address.
   *
   * @generated from field: string address = 1;
   */
  address = "";

  /**
   * validator_signing_info represents the signing info of this validator.
   *
   * @generated from field: cosmos.slashing.v1beta1.ValidatorSigningInfo validator_signing_info = 2;
   */
  validatorSigningInfo?: ValidatorSigningInfo;

  constructor(data?: PartialMessage<SigningInfo>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.slashing.v1beta1.SigningInfo";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "validator_signing_info", kind: "message", T: ValidatorSigningInfo },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SigningInfo {
    return new SigningInfo().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SigningInfo {
    return new SigningInfo().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SigningInfo {
    return new SigningInfo().fromJsonString(jsonString, options);
  }

  static equals(a: SigningInfo | PlainMessage<SigningInfo> | undefined, b: SigningInfo | PlainMessage<SigningInfo> | undefined): boolean {
    return proto3.util.equals(SigningInfo, a, b);
  }
}

/**
 * ValidatorMissedBlocks contains array of missed blocks of corresponding
 * address.
 *
 * @generated from message cosmos.slashing.v1beta1.ValidatorMissedBlocks
 */
export class ValidatorMissedBlocks extends Message<ValidatorMissedBlocks> {
  /**
   * address is the validator address.
   *
   * @generated from field: string address = 1;
   */
  address = "";

  /**
   * missed_blocks is an array of missed blocks by the validator.
   *
   * @generated from field: repeated cosmos.slashing.v1beta1.MissedBlock missed_blocks = 2;
   */
  missedBlocks: MissedBlock[] = [];

  constructor(data?: PartialMessage<ValidatorMissedBlocks>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.slashing.v1beta1.ValidatorMissedBlocks";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "missed_blocks", kind: "message", T: MissedBlock, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ValidatorMissedBlocks {
    return new ValidatorMissedBlocks().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ValidatorMissedBlocks {
    return new ValidatorMissedBlocks().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ValidatorMissedBlocks {
    return new ValidatorMissedBlocks().fromJsonString(jsonString, options);
  }

  static equals(a: ValidatorMissedBlocks | PlainMessage<ValidatorMissedBlocks> | undefined, b: ValidatorMissedBlocks | PlainMessage<ValidatorMissedBlocks> | undefined): boolean {
    return proto3.util.equals(ValidatorMissedBlocks, a, b);
  }
}

/**
 * MissedBlock contains height and missed status as boolean.
 *
 * @generated from message cosmos.slashing.v1beta1.MissedBlock
 */
export class MissedBlock extends Message<MissedBlock> {
  /**
   * index is the height at which the block was missed.
   *
   * @generated from field: int64 index = 1;
   */
  index = protoInt64.zero;

  /**
   * missed is the missed status.
   *
   * @generated from field: bool missed = 2;
   */
  missed = false;

  constructor(data?: PartialMessage<MissedBlock>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.slashing.v1beta1.MissedBlock";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "index", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "missed", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MissedBlock {
    return new MissedBlock().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MissedBlock {
    return new MissedBlock().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MissedBlock {
    return new MissedBlock().fromJsonString(jsonString, options);
  }

  static equals(a: MissedBlock | PlainMessage<MissedBlock> | undefined, b: MissedBlock | PlainMessage<MissedBlock> | undefined): boolean {
    return proto3.util.equals(MissedBlock, a, b);
  }
}

