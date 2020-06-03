import React, { useState } from "react";
import { View, Image, StyleSheet, Dimensions, Alert } from "react-native";
import Button from "../components/Button";
import { TextInput } from "react-native-gesture-handler";

const { height, width } = Dimensions.get("screen");

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = () => {
    if (username === "admin") {
      navigation.navigate("Root");
    } else {
      Alert.alert("Invalid User.");
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "flex-end" }}>
      <View style={{ ...StyleSheet.absoluteFill }}>
        <Image
          source={require("../assets/images/bg.jpg")}
          style={{ flex: 1, height: null, width: null }}
        />
      </View>
      <View style={{ height: height / 3 }}>
        <View style={{ flex: 1, alignItems: "center" }}>
          <TextInput
            style={{
              height: 40,
              color: "#fff",
              width: width / 2,
              borderBottomColor: "#fff",
              borderBottomWidth: 1,
            }}
            placeholder="Username"
            onChangeText={setUsername}
            defaultValue=""
          />
          <TextInput
            style={{
              height: 40,
              color: "#fff",
              width: width / 2,
              borderBottomColor: "#fff",
              borderBottomWidth: 1,
            }}
            placeholder="Password"
            onChangeText={setPassword}
            defaultValue=""
            secureTextEntry
          />
        </View>

        <Button text="SIGN IN" onPress={onSubmit} />
      </View>
    </View>
  );
};

export default LoginScreen;
