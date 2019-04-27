import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Button
} from "react-native";
import styles from "./styles";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions";
import { Spinner } from "native-base";
import ActivityCreateForm from "./ActivityCreateUpdate/ActivityCreateForm";
import DetailPageButton from "../Util/DetailPageButton";

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

  toggleEdit = () => {
    const newVal = !this.state.edit;
    this.setState({ edit: newVal });
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
      return (
        <ScrollView style={styles.pageView}>
          <Text>{"    "}</Text>
          <View style={styles.containerD}>
            <View style={styles.header}>
              <Text style={styles.headerTitle}>
                {this.props.activity.title}
              </Text>
            </View>
            <View style={styles.postContent}>
              <Text style={styles.postTitle}>
                {this.props.activity.number_of_people}{" "}
                {this.props.activity.gender}
              </Text>

              <Text style={styles.postDescription}>
                {this.props.activity.description}
              </Text>

              <Text style={styles.date}>
                التاريخ {this.props.activity.date}{" "}
              </Text>
              <Text style={styles.date}>الوقت {this.props.activity.time} </Text>
              <TouchableOpacity
                onPress={() =>
                  this.props.fetchProfile(
                    this.props.activity.orgnizer.user.id,

                    this.props.navigation
                  )
                }
              >
                <View style={styles.profile}>
                  <Image
                    style={styles.avatar}
                    source={
                      this.props.activity.orgnizer.img
                        ? { uri: this.props.activity.orgnizer.img }
                        : {
                            uri:
                              "https://www.manufacturingusa.com/sites/manufacturingusa.com/files/default.png"
                          }
                    }
                  />

                  <Text style={styles.name}>
                    {this.props.activity.orgnizer.user.username}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>

            <DetailPageButton
              user={this.props.user}
              organizerID={this.props.activity.orgnizer.user.id}
              userID={this.props.user.user_id}
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
