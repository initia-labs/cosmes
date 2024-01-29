// @generated by protoc-gen-es v1.7.0 with parameter "target=ts"
// @generated from file cosmos/store/v1beta1/listening.proto (package cosmos.store.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { RequestFinalizeBlock, ResponseCommit, ResponseFinalizeBlock } from "../../../tendermint/abci/types_pb.js";

/**
 * StoreKVPair is a KVStore KVPair used for listening to state changes (Sets and Deletes)
 * It optionally includes the StoreKey for the originating KVStore and a Boolean flag to distinguish between Sets and
 * Deletes
 *
 * Since: cosmos-sdk 0.43
 *
 * @generated from message cosmos.store.v1beta1.StoreKVPair
 */
export class StoreKVPair extends Message<StoreKVPair> {
  /**
   * the store key for the KVStore this pair originates from
   *
   * @generated from field: string store_key = 1;
   */
  storeKey = "";

  /**
   * true indicates a delete operation, false indicates a set operation
   *
   * @generated from field: bool delete = 2;
   */
  delete = false;

  /**
   * @generated from field: bytes key = 3;
   */
  key = new Uint8Array(0);

  /**
   * @generated from field: bytes value = 4;
   */
  value = new Uint8Array(0);

  constructor(data?: PartialMessage<StoreKVPair>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.store.v1beta1.StoreKVPair";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "store_key", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "delete", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 3, name: "key", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 4, name: "value", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StoreKVPair {
    return new StoreKVPair().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StoreKVPair {
    return new StoreKVPair().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StoreKVPair {
    return new StoreKVPair().fromJsonString(jsonString, options);
  }

  static equals(a: StoreKVPair | PlainMessage<StoreKVPair> | undefined, b: StoreKVPair | PlainMessage<StoreKVPair> | undefined): boolean {
    return proto3.util.equals(StoreKVPair, a, b);
  }
}

/**
 * BlockMetadata contains all the abci event data of a block
 * the file streamer dump them into files together with the state changes.
 *
 * @generated from message cosmos.store.v1beta1.BlockMetadata
 */
export class BlockMetadata extends Message<BlockMetadata> {
  /**
   * @generated from field: tendermint.abci.ResponseCommit response_commit = 6;
   */
  responseCommit?: ResponseCommit;

  /**
   * @generated from field: tendermint.abci.RequestFinalizeBlock request_finalize_block = 7;
   */
  requestFinalizeBlock?: RequestFinalizeBlock;

  /**
   * TODO: should we renumber this?
   *
   * @generated from field: tendermint.abci.ResponseFinalizeBlock response_finalize_block = 8;
   */
  responseFinalizeBlock?: ResponseFinalizeBlock;

  constructor(data?: PartialMessage<BlockMetadata>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.store.v1beta1.BlockMetadata";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 6, name: "response_commit", kind: "message", T: ResponseCommit },
    { no: 7, name: "request_finalize_block", kind: "message", T: RequestFinalizeBlock },
    { no: 8, name: "response_finalize_block", kind: "message", T: ResponseFinalizeBlock },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BlockMetadata {
    return new BlockMetadata().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BlockMetadata {
    return new BlockMetadata().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BlockMetadata {
    return new BlockMetadata().fromJsonString(jsonString, options);
  }

  static equals(a: BlockMetadata | PlainMessage<BlockMetadata> | undefined, b: BlockMetadata | PlainMessage<BlockMetadata> | undefined): boolean {
    return proto3.util.equals(BlockMetadata, a, b);
  }
}

