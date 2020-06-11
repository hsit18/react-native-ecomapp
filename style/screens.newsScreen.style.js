import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
      backgroundColor: "white"
    },
    contentContainer: {
      paddingTop: 15,
      flexGrow: 1,
      justifyContent: "space-between",
      flexDirection: "column"
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
    },
    individualCard: {
      display: "flex",
      justifyContent: "space-between",
      alignContent: "space-between",
      paddingBottom: 10
    }
  });