import React, { useState } from "react";
import { 
  Text, 
  View, 
  Image, 
  Button,
  TouchableOpacity 
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import styles from '../style/components.card.style.js';
import { createStackNavigator } from "@react-navigation/stack";


const NewsCard = (cardData) => {
  const [fullCardFlag, setFullCardFlag] = useState(false);

  function toggleCardView() {
    setFullCardFlag(!fullCardFlag);
  }

  return (
    <View style={styles.cardContainer}>
      <Text style={styles.cardTitle}>{cardData.title}</Text>
      <Image style={styles.cardImage} source={{ uri: cardData.urlToImage }} />
      <TouchableOpacity onPress={toggleCardView} underlayColor="white" />
      {/* {!fullCardFlag && (
        <ScrollView>
          <Text style={styles.newsBody}>{cardData.description}</Text>
          <Button
            title="view complete story"
            onPress={() => toggleCardView()}
          />
        </ScrollView>
      )}
      {fullCardFlag && (
        <ScrollView>
          <Text style={styles.newsBody}>{cardData.content}</Text>
          <Button title="back" onPress={() => toggleCardView()} />
        </ScrollView>
      )} */}
    </View>
  );
};

const NewsDetail = (data) => {
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.cardTitle}>{data.title}</Text>
      <Image style={styles.cardImage} source={{ uri: data.urlToImage }} />
      <ScrollView>
        <Text style={styles.newsBody}>{data.content}</Text>
        <Button title="back" onPress={() => toggleCardView()} />
      </ScrollView>
    </View>
  )
};

export default NewsCard;
