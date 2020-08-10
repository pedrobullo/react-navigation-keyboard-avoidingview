import React, { useRef, MutableRefObject } from "react";
import {
  KeyboardAvoidingView,
  KeyboardAvoidingViewProps,
  ScrollView,
} from "react-native";
import { useHeaderHeight } from "@react-navigation/stack";

export interface IKeyboardAvoidingProps extends KeyboardAvoidingViewProps {
  children: React.ReactNode;
  keyboardVerticalOffset?: number;
}

const KeyboardAvoiding = ({
  children,
  keyboardVerticalOffset = 0,
  ...props
}: IKeyboardAvoidingProps) => {
  const scrollRef: MutableRefObject<ScrollView | null> = useRef(null);
  const headerHeight = useHeaderHeight();
  return (
    <KeyboardAvoidingView
      {...props}
      keyboardVerticalOffset={headerHeight + keyboardVerticalOffset}
      behavior="padding"
      style={{ flex: 1 }}
    >
      <ScrollView
        ref={scrollRef}
        bounces={false}
        keyboardShouldPersistTaps="handled"
        keyboardDismissMode="on-drag"
        showsVerticalScrollIndicator={false}
        onContentSizeChange={() =>
          scrollRef?.current?.scrollToEnd({ animated: true })
        }
        contentContainerStyle={{
          flexGrow: 1,
        }}
      >
        {children}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default KeyboardAvoiding;
