import * as React from "react";
import { StyleProp, ViewStyle, Text, StyleSheet, View } from "react-native";

const OneWay = ({ style }) => {
  return (
    <View style={[styles.oneWay1, style]}>
      <Text style={styles.oneWay}>One way</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  oneWay: {
    position: "relative",
    fontSize: 14,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "center",
    width: 64,
  },
  oneWay1: {
    position: "relative",
    borderRadius: 32,
    backgroundColor: "#1262ae",
    width: 153,
    flexShrink: 0,
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 6,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default OneWay;
