import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Image,
  Button
} from "react-native";
import { Icon, Container, Content, Header, Left } from "native-base";

class Onboard extends Component {
  static navigationOptions = {
    title: "Lançamentos",
    headerStyle: {
      backgroundColor: "#DA552F"
    },
    headerTintColor: "#FFF"
  };

  state = {
    data: [
      {
        id: 1,
        nomeLoja: "Leroy Merlin",
        preco: "300,12",
        data: "12/04/2019"
      },
      {
        id: 2,
        nomeLoja: "Leroy Merlin",
        preco: "300,12",
        data: "12/04/2019"
      },
      {
        id: 3,
        nomeLoja: "Leroy Merlin",
        preco: "300,12",
        data: "12/04/2019"
      },
      {
        id: 3,
        nomeLoja: "Leroy Merlin",
        preco: "300,12",
        data: "12/04/2019"
      }
    ]
  };

  renderItem = ({ item }) => (
    <ScrollView>
      <View style={styles.productContainer}>
        <View style={styles.left}>
          <Text style={styles.data}>{item.data}</Text>
          <Text style={styles.productTitle}>{item.nomeLoja}</Text>
        </View>
        <Text style={styles.productDescription}>{item.preco}</Text>
      </View>
    </ScrollView>
  );

  render() {
    const { navigation } = this.props;
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
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
            flexDirection: "column",
            marginTop: 30
          }}
        >
          <View style={styles.welcome}>
            <Text style={{ fontSize: 18, color: "#f35d26" }}>Bem vindo a</Text>
            <Text>{` `}</Text>
            <Image source={require("../../assets/data1.png")} />
            <Text style={styles.textApresentation}>
              A Merx quer ajudar o brasileiro a realizar o sonho de ser seu
              próprio patrão, facilitando o seu acesso ao crédito e tornando o
              Brasil em um pais de empreendedores
            </Text>

            <View style={styles.cmon}>
              <Button
                title="Quero o meu !!! "
                onPress={() => navigation.navigate("Cadastro")}
                color="#f35d26"
                height="50"
              />
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}

export default Onboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  welcome: {
    flex: 1,
    flexDirection: "column",
    marginTop: 20
  },
  textApresentation: {
    color: `#cecece`,
    width: 300,
    fontSize: 30,
    marginTop: 30
  },
  cmon: {
    marginTop: 50
  }
});
