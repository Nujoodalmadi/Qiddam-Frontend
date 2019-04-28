import React, { Component } from "react";
import { connect } from "react-redux";
import { ScrollView, View, Text } from "react-native";
import { ListItem } from "react-native-elements";
import styles from "../MyProfile/style";
import { withNavigation } from "react-navigation";
import * as actionCreators from "../../store/actions";

class MyActivities extends Component {
  render() {
    list = this.props.profile.activities;

    return (
      <ScrollView style={styles.flatList}>
        {list.map((l, i) => (
          <ListItem
            key={i}
            title={l.title}
            subtitle={l.date}
            containerStyle={styles.itemContainer}
            TitleStyle={styles.title}
            subtitleStyle={styles.subtitle}
            onPress={() => {
              this.props.activityDetails(l.id),
                this.props.navigation.navigate("ActivityDetail");
            }}
          />
        ))}
      </ScrollView>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  activityDetails: activityID =>
    dispatch(actionCreators.activityDetails(activityID))
});

const mapStateToProps = state => ({
  profile: state.authReducer.myprofile
});
export default withNavigation(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(MyActivities)
);
