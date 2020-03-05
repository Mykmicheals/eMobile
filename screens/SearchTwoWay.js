import * as React from "react";
import { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { TextInput as RNPTextInput } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const SearchTwoWay = () => {
  const [outlinedTextOnlyNoIcon4, setOutlinedTextOnlyNoIcon4] =
    useState("1 Adult");
  const [outlinedTextOnlyNoIcon5, setOutlinedTextOnlyNoIcon5] =
    useState("Economy");
  const navigation = useNavigation();

  return (
    <View style={styles.searchTwoWay}>
      <View style={styles.statusBarLight}>
        <Image
          style={styles.icons}
          resizeMode="cover"
          source={require("../assets/icons.png")}
        />
        <Text style={styles.time}>9:41</Text>
      </View>
      <View style={styles.group4}>
        <Image
          style={styles.iconBack}
          resizeMode="cover"
          source={require("../assets/icon--back.png")}
        />
        <View style={styles.frameView}>
          <Text style={styles.searchFlight}>Search Flight</Text>
        </View>
        <View style={styles.iconKebab}>
          <View style={styles.frameView1}>
            <Image
              style={styles.ellipseIcon}
              resizeMode="cover"
              source={require("../assets/ellipse-1.png")}
            />
            <Image
              style={[styles.ellipseIcon1, styles.mt4]}
              resizeMode="cover"
              source={require("../assets/ellipse-2.png")}
            />
            <Image
              style={[styles.ellipseIcon2, styles.mt4]}
              resizeMode="cover"
              source={require("../assets/ellipse-3.png")}
            />
          </View>
        </View>
      </View>
      <View style={styles.frameView3}>
        <View style={styles.flightSelection}>
          <View style={styles.waySelection} />
        </View>
        <View style={[styles.frameView2, styles.mt20]}>
          <View style={styles.offersSection}>
            <Text style={styles.offers}>Offers</Text>
            <ScrollView
              style={[styles.offersRow, styles.mt14]}
              horizontal
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.offersRowScrollViewContent}
            >
              <View style={styles.offerCard}>
                <View style={styles.offerDetails}>
                  <Text style={styles.discountForMastercardUsers}>
                    <Text style={styles.discount}>20% discount</Text>
                    <Text style={styles.text}>{` `}</Text>
                    <Text style={styles.forMastercardUsers}>
                      for mastercard users
                    </Text>
                  </Text>
                  <Text style={[styles.limitedTimeOffer, styles.mt4]}>
                    Limited time offer!
                  </Text>
                </View>
                <Image
                  style={styles.offerImageIcon}
                  resizeMode="cover"
                  source={require("../assets/offer-image2.png")}
                />
              </View>
              <View style={[styles.offerCard1, styles.ml16]}>
                <View style={styles.offerDetails1}>
                  <Text style={styles.discountWithYourVisaCredit}>
                    <Text style={styles.discount1}>25% discount</Text>
                    <Text style={styles.text1}>{` `}</Text>
                    <Text style={styles.withYourVisa}>
                      with your Visa credit cards
                    </Text>
                  </Text>
                  <Text style={[styles.limitedTimeOffer1, styles.mt4]}>
                    Limited time offer!
                  </Text>
                </View>
                <Image
                  style={styles.offerImageIcon1}
                  resizeMode="cover"
                  source={require("../assets/offer-image3.png")}
                />
              </View>
            </ScrollView>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mt4: {
    marginTop: 4,
  },
  outlinedTextOnlyNoIcon1Value: {
    fontFamily: "Roboto",
  },
  outlinedTextOnlyNoIcon2Value: {
    fontFamily: "Roboto",
  },
  outlinedTextOnlyNoIcon3Value: {
    fontFamily: "Roboto",
  },
  ml13: {
    marginLeft: 13,
  },
  outlinedTextOnlyNoIcon4Value: {
    fontFamily: "Roboto",
  },
  outlinedTextOnlyNoIcon5Value: {
    fontFamily: "Roboto",
  },
  mt18: {
    marginTop: 18,
  },
  mt13: {
    marginTop: 13,
  },
  mt20: {
    marginTop: 20,
  },
  ml16: {
    marginLeft: 16,
  },
  offersRowScrollViewContent: {
    flexDirection: "row",
  },
  mt14: {
    marginTop: 14,
  },
  icons: {
    position: "absolute",
    top: 18,
    right: 14,
    width: 67,
    height: 11,
  },
  time: {
    position: "absolute",
    marginTop: -8,
    top: "50%",
    left: 32,
    fontSize: 15,
    letterSpacing: 0,
    lineHeight: 20,
    fontWeight: "600",
    fontFamily: "Roboto",
    color: "#000",
    textAlign: "left",
  },
  statusBarLight: {
    position: "relative",
    backgroundColor: "#fff",
    width: 375,
    height: 44,
    flexShrink: 0,
  },
  iconBack: {
    position: "relative",
    width: 32,
    height: 32,
    flexShrink: 0,
    overflow: "hidden",
  },
  searchFlight: {
    position: "relative",
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#191919",
    textAlign: "left",
  },
  frameView: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  ellipseIcon: {
    position: "relative",
    width: 5,
    height: 5,
    flexShrink: 0,
  },
  ellipseIcon1: {
    position: "relative",
    width: 5,
    height: 5,
    flexShrink: 0,
  },
  ellipseIcon2: {
    position: "relative",
    width: 5,
    height: 5,
    flexShrink: 0,
  },
  frameView1: {
    position: "absolute",
    top: 5,
    left: 14,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  iconKebab: {
    position: "relative",
    width: 32,
    height: 32,
    flexShrink: 0,
    overflow: "hidden",
  },
  group4: {
    backgroundColor: "#fff",
    width: 375,
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 14,
    alignItems: "center",
    justifyContent: "space-between",
  },
  waySelection: {
    alignSelf: "stretch",
    borderRadius: 32,
    backgroundColor: "#f3f5f9",
    height: 44,
    flexShrink: 0,
    flexDirection: "row",
    padding: 4,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  flightSelection: {
    borderRadius: 12,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.03)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 15,
    elevation: 15,
    shadowOpacity: 1,
    width: 341,
    flexDirection: "column",
    padding: 14,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  offers: {
    position: "relative",
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#191919",
    textAlign: "left",
  },
  discount: {
    fontWeight: "700",
    fontFamily: "Roboto",
  },
  text: {
    fontWeight: "500",
    fontFamily: "Roboto",
  },
  forMastercardUsers: {
    fontFamily: "Roboto",
  },
  discountForMastercardUsers: {
    position: "relative",
    fontSize: 14,
    lineHeight: 19,
    color: "#191919",
    textAlign: "left",
    width: 136,
  },
  limitedTimeOffer: {
    position: "relative",
    fontSize: 12,
    lineHeight: 18,
    fontFamily: "Roboto",
    color: "#999",
    textAlign: "left",
    width: 136,
  },
  offerDetails: {
    position: "absolute",
    top: 13,
    left: 112,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  offerImageIcon: {
    position: "absolute",
    top: 17,
    left: 15,
    width: 74,
    height: 51,
  },
  offerCard: {
    position: "relative",
    borderRadius: 8,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.03)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 15,
    elevation: 15,
    shadowOpacity: 1,
    width: 264,
    height: 86,
    flexShrink: 0,
  },
  discount1: {
    fontWeight: "700",
    fontFamily: "Roboto",
  },
  text1: {
    fontWeight: "500",
    fontFamily: "Roboto",
  },
  withYourVisa: {
    fontFamily: "Roboto",
  },
  discountWithYourVisaCredit: {
    position: "relative",
    fontSize: 14,
    lineHeight: 19,
    color: "#191919",
    textAlign: "left",
    width: 136,
  },
  limitedTimeOffer1: {
    position: "relative",
    fontSize: 12,
    lineHeight: 18,
    fontFamily: "Roboto",
    color: "#999",
    textAlign: "left",
    width: 136,
  },
  offerDetails1: {
    position: "absolute",
    top: 13,
    left: 112,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  offerImageIcon1: {
    position: "absolute",
    top: 17,
    left: 15,
    width: 74,
    height: 51,
  },
  offerCard1: {
    position: "relative",
    borderRadius: 8,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.03)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 15,
    elevation: 15,
    shadowOpacity: 1,
    width: 264,
    height: 86,
    flexShrink: 0,
  },
  offersRow: {
    alignSelf: "stretch",
    width: "100%",
  },
  offersSection: {
    alignSelf: "stretch",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameView2: {
    width: 343,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameView3: {
    backgroundColor: "#f8f9fb",
    width: 375,
    flexDirection: "column",
    paddingHorizontal: 16,
    paddingVertical: 20,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  searchTwoWay: {
    position: "relative",
    backgroundColor: "#f8f9fb",
    flex: 1,
    width: "100%",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
});

export default SearchTwoWay;
