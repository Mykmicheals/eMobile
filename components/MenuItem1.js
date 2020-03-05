import * as React from "react";
import {
  Pressable,
  StyleProp,
  ViewStyle,
  Image,
  StyleSheet,
  Text,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const MenuItem1 = ({ style }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.menuItem, style]}
      onPress={() =>
        navigation.navigate("BottomTabsRoot", { screen: "Bookings" })
      }
    >
      <Image
        style={styles.iconlyLightFilter}
        resizeMode="cover"
        source={require("../assets/iconlylightfilter.png")}
      />
      <Text style={[styles.allBookings, styles.ml16]}>All Bookings</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  ml16: {
    marginLeft: 16,
  },
  iconlyLightFilter: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
  },
  allBookings: {
    position: "relative",
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#191919",
    textAlign: "left",
  },
  menuItem: {
    alignSelf: "stretch",
    position: "relative",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
});

export default MenuItem1;
