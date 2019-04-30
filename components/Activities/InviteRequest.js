import React, { Component } from "react";
import { connect } from "react-redux";
// import * as actionCreators from "../../store/actions";
// import styles from "./style";
import { View, Text, Card, CardItem } from "native-base";
import { Button } from "react-native-elements";

class InviteRequest extends Component {
  render() {
    return (
      <View>
        <Text>testing wallah.......</Text>
        <Card>
          <CardItem>
            <Button onPress={() => alert("HAHA")}>
              <Text>TEST</Text>
            </Button>
          </CardItem>
        </Card>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  activities: state.authReducer.myprofile.activities
});
export default connect(mapStateToProps)(InviteRequest);
