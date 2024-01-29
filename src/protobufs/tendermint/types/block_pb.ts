// @generated by protoc-gen-es v1.7.0 with parameter "target=ts"
// @generated from file tendermint/types/block.proto (package tendermint.types, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Commit, Data, Header } from "./types_pb.js";
import { EvidenceList } from "./evidence_pb.js";

/**
 * @generated from message tendermint.types.Block
 */
export class Block extends Message<Block> {
  /**
   * @generated from field: tendermint.types.Header header = 1;
   */
  header?: Header;

  /**
   * @generated from field: tendermint.types.Data data = 2;
   */
  data?: Data;

  /**
   * @generated from field: tendermint.types.EvidenceList evidence = 3;
   */
  evidence?: EvidenceList;

  /**
   * @generated from field: tendermint.types.Commit last_commit = 4;
   */
  lastCommit?: Commit;

  constructor(data?: PartialMessage<Block>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "tendermint.types.Block";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "header", kind: "message", T: Header },
    { no: 2, name: "data", kind: "message", T: Data },
    { no: 3, name: "evidence", kind: "message", T: EvidenceList },
    { no: 4, name: "last_commit", kind: "message", T: Commit },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Block {
    return new Block().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Block {
    return new Block().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Block {
    return new Block().fromJsonString(jsonString, options);
  }

  static equals(a: Block | PlainMessage<Block> | undefined, b: Block | PlainMessage<Block> | undefined): boolean {
    return proto3.util.equals(Block, a, b);
  }
}

