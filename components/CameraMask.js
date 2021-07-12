import React from "react";
import { View, Dimensions, Text, StyleSheet } from "react-native";

import { Svg, Defs, Rect, Mask, Circle, Ellipse } from "react-native-svg";

const screenWidth = Math.round(Dimensions.get("window").width);
const screenHeight = Math.round(Dimensions.get("window").height);
const cameraHeight = (screenWidth * 4) / 3;

const CameraMask = () => {
  return (
    <Svg style={{ position: "absolute", flex: 1, margin: 0 }}>
      <Defs>
        <Mask id="mask">
          <Rect height="100%" width="100%" fill="white" />
          <Circle
            r={screenWidth * 0.3}
            cx={screenWidth * 0.5}
            cy={screenWidth * (4 / 3) * 0.35}
            fill="black"
          />
        </Mask>
      </Defs>
      <Rect
        height="100%"
        width="100%"
        fill="rgba(0, 0, 0, 0.4)"
        mask="url(#mask)"
        fill-opacity="0"
      />
    </Svg>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default CameraMask;
