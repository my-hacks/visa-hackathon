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

class Success extends Component {
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
            flex: 1,
            flexDirection: "column",
            marginTop: 30,
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Image
            source={require("../../assets/data1.png")}
            style={{ marginBottom: 30 }}
          />

          <Text style={styles.mensagemCadastro}>
            {" "}
            Cadastro Realizado com sucesso{" "}
          </Text>
          <Image
            source={require("../../assets/icone192-check.png")}
            style={{ padding: 20, marginBottom: 30, marginTop: 30 }}
          />
          <View style={styles.box}>
            <Text style={styles.mensagem}>
              Seu cartao pode demorar até 5 minutos para ser liberado , mas pode
              ficar tranquilo , nos te avisaremos quando estiver pronto ... por
              enquanto pode utilizar nosso cartao virtual que ja esta
              disponivel.
            </Text>
          </View>
          <Button
            title="OK"
            onPress={() => this.props.navigation.navigate("HomeScreen")}
            color="#f35d26"
            height="50"
            width="100"
          />
        </Content>
      </Container>
    );
  }
}

export default Success;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  mensagem: {
    fontSize: 20,
    color: `#58595B`
  },
  box: {
    padding: 20
  },
  mensagemCadastro: {
    fontSize: 25,
    color: "#F15A29"
  }
});
