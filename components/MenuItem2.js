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

const MenuItem2 = ({ style }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.menuItem, style]}
      onPress={() =>
        navigation.navigate("BottomTabsRoot", { screen: "Profile" })
      }
    >
      <Image
        style={styles.iconlyLightProfile}
        resizeMode="cover"
        source={require("../assets/iconlylightprofile.png")}
      />
      <Text style={[styles.profile, styles.ml16]}>Profile</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  ml16: {
    marginLeft: 16,
  },
  iconlyLightProfile: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
  },
  profile: {
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

export default MenuItem2;
