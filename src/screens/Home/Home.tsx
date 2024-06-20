import { Text, View } from "react-native";
import { BatLogo } from "../../components/BatLogo/BatLogo";
import styles from "./Style";
import { BatImage } from "../../components/BatImage/BatImage";
import { Input } from "../../components/Input/Input";
import { Button } from "../../components/Button/Button";
import { useState } from "react";
import generatePass from "../../services/passwordService";

export const Home = () => {
  const [psw, setPsw] = useState("");
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.titleText}>BAT PASS GENERATOR</Text>
        <BatLogo />
        {/* <BatImage /> */}
      </View>
      <View style={styles.controlContainer}>
        <Input value={psw} onChange={(value) => setPsw(value)} />
        <Button
          label="⚡ GENERATE"
          onPress={() => {
            setPsw(generatePass());
          }}
        />
        <Button label="✔️ copy" onPress={() => {}} />
      </View>
    </View>
  );
};
