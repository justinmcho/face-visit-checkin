import React from "react";
import {
  View,
  Dimensions,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const screenWidth = Math.round(Dimensions.get("window").width);
const screenHeight = Math.round(Dimensions.get("window").height);

const RecognitionModal = ({ message }) => {
  return (
    <View style={styles.container}>
      <View style={styles.blueBackground} />
      <View style={styles.modal}>
        <Text>{message}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  blueBackground: {
    height: screenHeight * 0.12,
    width: screenWidth,
    backgroundColor: "blue",
    position: "absolute",
    flex: 1,
  },
  modal: {
    position: "absolute",
    backgroundColor: "white",
    borderRadius: 8,
    elevation: 3,
    flex: 1,
    width: screenWidth * 0.8,
    height: screenHeight * 0.15,
    bottom: screenHeight * 0.05,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default RecognitionModal;
