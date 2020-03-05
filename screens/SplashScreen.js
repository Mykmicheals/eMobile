import * as React from "react";
import { Image, StyleSheet, View, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const SplashScreen = () => {
  return (
    <LinearGradient
      style={styles.splashScreen}
      locations={[0, 1]}
      colors={["#10579b", "#3aa4c8"]}
    >
      <ImageBackground
        style={styles.icon}
        resizeMode="stretch"
        source={require("../assets/esusu.jpg")}
      >
        <View style={styles.logoSection}>
          {/* <Image
            style={styles.logoIcon}
            resizeMode="cover"
            source={require("../assets/e-logo.png")}
          /> */}
        </View>
        {/* <Image
          style={[styles.cloudsGraphicsIcon, styles.mt154]}
          resizeMode="cover"
          source={require("../assets/frame-2446.png")}
        /> */}
      </ImageBackground>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  mt154: {
    marginTop: 154,
  },
  logoIcon: {
    position: "absolute",
    height: "100.71%",
    width: "100.3%",
    top: "-0.35%",
    right: "0.03%",
    bottom: "-0.35%",
    left: "-0.32%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  logoSection: {
    position: "relative",
    width: 285,
    height: 289,
    flexShrink: 0,
    zIndex: 0,
  },
  cloudsGraphicsIcon: {
    position: "absolute",
    right: 0,
    bottom: 370,
    left: 0,
    maxWidth: "100%",
    overflow: "hidden",
    height: 252,
    flexShrink: 0,
    zIndex: 1,
  },
  icon: {
    flex: 1,
    width: "100%",
    height: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  splashScreen: {
    position: "relative",
    width: "100%",
    height: 956,
  },
});

export default SplashScreen;
