import React from "react";
import { Image, View } from "react-native";
import { styles } from "./styles";

import logo from "../../../assets/batman.png";

export function BatImage() {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.image} />
    </View>
  );
}
