// @generated by protoc-gen-es v1.7.0 with parameter "target=ts"
// @generated from file cosmos/store/snapshots/v1/snapshot.proto (package cosmos.store.snapshots.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";

/**
 * Snapshot contains Tendermint state sync snapshot info.
 *
 * @generated from message cosmos.store.snapshots.v1.Snapshot
 */
export class Snapshot extends Message<Snapshot> {
  /**
   * @generated from field: uint64 height = 1;
   */
  height = protoInt64.zero;

  /**
   * @generated from field: uint32 format = 2;
   */
  format = 0;

  /**
   * @generated from field: uint32 chunks = 3;
   */
  chunks = 0;

  /**
   * @generated from field: bytes hash = 4;
   */
  hash = new Uint8Array(0);

  /**
   * @generated from field: cosmos.store.snapshots.v1.Metadata metadata = 5;
   */
  metadata?: Metadata;

  constructor(data?: PartialMessage<Snapshot>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.store.snapshots.v1.Snapshot";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "height", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "format", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 3, name: "chunks", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 4, name: "hash", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 5, name: "metadata", kind: "message", T: Metadata },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Snapshot {
    return new Snapshot().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Snapshot {
    return new Snapshot().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Snapshot {
    return new Snapshot().fromJsonString(jsonString, options);
  }

  static equals(a: Snapshot | PlainMessage<Snapshot> | undefined, b: Snapshot | PlainMessage<Snapshot> | undefined): boolean {
    return proto3.util.equals(Snapshot, a, b);
  }
}

/**
 * Metadata contains SDK-specific snapshot metadata.
 *
 * @generated from message cosmos.store.snapshots.v1.Metadata
 */
export class Metadata extends Message<Metadata> {
  /**
   * SHA-256 chunk hashes
   *
   * @generated from field: repeated bytes chunk_hashes = 1;
   */
  chunkHashes: Uint8Array[] = [];

  constructor(data?: PartialMessage<Metadata>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.store.snapshots.v1.Metadata";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "chunk_hashes", kind: "scalar", T: 12 /* ScalarType.BYTES */, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Metadata {
    return new Metadata().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Metadata {
    return new Metadata().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Metadata {
    return new Metadata().fromJsonString(jsonString, options);
  }

  static equals(a: Metadata | PlainMessage<Metadata> | undefined, b: Metadata | PlainMessage<Metadata> | undefined): boolean {
    return proto3.util.equals(Metadata, a, b);
  }
}

/**
 * SnapshotItem is an item contained in a rootmulti.Store snapshot.
 *
 * Since: cosmos-sdk 0.46
 *
 * @generated from message cosmos.store.snapshots.v1.SnapshotItem
 */
export class SnapshotItem extends Message<SnapshotItem> {
  /**
   * item is the specific type of snapshot item.
   *
   * @generated from oneof cosmos.store.snapshots.v1.SnapshotItem.item
   */
  item: {
    /**
     * @generated from field: cosmos.store.snapshots.v1.SnapshotStoreItem store = 1;
     */
    value: SnapshotStoreItem;
    case: "store";
  } | {
    /**
     * @generated from field: cosmos.store.snapshots.v1.SnapshotIAVLItem iavl = 2;
     */
    value: SnapshotIAVLItem;
    case: "iavl";
  } | {
    /**
     * @generated from field: cosmos.store.snapshots.v1.SnapshotExtensionMeta extension = 3;
     */
    value: SnapshotExtensionMeta;
    case: "extension";
  } | {
    /**
     * @generated from field: cosmos.store.snapshots.v1.SnapshotExtensionPayload extension_payload = 4;
     */
    value: SnapshotExtensionPayload;
    case: "extensionPayload";
  } | { case: undefined; value?: undefined } = { case: undefined };

  constructor(data?: PartialMessage<SnapshotItem>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.store.snapshots.v1.SnapshotItem";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "store", kind: "message", T: SnapshotStoreItem, oneof: "item" },
    { no: 2, name: "iavl", kind: "message", T: SnapshotIAVLItem, oneof: "item" },
    { no: 3, name: "extension", kind: "message", T: SnapshotExtensionMeta, oneof: "item" },
    { no: 4, name: "extension_payload", kind: "message", T: SnapshotExtensionPayload, oneof: "item" },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SnapshotItem {
    return new SnapshotItem().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SnapshotItem {
    return new SnapshotItem().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SnapshotItem {
    return new SnapshotItem().fromJsonString(jsonString, options);
  }

  static equals(a: SnapshotItem | PlainMessage<SnapshotItem> | undefined, b: SnapshotItem | PlainMessage<SnapshotItem> | undefined): boolean {
    return proto3.util.equals(SnapshotItem, a, b);
  }
}

/**
 * SnapshotStoreItem contains metadata about a snapshotted store.
 *
 * Since: cosmos-sdk 0.46
 *
 * @generated from message cosmos.store.snapshots.v1.SnapshotStoreItem
 */
export class SnapshotStoreItem extends Message<SnapshotStoreItem> {
  /**
   * @generated from field: string name = 1;
   */
  name = "";

  constructor(data?: PartialMessage<SnapshotStoreItem>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.store.snapshots.v1.SnapshotStoreItem";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SnapshotStoreItem {
    return new SnapshotStoreItem().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SnapshotStoreItem {
    return new SnapshotStoreItem().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SnapshotStoreItem {
    return new SnapshotStoreItem().fromJsonString(jsonString, options);
  }

  static equals(a: SnapshotStoreItem | PlainMessage<SnapshotStoreItem> | undefined, b: SnapshotStoreItem | PlainMessage<SnapshotStoreItem> | undefined): boolean {
    return proto3.util.equals(SnapshotStoreItem, a, b);
  }
}

/**
 * SnapshotIAVLItem is an exported IAVL node.
 *
 * Since: cosmos-sdk 0.46
 *
 * @generated from message cosmos.store.snapshots.v1.SnapshotIAVLItem
 */
export class SnapshotIAVLItem extends Message<SnapshotIAVLItem> {
  /**
   * @generated from field: bytes key = 1;
   */
  key = new Uint8Array(0);

  /**
   * @generated from field: bytes value = 2;
   */
  value = new Uint8Array(0);

  /**
   * version is block height
   *
   * @generated from field: int64 version = 3;
   */
  version = protoInt64.zero;

  /**
   * height is depth of the tree.
   *
   * @generated from field: int32 height = 4;
   */
  height = 0;

  constructor(data?: PartialMessage<SnapshotIAVLItem>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.store.snapshots.v1.SnapshotIAVLItem";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "key", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 2, name: "value", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 3, name: "version", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 4, name: "height", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SnapshotIAVLItem {
    return new SnapshotIAVLItem().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SnapshotIAVLItem {
    return new SnapshotIAVLItem().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SnapshotIAVLItem {
    return new SnapshotIAVLItem().fromJsonString(jsonString, options);
  }

  static equals(a: SnapshotIAVLItem | PlainMessage<SnapshotIAVLItem> | undefined, b: SnapshotIAVLItem | PlainMessage<SnapshotIAVLItem> | undefined): boolean {
    return proto3.util.equals(SnapshotIAVLItem, a, b);
  }
}

/**
 * SnapshotExtensionMeta contains metadata about an external snapshotter.
 *
 * Since: cosmos-sdk 0.46
 *
 * @generated from message cosmos.store.snapshots.v1.SnapshotExtensionMeta
 */
export class SnapshotExtensionMeta extends Message<SnapshotExtensionMeta> {
  /**
   * @generated from field: string name = 1;
   */
  name = "";

  /**
   * @generated from field: uint32 format = 2;
   */
  format = 0;

  constructor(data?: PartialMessage<SnapshotExtensionMeta>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.store.snapshots.v1.SnapshotExtensionMeta";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "format", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SnapshotExtensionMeta {
    return new SnapshotExtensionMeta().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SnapshotExtensionMeta {
    return new SnapshotExtensionMeta().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SnapshotExtensionMeta {
    return new SnapshotExtensionMeta().fromJsonString(jsonString, options);
  }

  static equals(a: SnapshotExtensionMeta | PlainMessage<SnapshotExtensionMeta> | undefined, b: SnapshotExtensionMeta | PlainMessage<SnapshotExtensionMeta> | undefined): boolean {
    return proto3.util.equals(SnapshotExtensionMeta, a, b);
  }
}

/**
 * SnapshotExtensionPayload contains payloads of an external snapshotter.
 *
 * Since: cosmos-sdk 0.46
 *
 * @generated from message cosmos.store.snapshots.v1.SnapshotExtensionPayload
 */
export class SnapshotExtensionPayload extends Message<SnapshotExtensionPayload> {
  /**
   * @generated from field: bytes payload = 1;
   */
  payload = new Uint8Array(0);

  constructor(data?: PartialMessage<SnapshotExtensionPayload>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.store.snapshots.v1.SnapshotExtensionPayload";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "payload", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SnapshotExtensionPayload {
    return new SnapshotExtensionPayload().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SnapshotExtensionPayload {
    return new SnapshotExtensionPayload().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SnapshotExtensionPayload {
    return new SnapshotExtensionPayload().fromJsonString(jsonString, options);
  }

  static equals(a: SnapshotExtensionPayload | PlainMessage<SnapshotExtensionPayload> | undefined, b: SnapshotExtensionPayload | PlainMessage<SnapshotExtensionPayload> | undefined): boolean {
    return proto3.util.equals(SnapshotExtensionPayload, a, b);
  }
}

