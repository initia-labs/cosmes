// @generated by protoc-gen-es v1.7.0 with parameter "target=ts"
// @generated from file cosmos/nft/v1beta1/tx.proto (package cosmos.nft.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * MsgSend represents a message to send a nft from one account to another account.
 *
 * @generated from message cosmos.nft.v1beta1.MsgSend
 */
export class MsgSend extends Message<MsgSend> {
  /**
   * class_id defines the unique identifier of the nft classification, similar to the contract address of ERC721
   *
   * @generated from field: string class_id = 1;
   */
  classId = "";

  /**
   * id defines the unique identification of nft
   *
   * @generated from field: string id = 2;
   */
  id = "";

  /**
   * sender is the address of the owner of nft
   *
   * @generated from field: string sender = 3;
   */
  sender = "";

  /**
   * receiver is the receiver address of nft
   *
   * @generated from field: string receiver = 4;
   */
  receiver = "";

  constructor(data?: PartialMessage<MsgSend>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.nft.v1beta1.MsgSend";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "class_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "sender", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "receiver", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgSend {
    return new MsgSend().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgSend {
    return new MsgSend().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgSend {
    return new MsgSend().fromJsonString(jsonString, options);
  }

  static equals(a: MsgSend | PlainMessage<MsgSend> | undefined, b: MsgSend | PlainMessage<MsgSend> | undefined): boolean {
    return proto3.util.equals(MsgSend, a, b);
  }
}

/**
 * MsgSendResponse defines the Msg/Send response type.
 *
 * @generated from message cosmos.nft.v1beta1.MsgSendResponse
 */
export class MsgSendResponse extends Message<MsgSendResponse> {
  constructor(data?: PartialMessage<MsgSendResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.nft.v1beta1.MsgSendResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgSendResponse {
    return new MsgSendResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgSendResponse {
    return new MsgSendResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgSendResponse {
    return new MsgSendResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgSendResponse | PlainMessage<MsgSendResponse> | undefined, b: MsgSendResponse | PlainMessage<MsgSendResponse> | undefined): boolean {
    return proto3.util.equals(MsgSendResponse, a, b);
  }
}

