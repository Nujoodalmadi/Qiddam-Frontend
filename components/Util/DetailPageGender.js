import React, { Component } from "react";
import styles from "../Activities/styles";
import { Icon } from "react-native-elements";
import { Text, View } from "react-native";

class DetailPageGender extends Component {
  renderIcon = () => {
    if (this.props.gender === "أنثى") {
      return (
        <View style={styles.female}>
          <Icon name="ios-female" type="ionicon" color="#ffffff" />
        </View>
      );
    } else if (this.props.gender === "ذكر") {
      return (
        <View style={styles.male}>
          <Icon name="ios-male" type="ionicon" color="#ffffff" />
        </View>
      );
    } else {
      return (
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "center",
            maxWidth: 50
          }}
        >
          <View style={styles.female}>
            <Icon name="ios-female" type="ionicon" color="#ffffff" />
          </View>
          <View style={styles.male}>
            <Icon name="ios-male" type="ionicon" color="#ffffff" />
          </View>
        </View>
      );
    }
  };

  render() {
    return (
      <View style={styles.genderContainer}>
        <View style={styles.peopleCount}>
          <Text style={{ color: "#ffffff", fontWeight: "bold", fontSize: 20 }}>
            {this.props.peopleCount}
          </Text>
        </View>

        {this.renderIcon()}
      </View>
    );
  }
}

export default DetailPageGender;
