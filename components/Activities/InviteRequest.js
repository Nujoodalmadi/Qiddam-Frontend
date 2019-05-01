import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions";
import styles from "./styles";
import { View, Text, Button } from "native-base";
import ProfileButton from "../Util/ProfileButton";
import { withNavigation } from "react-navigation";

class InviteRequest extends Component {
  handlePress = async invite => {
    await this.props.inviteFunction(invite);
  };

  render() {
    const accept = {
      activity: this.props.invite.activity.id,
      status: "تم القبول",
      guest: this.props.invite.user.user.id
    };
    const decline = {
      activity: this.props.invite.activity.id,
      status: "معليش، اكتفينا",
      guest: this.props.invite.user.user.id
    };

    if (this.props.invite.status === "في انتظار الرد") {
      return (
        <View style={styles.acceptDeclineContainer}>
          <View style={styles.acceptDeclineButtonContainer}>
            <Button
              style={styles.declineButton}
              onPress={() => this.handlePress(decline)}
            >
              <Text style={styles.shareButtonText}>رفض</Text>
            </Button>
            <Button
              style={styles.acceptButton}
              onPress={() => this.handlePress(accept)}
            >
              <Text style={styles.shareButtonText}>قبول</Text>
            </Button>
          </View>

          <ProfileButton
            onProfileClick={() =>
              this.props.fetchProfile(
                this.props.invite.user.user.id,

                this.props.navigation
              )
            }
            name={this.props.invite.user.user.username}
            img={this.props.invite.user.img}
            style={styles.acceptDeclineProfile}
          />
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
export default withNavigation(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(InviteRequest)
);
