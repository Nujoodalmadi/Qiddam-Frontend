import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Image, ScrollView, FlatList } from "react-native";
import styles from "../MyProfile/style";
import * as actionCreators from "../../store/actions";
import { ListItem } from "react-native-elements";
import { Button, Text, Content, Card, CardItem, Container } from "native-base";

class MyProfile extends Component {
  static navigationOptions = {
    header: null
  };

  componentDidMount() {
    this.props.userActivities(this.props.profile.user.username);
  }

  state = {
    isFetching: false
  };

  async onRefresh() {
    console.log("refreshing");
    this.setState({ isFetching: true });
    await this.props.fetchMyProfile(), this.setState({ isFetching: false });
  }

  // keyExtractor = (item, index) => index.toString();

  // renderItem = ({ item }) => (
  //   <ListItem
  //     title={item.activity.title}
  //     subtitle={item.status}
  //     leftAvatar={
  //       item.activity.orgnizer.img
  //         ? { source: { uri: item.orgnizer.img } }
  //         : {
  //             source: {
  //               uri:
  //                 "https://www.manufacturingusa.com/sites/manufacturingusa.com/files/default.png"
  //             }
  //           }
  //     }
  //     rightIcon={
  //       <Image
  //         style={styles.qiddam}
  //         source={{
  //           uri: "https://img.icons8.com/dusk/64/000000/forward-arrow.png"
  //         }}
  //       />
  //     }
  //   />
  // );

  render() {
    const profile = this.props.profile;
    // const invites = this.props.profile.invites.map()
    return (
      <ScrollView style={styles.pageView}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Image
              style={{ width: 420, height: 200 }}
              source={require("../../img/header2.png")}
            />
          </View>
          <Image
            style={styles.avatar}
            source={
              profile.img
                ? { uri: profile.img }
                : {
                    uri:
                      "https://www.manufacturingusa.com/sites/manufacturingusa.com/files/default.png"
                  }
            }
          />
        </View>
        <View style={styles.body}>
          <View style={styles.bodyContent}>
            <Text style={styles.name}>{profile.user.username}</Text>
            <Text style={styles.info}>
              {profile.user.first_name + " " + profile.user.last_name}
            </Text>
            <Text style={styles.info}> {profile.bio} </Text>
            <Text style={styles.description}>{profile.bio}</Text>
            <Text style={styles.description}>
              {profile.gender} {profile.date_of_birth}
            </Text>
            <Button
              onPress={() => alert("HElloo.. am the update button")}
              title="Update"
              color="#841584"
              accessibilityLabel="Learn more about this purple button"
            />
          </View>
        </View>

        {/* <FlatList
          onRefresh={() => this.onRefresh()}
          refreshing={this.state.isFetching}
          keyExtractor={this.keyExtractor}
          data={profile.invites}
          renderItem={this.renderItem}
        /> */}
      </ScrollView>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  userActivities: name => dispatch(actionCreators.userActivities(name)),
  fetchMyProfile: () => dispatch(actionCreators.fetchMyProfile())
});

const mapStateToProps = state => ({
  profile: state.authReducer.myprofile
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyProfile);
