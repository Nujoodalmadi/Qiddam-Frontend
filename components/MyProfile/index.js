import React, { Component } from "react";
import { connect } from "react-redux";
//
import { View, Image, ScrollView, TouchableOpacity } from "react-native";
import { Text, Spinner } from "native-base";
//Styles
import styles from "../MyProfile/style";
//Componenets
import InvitesCard from "./InvitesCard";
import MyActivities from "./MyActivities";
import * as actionCreators from "../../store/actions";

class MyProfile extends Component {
  refechProfile = () => {
    this.props.fetchMyProfile();
  };

  static navigationOptions = {
    header: null
  };

  render() {
    const profile = this.props.profile;

    if (!this.props.profile) {
      return <Spinner />;
    } else {
      return (
        <ScrollView scrollEnabled={false} style={styles.pageView}>
          <View>
            <View style={styles.header}>
              <Image
                style={{ width: 420, height: 200 }}
                source={require("../../img/header2.png")}
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
              <Text onPress={this.refechProfile} style={styles.name}>
                {profile.user.username}
              </Text>
              <Text style={styles.info}>
                {profile.user.first_name} {profile.user.last_name}
              </Text>
              <Text style={styles.description}>
                {profile.bio}-{profile.gender}{" "}
              </Text>
              <Text style={styles.description}>{profile.date_of_birth}</Text>
            </View>
          </View>
          <View style={styles.postContent}>
            <Text style={styles.qiddamWalla}>قِدّام ولّا؟</Text>
            <View style={styles.flatList}>
              <InvitesCard />
            </View>
          </View>
          <View style={styles.postContent}>
            <Text style={styles.qiddamWalla}>أنشطتي</Text>
            <MyActivities activities={this.props.profile.activities} />
          </View>
          <TouchableOpacity
            style={styles.updateButton}
            onPress={() => this.props.navigation.navigate("ProfileUpdate")}
          >
            <Text style={styles.updateButtonText}>تحديث ملفي التعريفي</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.logoutButton}
            onPress={() => this.props.logout(this.props.navigation)}
          >
            <Text style={styles.logoutButtonText}>خروج</Text>
          </TouchableOpacity>
        </ScrollView>
      );
    }
  }
}

const mapDispatchToProps = dispatch => ({
  fetchMyProfile: () => dispatch(actionCreators.fetchMyProfile()),
  logout: navigation => dispatch(actionCreators.logout(navigation))
});

const mapStateToProps = state => ({
  profile: state.authReducer.myprofile
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyProfile);
