import * as React from "react";
import { StyleProp, ViewStyle, Text, StyleSheet, View } from "react-native";

const FrameComponent1 = ({ style }) => {
  return (
    <View style={[styles.frameView, style]}>
      <Text style={styles.oneWay}>One way</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  oneWay: {
    position: "relative",
    fontSize: 14,
    lineHeight: 24,
    fontFamily: "Roboto",
    color: "#9eaab6",
    textAlign: "center",
  },
  frameView: {
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

export default FrameComponent1;
