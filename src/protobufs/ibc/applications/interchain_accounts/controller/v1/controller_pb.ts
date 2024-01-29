// @generated by protoc-gen-es v1.7.0 with parameter "target=ts"
// @generated from file ibc/applications/interchain_accounts/controller/v1/controller.proto (package ibc.applications.interchain_accounts.controller.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * Params defines the set of on-chain interchain accounts parameters.
 * The following parameters may be used to disable the controller submodule.
 *
 * @generated from message ibc.applications.interchain_accounts.controller.v1.Params
 */
export class Params extends Message<Params> {
  /**
   * controller_enabled enables or disables the controller submodule.
   *
   * @generated from field: bool controller_enabled = 1;
   */
  controllerEnabled = false;

  constructor(data?: PartialMessage<Params>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "ibc.applications.interchain_accounts.controller.v1.Params";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "controller_enabled", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
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

