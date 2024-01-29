// @generated by protoc-gen-es v1.7.0 with parameter "target=ts"
// @generated from file injective/auction/v1beta1/genesis.proto (package injective.auction.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { Bid, Params } from "./auction_pb.js";

/**
 * GenesisState defines the auction module's genesis state.
 *
 * @generated from message injective.auction.v1beta1.GenesisState
 */
export class GenesisState extends Message<GenesisState> {
  /**
   * params defines all the parameters of related to auction.
   *
   * @generated from field: injective.auction.v1beta1.Params params = 1;
   */
  params?: Params;

  /**
   * current auction round
   *
   * @generated from field: uint64 auction_round = 2;
   */
  auctionRound = protoInt64.zero;

  /**
   * current highest bid
   *
   * @generated from field: injective.auction.v1beta1.Bid highest_bid = 3;
   */
  highestBid?: Bid;

  /**
   * auction ending timestamp
   *
   * @generated from field: int64 auction_ending_timestamp = 4;
   */
  auctionEndingTimestamp = protoInt64.zero;

  constructor(data?: PartialMessage<GenesisState>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "injective.auction.v1beta1.GenesisState";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "params", kind: "message", T: Params },
    { no: 2, name: "auction_round", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "highest_bid", kind: "message", T: Bid },
    { no: 4, name: "auction_ending_timestamp", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
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

