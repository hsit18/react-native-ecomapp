import React from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
    Button
} from 'react-native';
import styles from '../style/components.card.style.js';



const NewsCardDetail = ({data,navigation}) => {
    return (
      <View style={styles.cardContainer}>
        <Text style={styles.cardTitle}>{data.title}</Text>
        <Image style={styles.cardImage} source={{ uri: data.urlToImage }} />
        <ScrollView>
          <Text style={styles.newsBody}>{data.content}</Text>
          <Button title="back" onPress={navigation.goBack()} />
        </ScrollView>
      </View>
    )
  };

export default NewsCardDetail;