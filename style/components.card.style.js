import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    cardContainer: {
      paddingBottom: 5,
      alignItems: "center",
      borderWidth: 2,
      borderRadius: 15,
      borderColor: "grey",
      backgroundColor: "#5D6D7E",
      color: "white"
    },
    cardImage: {
      alignContent: "flex-start",
      width: 350,
      height: 150,
      paddingBottom: 7
    },
    cardTitle: {
      fontSize: 17,
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