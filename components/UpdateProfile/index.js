import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions";
import {
  TouchableOpacity,
  Image,
  ScrollView,
  View,
  TextInput,
  Text
} from "react-native";
import { Form } from "native-base";
import styles from "../UpdateProfile/style";

class UpdateProfile extends Component {
  state = {
    first_name: "",
    last_name: "",
    email: "",
    bio: ""
  };
  componentDidMount() {
    this.setState({
      first_name: this.props.profile.user.first_name,
      last_name: this.props.profile.user.last_name,
      email: this.props.profile.user.email,
      bio: this.props.profile.bio
    });
  }

  componentDidUpdate(prevState) {
    if (this.state === prevState) {
      this.setState({
        first_name: this.props.profile.user.first_name,
        last_name: this.props.profile.user.last_name,
        email: this.props.profile.user.email,
        bio: this.props.profile.bio
      });
    }
  }

  static navigationOptions = {
    title: "Profile",
    header: null
  };
  render() {
    return (
      <ScrollView>
        <View>
          <View style={styles.header}>
            <Image
              style={{ width: 420, height: 200 }}
              source={require("../../img/header2.png")}
            />
          </View>
        </View>
        <View style={styles.body}>
          <Form style={styles.form}>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.inputs}
                value={this.state.first_name}
                autoCapitalize="none"
                onChangeText={first_name => this.setState({ first_name })}
              />
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                // style={styles.inputs}

                value={this.state.last_name}
                autoCapitalize="none"
                onChangeText={last_name => this.setState({ last_name })}
              />
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                value={this.state.email}
                autoCapitalize="none"
                onChangeText={email => this.setState({ email })}
              />
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                value={this.state.bio}
                autoCapitalize="none"
                onChangeText={bio => this.setState({ bio })}
              />
            </View>

            <TouchableOpacity
              style={[styles.buttonContainer, styles.updateButton]}
              onPress={() =>
                this.props.UpdateProfile(this.state, this.props.navigation)
              }
            >
              <Text tyle={styles.updateButtonText}>update</Text>
            </TouchableOpacity>
          </Form>
        </View>
      </ScrollView>
    );
  }
}
const mapStateToProps = state => {
  return {
    profile: state.authReducer.myprofile
  };
};

const mapDispatchToProps = dispatch => ({
  UpdateProfile: (userData, navigation) =>
    dispatch(actionCreators.updateProfile(userData, navigation))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdateProfile);
