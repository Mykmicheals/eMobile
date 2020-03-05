import * as React from "react";
import {
  StyleProp,
  ViewStyle,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";

const BottomTab4 = ({ style }) => {
  return (
    <View style={[styles.bottomTab, style]}>
      <Image
        style={styles.iconSearchFlights}
        resizeMode="cover"
        source={require("../assets/history-active.png")}
      />
      <Text style={[styles.search, styles.mt14]}>History</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mt14: {
    marginTop: 14,
  },
  iconSearchFlights: {
    position: "relative",
    width: 25,
    height: 25,
    flexShrink: 0,
    opacity: 0.8,
  },
  search: {
    position: "relative",
    fontSize: 14,
    fontFamily: "Roboto",
    color: "#10579b",
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

export default BottomTab4;
