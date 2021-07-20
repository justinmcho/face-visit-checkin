import { rgba } from "jimp";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
} from "react-native";

import Background from "../assets/main_bg_pattern.png";
import FaceVisit from "../assets/facevisit_logo_white.png";

const screenWidth = Math.round(Dimensions.get("window").width);
const screenHeight = Math.round(Dimensions.get("window").height);

const StartScreen = ({ navigation }) => {
  useEffect(() => {}, []);
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.imageBackgroundContainer}
        source={Background}
      >
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeText}>Welcome</Text>
        </View>
        <View style={{ flex: 1 }}>
          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionText}>
              Facevisit 출입관리 시스템{"\n"}
              알체라 Alignment Day 입장을 위해{"\n"}
              아래 출석하기 버튼을 눌러주세요.
            </Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("CameraScreen")}>
            <View style={styles.enterButton}>
              <Text style={styles.enterButtonText}>출석 하기</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.logoContainer}>
          <Image source={FaceVisit} />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3B45FF",
  },
  imageBackgroundContainer: {
    height: screenHeight,
    width: screenWidth,
    backgroundColor: "#3B45FF",
    flex: 1,
  },
  welcomeContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: screenHeight * 0.05,
  },
  welcomeText: {
    color: "#FFFFFF",
    fontWeight: "700",
    fontSize: screenHeight * 0.025,
  },
  descriptionContainer: {
    alignItems: "center",
  },
  descriptionText: {
    color: "#FFFFFF",
    textAlign: "center",
    lineHeight: 30,
    fontWeight: "600",
  },
  enterButton: {
    marginTop: screenHeight * 0.08,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 4,
    height: 40,
    width: screenWidth * 0.35,
  },
  enterButtonText: {
    color: "#3B45FF",
  },
  logoContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: screenHeight * 0.05,
  },
});
export default StartScreen;
