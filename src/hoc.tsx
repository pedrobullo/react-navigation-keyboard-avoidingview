import React from "react";
import KeyboardAvoiding, { IKeyboardAvoidingProps } from "./KeyboardAvoiding";

const withKeyboardAvoidingView = (
  InnerComponent: React.FC,
  options: IKeyboardAvoidingProps
) => {
  return <KeyboardAvoiding {...options}>{InnerComponent}</KeyboardAvoiding>;
};

export default withKeyboardAvoidingView;
