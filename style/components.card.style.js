import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    cardContainer: {
      height: 200,
      alignItems: "center",
      borderRadius: 15,
      borderColor: "grey",
      backgroundColor: "#5D6D7E",
      color: "white"
    },
    cardImage: {
      width: 350,
      height: 150,
      paddingBottom: 7,
      borderRadius: 10
    },
    cardTitle: {
      fontSize: 15,
      textAlign:"center",
      fontWeight: "bold",
      color: "white",
      paddingBottom: 7
    },
    cardMetadata: {
      fontSize: 10,
      fontWeight: "normal",
      alignContent: "flex-start",
      color: "white"
    },
    newsBody: {
      fontSize: 13,
      fontWeight: "normal",
      alignContent: "flex-start",
      color: "white",
      paddingBottom: 10,
    },
  });