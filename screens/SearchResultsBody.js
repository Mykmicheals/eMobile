import * as React from "react";
import { ScrollView, Text, StyleSheet, Image, View } from "react-native";

const SearchResultsBody = () => {
  return (
    <ScrollView
      style={styles.searchResultsBody}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.searchResultsBodyContent}
    >
      <View style={styles.listHeader}>
        <Text style={styles.resultsFound}>35 results found</Text>
        <Image
          style={styles.vectorIcon}
          resizeMode="cover"
          source={require("../assets/vector.png")}
        />
      </View>
      <View style={styles.listItems}>
        <View style={styles.flightCardHolder}>
          <View style={styles.flightCard}>
            <View style={styles.frameView2}>
              <View style={styles.frameView}>
                <View style={styles.groupView}>
                  <View style={styles.rectangleView} />
                  <Image
                    style={styles.image2Icon}
                    resizeMode="cover"
                    source={require("../assets/image-2.png")}
                  />
                </View>
                <Text style={[styles.unitedAirlines, styles.ml8]}>
                  United Airlines
                </Text>
              </View>
              <View style={styles.frameView1}>
                <Image
                  style={styles.fluenttimer24RegularIcon}
                  resizeMode="cover"
                  source={require("../assets/fluenttimer24regular.png")}
                />
                <Text style={[styles.hr40min, styles.ml4]}>01 hr 40min</Text>
              </View>
            </View>
            <View style={[styles.frameView4, styles.mt14]}>
              <View style={styles.group13}>
                <Text style={styles.sIN}>SIN</Text>
                <Text style={[styles.singapore, styles.mt4]}>Singapore</Text>
              </View>
              <View style={[styles.frameView3, styles.ml18]}>
                <Image
                  style={styles.line2Icon}
                  resizeMode="cover"
                  source={require("../assets/line2.png")}
                />
                <Image
                  style={styles.ovalIcon}
                  resizeMode="cover"
                  source={require("../assets/oval1.png")}
                />
                <Image
                  style={styles.iconFlight}
                  resizeMode="cover"
                  source={require("../assets/icon--flight1.png")}
                />
                <Image
                  style={styles.ovalIcon1}
                  resizeMode="cover"
                  source={require("../assets/oval1.png")}
                />
              </View>
              <View style={[styles.group131, styles.ml18]}>
                <Text style={styles.lAX}>LAX</Text>
                <Text style={[styles.losAngeles, styles.mt4]}>Los Angeles</Text>
              </View>
            </View>
            <Image
              style={[styles.line3Icon, styles.mt14]}
              resizeMode="cover"
              source={require("../assets/line3.png")}
            />
            <View style={[styles.frameView8, styles.mt14]}>
              <View style={styles.frameView7}>
                <View style={styles.frameView5}>
                  <Image
                    style={styles.chairIcon}
                    resizeMode="cover"
                    source={require("../assets/chair.png")}
                  />
                  <Text style={[styles.businessClass, styles.ml8]}>
                    Business Class
                  </Text>
                </View>
                <View style={styles.frameView6}>
                  <Text style={styles.from}>From</Text>
                  <Text style={[styles.text, styles.ml4]}>$1128</Text>
                </View>
              </View>
              <View style={[styles.buttonPrimary, styles.mt10]}>
                <Text style={styles.viewDetails}>View Details</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.flightCardHolder1}>
          <View style={styles.flightCard1}>
            <View style={styles.frameView11}>
              <View style={styles.frameView9}>
                <View style={styles.groupView1}>
                  <View style={styles.rectangleView1} />
                  <Image
                    style={styles.image2Icon1}
                    resizeMode="cover"
                    source={require("../assets/image-2.png")}
                  />
                </View>
                <Text style={[styles.unitedAirlines1, styles.ml8]}>
                  United Airlines
                </Text>
              </View>
              <View style={styles.frameView10}>
                <Image
                  style={styles.fluenttimer24RegularIcon1}
                  resizeMode="cover"
                  source={require("../assets/fluenttimer24regular.png")}
                />
                <Text style={[styles.hr10min, styles.ml4]}>02 hr 10min</Text>
              </View>
            </View>
            <View style={[styles.frameView13, styles.mt14]}>
              <View style={styles.group132}>
                <Text style={styles.sIN1}>SIN</Text>
                <Text style={[styles.singapore1, styles.mt4]}>Singapore</Text>
              </View>
              <View style={[styles.frameView12, styles.ml18]}>
                <Image
                  style={styles.line2Icon1}
                  resizeMode="cover"
                  source={require("../assets/line2.png")}
                />
                <Image
                  style={styles.ovalIcon2}
                  resizeMode="cover"
                  source={require("../assets/oval1.png")}
                />
                <Image
                  style={styles.iconFlight1}
                  resizeMode="cover"
                  source={require("../assets/icon--flight1.png")}
                />
                <Image
                  style={styles.ovalIcon3}
                  resizeMode="cover"
                  source={require("../assets/oval1.png")}
                />
              </View>
              <View style={[styles.group133, styles.ml18]}>
                <Text style={styles.lAX1}>LAX</Text>
                <Text style={[styles.losAngeles1, styles.mt4]}>
                  Los Angeles
                </Text>
              </View>
            </View>
            <Image
              style={[styles.line3Icon1, styles.mt14]}
              resizeMode="cover"
              source={require("../assets/line3.png")}
            />
            <View style={[styles.frameView17, styles.mt14]}>
              <View style={styles.frameView16}>
                <View style={styles.frameView14}>
                  <Image
                    style={styles.chairIcon1}
                    resizeMode="cover"
                    source={require("../assets/chair.png")}
                  />
                  <Text style={[styles.businessClass1, styles.ml8]}>
                    Business Class
                  </Text>
                </View>
                <View style={styles.frameView15}>
                  <Text style={styles.from1}>From</Text>
                  <Text style={[styles.text1, styles.ml4]}>$1420</Text>
                </View>
              </View>
              <View style={[styles.buttonPrimary1, styles.mt10]}>
                <Text style={styles.viewDetails1}>View Details</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.flightCardHolder2}>
          <View style={styles.flightCard2}>
            <View style={styles.frameView20}>
              <View style={styles.frameView18}>
                <View style={styles.groupView2}>
                  <View style={styles.rectangleView2} />
                  <Image
                    style={styles.image3Icon}
                    resizeMode="cover"
                    source={require("../assets/image-3.png")}
                  />
                </View>
                <Text style={[styles.asianaAirlines, styles.ml8]}>
                  Asiana Airlines
                </Text>
              </View>
              <View style={styles.frameView19}>
                <Image
                  style={styles.fluenttimer24RegularIcon2}
                  resizeMode="cover"
                  source={require("../assets/fluenttimer24regular.png")}
                />
                <Text style={[styles.hr38min, styles.ml4]}>02 hr 38min</Text>
              </View>
            </View>
            <View style={[styles.frameView22, styles.mt14]}>
              <View style={styles.group134}>
                <Text style={styles.sIN2}>SIN</Text>
                <Text style={[styles.singapore2, styles.mt4]}>Singapore</Text>
              </View>
              <View style={[styles.frameView21, styles.ml18]}>
                <Image
                  style={styles.line2Icon2}
                  resizeMode="cover"
                  source={require("../assets/line2.png")}
                />
                <Image
                  style={styles.ovalIcon4}
                  resizeMode="cover"
                  source={require("../assets/oval1.png")}
                />
                <Image
                  style={styles.iconFlight2}
                  resizeMode="cover"
                  source={require("../assets/icon--flight1.png")}
                />
                <Image
                  style={styles.ovalIcon5}
                  resizeMode="cover"
                  source={require("../assets/oval1.png")}
                />
              </View>
              <View style={[styles.group135, styles.ml18]}>
                <Text style={styles.lAX2}>LAX</Text>
                <Text style={[styles.losAngeles2, styles.mt4]}>
                  Los Angeles
                </Text>
              </View>
            </View>
            <Image
              style={[styles.line3Icon2, styles.mt14]}
              resizeMode="cover"
              source={require("../assets/line3.png")}
            />
            <View style={[styles.frameView26, styles.mt14]}>
              <View style={styles.frameView25}>
                <View style={styles.frameView23}>
                  <Image
                    style={styles.chairIcon2}
                    resizeMode="cover"
                    source={require("../assets/chair.png")}
                  />
                  <Text style={[styles.businessClass2, styles.ml8]}>
                    Business Class
                  </Text>
                </View>
                <View style={styles.frameView24}>
                  <Text style={styles.from2}>From</Text>
                  <Text style={[styles.text2, styles.ml4]}>$1550</Text>
                </View>
              </View>
              <View style={[styles.buttonPrimary2, styles.mt10]}>
                <Text style={styles.viewDetails2}>View Details</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.flightCardHolder3}>
          <View style={styles.flightCard3}>
            <View style={styles.frameView29}>
              <View style={styles.frameView27}>
                <View style={styles.groupView3}>
                  <View style={styles.rectangleView3} />
                  <Image
                    style={styles.image4Icon}
                    resizeMode="cover"
                    source={require("../assets/image-4.png")}
                  />
                </View>
                <Text style={[styles.lufthansaAirlines, styles.ml8]}>
                  Lufthansa Airlines
                </Text>
              </View>
              <View style={styles.frameView28}>
                <Image
                  style={styles.fluenttimer24RegularIcon3}
                  resizeMode="cover"
                  source={require("../assets/fluenttimer24regular.png")}
                />
                <Text style={[styles.hr15min, styles.ml4]}>03 hr 15min</Text>
              </View>
            </View>
            <View style={[styles.frameView31, styles.mt14]}>
              <View style={styles.group136}>
                <Text style={styles.sIN3}>SIN</Text>
                <Text style={[styles.singapore3, styles.mt4]}>Singapore</Text>
              </View>
              <View style={[styles.frameView30, styles.ml18]}>
                <Image
                  style={styles.line2Icon3}
                  resizeMode="cover"
                  source={require("../assets/line2.png")}
                />
                <Image
                  style={styles.ovalIcon6}
                  resizeMode="cover"
                  source={require("../assets/oval1.png")}
                />
                <Image
                  style={styles.iconFlight3}
                  resizeMode="cover"
                  source={require("../assets/icon--flight1.png")}
                />
                <Image
                  style={styles.ovalIcon7}
                  resizeMode="cover"
                  source={require("../assets/oval1.png")}
                />
              </View>
              <View style={[styles.group137, styles.ml18]}>
                <Text style={styles.lAX3}>LAX</Text>
                <Text style={[styles.losAngeles3, styles.mt4]}>
                  Los Angeles
                </Text>
              </View>
            </View>
            <Image
              style={[styles.line3Icon3, styles.mt14]}
              resizeMode="cover"
              source={require("../assets/line3.png")}
            />
            <View style={[styles.frameView35, styles.mt14]}>
              <View style={styles.frameView34}>
                <View style={styles.frameView32}>
                  <Image
                    style={styles.chairIcon3}
                    resizeMode="cover"
                    source={require("../assets/chair.png")}
                  />
                  <Text style={[styles.economyClass, styles.ml8]}>
                    Economy Class
                  </Text>
                </View>
                <View style={styles.frameView33}>
                  <Text style={styles.from3}>From</Text>
                  <Text style={[styles.text3, styles.ml4]}>$1650</Text>
                </View>
              </View>
              <View style={[styles.buttonPrimary3, styles.mt10]}>
                <Text style={styles.viewDetails3}>View Details</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.flightCardHolder4}>
          <View style={styles.flightCard4}>
            <View style={styles.frameView38}>
              <View style={styles.frameView36}>
                <View style={styles.groupView4}>
                  <View style={styles.rectangleView4} />
                  <Image
                    style={styles.image3Icon1}
                    resizeMode="cover"
                    source={require("../assets/image-3.png")}
                  />
                </View>
                <Text style={[styles.asianaAirlines1, styles.ml8]}>
                  Asiana Airlines
                </Text>
              </View>
              <View style={styles.frameView37}>
                <Image
                  style={styles.fluenttimer24RegularIcon4}
                  resizeMode="cover"
                  source={require("../assets/fluenttimer24regular.png")}
                />
                <Text style={[styles.hr38min1, styles.ml4]}>03 hr 38min</Text>
              </View>
            </View>
            <View style={[styles.frameView40, styles.mt14]}>
              <View style={styles.group138}>
                <Text style={styles.sIN4}>SIN</Text>
                <Text style={[styles.singapore4, styles.mt4]}>Singapore</Text>
              </View>
              <View style={[styles.frameView39, styles.ml18]}>
                <Image
                  style={styles.line2Icon4}
                  resizeMode="cover"
                  source={require("../assets/line2.png")}
                />
                <Image
                  style={styles.ovalIcon8}
                  resizeMode="cover"
                  source={require("../assets/oval1.png")}
                />
                <Image
                  style={styles.iconFlight4}
                  resizeMode="cover"
                  source={require("../assets/icon--flight1.png")}
                />
                <Image
                  style={styles.ovalIcon9}
                  resizeMode="cover"
                  source={require("../assets/oval1.png")}
                />
              </View>
              <View style={[styles.group139, styles.ml18]}>
                <Text style={styles.lAX4}>LAX</Text>
                <Text style={[styles.losAngeles4, styles.mt4]}>
                  Los Angeles
                </Text>
              </View>
            </View>
            <Image
              style={[styles.line3Icon4, styles.mt14]}
              resizeMode="cover"
              source={require("../assets/line3.png")}
            />
            <View style={[styles.frameView44, styles.mt14]}>
              <View style={styles.frameView43}>
                <View style={styles.frameView41}>
                  <Image
                    style={styles.chairIcon4}
                    resizeMode="cover"
                    source={require("../assets/chair.png")}
                  />
                  <Text style={[styles.businessClass3, styles.ml8]}>
                    Business Class
                  </Text>
                </View>
                <View style={styles.frameView42}>
                  <Text style={styles.from4}>From</Text>
                  <Text style={[styles.text4, styles.ml4]}>$450</Text>
                </View>
              </View>
              <View style={[styles.buttonPrimary4, styles.mt10]}>
                <Text style={styles.viewDetails4}>View Details</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  ml8: {
    marginLeft: 8,
  },
  ml4: {
    marginLeft: 4,
  },
  mt4: {
    marginTop: 4,
  },
  ml18: {
    marginLeft: 18,
  },
  mt10: {
    marginTop: 10,
  },
  mt14: {
    marginTop: 14,
  },
  searchResultsBodyContent: {
    flexDirection: "column",
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  resultsFound: {
    position: "relative",
    fontSize: 14,
    fontFamily: "Inter",
    color: "#7e8b97",
    textAlign: "left",
  },
  vectorIcon: {
    position: "relative",
    width: 17,
    height: 15,
    flexShrink: 0,
  },
  listHeader: {
    alignSelf: "stretch",
    flexDirection: "row",
    paddingHorizontal: 0,
    paddingBottom: 11,
    alignItems: "center",
    justifyContent: "space-between",
  },
  rectangleView: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 4,
    borderStyle: "solid",
    borderColor: "#f6f6f6",
    borderWidth: 1,
    width: 48,
    height: 32,
  },
  image2Icon: {
    position: "absolute",
    top: 12,
    left: 5,
    width: 36,
    height: 8,
  },
  groupView: {
    position: "relative",
    width: 48,
    height: 32,
    flexShrink: 0,
  },
  unitedAirlines: {
    position: "relative",
    fontSize: 14,
    lineHeight: 16,
    fontFamily: "Inter",
    color: "#7e8b97",
    textAlign: "left",
  },
  frameView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  fluenttimer24RegularIcon: {
    position: "relative",
    width: 19,
    height: 19,
    flexShrink: 0,
    overflow: "hidden",
  },
  hr40min: {
    position: "relative",
    fontSize: 12,
    lineHeight: 16,
    fontFamily: "Inter",
    color: "#7e8b97",
    textAlign: "right",
  },
  frameView1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  frameView2: {
    alignSelf: "stretch",
    flexDirection: "row",
    paddingHorizontal: 14,
    paddingTop: 12,
    alignItems: "center",
    justifyContent: "space-between",
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
  frameView3: {
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
  frameView4: {
    alignSelf: "stretch",
    flexDirection: "row",
    paddingHorizontal: 12,
    paddingVertical: 0,
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
  chairIcon: {
    position: "relative",
    width: 16,
    height: 16,
    flexShrink: 0,
    overflow: "hidden",
  },
  businessClass: {
    position: "relative",
    fontSize: 12,
    lineHeight: 16,
    fontFamily: "Inter",
    color: "#191919",
    textAlign: "left",
    width: 85,
  },
  frameView5: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  from: {
    position: "relative",
    fontSize: 12,
    lineHeight: 16,
    fontFamily: "Inter",
    color: "#bbb",
    textAlign: "right",
    width: 32,
  },
  text: {
    position: "relative",
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#191919",
    textAlign: "right",
  },
  frameView6: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  frameView7: {
    alignSelf: "stretch",
    borderRadius: 4,
    backgroundColor: "#f8f9fb",
    flexDirection: "row",
    paddingHorizontal: 12,
    paddingVertical: 6,
    alignItems: "center",
    justifyContent: "space-between",
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
    alignSelf: "stretch",
    borderRadius: 5,
    backgroundColor: "#f99a0e",
    flexDirection: "row",
    paddingHorizontal: 104,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  frameView8: {
    alignSelf: "stretch",
    flexDirection: "column",
    paddingHorizontal: 12,
    paddingBottom: 12,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  flightCard: {
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
  flightCardHolder: {
    alignSelf: "stretch",
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingBottom: 9,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  rectangleView1: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 4,
    borderStyle: "solid",
    borderColor: "#f6f6f6",
    borderWidth: 1,
    width: 48,
    height: 32,
  },
  image2Icon1: {
    position: "absolute",
    top: 12,
    left: 5,
    width: 36,
    height: 8,
  },
  groupView1: {
    position: "relative",
    width: 48,
    height: 32,
    flexShrink: 0,
  },
  unitedAirlines1: {
    position: "relative",
    fontSize: 14,
    lineHeight: 16,
    fontFamily: "Inter",
    color: "#7e8b97",
    textAlign: "left",
  },
  frameView9: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  fluenttimer24RegularIcon1: {
    position: "relative",
    width: 19,
    height: 19,
    flexShrink: 0,
    overflow: "hidden",
  },
  hr10min: {
    position: "relative",
    fontSize: 12,
    lineHeight: 16,
    fontFamily: "Inter",
    color: "#7e8b97",
    textAlign: "right",
  },
  frameView10: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  frameView11: {
    alignSelf: "stretch",
    flexDirection: "row",
    paddingHorizontal: 14,
    paddingTop: 12,
    alignItems: "center",
    justifyContent: "space-between",
  },
  sIN1: {
    position: "relative",
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#1262ae",
    textAlign: "left",
  },
  singapore1: {
    position: "relative",
    fontSize: 14,
    fontFamily: "Inter",
    color: "#191919",
    textAlign: "left",
  },
  group132: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  line2Icon1: {
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
  ovalIcon2: {
    position: "relative",
    width: 10,
    height: 10,
    flexShrink: 0,
    zIndex: 1,
  },
  iconFlight1: {
    position: "relative",
    width: 41,
    height: 41,
    flexShrink: 0,
    zIndex: 2,
  },
  ovalIcon3: {
    position: "relative",
    width: 10,
    height: 10,
    flexShrink: 0,
    zIndex: 3,
  },
  frameView12: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    position: "relative",
  },
  lAX1: {
    position: "relative",
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#1262ae",
    textAlign: "left",
  },
  losAngeles1: {
    position: "relative",
    fontSize: 14,
    fontFamily: "Inter",
    color: "#191919",
    textAlign: "left",
  },
  group133: {
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "flex-start",
  },
  frameView13: {
    alignSelf: "stretch",
    flexDirection: "row",
    paddingHorizontal: 12,
    paddingVertical: 0,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  line3Icon1: {
    alignSelf: "stretch",
    position: "relative",
    maxWidth: "100%",
    overflow: "hidden",
    height: 1,
    flexShrink: 0,
  },
  chairIcon1: {
    position: "relative",
    width: 16,
    height: 16,
    flexShrink: 0,
    overflow: "hidden",
  },
  businessClass1: {
    position: "relative",
    fontSize: 12,
    lineHeight: 16,
    fontFamily: "Inter",
    color: "#191919",
    textAlign: "left",
    width: 85,
  },
  frameView14: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  from1: {
    position: "relative",
    fontSize: 12,
    lineHeight: 16,
    fontFamily: "Inter",
    color: "#bbb",
    textAlign: "right",
    width: 32,
  },
  text1: {
    position: "relative",
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#191919",
    textAlign: "right",
  },
  frameView15: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  frameView16: {
    alignSelf: "stretch",
    borderRadius: 4,
    backgroundColor: "#f8f9fb",
    flexDirection: "row",
    paddingHorizontal: 12,
    paddingVertical: 6,
    alignItems: "center",
    justifyContent: "space-between",
  },
  viewDetails1: {
    position: "relative",
    fontSize: 14,
    lineHeight: 24,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
    width: 120,
  },
  buttonPrimary1: {
    alignSelf: "stretch",
    borderRadius: 5,
    backgroundColor: "#f99a0e",
    flexDirection: "row",
    paddingHorizontal: 104,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  frameView17: {
    alignSelf: "stretch",
    flexDirection: "column",
    paddingHorizontal: 12,
    paddingBottom: 12,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  flightCard1: {
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
  flightCardHolder1: {
    alignSelf: "stretch",
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingBottom: 9,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  rectangleView2: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 4,
    borderStyle: "solid",
    borderColor: "#f6f6f6",
    borderWidth: 1,
    width: 48,
    height: 32,
  },
  image3Icon: {
    position: "absolute",
    top: 9,
    left: 6,
    width: 36,
    height: 15,
  },
  groupView2: {
    position: "relative",
    width: 48,
    height: 32,
    flexShrink: 0,
  },
  asianaAirlines: {
    position: "relative",
    fontSize: 14,
    lineHeight: 16,
    fontFamily: "Inter",
    color: "#7e8b97",
    textAlign: "left",
  },
  frameView18: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  fluenttimer24RegularIcon2: {
    position: "relative",
    width: 19,
    height: 19,
    flexShrink: 0,
    overflow: "hidden",
  },
  hr38min: {
    position: "relative",
    fontSize: 12,
    lineHeight: 16,
    fontFamily: "Inter",
    color: "#7e8b97",
    textAlign: "right",
  },
  frameView19: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  frameView20: {
    alignSelf: "stretch",
    flexDirection: "row",
    paddingHorizontal: 14,
    paddingTop: 12,
    alignItems: "center",
    justifyContent: "space-between",
  },
  sIN2: {
    position: "relative",
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#1262ae",
    textAlign: "left",
  },
  singapore2: {
    position: "relative",
    fontSize: 14,
    fontFamily: "Inter",
    color: "#191919",
    textAlign: "left",
  },
  group134: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  line2Icon2: {
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
  ovalIcon4: {
    position: "relative",
    width: 10,
    height: 10,
    flexShrink: 0,
    zIndex: 1,
  },
  iconFlight2: {
    position: "relative",
    width: 41,
    height: 41,
    flexShrink: 0,
    zIndex: 2,
  },
  ovalIcon5: {
    position: "relative",
    width: 10,
    height: 10,
    flexShrink: 0,
    zIndex: 3,
  },
  frameView21: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    position: "relative",
  },
  lAX2: {
    position: "relative",
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#1262ae",
    textAlign: "left",
  },
  losAngeles2: {
    position: "relative",
    fontSize: 14,
    fontFamily: "Inter",
    color: "#191919",
    textAlign: "left",
  },
  group135: {
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "flex-start",
  },
  frameView22: {
    alignSelf: "stretch",
    flexDirection: "row",
    paddingHorizontal: 12,
    paddingVertical: 0,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  line3Icon2: {
    alignSelf: "stretch",
    position: "relative",
    maxWidth: "100%",
    overflow: "hidden",
    height: 1,
    flexShrink: 0,
  },
  chairIcon2: {
    position: "relative",
    width: 16,
    height: 16,
    flexShrink: 0,
    overflow: "hidden",
  },
  businessClass2: {
    position: "relative",
    fontSize: 12,
    lineHeight: 16,
    fontFamily: "Inter",
    color: "#191919",
    textAlign: "left",
    width: 85,
  },
  frameView23: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  from2: {
    position: "relative",
    fontSize: 12,
    lineHeight: 16,
    fontFamily: "Inter",
    color: "#bbb",
    textAlign: "right",
    width: 32,
  },
  text2: {
    position: "relative",
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#191919",
    textAlign: "right",
  },
  frameView24: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  frameView25: {
    alignSelf: "stretch",
    borderRadius: 4,
    backgroundColor: "#f8f9fb",
    flexDirection: "row",
    paddingHorizontal: 12,
    paddingVertical: 6,
    alignItems: "center",
    justifyContent: "space-between",
  },
  viewDetails2: {
    position: "relative",
    fontSize: 14,
    lineHeight: 24,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
    width: 120,
  },
  buttonPrimary2: {
    alignSelf: "stretch",
    borderRadius: 5,
    backgroundColor: "#f99a0e",
    flexDirection: "row",
    paddingHorizontal: 104,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  frameView26: {
    alignSelf: "stretch",
    flexDirection: "column",
    paddingHorizontal: 12,
    paddingBottom: 12,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  flightCard2: {
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
  flightCardHolder2: {
    alignSelf: "stretch",
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingBottom: 9,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  rectangleView3: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 4,
    borderStyle: "solid",
    borderColor: "#f6f6f6",
    borderWidth: 1,
    width: 48,
    height: 32,
  },
  image4Icon: {
    position: "absolute",
    top: 11,
    left: 4,
    width: 40,
    height: 9,
  },
  groupView3: {
    position: "relative",
    width: 48,
    height: 32,
    flexShrink: 0,
  },
  lufthansaAirlines: {
    position: "relative",
    fontSize: 14,
    lineHeight: 16,
    fontFamily: "Inter",
    color: "#7e8b97",
    textAlign: "left",
  },
  frameView27: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  fluenttimer24RegularIcon3: {
    position: "relative",
    width: 19,
    height: 19,
    flexShrink: 0,
    overflow: "hidden",
  },
  hr15min: {
    position: "relative",
    fontSize: 12,
    lineHeight: 16,
    fontFamily: "Inter",
    color: "#7e8b97",
    textAlign: "right",
  },
  frameView28: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  frameView29: {
    alignSelf: "stretch",
    flexDirection: "row",
    paddingHorizontal: 14,
    paddingTop: 12,
    alignItems: "center",
    justifyContent: "space-between",
  },
  sIN3: {
    position: "relative",
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#1262ae",
    textAlign: "left",
  },
  singapore3: {
    position: "relative",
    fontSize: 14,
    fontFamily: "Inter",
    color: "#191919",
    textAlign: "left",
  },
  group136: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  line2Icon3: {
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
  ovalIcon6: {
    position: "relative",
    width: 10,
    height: 10,
    flexShrink: 0,
    zIndex: 1,
  },
  iconFlight3: {
    position: "relative",
    width: 41,
    height: 41,
    flexShrink: 0,
    zIndex: 2,
  },
  ovalIcon7: {
    position: "relative",
    width: 10,
    height: 10,
    flexShrink: 0,
    zIndex: 3,
  },
  frameView30: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    position: "relative",
  },
  lAX3: {
    position: "relative",
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#1262ae",
    textAlign: "left",
  },
  losAngeles3: {
    position: "relative",
    fontSize: 14,
    fontFamily: "Inter",
    color: "#191919",
    textAlign: "left",
  },
  group137: {
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "flex-start",
  },
  frameView31: {
    alignSelf: "stretch",
    flexDirection: "row",
    paddingHorizontal: 12,
    paddingVertical: 0,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  line3Icon3: {
    alignSelf: "stretch",
    position: "relative",
    maxWidth: "100%",
    overflow: "hidden",
    height: 1,
    flexShrink: 0,
  },
  chairIcon3: {
    position: "relative",
    width: 16,
    height: 16,
    flexShrink: 0,
    overflow: "hidden",
  },
  economyClass: {
    position: "relative",
    fontSize: 12,
    lineHeight: 16,
    fontFamily: "Inter",
    color: "#191919",
    textAlign: "left",
  },
  frameView32: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  from3: {
    position: "relative",
    fontSize: 12,
    lineHeight: 16,
    fontFamily: "Inter",
    color: "#bbb",
    textAlign: "right",
    width: 32,
  },
  text3: {
    position: "relative",
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#191919",
    textAlign: "right",
  },
  frameView33: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  frameView34: {
    alignSelf: "stretch",
    borderRadius: 4,
    backgroundColor: "#f8f9fb",
    flexDirection: "row",
    paddingHorizontal: 12,
    paddingVertical: 6,
    alignItems: "center",
    justifyContent: "space-between",
  },
  viewDetails3: {
    position: "relative",
    fontSize: 14,
    lineHeight: 24,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
    width: 120,
  },
  buttonPrimary3: {
    alignSelf: "stretch",
    borderRadius: 5,
    backgroundColor: "#f99a0e",
    flexDirection: "row",
    paddingHorizontal: 104,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  frameView35: {
    alignSelf: "stretch",
    flexDirection: "column",
    paddingHorizontal: 12,
    paddingBottom: 12,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  flightCard3: {
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
  flightCardHolder3: {
    alignSelf: "stretch",
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingBottom: 9,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  rectangleView4: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 4,
    borderStyle: "solid",
    borderColor: "#f6f6f6",
    borderWidth: 1,
    width: 48,
    height: 32,
  },
  image3Icon1: {
    position: "absolute",
    top: 9,
    left: 6,
    width: 36,
    height: 15,
  },
  groupView4: {
    position: "relative",
    width: 48,
    height: 32,
    flexShrink: 0,
  },
  asianaAirlines1: {
    position: "relative",
    fontSize: 14,
    lineHeight: 16,
    fontFamily: "Inter",
    color: "#7e8b97",
    textAlign: "left",
  },
  frameView36: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  fluenttimer24RegularIcon4: {
    position: "relative",
    width: 19,
    height: 19,
    flexShrink: 0,
    overflow: "hidden",
  },
  hr38min1: {
    position: "relative",
    fontSize: 12,
    lineHeight: 16,
    fontFamily: "Inter",
    color: "#7e8b97",
    textAlign: "right",
  },
  frameView37: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  frameView38: {
    alignSelf: "stretch",
    flexDirection: "row",
    paddingHorizontal: 14,
    paddingTop: 12,
    alignItems: "center",
    justifyContent: "space-between",
  },
  sIN4: {
    position: "relative",
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#1262ae",
    textAlign: "left",
  },
  singapore4: {
    position: "relative",
    fontSize: 14,
    fontFamily: "Inter",
    color: "#191919",
    textAlign: "left",
  },
  group138: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  line2Icon4: {
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
  ovalIcon8: {
    position: "relative",
    width: 10,
    height: 10,
    flexShrink: 0,
    zIndex: 1,
  },
  iconFlight4: {
    position: "relative",
    width: 41,
    height: 41,
    flexShrink: 0,
    zIndex: 2,
  },
  ovalIcon9: {
    position: "relative",
    width: 10,
    height: 10,
    flexShrink: 0,
    zIndex: 3,
  },
  frameView39: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    position: "relative",
  },
  lAX4: {
    position: "relative",
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#1262ae",
    textAlign: "left",
  },
  losAngeles4: {
    position: "relative",
    fontSize: 14,
    fontFamily: "Inter",
    color: "#191919",
    textAlign: "left",
  },
  group139: {
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "flex-start",
  },
  frameView40: {
    alignSelf: "stretch",
    flexDirection: "row",
    paddingHorizontal: 12,
    paddingVertical: 0,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  line3Icon4: {
    alignSelf: "stretch",
    position: "relative",
    maxWidth: "100%",
    overflow: "hidden",
    height: 1,
    flexShrink: 0,
  },
  chairIcon4: {
    position: "relative",
    width: 16,
    height: 16,
    flexShrink: 0,
    overflow: "hidden",
  },
  businessClass3: {
    position: "relative",
    fontSize: 12,
    lineHeight: 16,
    fontFamily: "Inter",
    color: "#555",
    textAlign: "left",
    width: 85,
  },
  frameView41: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  from4: {
    position: "relative",
    fontSize: 12,
    lineHeight: 16,
    fontWeight: "300",
    fontFamily: "Inter",
    color: "#7e8b97",
    textAlign: "right",
    width: 32,
  },
  text4: {
    position: "relative",
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#191919",
    textAlign: "right",
    width: 48,
  },
  frameView42: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  frameView43: {
    alignSelf: "stretch",
    borderRadius: 4,
    backgroundColor: "#f8f9fb",
    flexDirection: "row",
    paddingHorizontal: 12,
    paddingVertical: 6,
    alignItems: "center",
    justifyContent: "space-between",
  },
  viewDetails4: {
    position: "relative",
    fontSize: 14,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
    width: 120,
  },
  buttonPrimary4: {
    alignSelf: "stretch",
    borderRadius: 5,
    backgroundColor: "#f99a0e",
    flexDirection: "row",
    paddingHorizontal: 104,
    paddingVertical: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  frameView44: {
    alignSelf: "stretch",
    flexDirection: "column",
    paddingHorizontal: 12,
    paddingBottom: 12,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  flightCard4: {
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
  flightCardHolder4: {
    alignSelf: "stretch",
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingBottom: 9,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  listItems: {
    alignSelf: "stretch",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  searchResultsBody: {
    position: "relative",
    flex: 1,
    width: "100%",
    maxWidth: "100%",
  },
});

export default SearchResultsBody;
