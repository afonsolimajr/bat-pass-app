import { Text, ToastAndroid, View } from "react-native";
import { BatLogo } from "../../components/BatLogo/BatLogo";
import styles from "./Style";
import { Input } from "../../components/Input/Input";
import { Button } from "../../components/Button/Button";
import { useState } from "react";
import * as Clipboard from "expo-clipboard";
import generatePass from "../../services/passwordService";

export const Home = () => {
  const [psw, setPsw] = useState("");

  const copyToClipboard = async () => {
    await Clipboard.setStringAsync(psw).then((value) => {
      value &&
        ToastAndroid.show(
          "Copiado para área de transferência.",
          ToastAndroid.SHORT
        );
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.titleText}>BAT GERADOR DE SENHAS</Text>
        <BatLogo />
      </View>
      <View style={styles.controlContainer}>
        <Input value={psw} onChange={(value) => setPsw(value)} />
        <Button
          label="⚡ GERAR"
          onPress={() => {
            setPsw(generatePass());
          }}
        />
        <Button
          label="✔️ copiar"
          onPress={() => {
            copyToClipboard();
          }}
        />
      </View>
    </View>
  );
};
