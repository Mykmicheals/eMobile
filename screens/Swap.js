import * as React from "react";
import { useState, useEffect } from "react";
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Picker } from "@react-native-picker/picker";
import { DataStore, Auth } from "aws-amplify";
import { SwapTicket } from "../src/models";

import { TextInput, Button, Checkbox } from "react-native-paper";

const OrderBook = () => {
  const currencyOptions = [
    { label: "🇳🇬    Nigerian NGN", value: "NGN" },
    { label: "🇺🇸    Dollar USD", value: "USD" },
  ];
  const [checked, setChecked] = React.useState(false);
  const [sendValue, setSendValue] = useState("NGN");
  const [receiveValue, setReceiveValue] = useState("USD");

  const [user, setUser] = useState(null);
  useEffect(() => {
    function loadUser() {
      return Auth.currentAuthenticatedUser({ bypassCache: true });
    }

    async function onload() {
      try {
        const user = await loadUser();
        setUser(user.attributes);
      } catch (e) {
        alert(e);
      }
    }

    onload();
  }, []);

  async function SaveQuery(data) {
    await DataStore.save(new SwapTicket(data));
  }

  useEffect(() => {
    // onQuery()
  }, []);
  const navigation = useNavigation();
  const goToSwap = () => {
    navigation.navigate("oderTicket");
  };

  const handleSubmit = async () => {
    // const data = {
    //   UserID: "something",
    //   CurrencyPair: "Ngn",
    //   NegotiateRate: checked,
    //   Rate: 900,
    //   AmountToSend: 5000,
    //   orderticketID: null,
    // };

    await DataStore.save(
      new SwapTicket({
        UserID: "something",
        CurrencyPair: "Ngn",
        NegotiateRate: checked,
        Rate: 900,
        AmountToSend: 5000,
        orderticketID: null,
      })
    );

    // console.log(data);
    // SaveQuery(data);
    // goToSwap();
  };

  return (
    <View style={styles.explore}>
      <StatusBar barStyle="default" />
      <ScrollView
        style={styles.exploreMainView}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.exploreMainViewContent}
      >
        <View style={{ marginTop: 20 }}>
          <Text
            style={[
              styles.trendingDestinations,
              { color: "black", fontSize: 20 },
            ]}
          >
            Offer Ticket
          </Text>
          {/* <Text style={[styles.seeAll, { color: 'black' }]}>All swap listings with different rate</Text> */}
        </View>

        <View style={[styles.exploreContent, styles.mt20]}>
          <View style={styles.trendingHeader}>
            <Text style={styles.trendingDestinations}>Give Away</Text>
            <TouchableOpacity onPress={() => {}}>
              <Text style={styles.seeAll}></Text>
            </TouchableOpacity>
          </View>
          <View style={{ borderRadius: 12 }}>
            <View style={styles.selectContainer}>
              {/* <Avatar.Image size={24} source={Dollar} /> */}

              <Picker
                selectedValue={sendValue}
                style={{ height: 15, width: 200 }}
                onValueChange={(itemValue) => setSendValue(itemValue)}
              >
                {currencyOptions.map((item, i) => {
                  return (
                    <Picker.Item
                      key={i}
                      label={item.label}
                      value={item.value}
                    />
                  );
                })}
              </Picker>
            </View>
          </View>
        </View>
        <View style={[styles.exploreContent, styles.mt20]}>
          <View style={styles.trendingHeader}>
            <Text style={styles.trendingDestinations}>You Receive</Text>
            <TouchableOpacity onPress={() => {}}>
              <Text style={styles.seeAll}></Text>
            </TouchableOpacity>
          </View>
          <View style={{ borderRadius: 12 }}>
            <View style={styles.selectContainer}>
              {/* <Avatar.Image size={24} source={Dollar} /> */}

              <Picker
                selectedValue={receiveValue}
                style={{ height: 15, width: 200 }}
                onValueChange={(itemValue) => setReceiveValue(itemValue)}
              >
                {currencyOptions.map((item, i) => {
                  return (
                    <Picker.Item
                      key={i}
                      label={item.label}
                      value={item.value}
                    />
                  );
                })}
              </Picker>
            </View>
          </View>
        </View>
        <View style={[styles.trendingDestinations1, styles.mt30]}>
          <ScrollView
            style={[styles.trendingCardsView, styles.mt14]}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.trendingCardsViewContent}
          >
            <TextInput
              label="Your Rate"
              keyboardType="decimal-pad"
              style={{ backgroundColor: "white" }}
              // right={<TextInput.Icon icon="eye" />}
            />
            <View style={{ marginTop: 20 }}></View>
            <TextInput
              label="Quantity"
              keyboardType="decimal-pad"
              style={{ backgroundColor: "white" }}
              // right={<TextInput.Icon icon="eye" />}
            />

            <View
              style={{ marginTop: 20, display: "flex", flexDirection: "row" }}
            >
              <Checkbox
                status={checked ? "checked" : "unchecked"}
                onPress={() => {
                  setChecked(!checked);
                }}
              />
              <Text style={[styles.seeAll, { color: "black", marginTop: 1 }]}>
                Allow rate negotiation
              </Text>
            </View>
            <View style={{ marginTop: 40 }}></View>
            <Button
              mode="contained"
              style={styles.TabButton}
              labelStyle={{ color: "white", fontSize: 14 }}
              onPress={handleSubmit}
            >
              Submit
            </Button>
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  selectContainer: {
    flexDirection: "row",
    display: "flex",
    paddingTop: 4,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "blue",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  TabButton: {
    width: "100%",
    height: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0063F5",
    marginTop: 20,
  },
  groupIcon: {
    height: 60,
    width: 60,
  },
  header: {
    backgroundColor: "#fff",
  },
  mt82: {
    marginTop: 82,
  },
  mt4: {
    marginTop: 4,
  },
  ml18: {
    marginLeft: 18,
  },
  mt16: {
    marginTop: 16,
  },
  mt14: {
    marginTop: 14,
  },
  mt22: {
    marginTop: 22,
  },
  ml6: {
    marginLeft: 6,
  },
  categoriesScrollViewContent: {
    flexDirection: "row",
  },
  mt1: {
    marginTop: 1,
  },
  mt10: {
    marginTop: 10,
  },
  ml10: {
    marginLeft: 10,
  },
  trendingCardsViewContent: {
    flexDirection: "column",
  },
  ml16: {
    marginLeft: 16,
  },
  offersRowScrollViewContent: {
    flexDirection: "row",
  },
  mt30: {
    marginTop: 30,
  },
  mt20: {
    marginTop: 20,
  },
  exploreMainViewContent: {
    flexDirection: "column",
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  paris: {
    position: "relative",
    fontSize: 22,
    fontWeight: "700",
    fontFamily: "Baloo Bhai 2",
    color: "#fff",
    textAlign: "left",
  },
  fROM: {
    position: "relative",
    fontSize: 14,
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "left",
  },
  text: {
    position: "relative",
    fontSize: 25,
    fontWeight: "700",
    fontFamily: "Baloo Bhai 2",
    color: "#fff",
    textAlign: "left",
  },
  frameView: {
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  description: {
    alignSelf: "stretch",
    flexDirection: "row",
    // alignItems: "flex-end",
    // borderWidth: 1,
    justifyContent: "space-between",
    zIndex: 0,
  },
  heartIcon: {
    position: "absolute",
    top: 14,
    right: 20,
    width: 20,
    height: 20,
    flexShrink: 0,
    overflow: "hidden",
    zIndex: 1,
  },
  parisCardIcon: {
    alignSelf: "stretch",
    display: "flex",
    borderRadius: 22,
    height: 180,
    flexShrink: 0,
    flexDirection: "column",
    paddingHorizontal: 20,
    paddingTop: 20,
    position: "relative",
  },
  upcomingFlight: {
    position: "relative",
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#191919",
    textAlign: "left",
  },
  sIN: {
    position: "relative",
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#1262ae",
    textAlign: "left",
  },
  singapore: {
    position: "relative",
    fontSize: 14,
    fontFamily: "Inter",
    color: "#191919",
    textAlign: "left",
  },
  group13: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  line2Icon: {
    position: "absolute",
    marginTop: -0.79,
    top: "50%",
    right: 8,
    left: 8,
    maxWidth: "100%",
    overflow: "hidden",
    height: 2,
    zIndex: 0,
  },
  ovalIcon: {
    position: "relative",
    width: 10,
    height: 10,
    flexShrink: 0,
    zIndex: 1,
  },
  iconFlight: {
    position: "relative",
    width: 41,
    height: 41,
    flexShrink: 0,
    zIndex: 2,
  },
  ovalIcon1: {
    position: "relative",
    width: 10,
    height: 10,
    flexShrink: 0,
    zIndex: 3,
  },
  frameView1: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    position: "relative",
  },
  lAX: {
    position: "relative",
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#1262ae",
    textAlign: "left",
  },
  losAngeles: {
    position: "relative",
    fontSize: 14,
    fontFamily: "Inter",
    color: "#191919",
    textAlign: "left",
  },
  group131: {
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "flex-start",
  },
  frameView2: {
    alignSelf: "stretch",
    flexDirection: "row",
    paddingHorizontal: 12,
    paddingTop: 12,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  line3Icon: {
    alignSelf: "stretch",
    position: "relative",
    maxWidth: "100%",
    overflow: "hidden",
    height: 1,
    flexShrink: 0,
  },
  departsOn1May0800AM: {
    position: "relative",
    fontSize: 15,
    fontFamily: "Roboto",
    color: "#7e8b97",
    textAlign: "left",
  },
  days: {
    fontWeight: "700",
    fontFamily: "Inter",
  },
  toGo: {
    fontFamily: "Inter",
  },
  daysToGo: {
    position: "relative",
    fontSize: 15,
    color: "#7e8b97",
    textAlign: "left",
  },
  frameView3: {
    alignSelf: "stretch",
    flexDirection: "row",
    paddingHorizontal: 12,
    paddingBottom: 12,
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  frameView4: {
    alignSelf: "stretch",
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
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  upcomingFlightsSection: {
    alignSelf: "stretch",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  tagFlight: {
    position: "relative",
    width: 48,
    height: 48,
    flexShrink: 0,
  },
  flight: {
    position: "relative",
    fontSize: 14,
    fontFamily: "Inter",
    color: "#191919",
    textAlign: "left",
  },
  categoryBlock: {
    width: 77,
    flexShrink: 0,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  tagHotel: {
    position: "relative",
    width: 48,
    height: 48,
    flexShrink: 0,
  },
  flight1: {
    position: "relative",
    fontSize: 14,
    fontFamily: "Inter",
    color: "#191919",
    textAlign: "left",
  },
  categoryBlock1: {
    width: 77,
    flexShrink: 0,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  tagAtractions: {
    position: "relative",
    width: 48,
    height: 48,
    flexShrink: 0,
  },
  flight2: {
    position: "relative",
    fontSize: 14,
    fontFamily: "Inter",
    color: "#191919",
    textAlign: "left",
  },
  categoryBlock2: {
    width: 77,
    flexShrink: 0,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  tagEats: {
    position: "relative",
    width: 48,
    height: 48,
    flexShrink: 0,
  },
  flight3: {
    position: "relative",
    fontSize: 14,
    fontFamily: "Inter",
    color: "#191919",
    textAlign: "left",
  },
  categoryBlock3: {
    width: 77,
    flexShrink: 0,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  tagTrain: {
    position: "relative",
    width: 48,
    height: 48,
    flexShrink: 0,
  },
  flight4: {
    position: "relative",
    fontSize: 14,
    fontFamily: "Inter",
    color: "#191919",
    textAlign: "left",
  },
  categoryBlock4: {
    width: 77,
    flexShrink: 0,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  categories: {
    alignSelf: "flex-start",
    width: "100%",
  },
  trendingDestinations: {
    position: "relative",
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#191919",
    textAlign: "left",
  },
  seeAll: {
    position: "relative",
    fontSize: 14,
    fontFamily: "Inter",
    color: "#1262ae",
    textAlign: "left",
    marginTop: 2,
  },
  trendingHeader: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  destinationImageIcon: {
    position: "relative",
    width: 131,
    height: 90,
    flexShrink: 0,
  },
  boracay: {
    position: "relative",
    fontSize: 14,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#191919",
    textAlign: "left",
  },
  philippines: {
    position: "relative",
    fontSize: 12,
    fontFamily: "Inter",
    color: "#7e8b97",
    textAlign: "left",
  },
  location: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  d4N: {
    position: "relative",
    fontSize: 12,
    fontFamily: "Inter",
    color: "#4d5760",
    textAlign: "left",
  },
  duration: {
    borderRadius: 4,
    backgroundColor: "#f8f9fb",
    overflow: "hidden",
    flexDirection: "row",
    paddingHorizontal: 6,
    paddingVertical: 4,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  details: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  destinationCard: {
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
    width: 151,
    flexShrink: 0,
    flexDirection: "column",
    padding: 10,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  destinationImageIcon1: {
    position: "relative",
    borderRadius: 2,
    width: 131,
    height: 90,
    flexShrink: 0,
  },
  baros: {
    position: "relative",
    fontSize: 14,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#191919",
    textAlign: "left",
  },
  maldives: {
    position: "relative",
    fontSize: 12,
    fontFamily: "Inter",
    color: "#7e8b97",
    textAlign: "left",
  },
  location1: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  d6N: {
    position: "relative",
    fontSize: 12,
    fontFamily: "Inter",
    color: "#4d5760",
    textAlign: "left",
  },
  duration1: {
    borderRadius: 4,
    backgroundColor: "#f8f9fb",
    overflow: "hidden",
    flexDirection: "row",
    paddingHorizontal: 6,
    paddingVertical: 4,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  details1: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  destinationCard1: {
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
    width: 151,
    flexShrink: 0,
    flexDirection: "column",
    padding: 10,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  destinationImageIcon2: {
    position: "relative",
    borderRadius: 2,
    width: 131,
    height: 90,
    flexShrink: 0,
  },
  bali: {
    position: "relative",
    fontSize: 14,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#191919",
    textAlign: "left",
  },
  indonesia: {
    position: "relative",
    fontSize: 12,
    fontFamily: "Inter",
    color: "#7e8b97",
    textAlign: "left",
  },
  location2: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  d2N: {
    position: "relative",
    fontSize: 12,
    fontFamily: "Inter",
    color: "#4d5760",
    textAlign: "left",
  },
  duration2: {
    borderRadius: 4,
    backgroundColor: "#f8f9fb",
    overflow: "hidden",
    flexDirection: "row",
    paddingHorizontal: 6,
    paddingVertical: 4,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  details2: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  destinationCard2: {
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
    flexDirection: "column",
    padding: 10,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  destinationImageIcon3: {
    position: "relative",
    borderRadius: 2,
    width: 131,
    height: 90,
    flexShrink: 0,
  },
  palawan: {
    position: "relative",
    fontSize: 14,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#191919",
    textAlign: "left",
  },
  philippines1: {
    position: "relative",
    fontSize: 12,
    fontFamily: "Inter",
    color: "#7e8b97",
    textAlign: "left",
  },
  location3: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  d2N1: {
    position: "relative",
    fontSize: 12,
    fontFamily: "Inter",
    color: "#4d5760",
    textAlign: "left",
  },
  duration3: {
    borderRadius: 4,
    backgroundColor: "#f8f9fb",
    overflow: "hidden",
    flexDirection: "row",
    paddingHorizontal: 6,
    paddingVertical: 4,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  details3: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  destinationCard3: {
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
    width: 151,
    flexShrink: 0,
    flexDirection: "column",
    padding: 10,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  trandingCardsRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  trendingCardsView: {
    alignSelf: "stretch",
    width: "100%",
  },
  trendingDestinations1: {
    alignSelf: "stretch",
    flexDirection: "column",
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
  text1: {
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
  text2: {
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
  exploreContent: {
    alignSelf: "stretch",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  exploreMainView: {
    alignSelf: "stretch",
    flex: 1,
  },
  explore: {
    position: "relative",
    backgroundColor: "#EFF3FD",
    flex: 1,
    width: "100%",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  COIN_CARD: {
    backgroundColor: "white",
    width: "100%",
    height: 90,
    marginTop: 10,
    marginHorizontal: "auto",
    borderRadius: 8,
    padding: 15,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    shadowColor: "gray",
    marginHorizontal: "auto",
  },

  FLEX: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: "auto",
    paddingHorizontal: 5,
  },
  COIN_TEXT_CONTAINER: {
    display: "flex",
  },
  COINT_ITEM: {
    // color: "white",
    fontSize: 15,
    fontWeight: "500",
  },

  SUB_TEXT: {
    marginTop: 10,
    fontSize: 12,
    color: "gray",
    fontWeight: "normal",
  },
  COIN_TEXT_CONTAINER: {
    display: "flex",
  },
});

export default OrderBook;
