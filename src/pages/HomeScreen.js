import { Text, StyleSheet, View, ScrollView } from "react-native";
import React, { Component } from "react";
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
  Content
} from "native-base";
import {
  CreditCardInput,
  LiteCreditCardInput
} from "react-native-credit-card-input";

class HomeScreen extends Component {
  _onChange = form => console.log(form);

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Icon name="ios-menu" />
          </Left>
        </Header>
        <Content>
          <ScrollView style={styles.scrollContainer}>
            <View style={styles.pageTitle}>
              <Text>Acesse seu cartao Virtual</Text>
            </View>
            <View style={styles.crediCard}>
              <CreditCardInput onChange={this._onChange} />
            </View>
            <View style={styles.container}>
              <Text style={styles.limitText}>Limite Merx</Text>
              <Text style={styles.limit}> R$ 25,000.00</Text>
              <Button title="Conferir Ultimas Compras" onPress={() => {}} />
            </View>
          </ScrollView>
        </Content>
      </Container>
    );
  }
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  scrollContainer: {
    padding: 20
  },
  pageTitle: {
    padding: 20
  }
});
