import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Dimensions
} from "react-native";
import { createDrawerNavigator, DrawerItems } from "react-navigation";
import HomeScreen from "./src/pages/HomeScreen";
import SettingsScreen from "./src/pages/SettingsScreen";

export default class App extends React.Component {
  render() {
    return <AppDrawerNavigator />;
  }
}

const AppDrawerNavigator = createDrawerNavigator({
  Home: {
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
