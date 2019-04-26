import React, { Component } from "react";
import { connect } from "react-redux";
//
import { View, Image, ScrollView, Button } from "react-native";
import { Text } from "native-base";
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

    return (
      <ScrollView scrollEnabled={false} style={styles.pageView}>
        <View style={styles.container}>
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
          <Button
            onPress={this.refechProfile}
            title="refresh"
            color="#841584"
          />
        </View>
        <View style={styles.body}>
          <View style={styles.bodyContent}>
            <Text style={styles.name}>{profile.user.username}</Text>
            <Text style={styles.info}>
              {profile.user.first_name + " " + profile.user.last_name}
            </Text>
            <Text style={styles.info}> {profile.bio} </Text>
            <Text style={styles.description}>{profile.bio}</Text>
            <Text style={styles.description}>
              {profile.gender} {profile.date_of_birth}
            </Text>
            {/* <Button
              onPress={() => alert("HElloo.. am the update button")}
              title="Update"
              color="#841584"
              accessibilityLabel="Learn more about this purple button"
            /> */}
          </View>
        </View>
        <Text style={styles.qiddamWalla}>أنشطتي</Text>
        <MyActivities />
        <Text style={styles.qiddamWalla}>قِدّام ولّا؟</Text>
        <View style={styles.flatList}>
          <InvitesCard />
        </View>
      </ScrollView>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchMyProfile: () => dispatch(actionCreators.fetchMyProfile())
});

const mapStateToProps = state => ({
  profile: state.authReducer.myprofile
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyProfile);
