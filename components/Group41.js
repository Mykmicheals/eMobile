import * as React from "react";
import {
  View,
  SafeAreaView,
  StyleProp,
  ViewStyle,
  Pressable,
  Image,
  StyleSheet,
  Text,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Group41 = ({ style }) => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={[styles.group4, style]}>
      <View style={styles.view}>
        <Pressable style={styles.iconBack} onPress={() => navigation.goBack()}>
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/icon--back.png")}
          />
        </Pressable>
        <View style={styles.frameView1}>
          <View style={styles.frameView}>
            <Text style={styles.sIN}>SIN</Text>
            <Image
              style={[styles.iconBack1, styles.ml6]}
              resizeMode="cover"
              source={require("../assets/icon--back2.png")}
            />
            <Text style={[styles.lAX, styles.ml6]}>LAX</Text>
          </View>
          <Text style={[styles.july2022, styles.mt3]}>29 July, 2022</Text>
        </View>
        <View style={styles.iconKebab}>
          <View style={styles.frameView2}>
            <Image
              style={styles.ellipseIcon}
              resizeMode="cover"
              source={require("../assets/ellipse-1.png")}
            />
            <Image
              style={[styles.ellipseIcon1, styles.mt4]}
              resizeMode="cover"
              source={require("../assets/ellipse-2.png")}
            />
            <Image
              style={[styles.ellipseIcon2, styles.mt4]}
              resizeMode="cover"
              source={require("../assets/ellipse-3.png")}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  ml6: {
    marginLeft: 6,
  },
  mt3: {
    marginTop: 3,
  },
  mt4: {
    marginTop: 4,
  },
  group4: {
    backgroundColor: "#fff",
  },
  icon: {
    width: "100%",
    height: "100%",
    flexShrink: 0,
    overflow: "hidden",
  },
  iconBack: {
    position: "relative",
    width: 32,
    height: 32,
  },
  sIN: {
    position: "relative",
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#191919",
    textAlign: "left",
  },
  iconBack1: {
    position: "relative",
    width: 18,
    height: 18,
    flexShrink: 0,
    overflow: "hidden",
  },
  lAX: {
    position: "relative",
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#191919",
    textAlign: "left",
  },
  frameView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  july2022: {
    alignSelf: "stretch",
    position: "relative",
    fontSize: 14,
    lineHeight: 16,
    fontFamily: "Inter",
    color: "#7e8b97",
    textAlign: "center",
  },
  frameView1: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  ellipseIcon: {
    position: "relative",
    width: 5,
    height: 5,
    flexShrink: 0,
  },
  ellipseIcon1: {
    position: "relative",
    width: 5,
    height: 5,
    flexShrink: 0,
  },
  ellipseIcon2: {
    position: "relative",
    width: 5,
    height: 5,
    flexShrink: 0,
  },
  frameView2: {
    position: "absolute",
    top: 5,
    left: 14,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  iconKebab: {
    position: "relative",
    width: 32,
    height: 32,
    flexShrink: 0,
    overflow: "hidden",
  },
  view: {
    alignSelf: "stretch",
    position: "relative",
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 14,
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default Group41;
