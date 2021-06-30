import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
} from "react-native";

const screenWidth = Math.round(Dimensions.get("window").width);
const screenHeight = Math.round(Dimensions.get("window").height);

const StartScreen = ({ navigation }) => {
  useEffect(() => {}, []);
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("CameraScreen")}>
        <View
          style={{
            marginTop: 50,
            borderColor: "black",
            borderWidth: 2,
            alignItems: "center",
            justifyContent: "center",
            height: 50,
          }}
        >
          <Text>체크인 시작</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: screenHeight * 0.0394,
    backgroundColor: "white",
  },
});
export default StartScreen;
