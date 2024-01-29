// @generated by protoc-gen-es v1.7.0 with parameter "target=ts"
// @generated from file cosmos/msg/textual/v1/textual.proto (package cosmos.msg.textual.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { MessageOptions, proto3 } from "@bufbuild/protobuf";

/**
 * expert_custom_renderer is an informative identifier to reference the
 * algorithm used to generate the custom textual representation of the
 * protobuf message where this annotation is applied. We recommend to use a
 * short, versioned name as this identifier, e.g. "replace_with_username_v1".
 * We also recommand providing a human-readable description as protobuf
 * comments on this annotation, for example a short specification or a link
 * to the relevant documentation.
 *
 * Also see the section on Custom Message Renderers in ADR-050.
 *
 * @generated from extension: string expert_custom_renderer = 11110009;
 */
export const expert_custom_renderer = proto3.makeExtension<MessageOptions, string>(
  "cosmos.msg.textual.v1.expert_custom_renderer", 
  MessageOptions, 
  { no: 11110009, kind: "scalar", T: 9 /* ScalarType.STRING */ },
);

