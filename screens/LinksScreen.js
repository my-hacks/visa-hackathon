import React from "react";
import { ScrollView, StyleSheet, Text, View, Animated } from "react-native";
import { ExpoLinksView } from "@expo/samples";

// import {
//   CreditCardInput,
//   LiteCreditCardInput
// } from "react-native-creditcard-prixpay";

import {
  CreditCardInput,
  LiteCreditCardInput
} from "react-native-credit-card-input";

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: "Links"
  };
  _onChange = form => console.log(form);

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.pageTitle}>
          <Text>Acesse seu cartao Virtual</Text>
        </View>
        <View style={styles.crediCard}>
          <CreditCardInput onChange={this._onChange} />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff",
    padding: 20
  },
  pageTitle: {
    flex: 1,
    height: 40,
    fontSize: 25,
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold"
  },
  crediCard: {
    flex: 1
  }
});
