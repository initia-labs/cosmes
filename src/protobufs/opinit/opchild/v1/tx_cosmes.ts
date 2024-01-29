// @generated by protoc-gen-cosmes v0.0.1 with parameter "target=ts"
// @generated from file opinit/opchild/v1/tx.proto (package opinit.opchild.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { MsgAddValidator, MsgAddValidatorResponse, MsgExecuteLegacyContents, MsgExecuteLegacyContentsResponse, MsgExecuteMessages, MsgExecuteMessagesResponse, MsgFinalizeTokenDeposit, MsgFinalizeTokenDepositResponse, MsgInitiateTokenWithdrawal, MsgInitiateTokenWithdrawalResponse, MsgRemoveValidator, MsgRemoveValidatorResponse, MsgSpendFeePool, MsgSpendFeePoolResponse, MsgUpdateParams, MsgUpdateParamsResponse } from "./tx_pb.js";

const TYPE_NAME = "opinit.opchild.v1.Msg";

/**
 * ExecuteMessages defines a rpc handler method for MsgExecuteMessages.
 *
 * @generated from rpc opinit.opchild.v1.Msg.ExecuteMessages
 */
export const MsgExecuteMessagesService = {
  typeName: TYPE_NAME,
  method: "ExecuteMessages",
  Request: MsgExecuteMessages,
  Response: MsgExecuteMessagesResponse,
} as const;

/**
 * ExecuteLegacyContents defines a rpc handler method for
 * MsgExecuteLegacyContents.
 *
 * @generated from rpc opinit.opchild.v1.Msg.ExecuteLegacyContents
 */
export const MsgExecuteLegacyContentsService = {
  typeName: TYPE_NAME,
  method: "ExecuteLegacyContents",
  Request: MsgExecuteLegacyContents,
  Response: MsgExecuteLegacyContentsResponse,
} as const;

/**
 * FinalizeTokenDeposit defines a rpc handler method for MsgFinalizeTokenDeposit.
 *
 * @generated from rpc opinit.opchild.v1.Msg.FinalizeTokenDeposit
 */
export const MsgFinalizeTokenDepositService = {
  typeName: TYPE_NAME,
  method: "FinalizeTokenDeposit",
  Request: MsgFinalizeTokenDeposit,
  Response: MsgFinalizeTokenDepositResponse,
} as const;

/**
 * InitiateTokenWithdrawal defines a user facing l2 => l1 token transfer interface.
 *
 * @generated from rpc opinit.opchild.v1.Msg.InitiateTokenWithdrawal
 */
export const MsgInitiateTokenWithdrawalService = {
  typeName: TYPE_NAME,
  method: "InitiateTokenWithdrawal",
  Request: MsgInitiateTokenWithdrawal,
  Response: MsgInitiateTokenWithdrawalResponse,
} as const;

/**
 * AddValidator defines a rpc handler method for MsgAddValidator.
 *
 * @generated from rpc opinit.opchild.v1.Msg.AddValidator
 */
export const MsgAddValidatorService = {
  typeName: TYPE_NAME,
  method: "AddValidator",
  Request: MsgAddValidator,
  Response: MsgAddValidatorResponse,
} as const;

/**
 * RemoveValidator defines a rpc handler method for MsgRemoveValidator.
 *
 * @generated from rpc opinit.opchild.v1.Msg.RemoveValidator
 */
export const MsgRemoveValidatorService = {
  typeName: TYPE_NAME,
  method: "RemoveValidator",
  Request: MsgRemoveValidator,
  Response: MsgRemoveValidatorResponse,
} as const;

/**
 * UpdateParams defines an operation for updating the
 * x/opchild module parameters.
 *
 * @generated from rpc opinit.opchild.v1.Msg.UpdateParams
 */
export const MsgUpdateParamsService = {
  typeName: TYPE_NAME,
  method: "UpdateParams",
  Request: MsgUpdateParams,
  Response: MsgUpdateParamsResponse,
} as const;

/**
 * SpendFeePool defines an operation that spend fee pool to a recipient.
 *
 * @generated from rpc opinit.opchild.v1.Msg.SpendFeePool
 */
export const MsgSpendFeePoolService = {
  typeName: TYPE_NAME,
  method: "SpendFeePool",
  Request: MsgSpendFeePool,
  Response: MsgSpendFeePoolResponse,
} as const;

