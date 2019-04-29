import React, { Component } from "react";
import { Text, View, ImageBackground, Image, FlatList } from "react-native";
import styles from "./styles";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions";
import { ListItem } from "react-native-elements";
import TouchableScale from "react-native-touchable-scale";
import { Loading } from "../Loading/index";

class ActivitiesList extends Component {
  async componentDidMount() {
    await this.props.fetchActivitiesCat(this.props.categoryID);
  }

  static navigationOptions = {
    headerBackground: (
      <Image
        style={styles.catHeader}
        source={require("../../img/header2.png")}
      />
    ),

    title: "عنوان؟",
    headerStyle: {
      height: 50,

      borderBottomColor: "transparent",
      borderBottomWidth: 0
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  };

  state = {
    isFetching: false
  };

  async onRefresh() {
    this.setState({ isFetching: true });
    await this.props.fetchActivitiesCat(this.props.categoryID), //this must be changed
      this.setState({ isFetching: false });
  }

  handlePress = activityID => {
    this.props.activityDetails(activityID),
      this.props.navigation.navigate("ActivityDetail");
  };
  keyExtractor = (item, index) => index.toString();

  renderItem = ({ item }) => (
    <ListItem
      title={item.title}
      Component={TouchableScale}
      friction={90}
      tension={100}
      activeScale={0.95}
      containerStyle={styles.activityList}
      subtitle={
        item.orgnizer.user.username ? item.orgnizer.user.username : "username"
      }
      subtitleStyle={styles.subtitleStyleOrg}
      leftAvatar={
        item.orgnizer.img
          ? { source: { uri: item.orgnizer.img } }
          : {
              source: {
                uri:
                  "https://www.manufacturingusa.com/sites/manufacturingusa.com/files/default.png"
              }
            }
      }
      onPress={() => this.handlePress(item.id)}
      titleStyle={styles.titleList}
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
    if (!this.props.categoryActivities) {
      return <Loading />;
    } else {
      const filterCategoryActivities = this.props.categoryActivities;

      return (
        <ImageBackground style={styles.background}>
          <FlatList
            onRefresh={() => this.onRefresh()}
            refreshing={this.state.isFetching}
            keyExtractor={this.keyExtractor}
            data={filterCategoryActivities}
            renderItem={this.renderItem}
          />
        </ImageBackground>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    categoryActivities: state.activityReducer.categoryActivities.activities,
    categoryID: state.activityReducer.categoryID
  };
};
const mapDispatchToProps = dispatch => ({
  activityDetails: activityID =>
    dispatch(actionCreators.activityDetails(activityID)),
  fetchActivitiesCat: categoryID =>
    dispatch(actionCreators.fetchActivitiesCat(categoryID))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ActivitiesList);
