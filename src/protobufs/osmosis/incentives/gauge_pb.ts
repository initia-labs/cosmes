// @generated by protoc-gen-es v1.7.0 with parameter "target=ts"
// @generated from file osmosis/incentives/gauge.proto (package osmosis.incentives, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Duration, Message, proto3, protoInt64, Timestamp } from "@bufbuild/protobuf";
import { QueryCondition } from "../lockup/lock_pb.js";
import { Coin } from "../../cosmos/base/v1beta1/coin_pb.js";

/**
 * Gauge is an object that stores and distributes yields to recipients who
 * satisfy certain conditions. Currently gauges support conditions around the
 * duration for which a given denom is locked.
 *
 * @generated from message osmosis.incentives.Gauge
 */
export class Gauge extends Message<Gauge> {
  /**
   * id is the unique ID of a Gauge
   *
   * @generated from field: uint64 id = 1;
   */
  id = protoInt64.zero;

  /**
   * is_perpetual is a flag to show if it's a perpetual or non-perpetual gauge
   * Non-perpetual gauges distribute their tokens equally per epoch while the
   * gauge is in the active period. Perpetual gauges distribute all their tokens
   * at a single time and only distribute their tokens again once the gauge is
   * refilled, Intended for use with incentives that get refilled daily.
   *
   * @generated from field: bool is_perpetual = 2;
   */
  isPerpetual = false;

  /**
   * distribute_to is where the gauge rewards are distributed to.
   * This is queried via lock duration or by timestamp
   *
   * @generated from field: osmosis.lockup.QueryCondition distribute_to = 3;
   */
  distributeTo?: QueryCondition;

  /**
   * coins is the total amount of coins that have been in the gauge
   * Can distribute multiple coin denoms
   *
   * @generated from field: repeated cosmos.base.v1beta1.Coin coins = 4;
   */
  coins: Coin[] = [];

  /**
   * start_time is the distribution start time
   *
   * @generated from field: google.protobuf.Timestamp start_time = 5;
   */
  startTime?: Timestamp;

  /**
   * num_epochs_paid_over is the number of total epochs distribution will be
   * completed over
   *
   * @generated from field: uint64 num_epochs_paid_over = 6;
   */
  numEpochsPaidOver = protoInt64.zero;

  /**
   * filled_epochs is the number of epochs distribution has been completed on
   * already
   *
   * @generated from field: uint64 filled_epochs = 7;
   */
  filledEpochs = protoInt64.zero;

  /**
   * distributed_coins are coins that have been distributed already
   *
   * @generated from field: repeated cosmos.base.v1beta1.Coin distributed_coins = 8;
   */
  distributedCoins: Coin[] = [];

  constructor(data?: PartialMessage<Gauge>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "osmosis.incentives.Gauge";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "is_perpetual", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 3, name: "distribute_to", kind: "message", T: QueryCondition },
    { no: 4, name: "coins", kind: "message", T: Coin, repeated: true },
    { no: 5, name: "start_time", kind: "message", T: Timestamp },
    { no: 6, name: "num_epochs_paid_over", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 7, name: "filled_epochs", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 8, name: "distributed_coins", kind: "message", T: Coin, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Gauge {
    return new Gauge().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Gauge {
    return new Gauge().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Gauge {
    return new Gauge().fromJsonString(jsonString, options);
  }

  static equals(a: Gauge | PlainMessage<Gauge> | undefined, b: Gauge | PlainMessage<Gauge> | undefined): boolean {
    return proto3.util.equals(Gauge, a, b);
  }
}

/**
 * @generated from message osmosis.incentives.LockableDurationsInfo
 */
export class LockableDurationsInfo extends Message<LockableDurationsInfo> {
  /**
   * List of incentivised durations that gauges will pay out to
   *
   * @generated from field: repeated google.protobuf.Duration lockable_durations = 1;
   */
  lockableDurations: Duration[] = [];

  constructor(data?: PartialMessage<LockableDurationsInfo>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "osmosis.incentives.LockableDurationsInfo";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "lockable_durations", kind: "message", T: Duration, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LockableDurationsInfo {
    return new LockableDurationsInfo().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LockableDurationsInfo {
    return new LockableDurationsInfo().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LockableDurationsInfo {
    return new LockableDurationsInfo().fromJsonString(jsonString, options);
  }

  static equals(a: LockableDurationsInfo | PlainMessage<LockableDurationsInfo> | undefined, b: LockableDurationsInfo | PlainMessage<LockableDurationsInfo> | undefined): boolean {
    return proto3.util.equals(LockableDurationsInfo, a, b);
  }
}

