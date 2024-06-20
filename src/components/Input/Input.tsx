import React from "react";
import { TextInput, View } from "react-native";

import { styles } from "./styles";

interface InputProps {
  value: string;
  onChange: (value: string) => void;
}

export function Input({ value, onChange }: InputProps) {
  return (
    <TextInput
      style={styles.input}
      placeholder="pass"
      value={value}
      onChangeText={onChange}
    ></TextInput>
  );
}
