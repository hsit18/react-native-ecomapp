import React from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get("screen");

const LoginScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: "flex-end" }}>
      <View style={{ ...StyleSheet.absoluteFill }}>
        <Image
          source={require("../assets/images/bg.jpg")}
          style={{ flex: 1, height: null, width: null }}
        />
      </View>
      <View style={{ height: height / 3 }}>
        <View style={styles.button}>
          <Text
            style={{ fontSize: 20, fontWeight: "bold" }}
            onPress={() => navigation.navigate("Root")}
          >
            SIGN IN
          </Text>
        </View>

        <View style={{ ...styles.button, backgroundColor: "#2E71DC" }}>
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>
            GOOGLE SIGN IN
          </Text>
        </View>
      </View>
    </View>
  );
};

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
};

export default LoginScreen;
