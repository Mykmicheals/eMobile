import * as React from "react";
import { useState } from "react";
import MenuItem2 from "../components/MenuItem2";
import MenuItem1 from "../components/MenuItem1";
import MenuItem from "../components/MenuItem";
import { Image, StyleSheet, View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';


const DrawerMenu = ({ state, navigation }) => {
  const [drawerItemsNormal] = useState([
    <MenuItem2 style={styles.mt28} />,
    <MenuItem1 style={styles.mt28} />,
    <MenuItem style={styles.mt28} />,
  ]);
  const [drawerItemsActive] = useState([
    <MenuItem2 style={styles.mt28} />,
    <MenuItem1 style={styles.mt28} />,
    <MenuItem style={styles.mt28} />,
  ]);
  const stateIndex = !state ? 0 : state.index - 1;
  return (
    <SafeAreaView style={styles.drawerMenu}>
      <View style={styles.view}>
        <View style={styles.menu}>
          <View style={styles.profile}>
            <View style={styles.frameView}>
              <Image
                style={styles.group3Icon}
                resizeMode="cover"
                source={require("../assets/group33.png")}
              />
            </View>
            <View style={[styles.frameView1, styles.ml12]}>
              <Text style={styles.hello}>Hello</Text>
              <Text style={styles.macyJohnson}>Ebenezer, John</Text>
            </View>
          </View>
          <View style={[styles.lineView, styles.mt20]} />
          <View style={[styles.drawerMenuItems, styles.mt20]}>
            {/* {stateIndex === 0 ? drawerItemsActive[0] : drawerItemsNormal[0]}
            {stateIndex === 1 ? drawerItemsActive[1] : drawerItemsNormal[1]}
            {stateIndex === 2 ? drawerItemsActive[2] : drawerItemsNormal[2]} */}
            <View style={[styles.menuItem, styles.mt28]}>
              <Image
                style={styles.ionmailOutlineIcon}
                resizeMode="cover"
                source={require("../assets/ionmailoutline.png")}
              />
              <TouchableOpacity onPress={(navigate)=>{navigation.navigate('linkaccount')}}>
                              <Text style={[styles.getHelp, styles.ml16]}>Link Account </Text>
              </TouchableOpacity>

            </View>
            <View style={[styles.menuItem1, styles.mt28]}>
              <Image
                style={styles.calenderIcon}
                resizeMode="cover"
                source={require("../assets/calender.png")}
              />
              <Text style={[styles.covidAdvisory, styles.ml16]}>
                Create Account
              </Text>
            </View>
            <View style={[styles.menuItem2, styles.mt28]}>
              <Image
                style={styles.rateIcon}
                resizeMode="cover"
                source={require("../assets/rate.png")}
              />
              <Text style={[styles.rateUs, styles.ml16]}>Rate us</Text>
            </View>
          </View>
        </View>
        <View style={styles.appVersionDetails}>
          <Text style={styles.appVersion101}>App version 1.0.1</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  ml12: {
    marginLeft: 12,
  },
  ml16: {
    marginLeft: 16,
  },
  mt28: {
    marginTop: 28,
  },
  mt20: {
    marginTop: 20,
  },
  drawerMenu: {
    flex: 1,
    backgroundColor: "#fff",
  },
  group3Icon: {
    position: "relative",
    width: 49,
    height: 49,
    flexShrink: 0,
  },
  frameView: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  hello: {
    position: "relative",
    fontSize: 12,
    lineHeight: 18,
    fontFamily: "Roboto",
    color: "#7e8b97",
    textAlign: "left",
  },
  macyJohnson: {
    position: "relative",
    fontSize: 20,
    lineHeight: 30,
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "#191919",
    textAlign: "left",
  },
  frameView1: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  profile: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  lineView: {
    alignSelf: "stretch",
    position: "relative",
    borderStyle: "solid",
    borderColor: "#e6e9f0",
    borderTopWidth: 1,
    height: 1,
    flexShrink: 0,
  },
  ionmailOutlineIcon: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
    overflow: "hidden",
  },
  getHelp: {
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
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  calenderIcon: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
    overflow: "hidden",
  },
  covidAdvisory: {
    position: "relative",
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#191919",
    textAlign: "left",
  },
  menuItem1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  rateIcon: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
    overflow: "hidden",
  },
  rateUs: {
    position: "relative",
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#191919",
    textAlign: "left",
  },
  menuItem2: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  drawerMenuItems: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  menu: {
    alignSelf: "stretch",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  appVersion101: {
    position: "relative",
    fontSize: 14,
    lineHeight: 24,
    fontFamily: "Roboto",
    color: "#7e8b97",
    textAlign: "left",
  },
  appVersionDetails: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  view: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 812,
    flexDirection: "column",
    paddingHorizontal: 30,
    paddingVertical: 20,
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
});

export default DrawerMenu;
