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

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// AWS IMPORTS
import { Amplify } from 'aws-amplify'
import config from './src/aws-exports'
import { withAuthenticator } from 'aws-amplify-react-native'
import OrderBook from "./screens/Swap";
import LinkAccount from "./screens/LinkAccount";
import { MonoProvider, useMonoConnect } from '@mono.co/connect-react-native';
import LinkAccount2 from "./screens/LinkAccount2";

Amplify.configure(config)
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
              justifyContent: "space-between"
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
    </Tab.Navigator>
  );
}
``
const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(false);

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
    publicKey: "test_pk_txILHvD85YFmYmDWIynt",
    onClose: () => alert('Widget closed'),
    onSuccess: (data) => {
      const code = data.getAuthCode()
      console.log("Access code", code)
    },
    reference: "random_string", // optional
    onEvent: (eventName, data) => { // optional
      console.log(eventName)
      console.log(data)
    }
  }

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
              component={LinkAccount2}
              options={{ headerShown: false }}
            />

          </Stack.Navigator>
        ) : (
          <SplashScreen />
        )}
      </NavigationContainer>
    </MonoProvider>
  );
};
export default withAuthenticator(App);
