// @generated by protoc-gen-es v1.7.0 with parameter "target=ts"
// @generated from file injective/peggy/v1/types.proto (package injective.peggy.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";

/**
 * BridgeValidator represents a validator's ETH address and its power
 *
 * @generated from message injective.peggy.v1.BridgeValidator
 */
export class BridgeValidator extends Message<BridgeValidator> {
  /**
   * @generated from field: uint64 power = 1;
   */
  power = protoInt64.zero;

  /**
   * @generated from field: string ethereum_address = 2;
   */
  ethereumAddress = "";

  constructor(data?: PartialMessage<BridgeValidator>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "injective.peggy.v1.BridgeValidator";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "power", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "ethereum_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BridgeValidator {
    return new BridgeValidator().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BridgeValidator {
    return new BridgeValidator().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BridgeValidator {
    return new BridgeValidator().fromJsonString(jsonString, options);
  }

  static equals(a: BridgeValidator | PlainMessage<BridgeValidator> | undefined, b: BridgeValidator | PlainMessage<BridgeValidator> | undefined): boolean {
    return proto3.util.equals(BridgeValidator, a, b);
  }
}

/**
 * Valset is the Ethereum Bridge Multsig Set, each peggy validator also
 * maintains an ETH key to sign messages, these are used to check signatures on
 * ETH because of the significant gas savings
 *
 * @generated from message injective.peggy.v1.Valset
 */
export class Valset extends Message<Valset> {
  /**
   * @generated from field: uint64 nonce = 1;
   */
  nonce = protoInt64.zero;

  /**
   * @generated from field: repeated injective.peggy.v1.BridgeValidator members = 2;
   */
  members: BridgeValidator[] = [];

  /**
   * @generated from field: uint64 height = 3;
   */
  height = protoInt64.zero;

  /**
   * @generated from field: string reward_amount = 4;
   */
  rewardAmount = "";

  /**
   * the reward token in it's Ethereum hex address representation
   *
   * @generated from field: string reward_token = 5;
   */
  rewardToken = "";

  constructor(data?: PartialMessage<Valset>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "injective.peggy.v1.Valset";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "nonce", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "members", kind: "message", T: BridgeValidator, repeated: true },
    { no: 3, name: "height", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 4, name: "reward_amount", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "reward_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Valset {
    return new Valset().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Valset {
    return new Valset().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Valset {
    return new Valset().fromJsonString(jsonString, options);
  }

  static equals(a: Valset | PlainMessage<Valset> | undefined, b: Valset | PlainMessage<Valset> | undefined): boolean {
    return proto3.util.equals(Valset, a, b);
  }
}

/**
 * LastObservedEthereumBlockHeight stores the last observed
 * Ethereum block height along with the Cosmos block height that
 * it was observed at. These two numbers can be used to project
 * outward and always produce batches with timeouts in the future
 * even if no Ethereum block height has been relayed for a long time
 *
 * @generated from message injective.peggy.v1.LastObservedEthereumBlockHeight
 */
export class LastObservedEthereumBlockHeight extends Message<LastObservedEthereumBlockHeight> {
  /**
   * @generated from field: uint64 cosmos_block_height = 1;
   */
  cosmosBlockHeight = protoInt64.zero;

  /**
   * @generated from field: uint64 ethereum_block_height = 2;
   */
  ethereumBlockHeight = protoInt64.zero;

  constructor(data?: PartialMessage<LastObservedEthereumBlockHeight>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "injective.peggy.v1.LastObservedEthereumBlockHeight";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "cosmos_block_height", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "ethereum_block_height", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LastObservedEthereumBlockHeight {
    return new LastObservedEthereumBlockHeight().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LastObservedEthereumBlockHeight {
    return new LastObservedEthereumBlockHeight().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LastObservedEthereumBlockHeight {
    return new LastObservedEthereumBlockHeight().fromJsonString(jsonString, options);
  }

  static equals(a: LastObservedEthereumBlockHeight | PlainMessage<LastObservedEthereumBlockHeight> | undefined, b: LastObservedEthereumBlockHeight | PlainMessage<LastObservedEthereumBlockHeight> | undefined): boolean {
    return proto3.util.equals(LastObservedEthereumBlockHeight, a, b);
  }
}

/**
 * LastClaimEvent stores last claim event details of validator.
 *
 * @generated from message injective.peggy.v1.LastClaimEvent
 */
export class LastClaimEvent extends Message<LastClaimEvent> {
  /**
   * @generated from field: uint64 ethereum_event_nonce = 1;
   */
  ethereumEventNonce = protoInt64.zero;

  /**
   * @generated from field: uint64 ethereum_event_height = 2;
   */
  ethereumEventHeight = protoInt64.zero;

  constructor(data?: PartialMessage<LastClaimEvent>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "injective.peggy.v1.LastClaimEvent";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "ethereum_event_nonce", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "ethereum_event_height", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LastClaimEvent {
    return new LastClaimEvent().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LastClaimEvent {
    return new LastClaimEvent().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LastClaimEvent {
    return new LastClaimEvent().fromJsonString(jsonString, options);
  }

  static equals(a: LastClaimEvent | PlainMessage<LastClaimEvent> | undefined, b: LastClaimEvent | PlainMessage<LastClaimEvent> | undefined): boolean {
    return proto3.util.equals(LastClaimEvent, a, b);
  }
}

/**
 * This records the relationship between an ERC20 token and the denom
 * of the corresponding Cosmos originated asset
 *
 * @generated from message injective.peggy.v1.ERC20ToDenom
 */
export class ERC20ToDenom extends Message<ERC20ToDenom> {
  /**
   * @generated from field: string erc20 = 1;
   */
  erc20 = "";

  /**
   * @generated from field: string denom = 2;
   */
  denom = "";

  constructor(data?: PartialMessage<ERC20ToDenom>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "injective.peggy.v1.ERC20ToDenom";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "erc20", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "denom", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ERC20ToDenom {
    return new ERC20ToDenom().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ERC20ToDenom {
    return new ERC20ToDenom().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ERC20ToDenom {
    return new ERC20ToDenom().fromJsonString(jsonString, options);
  }

  static equals(a: ERC20ToDenom | PlainMessage<ERC20ToDenom> | undefined, b: ERC20ToDenom | PlainMessage<ERC20ToDenom> | undefined): boolean {
    return proto3.util.equals(ERC20ToDenom, a, b);
  }
}

