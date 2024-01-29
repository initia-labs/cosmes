// @generated by protoc-gen-es v1.7.0 with parameter "target=ts"
// @generated from file osmosis/incentives/params.proto (package osmosis.incentives, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Coin } from "../../cosmos/base/v1beta1/coin_pb.js";

/**
 * Params holds parameters for the incentives module
 *
 * @generated from message osmosis.incentives.Params
 */
export class Params extends Message<Params> {
  /**
   * distr_epoch_identifier is what epoch type distribution will be triggered by
   * (day, week, etc.)
   *
   * @generated from field: string distr_epoch_identifier = 1;
   */
  distrEpochIdentifier = "";

  /**
   * group_creation_fee is the fee required to create a new group
   * It is only charged to all addresses other than incentive module account
   * or addresses in the unrestricted_creator_whitelist
   *
   * @generated from field: repeated cosmos.base.v1beta1.Coin group_creation_fee = 2;
   */
  groupCreationFee: Coin[] = [];

  /**
   * unrestricted_creator_whitelist is a list of addresses that are
   * allowed to bypass restrictions on permissionless Group
   * creation. In the future, we might expand these to creating gauges
   * as well.
   * The goal of this is to allow a subdao to manage incentives efficiently
   * without being stopped by 5 day governance process or a high fee.
   * At the same time, it prevents spam by having a fee for all
   * other users.
   *
   * @generated from field: repeated string unrestricted_creator_whitelist = 3;
   */
  unrestrictedCreatorWhitelist: string[] = [];

  constructor(data?: PartialMessage<Params>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "osmosis.incentives.Params";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "distr_epoch_identifier", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "group_creation_fee", kind: "message", T: Coin, repeated: true },
    { no: 3, name: "unrestricted_creator_whitelist", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
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

