import React from "react";
import { View, Text } from "react-native";

const styles = {
  button: {
    backgroundColor: "white",
    height: 70,
    marginHorizontal: 20,
    borderRadius: 35,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 5,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
};

const Button = ({ text, buttonStyle, onPress, textStyle }) => (
  <View style={{ ...styles.button, ...buttonStyle }}>
    <Text style={{ ...styles.text, ...textStyle }} onPress={onPress}>
      {text}
    </Text>
  </View>
);

export default Button;
