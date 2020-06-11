import React, { useState, useEffect } from "react";
import {  View, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import NewsCard from "../components/Card";
import styles from '../style/screens.newsScreen.style.js'; 

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
    return <View style={styles.individualCard}><NewsCard {...card} /></View>
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

export default NewsScreen;