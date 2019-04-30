import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions";
// import styles from "./style";
import { View, Text, Card, CardItem, Button } from "native-base";
import { TextInput, TouchableOpacity, Image, Alert } from "react-native";
import ProfileButton from "../Util/ProfileButton";

class InviteRequest extends Component {
  handlePress = async invite => {
    await this.props.inviteFunction(invite);
  };

  render() {
    const accept = {
      activity: this.props.invite.activity.id,
      status: "تم القبول",
      guest: this.props.invite.user
    };
    const decline = {
      activity: this.props.invite.activity.id,
      status: "معليش، اكتفينا",
      guest: this.props.invite.user
    };
    if (this.props.invite.status === "في انتظار الرد") {
      return (
        <View>
          <Card>
            <CardItem>
              <Button onPress={() => this.handlePress(decline)}>
                <Text>رفض</Text>
              </Button>
              <Button onPress={() => this.handlePress(accept)}>
                <Text>قبول</Text>
              </Button>
            </CardItem>
            <CardItem bordered>
              <ProfileButton
                name={this.props.invite.user.user.username}
                img={this.props.invite.user.img}
              />
            </CardItem>
          </Card>
        </View>
      );
    } else {
      return null;
    }
  }
}

const mapStateToProps = state => ({
  profile: state.authReducer.profile
});
const mapDispatchToProps = dispatch => ({
  inviteFunction: invite => dispatch(actionCreators.createInvite(invite)),
  fetchProfile: (profileID, navigation) =>
    dispatch(actionCreators.fetchProfile(profileID, navigation))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InviteRequest);
