// @generated by protoc-gen-es v1.7.0 with parameter "target=ts"
// @generated from file cosmos/vesting/v1beta1/tx.proto (package cosmos.vesting.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { Coin } from "../../base/v1beta1/coin_pb.js";
import { Period } from "./vesting_pb.js";

/**
 * MsgCreateVestingAccount defines a message that enables creating a vesting
 * account.
 *
 * @generated from message cosmos.vesting.v1beta1.MsgCreateVestingAccount
 */
export class MsgCreateVestingAccount extends Message<MsgCreateVestingAccount> {
  /**
   * @generated from field: string from_address = 1;
   */
  fromAddress = "";

  /**
   * @generated from field: string to_address = 2;
   */
  toAddress = "";

  /**
   * @generated from field: repeated cosmos.base.v1beta1.Coin amount = 3;
   */
  amount: Coin[] = [];

  /**
   * end of vesting as unix time (in seconds).
   *
   * @generated from field: int64 end_time = 4;
   */
  endTime = protoInt64.zero;

  /**
   * @generated from field: bool delayed = 5;
   */
  delayed = false;

  constructor(data?: PartialMessage<MsgCreateVestingAccount>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.vesting.v1beta1.MsgCreateVestingAccount";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "from_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "to_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "amount", kind: "message", T: Coin, repeated: true },
    { no: 4, name: "end_time", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 5, name: "delayed", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgCreateVestingAccount {
    return new MsgCreateVestingAccount().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgCreateVestingAccount {
    return new MsgCreateVestingAccount().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgCreateVestingAccount {
    return new MsgCreateVestingAccount().fromJsonString(jsonString, options);
  }

  static equals(a: MsgCreateVestingAccount | PlainMessage<MsgCreateVestingAccount> | undefined, b: MsgCreateVestingAccount | PlainMessage<MsgCreateVestingAccount> | undefined): boolean {
    return proto3.util.equals(MsgCreateVestingAccount, a, b);
  }
}

/**
 * MsgCreateVestingAccountResponse defines the Msg/CreateVestingAccount response type.
 *
 * @generated from message cosmos.vesting.v1beta1.MsgCreateVestingAccountResponse
 */
export class MsgCreateVestingAccountResponse extends Message<MsgCreateVestingAccountResponse> {
  constructor(data?: PartialMessage<MsgCreateVestingAccountResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.vesting.v1beta1.MsgCreateVestingAccountResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgCreateVestingAccountResponse {
    return new MsgCreateVestingAccountResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgCreateVestingAccountResponse {
    return new MsgCreateVestingAccountResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgCreateVestingAccountResponse {
    return new MsgCreateVestingAccountResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgCreateVestingAccountResponse | PlainMessage<MsgCreateVestingAccountResponse> | undefined, b: MsgCreateVestingAccountResponse | PlainMessage<MsgCreateVestingAccountResponse> | undefined): boolean {
    return proto3.util.equals(MsgCreateVestingAccountResponse, a, b);
  }
}

/**
 * MsgCreatePermanentLockedAccount defines a message that enables creating a permanent
 * locked account.
 *
 * Since: cosmos-sdk 0.46
 *
 * @generated from message cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount
 */
export class MsgCreatePermanentLockedAccount extends Message<MsgCreatePermanentLockedAccount> {
  /**
   * @generated from field: string from_address = 1;
   */
  fromAddress = "";

  /**
   * @generated from field: string to_address = 2;
   */
  toAddress = "";

  /**
   * @generated from field: repeated cosmos.base.v1beta1.Coin amount = 3;
   */
  amount: Coin[] = [];

  constructor(data?: PartialMessage<MsgCreatePermanentLockedAccount>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "from_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "to_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "amount", kind: "message", T: Coin, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgCreatePermanentLockedAccount {
    return new MsgCreatePermanentLockedAccount().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgCreatePermanentLockedAccount {
    return new MsgCreatePermanentLockedAccount().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgCreatePermanentLockedAccount {
    return new MsgCreatePermanentLockedAccount().fromJsonString(jsonString, options);
  }

  static equals(a: MsgCreatePermanentLockedAccount | PlainMessage<MsgCreatePermanentLockedAccount> | undefined, b: MsgCreatePermanentLockedAccount | PlainMessage<MsgCreatePermanentLockedAccount> | undefined): boolean {
    return proto3.util.equals(MsgCreatePermanentLockedAccount, a, b);
  }
}

/**
 * MsgCreatePermanentLockedAccountResponse defines the Msg/CreatePermanentLockedAccount response type.
 *
 * Since: cosmos-sdk 0.46
 *
 * @generated from message cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccountResponse
 */
export class MsgCreatePermanentLockedAccountResponse extends Message<MsgCreatePermanentLockedAccountResponse> {
  constructor(data?: PartialMessage<MsgCreatePermanentLockedAccountResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccountResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgCreatePermanentLockedAccountResponse {
    return new MsgCreatePermanentLockedAccountResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgCreatePermanentLockedAccountResponse {
    return new MsgCreatePermanentLockedAccountResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgCreatePermanentLockedAccountResponse {
    return new MsgCreatePermanentLockedAccountResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgCreatePermanentLockedAccountResponse | PlainMessage<MsgCreatePermanentLockedAccountResponse> | undefined, b: MsgCreatePermanentLockedAccountResponse | PlainMessage<MsgCreatePermanentLockedAccountResponse> | undefined): boolean {
    return proto3.util.equals(MsgCreatePermanentLockedAccountResponse, a, b);
  }
}

/**
 * MsgCreateVestingAccount defines a message that enables creating a vesting
 * account.
 *
 * Since: cosmos-sdk 0.46
 *
 * @generated from message cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount
 */
export class MsgCreatePeriodicVestingAccount extends Message<MsgCreatePeriodicVestingAccount> {
  /**
   * @generated from field: string from_address = 1;
   */
  fromAddress = "";

  /**
   * @generated from field: string to_address = 2;
   */
  toAddress = "";

  /**
   * start of vesting as unix time (in seconds).
   *
   * @generated from field: int64 start_time = 3;
   */
  startTime = protoInt64.zero;

  /**
   * @generated from field: repeated cosmos.vesting.v1beta1.Period vesting_periods = 4;
   */
  vestingPeriods: Period[] = [];

  constructor(data?: PartialMessage<MsgCreatePeriodicVestingAccount>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "from_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "to_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "start_time", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 4, name: "vesting_periods", kind: "message", T: Period, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgCreatePeriodicVestingAccount {
    return new MsgCreatePeriodicVestingAccount().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgCreatePeriodicVestingAccount {
    return new MsgCreatePeriodicVestingAccount().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgCreatePeriodicVestingAccount {
    return new MsgCreatePeriodicVestingAccount().fromJsonString(jsonString, options);
  }

  static equals(a: MsgCreatePeriodicVestingAccount | PlainMessage<MsgCreatePeriodicVestingAccount> | undefined, b: MsgCreatePeriodicVestingAccount | PlainMessage<MsgCreatePeriodicVestingAccount> | undefined): boolean {
    return proto3.util.equals(MsgCreatePeriodicVestingAccount, a, b);
  }
}

/**
 * MsgCreateVestingAccountResponse defines the Msg/CreatePeriodicVestingAccount
 * response type.
 *
 * Since: cosmos-sdk 0.46
 *
 * @generated from message cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccountResponse
 */
export class MsgCreatePeriodicVestingAccountResponse extends Message<MsgCreatePeriodicVestingAccountResponse> {
  constructor(data?: PartialMessage<MsgCreatePeriodicVestingAccountResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccountResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgCreatePeriodicVestingAccountResponse {
    return new MsgCreatePeriodicVestingAccountResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgCreatePeriodicVestingAccountResponse {
    return new MsgCreatePeriodicVestingAccountResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgCreatePeriodicVestingAccountResponse {
    return new MsgCreatePeriodicVestingAccountResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgCreatePeriodicVestingAccountResponse | PlainMessage<MsgCreatePeriodicVestingAccountResponse> | undefined, b: MsgCreatePeriodicVestingAccountResponse | PlainMessage<MsgCreatePeriodicVestingAccountResponse> | undefined): boolean {
    return proto3.util.equals(MsgCreatePeriodicVestingAccountResponse, a, b);
  }
}

