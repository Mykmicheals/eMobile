const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Explore from "./screens/Overview";
import SearchResults from "./screens/SearchResults";
import Swap from "./screens/Swap";
import SearchTwoWay from "./screens/SearchTwoWay";
import ProfileIcon from "./screens/ProfileIcon";
import Borocay from "./screens/Borocay";
import OrderList from "./screens/OrderList";
import SearchResultsBody from "./screens/SearchResultsBody";
import History from "./screens/History";
import Profile from "./screens/Profile";
import DrawerMenu from "./screens/DrawerMenu";
import SplashScreen from "./screens/SplashScreen";
import Instructions from "./screens/Instructions";
import BottomTab8 from "./components/BottomTab8";
import BottomTab7 from "./components/BottomTab7";
import BottomTab6 from "./components/BottomTab6";
import BottomTab5 from "./components/BottomTab5";
import BottomTab4 from "./components/BottomTab4";
import BottomTab3 from "./components/BottomTab3";
// import BottomTab2 from "./components/BottomTab2";
import BottomTab1 from "./components/ProfileTab2";
import BottomTab from "./components/ProfileTab1";
import Header2 from "./components/Header2";
import Header1 from "./components/Header1";
import Header from "./components/Header";
import Group41 from "./components/Group41";
import Group4 from "./components/Group4";
import Header3 from "./components/Header3";
import { useState, useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// AWS IMPORTS
import { Auth } from "aws-amplify";
import { Amplify } from "aws-amplify";
import config from "./src/aws-exports";
import { withAuthenticator } from "aws-amplify-react-native";
import OrderBook from "./screens/Swap";
import LinkAccount from "./screens/LinkAccount";
import { MonoProvider } from "@mono.co/connect-react-native";
import Deposit from "./screens/Deposit";
import { DataStore } from "aws-amplify";
import { UserAccount } from "./src/models";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const walletUrl = "http://192.168.100.56:8000";

Amplify.configure(config);
const Drawer = createDrawerNavigator();

const Tab = createBottomTabNavigator();

function DrawerRoot({ navigation }) {
  return (
    <Drawer.Navigator
      screenOptions={{ headerShown: false, drawerStyle: { width: 320 } }}
      drawerContent={(props) => <DrawerMenu {...props} />}
    >
      <Drawer.Screen name=" " component={BottomTabsRoot} />
      <Drawer.Screen
        name="Borocay"
        component={Borocay}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
}
function BottomTabsRoot({ navigation }) {
  const [bottomTabItemsNormal] = React.useState([
    <BottomTab7 />,
    <BottomTab5 />,
    <BottomTab3 />,
    <BottomTab />,
  ]);
  const [bottomTabItemsActive] = React.useState([
    <BottomTab8 />,
    <BottomTab6 />,
    <BottomTab4 />,
    <BottomTab1 />,
  ]);
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={({ state, descriptors, navigation }) => {
        const activeIndex = state.index;
        return (
          <View
            style={{
              alignSelf: "stretch",
              backgroundColor: "#fff",
              shadowColor: "rgba(0, 0, 0, 0.03)",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowRadius: 15,
              elevation: 15,
              shadowOpacity: 1,
              flexDirection: "row",
              padding: 16,
              alignItems: "center",
              justifyContent: "flex-start",
              height: 81,
              // borderWidth: 2,
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            {bottomTabItemsNormal.map((item, index) => {
              const isFocused = state.index === index;
              return (
                <Pressable
                  onPress={() => {
                    navigation.navigate({
                      name: state.routes[index].name,
                      merge: true,
                    });
                  }}
                >
                  {activeIndex === index
                    ? bottomTabItemsActive[index] || item
                    : item}
                </Pressable>
              );
            })}
          </View>
        );
      }}
    >
      <Tab.Screen
        name="Overview"
        component={Explore}
        options={(props) => ({
          headerShown: true,
          header: () => <Header2 />,
        })}
      />
      <Tab.Screen
        name="Search"
        component={Swap}
        options={(props) => ({
          headerShown: true,
          header: () => <Header1 />,
        })}
      />
      <Tab.Screen
        name="Swap"
        component={History}
        options={(props) => ({
          headerShown: true,
          header: () => <Header1 />,
        })}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={(props) => ({
          headerShown: true,
          header: () => <Header />,
        })}
      />
      <Tab.Screen
        name="OrderList"
        component={OrderList}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="OfferTicket"
        component={Swap}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}
``;
const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(false);
  const [depositAmount, setDepositAmount] = useState();
  const [accountId, setAccountId] = useState(0);

  const handleDeposit = (amount) => {
    setDepositAmount(amount);
    console.warn(amount);
  };

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

  useFonts({
    "Baloo Bhai 2": require("./assets/fonts/Baloo_Bhai_2.ttf"),
    Inter: require("./assets/fonts/Inter.ttf"),
    Roboto: require("./assets/fonts/Roboto.ttf"),
    "Just Me Again Down Here": require("./assets/fonts/Just_Me_Again_Down_Here.ttf"),
    "Source Code Pro": require("./assets/fonts/Source_Code_Pro.ttf"),
    Alegreya: require("./assets/fonts/Alegreya.ttf"),
    Helvetica: require("./assets/fonts/Helvetica.ttf"),
    "SF Pro Text": require("./assets/fonts/SF_Pro_Text.ttf"),
  });

  React.useEffect(() => {
    setTimeout(() => {
      setHideSplashScreen(true);
    }, 2000);
  }, []);

  const config = {
    publicKey: "test_pk_mEVJ1sNSFRzHPcyq1jN3",
    onClose: () => alert("Widget closed"),
    onSuccess: async (data) => {
      const code = data.getAuthCode();
      const options = {
        method: "POST",
        headers: {
          accept: "application/json",
          "mono-sec-key": "test_sk_IYcOmUnqdFkgVdMVyN0H",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code: code }),
      };
      try {
        const response = await fetch(
          "https://api.withmono.com/account/auth",
          options
        );
        const data = await response.json();
        console.log(data);
        const models = await DataStore.save(
          new UserAccount({
            UserID: user.sub,
            AccountNumberID: data.id,
            Type: "Mono-Connect",
          })
        );
        await AsyncStorage.setItem("accountId", data.id);
        setAccountId(data.id);

        await AsyncStorage.setItem("accountLinked", "true");

        // const userAccounts = await DataStore.query(UserAccount, (u) =>
        //   u.UserID.eq("4e710e9c-a95d-4d25-ac0a-d5988eb966fa")
        // );

        // console.log(userAccounts);
      } catch (err) {
        console.error(err);
      }
       navigate.navigate("/");
    },

    reference: "random_string", // optional
    onEvent: (eventName, data) => {
      // optional
    },
  };

  const getId = async () => {
    const value = await AsyncStorage.getItem("accountId");
    setAccountId(value);
  };

  useEffect(() => {
    getId();
  }, [accountId]);

  console.log(`pay config id ${accountId}`);

  const payConfig = {
    scope: "payments",
    publicKey: "test_pk_txILHvD85YFmYmDWIynt",
    onClose: () => alert("Widget closed"),
    onSuccess: () => {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

      var urlencoded = new URLSearchParams();
      urlencoded.append("userId", "mykmicheals@gmail.com");
      urlencoded.append("amount", "2000");
      urlencoded.append("pinCode", "123456");
      urlencoded.append("currency", "ENGN");
      urlencoded.append(
        "issuer",
        "GC6NGB45CEQD76LLBSUBPSEURF45NNG4QU6EK3HYWQ3PFGVFS6CQEF2H"
      );

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: urlencoded,
        redirect: "follow",
      };

      // fetch("http://localhost:8000/v1/wallet/deposit", requestOptions)
      fetch(`${walletUrl}/v1/wallet/deposit`, requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.log("error", error));
    },
    data: {
      amount: 100 * 100,
      type: "onetime-debit",
      account: accountId,
    },
  };

  return (
    <MonoProvider {...config}>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="DrawerRoot" component={DrawerRoot} />

            <Stack.Screen
              name="SearchResults"
              component={SearchResults}
              options={(props) => ({
                headerShown: true,
                header: () => <Group41 />,
              })}
            />
            <Stack.Screen
              name="Swap"
              component={Swap}
              options={(props) => ({
                headerShown: true,
                header: () => <Group4 />,
              })}
            />
            <Stack.Screen
              name="oderTicket"
              component={OrderList}
              options={(props) => ({
                headerShown: true,
                header: () => <Group4 />,
              })}
            />
            <Stack.Screen
              name="SearchTwoWay"
              component={SearchTwoWay}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SearchResultsBody"
              component={SearchResultsBody}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SplashScreen"
              component={SplashScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Instructions"
              component={Instructions}
              options={(props) => ({
                headerShown: true,
                header: () => <Header3 />,
              })}
            />

            <Stack.Screen
              name="linkaccount"
              component={LinkAccount}
              options={{ headerShown: false }}
            />

            <Stack.Screen name="deposit">
              {() => (
                <MonoProvider {...{ ...payConfig }}>
                  <Deposit onDeposit={handleDeposit} />
                </MonoProvider>
              )}
            </Stack.Screen>
          </Stack.Navigator>
        ) : (
          <SplashScreen />
        )}
      </NavigationContainer>
    </MonoProvider>
  );
};
export default withAuthenticator(App);
