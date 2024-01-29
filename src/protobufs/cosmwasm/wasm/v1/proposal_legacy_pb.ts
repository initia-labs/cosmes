// @generated by protoc-gen-es v1.7.0 with parameter "target=ts"
// @generated from file cosmwasm/wasm/v1/proposal_legacy.proto (package cosmwasm.wasm.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { AccessConfig } from "./types_pb.js";
import { Coin } from "../../../cosmos/base/v1beta1/coin_pb.js";

/**
 * Deprecated: Do not use. Since wasmd v0.40, there is no longer a need for
 * an explicit StoreCodeProposal. To submit WASM code to the system,
 * a simple MsgStoreCode can be invoked from the x/gov module via
 * a v1 governance proposal.
 *
 * @generated from message cosmwasm.wasm.v1.StoreCodeProposal
 * @deprecated
 */
export class StoreCodeProposal extends Message<StoreCodeProposal> {
  /**
   * Title is a short summary
   *
   * @generated from field: string title = 1;
   */
  title = "";

  /**
   * Description is a human readable text
   *
   * @generated from field: string description = 2;
   */
  description = "";

  /**
   * RunAs is the address that is passed to the contract's environment as sender
   *
   * @generated from field: string run_as = 3;
   */
  runAs = "";

  /**
   * WASMByteCode can be raw or gzip compressed
   *
   * @generated from field: bytes wasm_byte_code = 4;
   */
  wasmByteCode = new Uint8Array(0);

  /**
   * InstantiatePermission to apply on contract creation, optional
   *
   * @generated from field: cosmwasm.wasm.v1.AccessConfig instantiate_permission = 7;
   */
  instantiatePermission?: AccessConfig;

  /**
   * UnpinCode code on upload, optional
   *
   * @generated from field: bool unpin_code = 8;
   */
  unpinCode = false;

  /**
   * Source is the URL where the code is hosted
   *
   * @generated from field: string source = 9;
   */
  source = "";

  /**
   * Builder is the docker image used to build the code deterministically, used
   * for smart contract verification
   *
   * @generated from field: string builder = 10;
   */
  builder = "";

  /**
   * CodeHash is the SHA256 sum of the code outputted by builder, used for smart
   * contract verification
   *
   * @generated from field: bytes code_hash = 11;
   */
  codeHash = new Uint8Array(0);

