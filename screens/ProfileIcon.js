import * as React from "react";
import {
  ScrollView,
  Pressable,
  Image,
  StyleSheet,
  View,
  Text,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const ProfileIcon = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      style={styles.profileIcon}
      resizeMode="cover"
      source={require("../assets/profile.png")}
    >
      <ScrollView
        style={styles.profileSection}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.profileSectionScrollViewContent}
      >
        <View style={styles.header}>
          <Pressable
            style={styles.framePressable}
            onPress={() => navigation.goBack()}
          >
            <Image
              style={styles.iconBack}
              resizeMode="cover"
              source={require("../assets/icon--back9.png")}
            />
          </Pressable>
          {/* <View style={styles.frameView}>
            <Image
              style={styles.fluentedit48RegularIcon}
              resizeMode="cover"
              source={require("../assets/fluentedit48regular.png")}
            />
          </View> */}
        </View>
        <View style={[styles.profileBody, styles.mt50]}>
          <View style={styles.profileDrawer}>
            <View style={styles.profileDetails}>
              <View style={styles.nameParticulars}>
                <View style={styles.frameView1}>
                  <Text style={styles.macyJohnson}>Ebenezer Ayoola
                  </Text>
                  <Text style={[styles.baguioPhilippines, styles.mt2]}>
                    my email@gmail.com
                  </Text>
                  <Text style={[styles.baguioPhilippines, styles.mt2]}>
                    +91 9444977118
                  </Text>
                </View>
              </View>
              <Text style={[styles.iLikeTheBeachMountainsF, styles.mt16]}>
                I like the beach, mountains, forest and everything about nature!
                :)
              </Text>
              <View style={[styles.lineView, styles.mt16]} />
              <View style={[styles.profileOptions, styles.mt16]}>
                <View style={styles.profileOption}>
                  <View style={styles.rate}>
                    <Image
                      style={styles.bicreditCard2BackIcon}
                      resizeMode="cover"
                      source={require("../assets/bicreditcard2back.png")}
                    />
                  </View>
                  <Text style={[styles.paymentDetails, styles.ml16]}>
                    Payment Details
                  </Text>
                </View>
                <View style={[styles.profileOption1, styles.mt20]}>
                  <View style={styles.rate1}>
                    <Image
                      style={styles.healthiconsvirusShieldOutli}
                      resizeMode="cover"
                      source={require("../assets/healthiconsvirusshieldoutline.png")}
                    />
                  </View>
                  <Text style={[styles.covidAdvisory, styles.ml16]}>
                    Covid Advisory
                  </Text>
                </View>
                <View style={[styles.profileOption2, styles.mt20]}>
                  <View style={styles.rate2}>
                    <Image
                      style={styles.humbleiconsuserAsking}
                      resizeMode="cover"
                      source={require("../assets/humbleiconsuserasking.png")}
                    />
                  </View>
                  <View style={[styles.frameView3, styles.ml16]}>
                    <Text style={styles.referralCode}>Referral Code</Text>
                    <View style={[styles.frameView2, styles.ml10]}>
                      <Text style={styles.new}>new</Text>
                    </View>
                  </View>
                </View>
                <View style={[styles.profileOption3, styles.mt20]}>
                  <View style={styles.rate3}>
                    <Image
                      style={styles.claritysettingsLineIcon}
                      resizeMode="cover"
                      source={require("../assets/claritysettingsline.png")}
                    />
                  </View>
                  <Text style={[styles.settings, styles.ml16]}>Settings</Text>
                </View>
                <View style={[styles.profileOption4, styles.mt20]}>
                  <View style={styles.rate4}>
                    <Image
                      style={styles.majesticonslogoutHalfCircle}
                      resizeMode="cover"
                      source={require("../assets/majesticonslogouthalfcircleline.png")}
                    />
                  </View>
                  <Text style={[styles.logout, styles.ml16]}>Logout</Text>
                </View>
                <View style={[styles.questions, styles.mt20]}>
                  <Image
                    style={styles.ionhelpCircleOutlineIcon}
                    resizeMode="cover"
                    source={require("../assets/ionhelpcircleoutline.png")}
                  />
                  <Text style={[styles.haveQuestionsWeAreHereTo, styles.ml8]}>
                    Have questions? We are here to help
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.profileImage}>
            <Image
              style={styles.group3Icon}
              resizeMode="cover"
              source={require("../assets/group32.png")}
            />
          </View>
        </View>
      </ScrollView>

    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  mt2: {
    marginTop: 2,
  },
  ml16: {
    marginLeft: 16,
  },
  ml10: {
    marginLeft: 10,
  },
  ml8: {
    marginLeft: 8,
  },
  mt20: {
    marginTop: 20,
  },
  mt16: {
    marginTop: 16,
  },
  mt50: {
    marginTop: 50,
  },
  profileSectionScrollViewContent: {
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingTop: 30,
  },
  mt14: {
    marginTop: 14,
  },
  iconBack: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
    overflow: "hidden",
  },
  framePressable: {
    borderRadius: 24,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.12)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 8,
    elevation: 8,
    shadowOpacity: 1,
    flexDirection: "row",
    padding: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  fluentedit48RegularIcon: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
    overflow: "hidden",
  },
  frameView: {
    borderRadius: 24,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.12)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 8,
    elevation: 8,
    shadowOpacity: 1,
    flexDirection: "row",
    padding: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    alignSelf: "stretch",
    flexDirection: "row",
    padding: 16,
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  macyJohnson: {
    position: "relative",
    fontSize: 24,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#191919",
    textAlign: "left",
  },
  baguioPhilippines: {
    position: "relative",
    fontSize: 14,
    fontFamily: "Inter",
    color: "#7e8b97",
    textAlign: "left",
  },
  frameView1: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  nameParticulars: {
    alignSelf: "stretch",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  iLikeTheBeachMountainsF: {
    alignSelf: "stretch",
    position: "relative",
    fontSize: 14,
    lineHeight: 24,
    fontFamily: "Inter",
    color: "#191919",
    textAlign: "left",
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
  bicreditCard2BackIcon: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
    overflow: "hidden",
  },
  rate: {
    borderRadius: 4,
    backgroundColor: "#f1f7fd",
    flexDirection: "column",
    padding: 6,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  paymentDetails: {
    position: "relative",
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#191919",
    textAlign: "left",
  },
  profileOption: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  healthiconsvirusShieldOutli: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
    overflow: "hidden",
  },
  rate1: {
    borderRadius: 4,
    backgroundColor: "#f1f7fd",
    flexDirection: "column",
    padding: 6,
    alignItems: "flex-start",
    justifyContent: "flex-start",
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
  profileOption1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  humbleiconsuserAsking: {
    position: "relative",
    width: 22,
    height: 22,
    flexShrink: 0,
    overflow: "hidden",
  },
  rate2: {
    borderRadius: 4,
    backgroundColor: "#f1f7fd",
    flexDirection: "column",
    padding: 6,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  referralCode: {
    position: "relative",
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#191919",
    textAlign: "left",
  },
  new: {
    position: "relative",
    fontSize: 13,
    lineHeight: 18,
    textTransform: "uppercase",
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "center",
  },
  frameView2: {
    borderRadius: 5,
    backgroundColor: "#32d4ad",
    flexDirection: "row",
    paddingHorizontal: 7,
    paddingVertical: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  frameView3: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  profileOption2: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  claritysettingsLineIcon: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
    overflow: "hidden",
  },
  rate3: {
    borderRadius: 4,
    backgroundColor: "#f1f7fd",
    flexDirection: "column",
    padding: 6,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  settings: {
    position: "relative",
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#191919",
    textAlign: "left",
  },
  profileOption3: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  majesticonslogoutHalfCircle: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
    overflow: "hidden",
  },
  rate4: {
    borderRadius: 4,
    backgroundColor: "#f1f7fd",
    flexDirection: "column",
    padding: 6,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  logout: {
    position: "relative",
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#191919",
    textAlign: "left",
  },
  profileOption4: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  ionhelpCircleOutlineIcon: {
    position: "relative",
    width: 22,
    height: 22,
    flexShrink: 0,
    overflow: "hidden",
  },
  haveQuestionsWeAreHereTo: {
    position: "relative",
    fontSize: 14,
    lineHeight: 24,
    fontFamily: "Inter",
    color: "#1262ae",
    textAlign: "left",
  },
  questions: {
    alignSelf: "stretch",
    borderRadius: 7,
    backgroundColor: "#eaf5ff",
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  profileOptions: {
    alignSelf: "stretch",
    height: 322,
    flexShrink: 0,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  profileDetails: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  profileDrawer: {
    alignSelf: "stretch",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.14)",
    shadowOffset: {
      width: 0,
      height: -8,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 43,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    zIndex: 0,
  },
  group3Icon: {
    position: "relative",
    width: 90,
    height: 90,
    flexShrink: 0,
  },
  profileImage: {
    position: "absolute",
    top: 0,
    left: 16,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    zIndex: 1,
  },
  profileBody: {
    alignSelf: "stretch",
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingTop: 42,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    position: "relative",
  },
  profileSection: {
    alignSelf: "stretch",
    flex: 1,
  },
  iconExploreSelected: {
    position: "relative",
    width: 20,
    height: 20,
    flexShrink: 0,
  },
  search: {
    position: "relative",
    fontSize: 13,
    fontFamily: "Roboto",
    color: "#7e8b97",
    textAlign: "center",
  },
  bottomTab: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  iconItinerary: {
    position: "relative",
    width: 20,
    height: 20,
    flexShrink: 0,
  },
  search1: {
    position: "relative",
    fontSize: 13,
    fontFamily: "Roboto",
    color: "#7e8b97",
    textAlign: "center",
  },
  bottomTab1: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  iconSearchFlights: {
    position: "relative",
    width: 20,
    height: 20,
    flexShrink: 0,
    opacity: 0.8,
  },
  search2: {
    position: "relative",
    fontSize: 13,
    fontFamily: "Roboto",
    color: "#7e8b97",
    textAlign: "center",
  },
  bottomTab2: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  iconOffers: {
    position: "relative",
    width: 20,
    height: 20,
    flexShrink: 0,
  },
  search3: {
    position: "relative",
    fontSize: 13,
    fontFamily: "Roboto",
    color: "#7e8b97",
    textAlign: "center",
  },
  bottomTab3: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  bottomTab4: {
    alignSelf: "stretch",
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 18,
    elevation: 18,
    shadowOpacity: 1,
    flexDirection: "row",
    padding: 16,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  profileIcon: {
    position: "relative",
    flex: 1,
    width: "100%",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
});

export default ProfileIcon;
