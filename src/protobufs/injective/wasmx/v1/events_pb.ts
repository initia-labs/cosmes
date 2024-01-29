// @generated by protoc-gen-es v1.7.0 with parameter "target=ts"
// @generated from file injective/wasmx/v1/events.proto (package injective.wasmx.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { FundingMode } from "./proposal_pb.js";

/**
 * @generated from message injective.wasmx.v1.EventContractExecution
 */
export class EventContractExecution extends Message<EventContractExecution> {
  /**
   * @generated from field: string contract_address = 1;
   */
  contractAddress = "";

  /**
   * @generated from field: bytes response = 2;
   */
  response = new Uint8Array(0);

  /**
   * @generated from field: string other_error = 3;
   */
  otherError = "";

  /**
   * @generated from field: string execution_error = 4;
   */
  executionError = "";

  constructor(data?: PartialMessage<EventContractExecution>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "injective.wasmx.v1.EventContractExecution";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "contract_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "response", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 3, name: "other_error", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "execution_error", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventContractExecution {
    return new EventContractExecution().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventContractExecution {
    return new EventContractExecution().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventContractExecution {
    return new EventContractExecution().fromJsonString(jsonString, options);
  }

  static equals(a: EventContractExecution | PlainMessage<EventContractExecution> | undefined, b: EventContractExecution | PlainMessage<EventContractExecution> | undefined): boolean {
    return proto3.util.equals(EventContractExecution, a, b);
  }
}

/**
 * @generated from message injective.wasmx.v1.EventContractRegistered
 */
export class EventContractRegistered extends Message<EventContractRegistered> {
  /**
   * @generated from field: string contract_address = 1;
   */
  contractAddress = "";

  /**
   * @generated from field: uint64 gas_price = 3;
   */
  gasPrice = protoInt64.zero;

  /**
   * @generated from field: bool should_pin_contract = 4;
   */
  shouldPinContract = false;

  /**
   * @generated from field: bool is_migration_allowed = 5;
   */
  isMigrationAllowed = false;

  /**
   * @generated from field: uint64 code_id = 6;
   */
  codeId = protoInt64.zero;

  /**
   * @generated from field: string admin_address = 7;
   */
  adminAddress = "";

  /**
   * @generated from field: string granter_address = 8;
   */
  granterAddress = "";

  /**
   * @generated from field: injective.wasmx.v1.FundingMode funding_mode = 9;
   */
  fundingMode = FundingMode.Unspecified;

  constructor(data?: PartialMessage<EventContractRegistered>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "injective.wasmx.v1.EventContractRegistered";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "contract_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "gas_price", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 4, name: "should_pin_contract", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 5, name: "is_migration_allowed", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 6, name: "code_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 7, name: "admin_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "granter_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 9, name: "funding_mode", kind: "enum", T: proto3.getEnumType(FundingMode) },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventContractRegistered {
    return new EventContractRegistered().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventContractRegistered {
    return new EventContractRegistered().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventContractRegistered {
    return new EventContractRegistered().fromJsonString(jsonString, options);
  }

  static equals(a: EventContractRegistered | PlainMessage<EventContractRegistered> | undefined, b: EventContractRegistered | PlainMessage<EventContractRegistered> | undefined): boolean {
    return proto3.util.equals(EventContractRegistered, a, b);
  }
}

/**
 * @generated from message injective.wasmx.v1.EventContractDeregistered
 */
export class EventContractDeregistered extends Message<EventContractDeregistered> {
  /**
   * @generated from field: string contract_address = 1;
   */
  contractAddress = "";

  constructor(data?: PartialMessage<EventContractDeregistered>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "injective.wasmx.v1.EventContractDeregistered";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "contract_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventContractDeregistered {
    return new EventContractDeregistered().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventContractDeregistered {
    return new EventContractDeregistered().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventContractDeregistered {
    return new EventContractDeregistered().fromJsonString(jsonString, options);
  }

  static equals(a: EventContractDeregistered | PlainMessage<EventContractDeregistered> | undefined, b: EventContractDeregistered | PlainMessage<EventContractDeregistered> | undefined): boolean {
    return proto3.util.equals(EventContractDeregistered, a, b);
  }
}

