import React, { useState, useEffect } from "react";
import { StyleSheet, View, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import NewsCard from "./Card";


const NewsScreen = () => {
  const [newsCards, setNewsCards] = useState([])
  useEffect(() => {
    fetch("http://www.mocky.io/v2/5eca75ad3000009300a6cfd9")
    .then((res) => res.json())  
    .then((res) => {
        setNewsCards(res.articles);
    })
  }, []);
  const newsCardsDisplay = newsCards.map(function (card) {
    return <NewsCard {...card} />
  });
  return (
    <View style={styles.container}>
      <View style={styles.imageView}>
        <Image
          style={styles.logo}
          source={require('../assets/images/news.jpg')}
        />
      </View>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        {newsCardsDisplay}
      </ScrollView>
    </View>
  );
};

NewsScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#CCD1D1",
  },
  contentContainer: {
    paddingTop: 10,
  },

  getStartedText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "rgba(0,0,0, 1)",
    lineHeight: 30,
    textAlign: "center",
  },

  imageView: {
    paddingTop: 30,
    alignItems: "center"
  },

  logo: {
    width: 350,
    height: 150,
  }
});

export default NewsScreen;