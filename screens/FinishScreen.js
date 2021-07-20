import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
  Image,
} from "react-native";

const screenWidth = Math.round(Dimensions.get("window").width);
const screenHeight = Math.round(Dimensions.get("window").height);

const FinishScreen = ({ navigation, route }) => {
  const { uid } = route.params;
  useEffect(() => {}, []);
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View>
          <Text style={{ color: "#3B45FF" }}>Facevisit 방문자 관리 시스템</Text>
          <Text>출석이 완료되었습니다.</Text>
        </View>
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
            <Text>출석 확인</Text>
          </View>
        </TouchableOpacity>
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
            <Text>처음으로</Text>
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
