import React, { Component } from "react";
import {
  View,
  ImageBackground,
  Image,
  FlatList,
  Text,
  TouchableOpacity
} from "react-native";
import Modal from "react-native-modal";
import styles from "./styles";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions";
import { ListItem } from "react-native-elements";
import TouchableScale from "react-native-touchable-scale";
import ActiveMembers from "../Util/ActiveMembers";
import { Container } from "native-base";

class Categories extends Component {
  componentDidMount() {
    this.props.fetchCategories();
  }

  static navigationOptions = {
    headerBackground: (
      <Image
        style={styles.catHeader}
        source={require("../../img/header.png")}
      />
    ),
    headerLeft: null,

    headerStyle: {
      height: 200,
      borderBottomColor: "transparent",
      borderBottomWidth: 0
    },
    headerTintColor: "#D9663D",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  };

  state = {
    isFetching: false,
    isModalVisible: false,

    activityAdd: {
      number_of_people: "",
      description: "",
      category: "",
      location: "",
      gender: "",
      title: "",
      time: "",
      date: ""
    }
  };
  _turnOffModal = async () => {
    await this.setState({
      isModalVisible: false
    });
  };
  _toggleModal = async categoryID => {
    await this.setState({
      isModalVisible: true
    });
    await this.props.catchCategoryID(categoryID);
    await this.props.activeMembersAction();
  };

  handlePress = async categoryID => {
    this.props.catchCategoryID(categoryID);
    this.props.navigation.navigate("ActivitiesList");
  };
  handleAdd = async () => {
    this.props.navigation.navigate("ActivityCreate");
  };

  activityDetail = activityID => {
    this.props.activityDetails(activityID),
      this.props.navigation.navigate("ActivityDetail");
  };

  async onRefresh() {
    this.setState({ isFetching: true });
    await this.props.fetchCategories();
    this.setState({ isFetching: false });
  }

  renderGroupMembers = Category => {
    {
      return (
        <View style={styles.groupMembersContent}>
          {Category.map((activity, key) => {
            return (
              <Image
                key={key}
                style={styles.memberImage}
                source={
                  activity.orgnizer.img
                    ? { uri: activity.orgnizer.img }
                    : {
                        uri:
                          "https://www.manufacturingusa.com/sites/manufacturingusa.com/files/default.png"
                      }
                }
              />
            );
          })}
        </View>
      );
    }
  };

  keyExtractor = (item, index) => index.toString();

  renderItem = ({ item }) => (
    <ListItem
      rightTitle={item.title}
      subtitle={this.renderGroupMembers(item.activities)}
      title="الأعضاء المتفاعلين حاليًا "
      titleStyle={styles.titleStyle}
      Component={TouchableScale}
      friction={90}
      tension={100}
      activeScale={0.9}
      containerStyle={styles.categoryList}
      onPress={() => this.handlePress(item.id)}
      onLongPress={() => this._toggleModal(item.id)}
      rightTitleStyle={styles.titleTextCategory}
      rightTitleContainerStyle={styles.titleCategory}
    />
  );

  render() {
    const members = this.props.activeMembers.map(activity => {
      return (
        <ActiveMembers
          activity={activity}
          key={activity.id}
          onProfileClick={() => this.activityDetail(activity.id)}
        />
      );
    });

    return (
      <ImageBackground style={styles.background}>
        <Modal
          onSwipeComplete={() => this.setState({ isVisible: false })}
          coverScreen={false}
          swipeDirection="left"
          isVisible={this.state.isModalVisible}
          style={{ alignItems: "center" }}
        >
          <View>
            <View style={styles.groupMembersContentB}>{members}</View>
          </View>

          <TouchableOpacity onPress={this._turnOffModal}>
            <Text>Hide me!</Text>
          </TouchableOpacity>
        </Modal>

        <TouchableOpacity style={styles.addButton} onPress={this.handleAdd}>
          <Text style={styles.addButtonText}>أنشِئ دعوة</Text>
        </TouchableOpacity>

        <FlatList
          onRefresh={() => this.onRefresh()}
          refreshing={this.state.isFetching}
          keyExtractor={this.keyExtractor}
          data={this.props.activities}
          renderItem={this.renderItem}
        />
      </ImageBackground>
    );
  }
}

const mapStateToProps = state => {
  return {
    activities: state.activityReducer.categories,
    categoryID: state.activityReducer.categoryID,
    activeMembers: state.activityReducer.activeMembers
  };
};

const mapDispatchToProps = dispatch => ({
  fetchCategories: () => dispatch(actionCreators.fetchCategories()),
  catchCategoryID: categoryID =>
    dispatch(actionCreators.catchCategoryID(categoryID)),
  activeMembersAction: () => dispatch(actionCreators.activeMembers()),
  activityDetails: activityID =>
    dispatch(actionCreators.activityDetails(activityID))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Categories);