  constructor(data?: PartialMessage<StoreCodeProposal>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmwasm.wasm.v1.StoreCodeProposal";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "run_as", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "wasm_byte_code", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 7, name: "instantiate_permission", kind: "message", T: AccessConfig },
    { no: 8, name: "unpin_code", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 9, name: "source", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 10, name: "builder", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 11, name: "code_hash", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StoreCodeProposal {
    return new StoreCodeProposal().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StoreCodeProposal {
    return new StoreCodeProposal().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StoreCodeProposal {
    return new StoreCodeProposal().fromJsonString(jsonString, options);
  }

  static equals(a: StoreCodeProposal | PlainMessage<StoreCodeProposal> | undefined, b: StoreCodeProposal | PlainMessage<StoreCodeProposal> | undefined): boolean {
    return proto3.util.equals(StoreCodeProposal, a, b);
  }
}

/**
 * Deprecated: Do not use. Since wasmd v0.40, there is no longer a need for
 * an explicit InstantiateContractProposal. To instantiate a contract,
 * a simple MsgInstantiateContract can be invoked from the x/gov module via
 * a v1 governance proposal.
 *
 * @generated from message cosmwasm.wasm.v1.InstantiateContractProposal
 * @deprecated
 */
export class InstantiateContractProposal extends Message<InstantiateContractProposal> {
  /**
   * Title is a short summary
   *
   * @generated from field: string title = 1;
   */
  title = "";

  /**
   * Description is a human readable text
   *
   * @generated from field: string description = 2;
   */
  description = "";

  /**
   * RunAs is the address that is passed to the contract's environment as sender
   *
   * @generated from field: string run_as = 3;
   */
  runAs = "";

  /**
   * Admin is an optional address that can execute migrations
   *
   * @generated from field: string admin = 4;
   */
  admin = "";

  /**
   * CodeID is the reference to the stored WASM code
   *
   * @generated from field: uint64 code_id = 5;
   */
  codeId = protoInt64.zero;

  /**
   * Label is optional metadata to be stored with a constract instance.
   *
   * @generated from field: string label = 6;
   */
  label = "";

  /**
   * Msg json encoded message to be passed to the contract on instantiation
   *
   * @generated from field: bytes msg = 7;
   */
  msg = new Uint8Array(0);

  /**
   * Funds coins that are transferred to the contract on instantiation
   *
   * @generated from field: repeated cosmos.base.v1beta1.Coin funds = 8;
   */
  funds: Coin[] = [];

  constructor(data?: PartialMessage<InstantiateContractProposal>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmwasm.wasm.v1.InstantiateContractProposal";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "run_as", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "admin", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "code_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 6, name: "label", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "msg", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 8, name: "funds", kind: "message", T: Coin, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): InstantiateContractProposal {
    return new InstantiateContractProposal().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): InstantiateContractProposal {
    return new InstantiateContractProposal().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): InstantiateContractProposal {
    return new InstantiateContractProposal().fromJsonString(jsonString, options);
  }

  static equals(a: InstantiateContractProposal | PlainMessage<InstantiateContractProposal> | undefined, b: InstantiateContractProposal | PlainMessage<InstantiateContractProposal> | undefined): boolean {
    return proto3.util.equals(InstantiateContractProposal, a, b);
  }
}

/**
 * Deprecated: Do not use. Since wasmd v0.40, there is no longer a need for
 * an explicit InstantiateContract2Proposal. To instantiate contract 2,
 * a simple MsgInstantiateContract2 can be invoked from the x/gov module via
 * a v1 governance proposal.
 *
 * @generated from message cosmwasm.wasm.v1.InstantiateContract2Proposal
 * @deprecated
 */
export class InstantiateContract2Proposal extends Message<InstantiateContract2Proposal> {
  /**
   * Title is a short summary
   *
   * @generated from field: string title = 1;
   */
  title = "";

  /**
   * Description is a human readable text
   *
   * @generated from field: string description = 2;
   */
  description = "";

  /**
   * RunAs is the address that is passed to the contract's enviroment as sender
   *
   * @generated from field: string run_as = 3;
   */
  runAs = "";

  /**
   * Admin is an optional address that can execute migrations
   *
   * @generated from field: string admin = 4;
   */
  admin = "";

  /**
   * CodeID is the reference to the stored WASM code
   *
   * @generated from field: uint64 code_id = 5;
   */
  codeId = protoInt64.zero;

  /**
   * Label is optional metadata to be stored with a constract instance.
   *
   * @generated from field: string label = 6;
   */
  label = "";

  /**
   * Msg json encode message to be passed to the contract on instantiation
   *
   * @generated from field: bytes msg = 7;
   */
  msg = new Uint8Array(0);

  /**
   * Funds coins that are transferred to the contract on instantiation
   *
   * @generated from field: repeated cosmos.base.v1beta1.Coin funds = 8;
   */
  funds: Coin[] = [];

  /**
   * Salt is an arbitrary value provided by the sender. Size can be 1 to 64.
   *
   * @generated from field: bytes salt = 9;
   */
  salt = new Uint8Array(0);

  /**
   * FixMsg include the msg value into the hash for the predictable address.
   * Default is false
   *
   * @generated from field: bool fix_msg = 10;
   */
  fixMsg = false;

  constructor(data?: PartialMessage<InstantiateContract2Proposal>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmwasm.wasm.v1.InstantiateContract2Proposal";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "run_as", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "admin", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "code_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 6, name: "label", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "msg", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 8, name: "funds", kind: "message", T: Coin, repeated: true },
    { no: 9, name: "salt", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 10, name: "fix_msg", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): InstantiateContract2Proposal {
    return new InstantiateContract2Proposal().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): InstantiateContract2Proposal {
    return new InstantiateContract2Proposal().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): InstantiateContract2Proposal {
    return new InstantiateContract2Proposal().fromJsonString(jsonString, options);
  }

  static equals(a: InstantiateContract2Proposal | PlainMessage<InstantiateContract2Proposal> | undefined, b: InstantiateContract2Proposal | PlainMessage<InstantiateContract2Proposal> | undefined): boolean {
    return proto3.util.equals(InstantiateContract2Proposal, a, b);
  }
}

/**
 * Deprecated: Do not use. Since wasmd v0.40, there is no longer a need for
 * an explicit MigrateContractProposal. To migrate a contract,
 * a simple MsgMigrateContract can be invoked from the x/gov module via
 * a v1 governance proposal.
 *
 * @generated from message cosmwasm.wasm.v1.MigrateContractProposal
 * @deprecated
 */
export class MigrateContractProposal extends Message<MigrateContractProposal> {
  /**
   * Title is a short summary
   *
   * @generated from field: string title = 1;
   */
  title = "";

  /**
   * Description is a human readable text
   *
   * Note: skipping 3 as this was previously used for unneeded run_as
   *
   * @generated from field: string description = 2;
   */
  description = "";

  /**
   * Contract is the address of the smart contract
   *
   * @generated from field: string contract = 4;
   */
  contract = "";

  /**
   * CodeID references the new WASM code
   *
   * @generated from field: uint64 code_id = 5;
   */
  codeId = protoInt64.zero;

  /**
   * Msg json encoded message to be passed to the contract on migration
   *
   * @generated from field: bytes msg = 6;
   */
  msg = new Uint8Array(0);

  constructor(data?: PartialMessage<MigrateContractProposal>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmwasm.wasm.v1.MigrateContractProposal";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "contract", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "code_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 6, name: "msg", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MigrateContractProposal {
    return new MigrateContractProposal().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MigrateContractProposal {
    return new MigrateContractProposal().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MigrateContractProposal {
    return new MigrateContractProposal().fromJsonString(jsonString, options);
  }

  static equals(a: MigrateContractProposal | PlainMessage<MigrateContractProposal> | undefined, b: MigrateContractProposal | PlainMessage<MigrateContractProposal> | undefined): boolean {
    return proto3.util.equals(MigrateContractProposal, a, b);
  }
}

/**
 * Deprecated: Do not use. Since wasmd v0.40, there is no longer a need for
 * an explicit SudoContractProposal. To call sudo on a contract,
 * a simple MsgSudoContract can be invoked from the x/gov module via
 * a v1 governance proposal.
 *
 * @generated from message cosmwasm.wasm.v1.SudoContractProposal
 * @deprecated
 */
export class SudoContractProposal extends Message<SudoContractProposal> {
  /**
   * Title is a short summary
   *
   * @generated from field: string title = 1;
   */
  title = "";

  /**
   * Description is a human readable text
   *
   * @generated from field: string description = 2;
   */
  description = "";

  /**
   * Contract is the address of the smart contract
   *
   * @generated from field: string contract = 3;
   */
  contract = "";

  /**
   * Msg json encoded message to be passed to the contract as sudo
   *
   * @generated from field: bytes msg = 4;
   */
  msg = new Uint8Array(0);

  constructor(data?: PartialMessage<SudoContractProposal>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmwasm.wasm.v1.SudoContractProposal";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "contract", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "msg", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SudoContractProposal {
    return new SudoContractProposal().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SudoContractProposal {
    return new SudoContractProposal().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SudoContractProposal {
    return new SudoContractProposal().fromJsonString(jsonString, options);
  }

  static equals(a: SudoContractProposal | PlainMessage<SudoContractProposal> | undefined, b: SudoContractProposal | PlainMessage<SudoContractProposal> | undefined): boolean {
    return proto3.util.equals(SudoContractProposal, a, b);
  }
}

/**
 * Deprecated: Do not use. Since wasmd v0.40, there is no longer a need for
 * an explicit ExecuteContractProposal. To call execute on a contract,
 * a simple MsgExecuteContract can be invoked from the x/gov module via
 * a v1 governance proposal.
 *
 * @generated from message cosmwasm.wasm.v1.ExecuteContractProposal
 * @deprecated
 */
export class ExecuteContractProposal extends Message<ExecuteContractProposal> {
  /**
   * Title is a short summary
   *
   * @generated from field: string title = 1;
   */
  title = "";

  /**
   * Description is a human readable text
   *
   * @generated from field: string description = 2;
   */
  description = "";

  /**
   * RunAs is the address that is passed to the contract's environment as sender
   *
   * @generated from field: string run_as = 3;
   */
  runAs = "";

  /**
   * Contract is the address of the smart contract
   *
   * @generated from field: string contract = 4;
   */
  contract = "";

  /**
   * Msg json encoded message to be passed to the contract as execute
   *
   * @generated from field: bytes msg = 5;
   */
  msg = new Uint8Array(0);

  /**
   * Funds coins that are transferred to the contract on instantiation
   *
   * @generated from field: repeated cosmos.base.v1beta1.Coin funds = 6;
   */
  funds: Coin[] = [];

  constructor(data?: PartialMessage<ExecuteContractProposal>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmwasm.wasm.v1.ExecuteContractProposal";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "run_as", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "contract", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "msg", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 6, name: "funds", kind: "message", T: Coin, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ExecuteContractProposal {
    return new ExecuteContractProposal().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ExecuteContractProposal {
    return new ExecuteContractProposal().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ExecuteContractProposal {
    return new ExecuteContractProposal().fromJsonString(jsonString, options);
  }

  static equals(a: ExecuteContractProposal | PlainMessage<ExecuteContractProposal> | undefined, b: ExecuteContractProposal | PlainMessage<ExecuteContractProposal> | undefined): boolean {
    return proto3.util.equals(ExecuteContractProposal, a, b);
  }
}

/**
 * Deprecated: Do not use. Since wasmd v0.40, there is no longer a need for
 * an explicit UpdateAdminProposal. To set an admin for a contract,
 * a simple MsgUpdateAdmin can be invoked from the x/gov module via
 * a v1 governance proposal.
 *
 * @generated from message cosmwasm.wasm.v1.UpdateAdminProposal
 * @deprecated
 */
export class UpdateAdminProposal extends Message<UpdateAdminProposal> {
  /**
   * Title is a short summary
   *
   * @generated from field: string title = 1;
   */
  title = "";

  /**
   * Description is a human readable text
   *
   * @generated from field: string description = 2;
   */
  description = "";

  /**
   * NewAdmin address to be set
   *
   * @generated from field: string new_admin = 3;
   */
  newAdmin = "";

  /**
   * Contract is the address of the smart contract
   *
   * @generated from field: string contract = 4;
   */
  contract = "";

  constructor(data?: PartialMessage<UpdateAdminProposal>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmwasm.wasm.v1.UpdateAdminProposal";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "new_admin", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "contract", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateAdminProposal {
    return new UpdateAdminProposal().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateAdminProposal {
    return new UpdateAdminProposal().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateAdminProposal {
    return new UpdateAdminProposal().fromJsonString(jsonString, options);
  }

  static equals(a: UpdateAdminProposal | PlainMessage<UpdateAdminProposal> | undefined, b: UpdateAdminProposal | PlainMessage<UpdateAdminProposal> | undefined): boolean {
    return proto3.util.equals(UpdateAdminProposal, a, b);
  }
}

/**
 * Deprecated: Do not use. Since wasmd v0.40, there is no longer a need for
 * an explicit ClearAdminProposal. To clear the admin of a contract,
 * a simple MsgClearAdmin can be invoked from the x/gov module via
 * a v1 governance proposal.
 *
 * @generated from message cosmwasm.wasm.v1.ClearAdminProposal
 * @deprecated
 */
export class ClearAdminProposal extends Message<ClearAdminProposal> {
  /**
   * Title is a short summary
   *
   * @generated from field: string title = 1;
   */
  title = "";

  /**
   * Description is a human readable text
   *
   * @generated from field: string description = 2;
   */
  description = "";

  /**
   * Contract is the address of the smart contract
   *
   * @generated from field: string contract = 3;
   */
  contract = "";

  constructor(data?: PartialMessage<ClearAdminProposal>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmwasm.wasm.v1.ClearAdminProposal";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "contract", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClearAdminProposal {
    return new ClearAdminProposal().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClearAdminProposal {
    return new ClearAdminProposal().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClearAdminProposal {
    return new ClearAdminProposal().fromJsonString(jsonString, options);
  }

  static equals(a: ClearAdminProposal | PlainMessage<ClearAdminProposal> | undefined, b: ClearAdminProposal | PlainMessage<ClearAdminProposal> | undefined): boolean {
    return proto3.util.equals(ClearAdminProposal, a, b);
  }
}

/**
 * Deprecated: Do not use. Since wasmd v0.40, there is no longer a need for
 * an explicit PinCodesProposal. To pin a set of code ids in the wasmvm
 * cache, a simple MsgPinCodes can be invoked from the x/gov module via
 * a v1 governance proposal.
 *
 * @generated from message cosmwasm.wasm.v1.PinCodesProposal
 * @deprecated
 */
export class PinCodesProposal extends Message<PinCodesProposal> {
  /**
   * Title is a short summary
   *
   * @generated from field: string title = 1;
   */
  title = "";

  /**
   * Description is a human readable text
   *
   * @generated from field: string description = 2;
   */
  description = "";

  /**
   * CodeIDs references the new WASM codes
   *
   * @generated from field: repeated uint64 code_ids = 3;
   */
  codeIds: bigint[] = [];

  constructor(data?: PartialMessage<PinCodesProposal>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmwasm.wasm.v1.PinCodesProposal";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "code_ids", kind: "scalar", T: 4 /* ScalarType.UINT64 */, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PinCodesProposal {
    return new PinCodesProposal().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PinCodesProposal {
    return new PinCodesProposal().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PinCodesProposal {
    return new PinCodesProposal().fromJsonString(jsonString, options);
  }

  static equals(a: PinCodesProposal | PlainMessage<PinCodesProposal> | undefined, b: PinCodesProposal | PlainMessage<PinCodesProposal> | undefined): boolean {
    return proto3.util.equals(PinCodesProposal, a, b);
  }
}

/**
 * Deprecated: Do not use. Since wasmd v0.40, there is no longer a need for
 * an explicit UnpinCodesProposal. To unpin a set of code ids in the wasmvm
 * cache, a simple MsgUnpinCodes can be invoked from the x/gov module via
 * a v1 governance proposal.
 *
 * @generated from message cosmwasm.wasm.v1.UnpinCodesProposal
 * @deprecated
 */
export class UnpinCodesProposal extends Message<UnpinCodesProposal> {
  /**
   * Title is a short summary
   *
   * @generated from field: string title = 1;
   */
  title = "";

  /**
   * Description is a human readable text
   *
   * @generated from field: string description = 2;
   */
  description = "";

  /**
   * CodeIDs references the WASM codes
   *
   * @generated from field: repeated uint64 code_ids = 3;
   */
  codeIds: bigint[] = [];

  constructor(data?: PartialMessage<UnpinCodesProposal>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmwasm.wasm.v1.UnpinCodesProposal";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "code_ids", kind: "scalar", T: 4 /* ScalarType.UINT64 */, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UnpinCodesProposal {
    return new UnpinCodesProposal().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UnpinCodesProposal {
    return new UnpinCodesProposal().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UnpinCodesProposal {
    return new UnpinCodesProposal().fromJsonString(jsonString, options);
  }

  static equals(a: UnpinCodesProposal | PlainMessage<UnpinCodesProposal> | undefined, b: UnpinCodesProposal | PlainMessage<UnpinCodesProposal> | undefined): boolean {
    return proto3.util.equals(UnpinCodesProposal, a, b);
  }
}

/**
 * AccessConfigUpdate contains the code id and the access config to be
 * applied.
 *
 * @generated from message cosmwasm.wasm.v1.AccessConfigUpdate
 */
export class AccessConfigUpdate extends Message<AccessConfigUpdate> {
  /**
   * CodeID is the reference to the stored WASM code to be updated
   *
   * @generated from field: uint64 code_id = 1;
   */
  codeId = protoInt64.zero;

  /**
   * InstantiatePermission to apply to the set of code ids
   *
   * @generated from field: cosmwasm.wasm.v1.AccessConfig instantiate_permission = 2;
   */
  instantiatePermission?: AccessConfig;

  constructor(data?: PartialMessage<AccessConfigUpdate>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmwasm.wasm.v1.AccessConfigUpdate";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "code_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "instantiate_permission", kind: "message", T: AccessConfig },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AccessConfigUpdate {
    return new AccessConfigUpdate().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AccessConfigUpdate {
    return new AccessConfigUpdate().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AccessConfigUpdate {
    return new AccessConfigUpdate().fromJsonString(jsonString, options);
  }

  static equals(a: AccessConfigUpdate | PlainMessage<AccessConfigUpdate> | undefined, b: AccessConfigUpdate | PlainMessage<AccessConfigUpdate> | undefined): boolean {
    return proto3.util.equals(AccessConfigUpdate, a, b);
  }
}

/**
 * Deprecated: Do not use. Since wasmd v0.40, there is no longer a need for
 * an explicit UpdateInstantiateConfigProposal. To update instantiate config
 * to a set of code ids, a simple MsgUpdateInstantiateConfig can be invoked from
 * the x/gov module via a v1 governance proposal.
 *
 * @generated from message cosmwasm.wasm.v1.UpdateInstantiateConfigProposal
 * @deprecated
 */
export class UpdateInstantiateConfigProposal extends Message<UpdateInstantiateConfigProposal> {
  /**
   * Title is a short summary
   *
   * @generated from field: string title = 1;
   */
  title = "";

  /**
   * Description is a human readable text
   *
   * @generated from field: string description = 2;
   */
  description = "";

  /**
   * AccessConfigUpdate contains the list of code ids and the access config
   * to be applied.
   *
   * @generated from field: repeated cosmwasm.wasm.v1.AccessConfigUpdate access_config_updates = 3;
   */
  accessConfigUpdates: AccessConfigUpdate[] = [];

  constructor(data?: PartialMessage<UpdateInstantiateConfigProposal>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmwasm.wasm.v1.UpdateInstantiateConfigProposal";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "access_config_updates", kind: "message", T: AccessConfigUpdate, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateInstantiateConfigProposal {
    return new UpdateInstantiateConfigProposal().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateInstantiateConfigProposal {
    return new UpdateInstantiateConfigProposal().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateInstantiateConfigProposal {
    return new UpdateInstantiateConfigProposal().fromJsonString(jsonString, options);
  }

  static equals(a: UpdateInstantiateConfigProposal | PlainMessage<UpdateInstantiateConfigProposal> | undefined, b: UpdateInstantiateConfigProposal | PlainMessage<UpdateInstantiateConfigProposal> | undefined): boolean {
    return proto3.util.equals(UpdateInstantiateConfigProposal, a, b);
  }
}

/**
 * Deprecated: Do not use. Since wasmd v0.40, there is no longer a need for
 * an explicit StoreAndInstantiateContractProposal. To store and instantiate
 * the contract, a simple MsgStoreAndInstantiateContract can be invoked from
 * the x/gov module via a v1 governance proposal.
 *
 * @generated from message cosmwasm.wasm.v1.StoreAndInstantiateContractProposal
 * @deprecated
 */
export class StoreAndInstantiateContractProposal extends Message<StoreAndInstantiateContractProposal> {
  /**
   * Title is a short summary
   *
   * @generated from field: string title = 1;
   */
  title = "";

  /**
   * Description is a human readable text
   *
   * @generated from field: string description = 2;
   */
  description = "";

  /**
   * RunAs is the address that is passed to the contract's environment as sender
   *
   * @generated from field: string run_as = 3;
   */
  runAs = "";

  /**
   * WASMByteCode can be raw or gzip compressed
   *
   * @generated from field: bytes wasm_byte_code = 4;
   */
  wasmByteCode = new Uint8Array(0);

  /**
   * InstantiatePermission to apply on contract creation, optional
   *
   * @generated from field: cosmwasm.wasm.v1.AccessConfig instantiate_permission = 5;
   */
  instantiatePermission?: AccessConfig;

  /**
   * UnpinCode code on upload, optional
   *
   * @generated from field: bool unpin_code = 6;
   */
  unpinCode = false;

  /**
   * Admin is an optional address that can execute migrations
   *
   * @generated from field: string admin = 7;
   */
  admin = "";

  /**
   * Label is optional metadata to be stored with a constract instance.
   *
   * @generated from field: string label = 8;
   */
  label = "";

  /**
   * Msg json encoded message to be passed to the contract on instantiation
   *
   * @generated from field: bytes msg = 9;
   */
  msg = new Uint8Array(0);

  /**
   * Funds coins that are transferred to the contract on instantiation
   *
   * @generated from field: repeated cosmos.base.v1beta1.Coin funds = 10;
   */
  funds: Coin[] = [];

  /**
   * Source is the URL where the code is hosted
   *
   * @generated from field: string source = 11;
   */
  source = "";

  /**
   * Builder is the docker image used to build the code deterministically, used
   * for smart contract verification
   *
   * @generated from field: string builder = 12;
   */
  builder = "";

  /**
   * CodeHash is the SHA256 sum of the code outputted by builder, used for smart
   * contract verification
   *
   * @generated from field: bytes code_hash = 13;
   */
  codeHash = new Uint8Array(0);

  constructor(data?: PartialMessage<StoreAndInstantiateContractProposal>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmwasm.wasm.v1.StoreAndInstantiateContractProposal";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "run_as", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "wasm_byte_code", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 5, name: "instantiate_permission", kind: "message", T: AccessConfig },
    { no: 6, name: "unpin_code", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 7, name: "admin", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "label", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 9, name: "msg", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 10, name: "funds", kind: "message", T: Coin, repeated: true },
    { no: 11, name: "source", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 12, name: "builder", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 13, name: "code_hash", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StoreAndInstantiateContractProposal {
    return new StoreAndInstantiateContractProposal().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StoreAndInstantiateContractProposal {
    return new StoreAndInstantiateContractProposal().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StoreAndInstantiateContractProposal {
    return new StoreAndInstantiateContractProposal().fromJsonString(jsonString, options);
  }

  static equals(a: StoreAndInstantiateContractProposal | PlainMessage<StoreAndInstantiateContractProposal> | undefined, b: StoreAndInstantiateContractProposal | PlainMessage<StoreAndInstantiateContractProposal> | undefined): boolean {
    return proto3.util.equals(StoreAndInstantiateContractProposal, a, b);
  }
}

