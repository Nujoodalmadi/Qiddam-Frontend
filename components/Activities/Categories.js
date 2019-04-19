import React, { Component } from "react";
import { Text, View, TouchableOpacity, Image, FlatList } from "react-native";
import styles from "./styles";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions";

class Categories extends Component {
  componentDidMount() {
    this.props.fetchCategories();
  }
  handlePress = categoryID => {
    this.props.fetchActivitiesCat(categoryID),
      this.props.navigation.navigate("ActivitiesList");
  };

  renderGroupMembers = Category => {
    if (Category.activities) {
      return (
        <View style={styles.groupMembersContent}>
          {Category.activities.map((activity, key) => {
            {
              console.log(activity.orgnizer.img);
            }
            return (
              <Image
                key={key}
                style={styles.memberImage}
                source={{
                  uri:
                    "data:image/jpeg;base64,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"
                }}
              />
            );
          })}
        </View>
      );
    }
    return null;
  };
  render() {
    return (
      <FlatList
        style={styles.root}
        data={this.props.activities}
        extraData={this.props}
        ItemSeparatorComponent={() => {
          return <View style={styles.separator} />;
        }}
        keyExtractor={item => {
          return item.id.toString();
        }}
        renderItem={item => {
          const Category = item.item;
          let mainContentStyle;

          return (
            <View style={styles.container}>
              <Image source={{ uri: Category.image }} style={styles.avatar} />
              <View style={styles.content}>
                <View style={mainContentStyle}>
                  <View style={styles.text}>
                    <Text style={styles.groupName}>{Category.title}</Text>
                  </View>
                  {/* <Text style={styles.countMembers}>
                    {Category.countMembers} members
                  </Text> */}
                  <Text style={styles.timeAgo}>Updated 2 months ago</Text>

                  {this.renderGroupMembers(Category)}

                  <TouchableOpacity
                    onPress={() => this.handlePress(Category.id)}
                  >
                    <Text>هنا</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          );
        }}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    activities: state.activityReducer.categories
  };
};

const mapDispatchToProps = dispatch => ({
  fetchCategories: () => dispatch(actionCreators.fetchCategories()),
  fetchActivitiesCat: categoryID =>
    dispatch(actionCreators.fetchActivitiesCat(categoryID))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Categories);
