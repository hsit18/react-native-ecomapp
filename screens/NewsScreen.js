import React, { useEffect } from "react";
import { Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import NewsCard from "../components/Card";
import styles from '../style/screens.newsScreen.style.js';
import { connect } from "react-redux";


const NewsScreen = ({ navigation }) => {
  this.props.getAllData()
  const newsCardsDisplay = this.props.data.map(function (card) {
    return <View style={styles.individualCard}><NewsCard cardData={card} navigation={navigation} /></View>
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


const mapStateToProps = (state) => {
    return {
      data : state.data
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAllData : () => dispatch({type: "GET_ALL"})
  }
}

NewsScreen.navigationOptions = {
  header: null,
};

export default connect(mapStateToProps,mapDispatchToProps)(NewsScreen);