import * as React from "react";
import { StyleProp, ViewStyle, Text, StyleSheet, View } from "react-native";

const RoundTrip = ({ style }) => {
  return (
    <View style={[styles.roundTrip1, style]}>
      <Text style={styles.roundTrip}>Round trip</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  roundTrip: {
    position: "relative",
    fontSize: 14,
    lineHeight: 24,
    fontFamily: "Roboto",
    color: "#9eaab6",
    textAlign: "center",
  },
  roundTrip1: {
    position: "relative",
    borderRadius: 32,
    width: 153,
    flexShrink: 0,
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 6,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default RoundTrip;
