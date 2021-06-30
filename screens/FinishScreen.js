import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
  Image,
  BackHandler,
  Alert,
  TouchableWithoutFeedback,
} from "react-native";

const screenWidth = Math.round(Dimensions.get("window").width);
const screenHeight = Math.round(Dimensions.get("window").height);

const FinishScreen = ({ navigation, route }) => {
  const { uid } = route.params;
  useEffect(() => {}, []);
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>{uid}님 체크인 성공.</Text>
        <TouchableOpacity onPress={() => navigation.navigate("CameraScreen")}>
          <View
            style={{
              marginTop: 50,
              borderColor: "black",
              borderWidth: 2,
              alignItems: "center",
              justifyContent: "center",
              height: 80,
            }}
          >
            <Text>다른 사람 체크인</Text>
          </View>
        </TouchableOpacity>
      </View>
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
export default FinishScreen;
