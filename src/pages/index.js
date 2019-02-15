import { createStackNavigator } from "react-navigation";
import HomeScreen from "./HomeScreen";
import SettingsScreen from "./SettingsScreen";
import Onboard from "./Onboarding.";
import Cadastro from "./Cadastro";
import Successs from "./Success";

const StackNavigator = createStackNavigator({
  Onboard: Onboard,
  Cadastro: Cadastro,
  Sucess: Successs,
  Home: HomeScreen,
  SettingsScreen: SettingsScreen
});

export default { StackNavigator };
