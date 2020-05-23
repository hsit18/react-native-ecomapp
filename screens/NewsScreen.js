import * as React from "react";
import { StyleSheet,  View, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import NewsCard from "./Card";

var  cards = [
  {
    "title": "Indian Cruise",
    "imageUrl": require("../assets/images/stone-town.jpg"),
    "date": "12 December 2020",
    "day": "monday",
    "newsBody": "It’s not an aroma you forget in a hurry. Here I was nibbling a piece of jackfruit – the vegan ingredient du jour – on the island of Kwale in the Zanzibar archipelago. The ripe, unopened fruit has a distinctive, rather unpleasant odour, although our guide assured us it “tastes like pineapple and mango.” We had sailed into the Menai Bay conservation area on a traditional dhow boat crafted from African mahogany. Sipping from fresh coconuts, we stopped to snorkel in the translucent Indian Ocean with a school of sergeant major fish, marvel at the coral formations and dodge a foreboding rain shower."
  },
  {
    "title": "Indian Cruise",
    "imageUrl": require("../assets/images/stone-town.jpg"),
    "date": "12 December 2020",
    "day": "monday",
    "newsBody": "It’s not an aroma you forget in a hurry. Here I was nibbling a piece of jackfruit – the vegan ingredient du jour – on the island of Kwale in the Zanzibar archipelago. The ripe, unopened fruit has a distinctive, rather unpleasant odour, although our guide assured us it “tastes like pineapple and mango.” We had sailed into the Menai Bay conservation area on a traditional dhow boat crafted from African mahogany. Sipping from fresh coconuts, we stopped to snorkel in the translucent Indian Ocean with a school of sergeant major fish, marvel at the coral formations and dodge a foreboding rain shower."
  }
]


const NewsScreen = () => {
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
        {/* some issue here*/}
        {/* <NewsCards {...cards} /> */}
        <NewsCard
          {...cards[0]}
        />
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
    backgroundColor: "#fff",
  },
  contentContainer: {
    paddingTop: 30,
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
