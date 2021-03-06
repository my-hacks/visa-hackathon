import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ScrollView
} from "react-native";
import { Icon, Container, Content, Header, Left } from "native-base";

class SettingsScreen extends Component {
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
        <View style={styles.titleBox}>
          <Text style={styles.title}> Ultimos Lançamentos </Text>
        </View>
        <FlatList
          contentContainerStyle={styles.list}
          data={this.state.data}
          keyExtractor={item => item.id}
          renderItem={this.renderItem}
        />
        <Content />
      </Container>
    );
  }
}

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  list: {
    padding: 20
  },
  productContainer: {
    borderWidth: 2,
    borderColor: "#ddd",
    borderRadius: 5,
    padding: 20,
    marginBottom: 20,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  left: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  titleBox: {
    backgroundColor: "#f35d26",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    marginTop: 15,
    marginRight: 15,
    marginLeft: 15
  },
  title: {
    fontSize: 25,
    color: "#FFF",
    padding: 10
  }
});
