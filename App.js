// App.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

// Import screens
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import Homescreen from "./screens/Homescreen";
import DetailScreen from "./screens/DetailScreen";
import AccountScreen from "./screens/AccountScreen";
import NotificationsScreen from "./screens/NotificationsScreen";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

// Drawer that contains Home + menu options
function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="Homescreen"
      screenOptions={{
        headerShown: false,
        drawerStyle: { backgroundColor: "skyblue" },
        drawerLabelStyle: { color: "white", fontWeight: "bold" },
      }}
    >
      <Drawer.Screen name="Homescreen" component={Homescreen} />
      <Drawer.Screen name="Account" component={AccountScreen} />
      <Drawer.Screen name="Notifications" component={NotificationsScreen} />
    </Drawer.Navigator>
  );
}

// Root Stack that controls authentication + app flow
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* Auth flow */}
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />

        {/* Once logged in, show Drawer */}
        <Stack.Screen name="Drawer" component={DrawerNavigator} />

        {/* Detail page (can be opened from Home) */}
        <Stack.Screen name="DetailScreen" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
