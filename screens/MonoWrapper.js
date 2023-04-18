import { MonoProvider } from "@mono.co/connect-react-native";
import LinkAccount from "./LinkAccount";

const Stack = createNativeStackNavigator();

const payConfig = {
  scope: "payments",
  publicKey: "test_pk_txILHvD85YFmYmDWIynt",

  amount: 10000,
  onClose: () => alert("Widget closed"),
  onSuccess: () => alert("Payment Sucess"),
  data: {
    amount: 90000,
    type: "onetime-debit",
    // account: "640f45c8382507604bfa96a1",
    account: "6412ea4e10b58e0dfdaedc73",
  },
};

const config = {
  publicKey: "test_pk_txILHvD85YFmYmDWIynt",
  onClose: () => alert("Widget closed"),
  onSuccess: async (data) => {
    const code = data.getAuthCode();
    console.log("Access code", code);

    const options = {
      method: "POST",
      headers: {
        accept: "application/json",
        "mono-sec-key": "test_sk_7U2TH2kPxGwwrmpB6Hik",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ code: code }),
    };

    fetch("https://api.withmono.com/account/auth", options)
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.error(err));

    const models = await DataStore.save(
      new UserData({
        cognitoId: "myk",
        // "Username":""
      })
    );
    console.log(models);
  },

  reference: "random_string", // optional
  onEvent: (eventName, data) => {},
};

const MonoWrapper = () => {
  return (
    <MonoProvider {...config}>
      <Stack.Screen
        name="linkaccount"
        component={LinkAccount}
        options={{ headerShown: false }}
      />

      <Stack.Screen name="deposit">
        {() => (
          <MonoProvider {...{ ...payConfig }}>
            <Deposit />
          </MonoProvider>
        )}
      </Stack.Screen>
    </MonoProvider>
  );
};

export default MonoWrapper;
