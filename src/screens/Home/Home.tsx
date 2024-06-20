import { Text, View } from "react-native";
import { BatLogo } from "../../components/BatLogo/BatLogo";
import styles from "./Style";

export const Home = () => {
  return (
    <View style={styles.container}>
      <Text>Home screen</Text>
      <BatLogo />
    </View>
  );
};
