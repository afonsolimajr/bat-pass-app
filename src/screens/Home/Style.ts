import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "#333333",
    alignItems: "center",
    justifyContent: "center",
    gap: 25,
  },
  logoContainer: {
    width: "100%",
    height: 200,
    borderTopColor: "white",
    borderWidth: 2,
    borderBottomColor: "white",
    backgroundColor: "#4D4D4D",
    alignItems: "center",
    justifyContent: "center",
    gap: 15,
  },
  controlContainer: {
    width: "80%",
    alignItems: "center",
    gap: 10,
  },
  titleText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "orange",
  },
});

export default styles;
