import React, { Component } from "react";
import { Image, FlatList } from "react-native";
import styles from "./style";
import { connect } from "react-redux";
import { ListItem } from "react-native-elements";
import * as actionCreators from "../../store/actions";

class InvitesCard extends Component {
  state = {
    isFetching: false
  };

  async onRefresh() {
    console.log("refreshing");
    this.setState({ isFetching: true });
    await this.props.fetchProfile();
    this.setState({ isFetching: false });
  }

  keyExtractor = (item, index) => index.toString();

  renderItem = ({ item }) => (
    <ListItem
      title={item.activity.title}
      subtitle={item.status}
      containerStyle={styles.itemContainer}
      TitleStyle={styles.title}
      subtitleStyle={styles.subtitle}
      rightIcon={
        <Image
          style={styles.qiddam}
          source={{
            uri: "https://img.icons8.com/dusk/64/000000/forward-arrow.png"
          }}
        />
      }
    />
  );
  render() {
    const profile = this.props.profile;
    return (
      <FlatList
        onRefresh={() => this.onRefresh()}
        refreshing={this.state.isFetching}
        keyExtractor={this.keyExtractor}
        data={profile.invites}
        renderItem={this.renderItem}
        style={styles.flatList}
      />
    );
  }
}
const mapDispatchToProps = dispatch => ({
  fetchProfile: () => dispatch(actionCreators.fetchMyProfile())
});

const mapStateToProps = state => ({
  profile: state.authReducer.myprofile
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InvitesCard);
