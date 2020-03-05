import * as React from "react";
import {
  StyleProp,
  ViewStyle,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";

const BottomTab5 = ({ style }) => {
  return (
    <View style={[styles.bottomTab, style]}>
      <Image
        style={styles.iconItinerary}
        resizeMode="cover"
        source={require("../assets/swap.png")}
      />
      <Text style={[styles.search, styles.mt14]}>Swap</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mt14: {
    marginTop: 14,
  },
  iconItinerary: {
    position: "relative",
    width: 25,
    height: 25,
    flexShrink: 0,
  },
  search: {
    position: "relative",
    fontSize: 14,
    fontFamily: "Roboto",
    color: "#7e8b97",
    textAlign: "center",
  },
  bottomTab: {
    flex: 1,
    position: "relative",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});

export default BottomTab5;
