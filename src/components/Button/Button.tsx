import React, { PropsWithChildren } from "react";
import { Pressable, Text, TextInput, View } from "react-native";

import { styles } from "./styles";

interface ButtonProps {
  label: string;
  children: React.PropsWithChildren;
}

export function Button(props: PropsWithChildren) {
  return (
    <Pressable style={styles.button}>
      <Text style={styles.textButton}>{props.children}</Text>
    </Pressable>
  );
}
