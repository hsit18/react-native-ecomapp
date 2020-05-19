import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

const HomeScreen = () => {
  const [categories, setCategories] = useState();
  useEffect(() => {
    fetch("https://evening-tor-29203.herokuapp.com/api/v1/categories")
      .then((res) => res.json())
      .then((res) => {
        setCategories(res.categories || []);
      });
  }, []);
  return (
    <View style={styles.container}>
      <Text>Categories</Text>
      {categories.map((c) => (
        <Text>{c.name}</Text>
      ))}
    </View>
  );
};

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default HomeScreen;
