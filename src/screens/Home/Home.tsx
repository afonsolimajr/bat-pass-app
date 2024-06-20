import { Text, View } from "react-native";
import { BatLogo } from "../../components/BatLogo/BatLogo";
import styles from "./Style";
import { BatImage } from "../../components/BatImage/BatImage";
import { Input } from "../../components/Input/Input";
import { Button } from "../../components/Button/Button";

export const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.titleText}>BAT PASS GENERATOR</Text>
        <BatLogo />
        {/* <BatImage /> */}
      </View>
      <View style={styles.controlContainer}>
        <Input />
        <Button>⚡ GENERATE </Button>
        <Button>⚡ copy </Button>
      </View>
    </View>
  );
};
