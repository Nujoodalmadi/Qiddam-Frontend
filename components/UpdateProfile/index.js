import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions";
import {
  TouchableOpacity,
  Image,
  ScrollView,
  View,
  TextInput,
  Text,
  ImageBackground
} from "react-native";
import { Form, Input, Item } from "native-base";
import styles from "../UpdateProfile/styles";

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
    header: null
  };
  render() {
    return (
      <ScrollView style={{ backgroundColor: "white" }}>
        <View>
          <View style={styles.header}>
            <Image
              style={{ width: 420, height: 200 }}
              source={require("../../img/header.png")}
            />
          </View>
        </View>
        <View style={styles.addContent}>
          <Form>
            <Item rounded style={styles.item}>
              <Input
                style={styles.input}
                value={this.state.first_name}
                autoCapitalize="none"
                onChangeText={first_name => this.setState({ first_name })}
              />
            </Item>
            <Item rounded style={styles.item}>
              <Input
                style={styles.input}
                value={this.state.last_name}
                autoCapitalize="none"
                onChangeText={last_name => this.setState({ last_name })}
              />
            </Item>

            <Item rounded style={styles.item}>
              <Input
                style={styles.input}
                value={this.state.email}
                autoCapitalize="none"
                onChangeText={email => this.setState({ email })}
              />
            </Item>
            <Item rounded style={styles.item}>
              <Input
                style={styles.input}
                value={this.state.last_name}
                autoCapitalize="none"
                onChangeText={last_name => this.setState({ last_name })}
              />
            </Item>
            <Item rounded style={styles.itemLarge}>
              <Input
                style={styles.input}
                autoCorrect={false}
                autoCapitalize="none"
                value={this.state.bio}
                onChangeText={bio => this.setState({ bio })}
              />
            </Item>
            <TouchableOpacity
              style={[styles.buttonContainer, styles.updateButton]}
              onPress={() =>
                this.props.UpdateProfile(this.state, this.props.navigation)
              }
            >
              <Text style={styles.updateButtonText}>تحديث</Text>
            </TouchableOpacity>
            <View />
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
