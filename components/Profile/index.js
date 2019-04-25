import React, { Component } from "react";
import { connect } from "react-redux";
import { Text, View, Image, Content, ScrollView } from "react-native";
import styles from "../MyProfile/style";
import { Spinner } from "native-base";

class Profile extends Component {
  static navigationOptions = {
    header: null
  };
  componentDidMount() {
    // this.props.fetchProfile();
  }

  render() {
    const profile = this.props.profile;
    if (!this.props.profile) {
      <Spinner />;
    } else {
      return (
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.header}>
              <Image
                style={{ width: 420, height: 200 }}
                source={require("../../img/header3.png")}
              />
            </View>
            <Image
              style={styles.avatar}
              source={{
                uri: profile.img
              }}
            />
          </View>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}>{profile.user.username}</Text>
              <Text style={styles.info}>
                {profile.user.first_name + profile.user.last_name}
              </Text>
              <Text style={styles.description}>{profile.bio}</Text>
            </View>
          </View>
        </ScrollView>
      );
    }
  }
}
const mapStateToProps = state => ({
  profile: state.authReducer.profile
});

const mapDispatchToProps = dispatch => ({
  //  fetchMyProfile: () => dispatch(actionCreators.fetchMyProfile())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
