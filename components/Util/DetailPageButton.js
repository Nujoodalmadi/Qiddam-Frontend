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
            <View>
              <Button onPress={this.props.onEdit} style={styles.shareButton}>
                <Text style={styles.shareButtonText}>تعديل </Text>
              </Button>
              <Button onPress={this.props.onDelete} style={styles.shareButton}>
                <Text style={styles.shareButtonText}>حذف </Text>
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
