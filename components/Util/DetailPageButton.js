import React, { Component } from "react";
import { View, Text } from "react-native";
import { Button } from "native-base";
import styles from "../Activities/styles";

class DetailPageButton extends Component {
  render() {
    return (
      <View>
        {this.props.user ? (
          this.props.userID === this.props.organizerID ? (
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "center",
                maxWidth: 100,
                alignSelf: "center"
              }}
            >
              <Button onPress={this.props.onEdit} style={styles.editButton}>
                <Text style={styles.editButtonText}>تعديل </Text>
              </Button>
              <Button onPress={this.props.onDelete} style={styles.editButton}>
                <Text style={styles.editButtonText}>حذف </Text>
              </Button>
            </View>
          ) : (
            <Button onPress={this.props.onInvite} style={styles.shareButton}>
              <Text style={styles.shareButtonText}>قدّام </Text>
            </Button>
          )
        ) : (
          <Button onPress={this.props.onLogin} style={styles.shareButton}>
            <Text style={styles.shareButtonText}>سجل دخولك</Text>
          </Button>
        )}
      </View>
    );
  }
}

export default DetailPageButton;
