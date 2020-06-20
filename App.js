import React from "react";
import { Platform, StatusBar, StyleSheet, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import useCachedResources from "./hooks/useCachedResources";
import BottomTabNavigator from "./navigation/BottomTabNavigator";
import LoginScreen from "./screens/LoginScreen";
import LinkingConfiguration from "./navigation/LinkingConfiguration";
import NewsScreen from "./screens/NewsScreen";
import NewsCardDetail from "./components/NewsCardDetail";

const Stack = createStackNavigator();

const App = () => {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <View style={styles.container}>
        {Platform.OS === "ios" && <StatusBar barStyle="dark-content" />}
        <NavigationContainer linking={LinkingConfiguration}>
          <Stack.Navigator>
            {/* <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{ headerShown: false }}
            /> */}
            <Stack.Screen
              name="NewsScreen"
              component={NewsScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
               name="NewsCardDetail"
               component={NewsCardDetail}
               options={{headerShown: false}}
            />
            <Stack.Screen name="Root" component={BottomTabNavigator} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default App;
