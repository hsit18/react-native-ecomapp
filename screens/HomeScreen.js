import React, { useEffect, useState } from "react";
import {  Text, View } from "react-native";
import styles from '../style/screens.homeScreen.style.js';

const HomeScreen = () => {
  const [categories, setCategories] = useState();
  useEffect(() => {
    fetch("https://evening-tor-29203.herokuapp.com/api/v1/categories",
    {
      method: "PUT",
      mode: "cors",
    })
      .then((res) => res.json())
      .then((res) => {
        setCategories(res.categories || []);
      });
  }, []);
  return (
    <View style={styles.container}>
      <Text>Categories</Text>
      {categories && categories.map((c) => (
        <Text>{c.name}</Text>
      ))}
    </View>
  );
};

HomeScreen.navigationOptions = {
  header: null,
};

export default HomeScreen;
