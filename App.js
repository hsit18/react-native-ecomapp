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
import NewsCard from "./components/Card";
import { createStore } from "redux";
import { Provider } from "react-redux";
import {GetNews} from "./services/newsApi";


const Stack = createStackNavigator();

const News = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen
          name="NewsScreen"
          component={NewsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="NewsCard"
          component={NewsCard}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="NewsCardDetail"
          component={NewsCardDetail}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const initialState = {
  data: [{
    title: "blabber",
    urlToImage: "",
    content: "blabber"
  }]
}

const reducer = (state = initialState,action) => {
    switch(action.type){
      case "GET_ALL":
        return {
          data: initialState
        }
    }
    return state;
}

const store = createStore(reducer)

const App = () => {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <Provider store={store}>
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
                name="News"
                component={News}
                options={{ headerShown: false }}
              />
              <Stack.Screen name="Root" component={BottomTabNavigator} />
            </Stack.Navigator>
          </NavigationContainer>
        </View>
      </Provider>
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
