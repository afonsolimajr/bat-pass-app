import React from "react";
import { Text, TouchableOpacity } from "react-native";

import { styles } from "./styles";

interface ButtonProps {
  label: string;
  onPress: () => void;
}

export function Button({ label, onPress }: ButtonProps) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.textButton}>{label}</Text>
    </TouchableOpacity>
  );
}
