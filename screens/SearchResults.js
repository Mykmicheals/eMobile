import * as React from "react";
import {
  StatusBar,
  StyleSheet,
  SafeAreaView,
  Pressable,
  Image,
  Text,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const SearchResults = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.searchResults}>
      <StatusBar barStyle="default" />
    </View>
  );
};

const styles = StyleSheet.create({
  ml6: {
    marginLeft: 6,
  },
  mt3: {
    marginTop: 3,
  },
  mt4: {
    marginTop: 4,
  },
  group4: {
    backgroundColor: "#fff",
  },
  searchResults: {
    position: "relative",
    backgroundColor: "#f8f9fb",
    flex: 1,
    width: "100%",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
});

export default SearchResults;
