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
    const { navigation } = this.props;
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
              <Text style={styles.aviso}>
                Informe os dados enviados por email para validar seu cartao
                Virtual
              </Text>
            </View>
            <View style={styles.crediCard}>
              <CreditCardInput onChange={this._onChange} />
            </View>
            <View style={styles.paymentsData}>
              <Text
                style={styles.details}
                onPress={() => navigation.navigate("Settings")}
              >
                Ver Detalhes
              </Text>
              <Button type="button" style={styles.reviewButton}>
                <Text style={styles.payText}>Pagar</Text>
              </Button>
            </View>
            <View style={styles.containerData}>
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
    padding: 12
  },
  scrollContainer: {
    padding: 12
  },
  pageTitle: {
    padding: 12,
    fontSize: 14
  },
  details: {
    paddingTop: 10,
    color: "#f35d26",
    textDecorationLine: "underline",
    paddingLeft: 15
  },
  paymentsData: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20
  },
  reviewButton: {
    width: 180,
    backgroundColor: "#f35d26",
    color: "#FFF",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 14,
    color: "#000"
  },
  limitText: {
    color: "#f35d26",
    alignItems: "flex-start"
  },
  limit: {
    fontSize: 45,
    color: "#58595b",
    fontWeight: "bold",
    marginTop: 20
  },
  containerData: {
    marginTop: 15,
    alignItems: "center",
    justifyContent: "center"
  },
  payText: {
    color: "#ffffff",
    fontSize: 20
  },
  aviso: {
    padding: 15,
    color: "#000",
    fontWeight: "bold"
  }
});
