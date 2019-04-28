import React, { Component } from "react";
import { Text, View, Image, ScrollView } from "react-native";
import { Divider } from "react-native-elements";
import styles from "./styles";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions";
import { Spinner } from "native-base";
import ActivityCreateForm from "./ActivityCreateUpdate/ActivityCreateForm";
import DetailPageButton from "../Util/DetailPageButton";
import ProfileButton from "../Util/ProfileButton";
import DetailPageGender from "../Util/DetailPageGender";

class ActivityDetail extends Component {
  static navigationOptions = {
    headerBackground: (
      <Image
        style={styles.catHeader}
        source={require("../../img/header2.png")}
      />
    ),

    title: "عنوان؟",
    headerStyle: {
      height: 50,

      borderBottomColor: "transparent",
      borderBottomWidth: 0
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  };

  handlePress = async invite => {
    if (this.props.user) {
      await this.props.createInvite(invite);
    } else {
      return this.props.navigation.navigate("Login");
    }
  };

  handleDelete = async () => {
    await this.props.deleteActivity(this.props.activity.id),
      this.props.navigation.replace("Categories");
  };

  toggleEdit = () => {
    const newVal = !this.state.edit;
    this.setState({ edit: newVal });
  };

  state = {
    edit: false
  };

  render() {
    const invite = {
      activity: this.props.activity.id,
      status: "في انتظار القبول",
      guest: ""
    };

    if (!this.props.activity.orgnizer) {
      return <Spinner />;
    } else if (this.state.edit) {
      return (
        <ActivityCreateForm
          activity={this.props.activity}
          edit={this.state.edit}
          toggleEdit={this.toggleEdit}
        />
      );
    } else {
      // PROFILE
      return (
        <ScrollView style={styles.pageView}>
          <View style={styles.containerD}>
            <View style={styles.postContent}>
              <Text style={styles.headerTitle}>
                {this.props.activity.title}
              </Text>
            </View>
            <View style={styles.postContent}>
              <View style={styles.postContentSub}>
                <Text>{this.props.activity.description}</Text>
              </View>

              <Text style={styles.date}>العدد المطلوب</Text>
              <DetailPageGender
                peopleCount={this.props.activity.number_of_people}
                gender={this.props.activity.gender}
              />
              <Divider style={styles.divider} />

              <Text style={styles.date}>التاريخ</Text>
              <Text style={styles.date}>{this.props.activity.date}</Text>
              <Text style={styles.date}> {this.props.activity.time} </Text>

              {this.props.user ? (
                this.props.user.user_id !==
                  this.props.activity.orgnizer.user.id && (
                  <ProfileButton
                    name={this.props.activity.orgnizer.user.username}
                    img={this.props.activity.orgnizer.img}
                    onProfileClick={() =>
                      this.props.fetchProfile(
                        this.props.activity.orgnizer.user.id,

                        this.props.navigation
                      )
                    }
                  />
                )
              ) : (
                <ProfileButton
                  name={this.props.activity.orgnizer.user.username}
                  img={this.props.activity.orgnizer.img}
                  onProfileClick={() =>
                    this.props.fetchProfile(
                      this.props.activity.orgnizer.user.id,

                      this.props.navigation
                    )
                  }
                />
              )}
            </View>

            <DetailPageButton
              user={this.props.user}
              organizerID={this.props.activity.orgnizer.user.id}
              userID={this.props.user && this.props.user.user_id}
              onLogin={() => this.props.navigation.navigate("Login")}
              onEdit={() => this.setState({ edit: true })}
              onInvite={() => this.handlePress(invite)}
              onDelete={this.handleDelete}
            />
          </View>
        </ScrollView>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    activity: state.activityReducer.activity,
    user: state.authReducer.user
  };
};

const mapDispatchToProps = dispatch => ({
  fetchProfile: (profileID, navigation) =>
    dispatch(actionCreators.fetchProfile(profileID, navigation)),
  createInvite: invite => dispatch(actionCreators.createInvite(invite)),
  deleteActivity: activityID =>
    dispatch(actionCreators.deleteActivity(activityID))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ActivityDetail);
