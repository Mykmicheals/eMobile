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

const Header3 = ({ style }) => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={[styles.header, style]}>
      <View style={styles.view}>
        <Pressable style={styles.iconBack} onPress={() => navigation.goBack()}>
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/icon--back13.png")}
          />
        </Pressable>
        <View style={styles.bookings1}>
          <Text style={styles.bookings}>Bookings</Text>
        </View>
        <View style={styles.iconKebab}>
          <View style={styles.frameView}>
            <Image
              style={styles.ellipseIcon}
              resizeMode="cover"
              source={require("../assets/ellipse-19.png")}
            />
            <Image
              style={[styles.ellipseIcon1, styles.mt1_32]}
              resizeMode="cover"
              source={require("../assets/ellipse-29.png")}
            />
            <Image
              style={[styles.ellipseIcon2, styles.mt1_32]}
              resizeMode="cover"
              source={require("../assets/ellipse-39.png")}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mt1_32: {
    marginTop: 1.32,
  },
  header: {
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
    width: 11,
    height: 11,
  },
  bookings: {
    position: "relative",
    fontSize: 5,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#191919",
    textAlign: "left",
  },
  bookings1: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  ellipseIcon: {
    position: "relative",
    width: 2,
    height: 2,
    flexShrink: 0,
  },
  ellipseIcon1: {
    position: "relative",
    width: 2,
    height: 2,
    flexShrink: 0,
  },
  ellipseIcon2: {
    position: "relative",
    width: 2,
    height: 2,
    flexShrink: 0,
  },
  frameView: {
    position: "absolute",
    top: 2,
    left: 5,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  iconKebab: {
    position: "relative",
    width: 11,
    height: 11,
    flexShrink: 0,
    overflow: "hidden",
  },
  view: {
    alignSelf: "stretch",
    position: "relative",
    flexDirection: "row",
    paddingHorizontal: 5,
    paddingVertical: 5,
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default Header3;
