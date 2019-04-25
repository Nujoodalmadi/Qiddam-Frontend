import React, { Component } from "react";

import { Text, View, TextInput, TouchableOpacity } from "react-native";

import styles from "./styles";
import * as actionCreators from "../../store/actions";
import { connect } from "react-redux";
import ModalSelector from "react-native-modal-selector";
import DatePicker from "react-native-datepicker";

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

  // onValueChangeDOB = dateStr => {
  //   this.setState({
  //     profile: { ...this.state.profile, date_of_birth: dateStr }
  //   });
  // };

  onValueChangeGender = option => {
    this.setState({ profile: { ...this.state.profile, gender: option.label } });
  };

  render() {
    let index = 0;
    const data = [
      { key: index++, label: "ذكر" },
      { key: index++, label: "أنثى" }
    ];

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
        {/* DATE */}
        <View style={styles.gender}>
          <DatePicker
            style={{ width: 200 }}
            showIcon={false}
            date={this.state.profile.date_of_birth}
            mode="date"
            placeholder="تاريخ ميلادك"
            format="YYYY-MM-DD"
            minDate="2016-05-01"
            maxDate="2016-06-01"
            confirmBtnText="Confirm"
            customStyles={{
              dateIcon: {
                position: "absolute",
                left: 0,
                top: 4,
                color: "red",
                marginLeft: 0
              },
              dateInput: {
                borderWidth: 0
              }
            }}
            cancelBtnText="Cancel"
            onDateChange={dateStr =>
              this.setState({
                profile: { ...this.state.profile, date_of_birth: dateStr }
              })
            }
          />
        </View>

        {/* GENDER */}
        <View style={styles.gender}>
          <ModalSelector
            data={data}
            supportedOrientations={["portrait"]}
            accessible={true}
            cancelButtonAccessibilityLabel={"Cancel Button"}
            onChange={this.onValueChangeGender}
          >
            <TextInput
              editable={false}
              placeholder="ذكر/أنثى"
              value={this.state.profile.gender}
            />
          </ModalSelector>
        </View>

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
