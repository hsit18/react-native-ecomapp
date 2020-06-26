import React from "react";
import { 
  Text, 
  View, 
  Image,
  TouchableWithoutFeedback
} from "react-native";
import styles from '../style/components.card.style.js';

const NewsCard = ({cardData,navigation}) => {
  return (
    <TouchableWithoutFeedback
       onPress={navigation.navigate("NewsCardDetail")}
    >
    <View style={styles.cardContainer}>
      <Text style={styles.cardTitle}>{cardData.title}</Text>
      <Image style={styles.cardImage} source={{ uri: cardData.urlToImage }} />
    </View>
    </TouchableWithoutFeedback>
  );
};

export default NewsCard;