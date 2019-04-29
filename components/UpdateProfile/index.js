import React, { Component } from "react";
import { connect } from "react-redux";
import { TextInput, TouchableOpacity, ScrollView } from "react-native";

class UpdateProfile extends Component {
  state = {
    user: { first_name: "", last_name: "", email: "" },
    img: "",
    bio: ""
  };
  componentDidMount() {
    //this.props.profile &&
    this.setState({
      user: {
        first_name: this.props.profile.user.first_name,
        last_name: this.props.profile.user.last_name,
        email: this.props.profile.user.email
      },
      img: this.props.profile.img,
      bio: this.props.profile.bio
    });
  }

  componentDidUpdate(prevState) {
    this.setState({
      user: {
        first_name: this.props.profile.user.first_name,
        last_name: this.props.profile.user.last_name,
        email: this.props.profile.user.email
      },
      img: this.props.profile.img,
      bio: this.props.profile.bio
    });
  }

  static navigationOptions = {
    title: "Profile",
    header: null
  };
  render() {
    return (
      <ScrollView>
        <TextInput
          //   style={styles.inputs}
          placeholder="اسمك الاول"
          value={this.state.first_name}
          autoCapitalize="none"
          onChangeText={first_name => this.setState({ first_name })}
        />
        <TextInput
          //   style={styles.inputs}
          placeholder="اسمك الاخير"
          value={this.state.last_name}
          autoCapitalize="none"
          onChangeText={last_name => this.setState({ last_name })}
        />
        <TextInput
          //   style={styles.inputs}
          placeholder="بريدك الالكتروني"
          value={this.state.email}
          autoCapitalize="none"
          onChangeText={email => this.setState({ email })}
        />
        <TextInput
          //   style={styles.inputs}
          placeholder="bio"
          value={this.state.bio}
          autoCapitalize="none"
          onChangeText={bio => this.setState({ bio })}
        />
        <TouchableOpacity
        //   style={[styles.buttonContainer, styles.loginButton]}
        //   onPress={() => this.props.(this.state)}
        >
          {/* <Text style={styles.loginText}>تسجيل دخول</Text> */}
        </TouchableOpacity>
      </ScrollView>
    );
  }
}
const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};
export default connect(mapStateToProps)(UpdateProfile);
