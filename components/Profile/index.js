import React, { Component } from "react";
import { connect } from "react-redux";
import { Text, View, Image, Content, ScrollView } from "react-native";
import styles from "../MyProfile/style";
import MyActivities from "../MyProfile/MyActivities";
import { Loading } from "../Loading/index";

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
      <Loading />;
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
              source={
                profile.img
                  ? { uri: profile.img }
                  : {
                      uri:
                        "https://www.manufacturingusa.com/sites/manufacturingusa.com/files/default.png"
                    }
              }
            />
          </View>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}>{profile.user.username}</Text>
              <Text style={styles.info}>
                {profile.user.first_name + profile.user.last_name}
              </Text>
              <Text style={styles.description}>{profile.bio}</Text>
              <View style={styles.postContent}>
                <Text style={styles.qiddamWalla}>أنشطتي</Text>
                <MyActivities activities={this.props.profile.activities} />
              </View>
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

export default connect(
  mapStateToProps,
  null
)(Profile);
