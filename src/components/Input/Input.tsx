import React from "react";
import { TextInput, View } from "react-native";

import { styles } from "./styles";

export function Input() {
  return <TextInput style={styles.input} placeholder="pass"></TextInput>;
}
