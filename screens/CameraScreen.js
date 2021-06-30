import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  Image,
  StatusBar,
  BackHandler,
  Platform,
  SafeAreaView,
} from "react-native";
import { RNCamera } from "react-native-camera";
import axios from "axios";

const screenWidth = Math.round(Dimensions.get("window").width);
const screenHeight = Math.round(Dimensions.get("window").height);

const CameraScreen = ({ navigation }) => {
  const [errorMessage, setErrorMessage] = useState("Hi");
  const matchFace = async (faceImage) => {
    let formdata = new FormData();
    formdata.append("image", {
      type: "image/jpeg",
      uri: faceImage.uri,
      name: "image.jpeg",
    });

    fetch("https://alchera-face-authentication.p.rapidapi.com/v1/face/match", {
      method: "POST",
      headers: {
        "x-rapidapi-key": "8ef6747d69msh29f2c995e13af90p11ef82jsndb400bfdef04",
        "x-rapidapi-host": "alchera-face-authentication.p.rapidapi.com",
        "content-type": "multipart/form-data",
        Accept: "application/json",
      },
      body: formdata,
    })
      .then((response) => response.json())
      .then((json) => {
        if (json.match === false) {
          takePicture();
          setErrorMessage(json.result.message);
          console.log(json.result.message);
        } else {
          navigation.navigate("FinishScreen", { uid: json.uid });
        }
      })
      .catch((error) => console.log(error))
      .finally(() => {});
  };
  const takePicture = async () => {
    try {
      if (camera) {
        const options = {
          quality: 1,
          base64: true,
          orientation: "portrait",
        };
        const faceImage = await camera.takePictureAsync(options);
        matchFace(faceImage);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {}, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.cameraPreviewContainer}>
        <RNCamera
          type={RNCamera.Constants.Type.front}
          playSoundOnCapture={false}
          style={styles.camera}
          captureAudio={false}
          onCameraReady={takePicture}
          ref={(ref) => {
            camera = ref;
          }}
        >
          <Text>{errorMessage}</Text>
        </RNCamera>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cameraPreviewContainer: {
    flex: 1,
    alignItems: "center",
    paddingTop: screenHeight * 0.03947,
    justifyContent: "center",
    height: screenHeight,
  },
  camera: {
    flex: 1,
    width: screenWidth,
  },
});

export default CameraScreen;
