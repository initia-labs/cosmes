// @generated by protoc-gen-es v1.7.0 with parameter "target=ts"
// @generated from file osmosis/poolincentives/v1beta1/genesis.proto (package osmosis.poolincentives.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Duration, Message, proto3 } from "@bufbuild/protobuf";
import { AnyPoolToInternalGauges, ConcentratedPoolToNoLockGauges, DistrInfo, Params } from "./incentives_pb.js";

/**
 * GenesisState defines the pool incentives module's genesis state.
 *
 * @generated from message osmosis.poolincentives.v1beta1.GenesisState
 */
export class GenesisState extends Message<GenesisState> {
  /**
   * params defines all the parameters of the module.
   *
   * @generated from field: osmosis.poolincentives.v1beta1.Params params = 1;
   */
  params?: Params;

  /**
   * @generated from field: repeated google.protobuf.Duration lockable_durations = 2;
   */
  lockableDurations: Duration[] = [];

  /**
   * @generated from field: osmosis.poolincentives.v1beta1.DistrInfo distr_info = 3;
   */
  distrInfo?: DistrInfo;

  /**
   * any_pool_to_internal_gauges defines the gauges for any pool to internal
   * pool. For every pool type (e.g. LP, Concentrated, etc), there is one such
   * link
   *
   * @generated from field: osmosis.poolincentives.v1beta1.AnyPoolToInternalGauges any_pool_to_internal_gauges = 4;
   */
  anyPoolToInternalGauges?: AnyPoolToInternalGauges;

  /**
   * concentrated_pool_to_no_lock_gauges defines the no lock gauges for
   * concentrated pool. This only exists between concentrated pool and no lock
   * gauges. Both external and internal gauges are included.
   *
   * @generated from field: osmosis.poolincentives.v1beta1.ConcentratedPoolToNoLockGauges concentrated_pool_to_no_lock_gauges = 5;
   */
  concentratedPoolToNoLockGauges?: ConcentratedPoolToNoLockGauges;

  constructor(data?: PartialMessage<GenesisState>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "osmosis.poolincentives.v1beta1.GenesisState";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "params", kind: "message", T: Params },
    { no: 2, name: "lockable_durations", kind: "message", T: Duration, repeated: true },
    { no: 3, name: "distr_info", kind: "message", T: DistrInfo },
    { no: 4, name: "any_pool_to_internal_gauges", kind: "message", T: AnyPoolToInternalGauges },
    { no: 5, name: "concentrated_pool_to_no_lock_gauges", kind: "message", T: ConcentratedPoolToNoLockGauges },
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

