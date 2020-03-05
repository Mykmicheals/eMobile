import React, { useEffect, useState } from 'react'
import {
  View,
  SafeAreaView,
  StyleProp,
  ViewStyle,
  Text,
  Pressable,
  Image,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Auth } from 'aws-amplify';


const Header2 = ({ style }) => {
  const navigation = useNavigation();
  const [user, setUser] = useState(null)
  useEffect(() => {
    function loadUser() {
      return Auth.currentAuthenticatedUser({ bypassCache: true })
    }

    async function onload() {
      try {
        const user = await loadUser()
        console.log(user.attributes);
        setUser(user.attributes)
      } catch (e) {
        alert(e)
      }
    }

    onload()

  }, [])

  return (
    <SafeAreaView style={[styles.header, style]}>
      <View style={styles.view}>
        <Pressable
          style={styles.hamburgerIcon}
          onPress={() => navigation.toggleDrawer()}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/hamburger-icon.png")}
          />
        </Pressable>
        <Text style={styles.offers}>Hi,{user?.given_name}</Text>
        <View style={styles.profile}>
          <Image
            style={styles.group3Icon}
            resizeMode="cover"
            source={require("../assets/bell.png")}
          />
          <Image
            style={styles.ovalIcon}
            resizeMode="cover"
            source={require("../assets/oval.png")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#fff",
  },
  icon: {
    width: "100%",
    height: "100%",
    flexShrink: 0,
    overflow: "hidden",
  },
  hamburgerIcon: {
    position: "relative",
    width: 32,
    height: 32,
  },
  logoIcon: {
    position: "relative",
    width: 152,
    height: 28,
    flexShrink: 0,
  },
  group3Icon: {
    position: "relative",
    width: 36,
    height: 36,
    flexShrink: 0,
    zIndex: 0,
  },
  ovalIcon: {
    position: "absolute",
    top: 0,
    left: 26,
    width: 10,
    height: 10,
    flexShrink: 0,
    zIndex: 1,
  },
  profile: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    position: "relative",
  },
  view: {
    alignSelf: "stretch",
    position: "relative",
    flexDirection: "row",
    padding: 16,
    alignItems: "center",
    justifyContent: "space-between",
  },


});

export default Header2;


