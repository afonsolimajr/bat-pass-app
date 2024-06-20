import React from "react";
import { Image, View } from "react-native";
import { styles } from "./styles";

import logo from "../../../assets/batman-logo.png";

export function BatLogo() {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
    </View>
  );
}
