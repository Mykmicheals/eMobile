import * as React from "react";
import {
  StyleProp,
  ViewStyle,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";

const BottomTab3 = ({ style }) => {
  return (
    <View style={[styles.bottomTab, style]}>
      <Image
        style={styles.iconOffers}
        resizeMode="cover"
        source={require("../assets/history.png")}
      />
      <Text style={[styles.search, styles.mt14]}>History</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mt14: {
    marginTop: 14,
  },
  iconOffers: {
    position: "relative",
    width: 25,
    height: 25,
    flexShrink: 0,
  },
  search: {
    position: "relative",
    fontSize: 14,
    fontFamily: "Roboto",
    color: "#979797",
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

export default BottomTab3;
