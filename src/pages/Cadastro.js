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
import { withFormik } from "formik";

class Cadastro extends Component {
  static navigationOptions = {
    title: "Lançamentos",
    headerStyle: {
      backgroundColor: "#DA552F"
    },
    headerTintColor: "#FFF"
  };

  updateValue = e => {
    console.log(e.value);
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
          <Text style={styles.cadastre}> Cadastre - se na Merx</Text>
          <View>
            <TextInput placeholder="name" onChangeText={() => {}} />
            <Text>{``}</Text>
            <TextInput
              placeholder="name"
              onChangeText={text => updateValue(text, "name")}
            />
            <TouchableOpacity>
              <Text> Submit </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.cmon}>
            <Button
              title="Quero o meu !!! "
              onPress={() => this.props.navigation.navigate("Success")}
              color="#f35d26"
              height="50"
              style={{ margin: 80 }}
            />
          </View>
        </Content>
      </Container>
    );
  }
}

export default Cadastro;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
