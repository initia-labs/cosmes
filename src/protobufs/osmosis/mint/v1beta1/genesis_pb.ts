// @generated by protoc-gen-es v1.7.0 with parameter "target=ts"
// @generated from file osmosis/mint/v1beta1/genesis.proto (package osmosis.mint.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { Minter, Params } from "./mint_pb.js";

/**
 * GenesisState defines the mint module's genesis state.
 *
 * @generated from message osmosis.mint.v1beta1.GenesisState
 */
export class GenesisState extends Message<GenesisState> {
  /**
   * minter is an abstraction for holding current rewards information.
   *
   * @generated from field: osmosis.mint.v1beta1.Minter minter = 1;
   */
  minter?: Minter;

  /**
   * params defines all the parameters of the mint module.
   *
   * @generated from field: osmosis.mint.v1beta1.Params params = 2;
   */
  params?: Params;

  /**
   * reduction_started_epoch is the first epoch in which the reduction of mint
   * begins.
   *
   * @generated from field: int64 reduction_started_epoch = 3;
   */
  reductionStartedEpoch = protoInt64.zero;

  constructor(data?: PartialMessage<GenesisState>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "osmosis.mint.v1beta1.GenesisState";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "minter", kind: "message", T: Minter },
    { no: 2, name: "params", kind: "message", T: Params },
    { no: 3, name: "reduction_started_epoch", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
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

