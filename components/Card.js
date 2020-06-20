import React from "react";
import { 
  Text, 
  View, 
  Image,
  Button
} from "react-native";
import styles from '../style/components.card.style.js';
import NewsCardDetail from '../components/NewsCardDetail';

const NewsCard = ({cardData,navigation}) => {
  showCardDetails = () => {
    return(
      <NewsCardDetail data={cardData} navigation={navigation} />
    )
  }

  return (
    <View style={styles.cardContainer}>
      <Text style={styles.cardTitle}>{cardData.title}</Text>
      <Image style={styles.cardImage} source={{ uri: cardData.urlToImage }} />
      {/* <Button title="view complete story" onPress={showCardDetails} /> */}
    </View>
  );
};

export default NewsCard;