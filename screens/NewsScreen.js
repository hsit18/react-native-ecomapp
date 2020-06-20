import React, { useState, useEffect } from "react";
import {  Text,View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import NewsCard from "../components/Card";
import styles from '../style/screens.newsScreen.style.js'; 

const NewsScreen = ({navigation}) => {
  const [newsCards, setNewsCards] = useState([])
  useEffect(() => {
    fetch("http://www.mocky.io/v2/5eca75ad3000009300a6cfd9")
    .then((res) => res.json())  
    .then((res) => {
        setNewsCards(res.articles);
    })
  }, []);
  const newsCardsDisplay = newsCards.map(function (card) {
    return <View style={styles.individualCard}><NewsCard cardData={card} navigation={navigation}/></View>
  });
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Todays' Headlines</Text>
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