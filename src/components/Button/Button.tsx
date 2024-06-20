import React, { PropsWithChildren } from "react";
import { Pressable, Text, TextInput, View } from "react-native";

import { styles } from "./styles";

interface ButtonProps {
  label: string;
  onPress: () => void;
}

export function Button({ label, onPress }: ButtonProps) {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.textButton}>{label}</Text>
    </Pressable>
  );
}
