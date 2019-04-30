import React, { Component } from "react";
import styles from "../Activities/styles";
import { Image, TouchableOpacity, Text, View } from "react-native";

class ActiveMembers extends Component {
  render() {
    return (
      <View style={styles.activeMemberContainer}>
        <TouchableOpacity
          style={{ alignItems: "center" }}
          onPress={this.props.onProfileClick}
        >
          <Image
            style={styles.memberImageModal}
            source={
              this.props.activity.orgnizer.img
                ? { uri: this.props.activity.orgnizer.img }
                : {
                    uri:
                      "https://www.manufacturingusa.com/sites/manufacturingusa.com/files/default.png"
                  }
            }
          />
          <View style={{ alignItems: "center" }}>
            <View style={styles.activityCount}>
              <Text style={styles.activityCountText}>
                {this.props.activity.orgnizer.activities.length}
              </Text>
              <Image
                style={styles.activityCountQiddam}
                source={{
                  uri: "https://img.icons8.com/dusk/64/000000/forward-arrow.png"
                }}
              />
            </View>
            <Text style={styles.activityMemberTitle}>
              {this.props.activity.title}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default ActiveMembers;
