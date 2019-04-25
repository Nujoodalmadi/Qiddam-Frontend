import React, { Component } from "react";

import {
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  Image,
  Alert
} from "react-native";
import { Icon, Item, Picker } from "native-base";
import styles from "./styles";
import * as actionCreators from "../../store/actions";
import { connect } from "react-redux";

class Signup extends Component {
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
    first_name: "",
    last_name: "",
    email: "",
    profile: {
      date_of_birth: "",
      gender: ""
    }
  };

  onValueChangeDOB = value => {
    this.setState({ profile: { ...this.state.profile, date_of_birth: value } });
  };

  onValueChangeGender = value => {
    this.setState({ profile: { ...this.state.profile, gender: value } });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="اسمك معنا"
            autoCapitalize="none"
            onChangeText={username => this.setState({ username })}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="اسمك الأول"
            autoCapitalize="none"
            onChangeText={first_name => this.setState({ first_name })}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="اسمك الأخير"
            autoCapitalize="none"
            onChangeText={last_name => this.setState({ last_name })}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="ايميلك"
            autoCapitalize="none"
            keyboardType="email-address"
            onChangeText={email => this.setState({ email })}
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
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="YYYY-MM-DD"
            autoCapitalize="none"
            onChangeText={this.onValueChangeDOB}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="gender"
            autoCapitalize="none"
            onChangeText={this.onValueChangeGender}
          />
        </View>
        {/* <Item steyle={styles.item}>
          <Picker
            style={styles.input}
            mode="dropdown"
            iosIcon={<Icon name="arrow-down" />}
            style={{ width: undefined }}
            placeholder="ذكر/أنثى"
            placeholderStyle={{ color: "#bfc6ea" }}
            placeholderIconColor="#007aff"
            selectedValue={this.state.selectedGender}
            onValueChange={this.onValueChangeGender}
          >
            <Picker.Item label="أنثى" value="أنثى" />
            <Picker.Item label="ذكر" value="ذكر" />
          </Picker>
        </Item> */}
        <TouchableOpacity
          style={[styles.buttonContainer, styles.loginButton]}
          onPress={() => this.props.signup(this.state, this.props.navigation)}
        >
          <Text style={styles.loginText}>تسجيل</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  signup: (userData, navigation) =>
    dispatch(actionCreators.signup(userData, navigation))
});

export default connect(
  null,
  mapDispatchToProps
)(Signup);

// {
//   "username": "nujoodff",
//   "first_name": "nujood",
//   "last_name": "madi",
//   "email": "nujood@gmail.com",
//   "profile": {
//       "date_of_birth": "1212-12-12",
//       "gender": "ذكر"
//   }
// }
