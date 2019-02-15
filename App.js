import React from "react";
import { StyleSheet } from "react-native";
import { createDrawerNavigator } from "react-navigation";
import HomeScreen from "./src/pages/HomeScreen";
import SettingsScreen from "./src/pages/SettingsScreen";
import Onboard from "./src/pages/Onboarding.";
import Cadastro from "./src/pages/Cadastro";
import Success from "./src/pages/Success";

export default class App extends React.Component {
  render() {
    return <AppDrawerNavigator />;
  }
}

const AppDrawerNavigator = createDrawerNavigator({
  Onboard: {
    screen: Onboard
  },
  Cadastro: {
    screen: Cadastro
  },
  Success: {
    screen: Success
  },
  HomeScreen: {
    screen: HomeScreen
  },
  Settings: {
    screen: SettingsScreen
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
