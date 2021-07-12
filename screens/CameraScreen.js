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

import CameraMask from "../components/CameraMask";
import BackButton from "../components/BackButton";
import RecognitionModal from "../components/RecognitionModal";

const screenWidth = Math.round(Dimensions.get("window").width);
const screenHeight = Math.round(Dimensions.get("window").height);
const cameraHeight = (screenWidth * 4) / 3;

const CameraScreen = ({ navigation }) => {
  const [detecting, setDetecting] = useState(true);

  const [resultMessage, setResultMessage] = useState("인식중 입니다.");
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
          const message = json.result.message;
          if (message === "OK") {
            setResultMessage("미등록자 입니다.");
          } else if (message == "Cannot find face in request image.") {
            setResultMessage("Cannot find face.");
          }
          console.log(message);
          takePicture();
          // setResultMessage("인식중 입니다.");
        } else {
          setResultMessage(json.uid + "님 출석 완료되었습니다.");
          // navigation.navigate("FinishScreen", { uid: json.uid });
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

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.cameraPreviewContainer}>
        <RNCamera
          type={RNCamera.Constants.Type.front}
          playSoundOnCapture={false}
          style={styles.camera}
          captureAudio={false}
          ratio="4:3"
          onCameraReady={takePicture}
          ref={(ref) => {
            camera = ref;
          }}
        >
          <CameraMask />
          <BackButton goBack={navigation.goBack} />
          <RecognitionModal message={resultMessage} />
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
    // marginTop: 500,
  },
  camera: {
    flex: 1,
    alignSelf: "center",

    // position: "absolute",
    // width: screenWidth,
    height: cameraHeight,
    width: screenWidth,
    overflow: "hidden",
  },
});

export default CameraScreen;
