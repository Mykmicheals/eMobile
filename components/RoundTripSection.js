import * as React from "react";
import { useState } from "react";
import {
  StyleProp,
  ViewStyle,
  StyleSheet,
  View,
  Pressable,
  Text,
  TouchableOpacity,
} from "react-native";
import { TextInput as RNPTextInput } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const RoundTripSection = ({ style }) => {
  const [outlinedTextOnlyNoIcon4, setOutlinedTextOnlyNoIcon4] =
    useState("1 Adult");
  const [outlinedTextOnlyNoIcon5, setOutlinedTextOnlyNoIcon5] =
    useState("Economy");
  const navigation = useNavigation();

  return (
    <View style={[styles.roundTripSection, style, styles.topTabContent]}>
      <View style={styles.form}>
        <RNPTextInput
          style={styles.outlinedTextOnlyNoIcon}
          placeholder="Select Departure"
          label="From"
          mode="outlined"
          left={
            <RNPTextInput.Icon
              style={{ marginTop: "50%" }}
              name="airplane-takeoff"
            />
          }
          placeholderTextColor="#9eaab6"
          outlineColor="#dcdedf"
          activeOutlineColor="#7f7f7f"
          theme={{ colors: { text: "#191919" } }}
        />
        <RNPTextInput
          style={[
            styles.outlinedTextOnlyNoIcon1,
            styles.outlinedTextOnlyNoIcon1Value,
            styles.mt18,
          ]}
          placeholder="Select Arrival"
          label="To"
          mode="outlined"
          left={
            <RNPTextInput.Icon
              style={{ marginTop: "50%" }}
              name="airplane-landing"
            />
          }
          placeholderTextColor="#dcdedf"
          outlineColor="#dcdedf"
          activeOutlineColor="#7f7f7f"
          theme={{
            fonts: { fontFamily: "Roboto", fontWeight: "Regular" },
            colors: { text: "#191919" },
          }}
        />
        <View style={[styles.inputsRow, styles.mt18]}>
          <RNPTextInput
            style={[
              styles.outlinedTextOnlyNoIcon2,
              styles.outlinedTextOnlyNoIcon2Value,
            ]}
            placeholder="Select Date"
            label="Departure"
            mode="outlined"
            left={
              <RNPTextInput.Icon
                style={{ marginTop: "50%" }}
                name="calendar-blank"
              />
            }
            placeholderTextColor="#dcdedf"
            outlineColor="#dcdedf"
            activeOutlineColor="#7f7f7f"
            theme={{
              fonts: { fontFamily: "Roboto", fontWeight: "Regular" },
              colors: { text: "#191919" },
            }}
          />
          <RNPTextInput
            style={[
              styles.outlinedTextOnlyNoIcon3,
              styles.outlinedTextOnlyNoIcon3Value,
              styles.ml13,
            ]}
            placeholder="Select Date"
            label="Return"
            mode="outlined"
            left={
              <RNPTextInput.Icon
                style={{ marginTop: "50%" }}
                name="calendar-blank"
              />
            }
            placeholderTextColor="#dcdedf"
            outlineColor="#dcdedf"
            activeOutlineColor="#7f7f7f"
            theme={{
              fonts: { fontFamily: "Roboto", fontWeight: "Regular" },
              colors: { text: "#191919" },
            }}
          />
        </View>
        <View style={[styles.inputsRow1, styles.mt18]}>
          <RNPTextInput
            style={[
              styles.outlinedTextOnlyNoIcon4,
              styles.outlinedTextOnlyNoIcon4Value,
            ]}
            placeholder="Select Pax"
            label="Passengers"
            mode="outlined"
            value={outlinedTextOnlyNoIcon4}
            onChangeText={setOutlinedTextOnlyNoIcon4}
            left={
              <RNPTextInput.Icon
                style={{ marginTop: "50%" }}
                name="account-multiple"
              />
            }
            placeholderTextColor="#dcdedf"
            outlineColor="#dcdedf"
            activeOutlineColor="#7f7f7f"
            theme={{
              fonts: { fontFamily: "Roboto", fontWeight: "Regular" },
              colors: { text: "#191919" },
            }}
          />
          <RNPTextInput
            style={[
              styles.outlinedTextOnlyNoIcon5,
              styles.outlinedTextOnlyNoIcon5Value,
              styles.ml13,
            ]}
            placeholder="Select Class"
            label="Class"
            mode="outlined"
            value={outlinedTextOnlyNoIcon5}
            onChangeText={setOutlinedTextOnlyNoIcon5}
            left={
              <RNPTextInput.Icon style={{ marginTop: "50%" }} name="thumb-up" />
            }
            placeholderTextColor="#dcdedf"
            outlineColor="#dcdedf"
            activeOutlineColor="#7f7f7f"
            theme={{
              fonts: { fontFamily: "Roboto", fontWeight: "Regular" },
              colors: { text: "#191919" },
            }}
          />
        </View>
      </View>
      <TouchableOpacity
        style={[styles.buttonPrimary, styles.mt13]}
        activeOpacity={0.8}
        onPress={() => navigation.navigate("SearchResults")}
      >
        <Text style={styles.viewDetails}>Search</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
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
  outlinedTextOnlyNoIcon: {
    position: "relative",
    width: 313,
    height: 56,
    flexShrink: 0,
  },
  outlinedTextOnlyNoIcon1: {
    position: "relative",
    width: 313,
    height: 56,
    flexShrink: 0,
    alignSelf: "flex-start",
  },
  outlinedTextOnlyNoIcon2: {
    position: "relative",
    width: 150,
    height: 56,
    flexShrink: 0,
    alignSelf: "flex-start",
  },
  outlinedTextOnlyNoIcon3: {
    position: "relative",
    width: 150,
    height: 56,
    flexShrink: 0,
    alignSelf: "flex-start",
  },
  inputsRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  outlinedTextOnlyNoIcon4: {
    position: "relative",
    width: 150,
    height: 56,
    flexShrink: 0,
    alignSelf: "flex-start",
  },
  outlinedTextOnlyNoIcon5: {
    position: "relative",
    width: 150,
    height: 56,
    flexShrink: 0,
    alignSelf: "flex-start",
  },
  inputsRow1: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  form: {
    width: 313,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  viewDetails: {
    position: "relative",
    fontSize: 14,
    lineHeight: 24,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
    width: 120,
  },
  buttonPrimary: {
    borderRadius: 5,
    backgroundColor: "#f99a0e",
    width: 313,
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "flex-start",
  },
  roundTripSection: {
    alignSelf: "stretch",
    flex: 1,
    position: "relative",
    backgroundColor: "#fff",
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingVertical: 10,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
});

export default RoundTripSection;
