// @generated by protoc-gen-es v1.7.0 with parameter "target=ts"
// @generated from file cosmos/gov/module/v1/module.proto (package cosmos.gov.module.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";

/**
 * Module is the config object of the gov module.
 *
 * @generated from message cosmos.gov.module.v1.Module
 */
export class Module extends Message<Module> {
  /**
   * max_metadata_len defines the maximum proposal metadata length.
   * Defaults to 255 if not explicitly set.
   *
   * @generated from field: uint64 max_metadata_len = 1;
   */
  maxMetadataLen = protoInt64.zero;

  /**
   * authority defines the custom module authority. If not set, defaults to the governance module.
   *
   * @generated from field: string authority = 2;
   */
  authority = "";

  constructor(data?: PartialMessage<Module>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.gov.module.v1.Module";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "max_metadata_len", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "authority", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Module {
    return new Module().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Module {
    return new Module().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Module {
    return new Module().fromJsonString(jsonString, options);
  }

  static equals(a: Module | PlainMessage<Module> | undefined, b: Module | PlainMessage<Module> | undefined): boolean {
    return proto3.util.equals(Module, a, b);
  }
}

