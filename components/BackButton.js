import React from "react";
import {
  View,
  Dimensions,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import Icon from "react-native-vector-icons/Ionicons";

const screenWidth = Math.round(Dimensions.get("window").width);
const screenHeight = Math.round(Dimensions.get("window").height);

const BackButton = ({ goBack }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => goBack()}>
        <View style={styles.backButtonContainer}>
          <Icon name="arrow-back-outline" size={30} color="blue"></Icon>
        </View>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(0, 0, 0, 0)",
    flexDirection: "row",
    marginTop: 20,
    marginLeft: 20,
  },
  backButtonContainer: {
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "blue",
    alignItems: "flex-start",
  },
});

export default BackButton;
