import React, { Component } from "react";
import styles from "../Activities/styles";
import { Text, View, Image, TouchableOpacity } from "react-native";

class ProfileButton extends Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onProfileClick}>
        <View style={styles.profile}>
          <Image
            style={styles.avatar}
            source={
              this.props.img
                ? { uri: this.props.img }
                : {
                    uri:
                      "https://www.manufacturingusa.com/sites/manufacturingusa.com/files/default.png"
                  }
            }
          />

          <Text style={styles.name}>{this.props.name}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default ProfileButton;
