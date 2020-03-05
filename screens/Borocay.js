import * as React from "react";
import {
  Pressable,
  Image,
  StyleSheet,
  View,
  Text,
  ScrollView,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Borocay = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.borocay}>
      <ImageBackground
        style={styles.borocayScreenIcon}
        resizeMode="cover"
        source={require("../assets/borocayscreen.png")}
      >
        <View style={styles.header}>
          <Pressable
            style={styles.backArrow}
            onPress={() => navigation.goBack()}
          >
            <Image
              style={styles.iconBack}
              resizeMode="cover"
              source={require("../assets/icon--back9.png")}
            />
          </Pressable>
          <View style={styles.heart}>
            <Image
              style={styles.iconHeart}
              resizeMode="cover"
              source={require("../assets/icon--heart.png")}
            />
          </View>
        </View>
        <View style={styles.bottomDrawer}>
          <View style={styles.bottomDrawerContent}>
            <View style={styles.title}>
              <View style={styles.frameView2}>
                <View style={styles.frameView}>
                  <Text style={styles.boracay}>Boracay</Text>
                  <Text style={[styles.philippines, styles.mt2]}>
                    Philippines
                  </Text>
                </View>
                <View style={[styles.frameView1, styles.ml3]}>
                  <Text style={styles.d4N}>5D4N</Text>
                </View>
              </View>
              <Text style={styles.text}>$349</Text>
            </View>
            <View style={[styles.overviewText, styles.mt24]}>
              <Text style={styles.overview}>Overview</Text>
              <Text style={styles.spend5DaysAnd4NightsInO}>
                Spend 5 days and 4 nights in one of the best islands in the
                world! Bask in the sun while walking in the white sand beach and
                enjoy the night partying at the popular seaside bars.
              </Text>
            </View>
            <View style={[styles.images, styles.mt24]}>
              <Text style={styles.photos}>Photos</Text>
              <ScrollView
                style={[styles.photosRow, styles.mt8]}
                horizontal
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.photosRowScrollViewContent}
              >
                <Image
                  style={styles.photoIcon}
                  resizeMode="cover"
                  source={require("../assets/photo.png")}
                />
                <Image
                  style={[styles.photoIcon1, styles.ml10]}
                  resizeMode="cover"
                  source={require("../assets/photo1.png")}
                />
                <Image
                  style={[styles.photoIcon2, styles.ml10]}
                  resizeMode="cover"
                  source={require("../assets/photo2.png")}
                />
                <Image
                  style={[styles.photoIcon3, styles.ml10]}
                  resizeMode="cover"
                  source={require("../assets/photo3.png")}
                />
                <Image
                  style={[styles.photoIcon4, styles.ml10]}
                  resizeMode="cover"
                  source={require("../assets/photo4.png")}
                />
                <Image
                  style={[styles.photoIcon5, styles.ml10]}
                  resizeMode="cover"
                  source={require("../assets/photo5.png")}
                />
              </ScrollView>
            </View>
            <View style={[styles.buttonPrimary, styles.mt24]}>
              <Text style={styles.viewDetails}>Book Now</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  mt2: {
    marginTop: 2,
  },
  ml3: {
    marginLeft: 3,
  },
  ml10: {
    marginLeft: 10,
  },
  photosRowScrollViewContent: {
    flexDirection: "row",
  },
  mt8: {
    marginTop: 8,
  },
  mt24: {
    marginTop: 24,
  },
  iconBack: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
    overflow: "hidden",
  },
  backArrow: {
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
  iconHeart: {
    position: "relative",
    width: 20,
    height: 20,
    flexShrink: 0,
    overflow: "hidden",
  },
  heart: {
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
    padding: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    alignSelf: "stretch",
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingTop: 30,
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  boracay: {
    position: "relative",
    fontSize: 24,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#191919",
    textAlign: "left",
  },
  philippines: {
    position: "relative",
    fontSize: 16,
    fontFamily: "Inter",
    color: "#7e8b97",
    textAlign: "left",
  },
  frameView: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  d4N: {
    position: "relative",
    fontSize: 14,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#4d5760",
    textAlign: "left",
  },
  frameView1: {
    borderRadius: 6,
    backgroundColor: "#f4f5f6",
    overflow: "hidden",
    flexDirection: "row",
    paddingHorizontal: 8,
    paddingVertical: 4,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameView2: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  text: {
    position: "relative",
    fontSize: 28,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#191919",
    textAlign: "left",
  },
  title: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  overview: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#191919",
    textAlign: "left",
  },
  spend5DaysAnd4NightsInO: {
    position: "absolute",
    width: "100%",
    top: "25%",
    left: "0%",
    fontSize: 14,
    lineHeight: 24,
    fontFamily: "Inter",
    color: "#191919",
    textAlign: "left",
  },
  overviewText: {
    alignSelf: "stretch",
    position: "relative",
    height: 128,
    flexShrink: 0,
  },
  photos: {
    position: "relative",
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#191919",
    textAlign: "left",
  },
  photoIcon: {
    position: "relative",
    borderRadius: 4,
    width: 120,
    height: 90,
    flexShrink: 0,
  },
  photoIcon1: {
    position: "relative",
    borderRadius: 4,
    width: 120,
    height: 90,
    flexShrink: 0,
  },
  photoIcon2: {
    position: "relative",
    borderRadius: 4,
    width: 120,
    height: 90,
    flexShrink: 0,
  },
  photoIcon3: {
    position: "relative",
    borderRadius: 4,
    width: 120,
    height: 90,
    flexShrink: 0,
  },
  photoIcon4: {
    position: "relative",
    borderRadius: 4,
    width: 120,
    height: 90,
    flexShrink: 0,
  },
  photoIcon5: {
    position: "relative",
    borderRadius: 4,
    width: 120,
    height: 90,
    flexShrink: 0,
  },
  photosRow: {
    alignSelf: "stretch",
    width: "100%",
  },
  images: {
    alignSelf: "stretch",
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
    alignSelf: "stretch",
    borderRadius: 5,
    backgroundColor: "#f99a0e",
    flexDirection: "row",
    paddingHorizontal: 104,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  bottomDrawerContent: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  bottomDrawer: {
    alignSelf: "stretch",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
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
    paddingVertical: 24,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  borocayScreenIcon: {
    alignSelf: "stretch",
    flex: 1,
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingTop: 16,
    alignItems: "center",
    justifyContent: "space-between",
  },
  borocay: {
    position: "relative",
    flex: 1,
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
});

export default Borocay;
