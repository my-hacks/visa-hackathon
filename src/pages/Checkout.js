import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Button
} from "react-native";
import { Icon, Container, Content, Header, Left } from "native-base";

class Checkout extends Component {
  static navigationOptions = {
    title: "Checkout",
    headerStyle: {
      backgroundColor: "#DA552F"
    },
    headerTintColor: "#FFF"
  };

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Icon
              name="ios-menu"
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
            />
          </Left>
        </Header>

        <Content
          contentContainerStyle={{
            flex: 1,
            flexDirection: "column",
            marginTop: 30,
            alignItems: "center"
          }}
        >
          <Image source={require("../../assets/data1.png")} />
        </Content>
      </Container>
    );
  }
}

export default Checkout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
