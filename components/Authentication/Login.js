import React, { Component } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Alert
} from "react-native";
import { Form } from "native-base";
import styles from "./styles";
import * as actionCreators from "../../store/actions";
import { connect } from "react-redux";

class Login extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: "rgb(184, 224, 224)"
    },
    headerTintColor: "white",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  };
  state = {
    username: "",
    password: ""
  };
  onClickListener = viewId => {
    Alert.alert("Alert", "Button pressed " + viewId);
  };
  render() {
    return (
      <View style={styles.container}>
        <Form>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputs}
              placeholder="اسمك"
              autoCapitalize="none"
              onChangeText={username => this.setState({ username })}
            />
            <Image
              style={styles.inputIcon}
              source={{
                uri:
                  "https://img.icons8.com/plasticine/100/000000/user-male.png"
              }}
            />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputs}
              placeholder="كلمة المرور"
              autoCapitalize="none"
              secureTextEntry={true}
              onChangeText={password => this.setState({ password })}
            />
            <Image
              style={styles.inputIcon}
              source={{
                uri: "https://img.icons8.com/plasticine/100/000000/password.png"
              }}
            />
          </View>
          <TouchableOpacity
            style={[styles.buttonContainer, styles.loginButton]}
            onPress={() => this.props.login(this.state, this.props.navigation)}
          >
            <Text style={styles.loginText}>تسجيل دخول</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => this.props.navigation.navigate("Signup")}
          >
            <Text style={styles.btnText}>ما عندك حساب؟</Text>
          </TouchableOpacity>
        </Form>
      </View>
      // </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  login: (userData, navigate) =>
    dispatch(actionCreators.login(userData, navigate))
});

export default connect(
  null,
  mapDispatchToProps
)(Login);
