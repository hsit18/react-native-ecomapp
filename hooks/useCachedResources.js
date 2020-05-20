import React, { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { Asset } from "expo-asset";

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  const cacheImages = (images) => {
    return images.map((image) => {
      if (typeof image.illustration === "string") {
        return Image.prefetch(image);
      } else {
        return Asset.fromModule(image).downloadAsync();
      }
    });
  };
  // Load any resources or data that we need prior to rendering the app
  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();
        await cacheImages([require("../assets/images/bg.jpg")]),
          // Load fonts
          await Font.loadAsync({
            ...Ionicons.font,
            "space-mono": require("../assets/fonts/SpaceMono-Regular.ttf"),
          });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
