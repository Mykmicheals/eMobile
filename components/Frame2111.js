import * as React from "react";
import { StyleProp, ViewStyle, Text, StyleSheet, View } from "react-native";

const FrameComponent = ({ style }) => {
  return (
    <View style={[styles.frameView, style]}>
      <Text style={styles.roundTrip}>Round trip</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  roundTrip: {
    position: "relative",
    fontSize: 14,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "center",
  },
  frameView: {
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

export default FrameComponent;
