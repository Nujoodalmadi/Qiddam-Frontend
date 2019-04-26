import React, { Component } from "react";
import { connect } from "react-redux";
import { Text, View } from "react-native";
import * as actionCreators from "../../../store/actions";

import styles from "../styles";
import { Input, Form, Item, Button, Spinner } from "native-base";
import { Image, ImageBackground } from "react-native";

//Components:
import TimeSelector from "../../Util/TimeSelector";
import DateSelector from "../../Util/DateSelector";
import CategorySelector from "../../Util/CategorySelector";
import GenderSelector from "../../Util/GenderSelector";

class ActivityCreateForm extends Component {
  async componentDidMount() {
    await this.props.fetchCategories();
  }

  static navigationOptions = {
    headerBackground: (
      <Image
        style={styles.catHeader}
        source={require("../../../img/header.png")}
      />
    ),

    title: "عنوان؟",
    headerStyle: {
      height: 200,
      borderBottomColor: "transparent",
      borderBottomWidth: 0
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  };

  renderButton = () => {
    if (this.props.edit) {
      return (
        <Button onPress={this.handleUpdate} style={styles.shareButton}>
          <Text>ابديت</Text>
        </Button>
      );
    } else {
      return (
        <Button onPress={this.handleCreate} style={styles.shareButton}>
          <Text>انشر الدعوة</Text>
        </Button>
      );
    }
  };

  state = {
    number_of_people: "",
    description: "",
    category: "",
    location: "",
    gender: "",
    title: "",
    date: "",
    time: ""
  };

  handleUpdate = async () => {
    await this.props.updateActivity(
      this.props.activity.id,
      this.state,
      this.props.navigation
    );
    this.props.toggleEdit();
  };

  handleCreate = async () => {
    this.props.createActivity(this.state, this.props.navigation);
  };
  // style={styles.shareButton}

  render() {
    if (!this.props.categories) {
      return <Spinner />;
    } else {
      return (
        <ImageBackground style={styles.background}>
          <View style={styles.createForm}>
            <Form>
              <Item rounded steyle={styles.item}>
                <Input
                  style={styles.input}
                  autoCorrect={false}
                  value={this.state.title}
                  autoCapitalize="none"
                  onChangeText={title => this.setState({ title })}
                  placeholder="عنوان الدعوة"
                />
              </Item>
              <Item rounded steyle={styles.item}>
                <Input
                  style={styles.input}
                  autoCorrect={false}
                  autoCapitalize="none"
                  value={this.state.description}
                  onChangeText={description => this.setState({ description })}
                  placeholder="وصف أكثر عن الدعوة"
                />
              </Item>
              {/* CATEGORY */}
              <Item steyle={styles.item}>
                <CategorySelector
                  categories={this.props.categories}
                  onValueChange={value => {
                    this.setState({ category: value });
                  }}
                  selectedValue={this.state.selected}
                />
              </Item>

              {/* GENDER */}
              <View style={styles.gender}>
                <GenderSelector
                  genderChange={option => {
                    this.setState({ gender: option.label });
                  }}
                  gender={this.state.gender}
                />
              </View>
              {/* LOCATION */}
              <Item rounded steyle={styles.item}>
                <Input
                  style={styles.input}
                  autoCorrect={false}
                  value={this.state.location}
                  autoCapitalize="none"
                  onChangeText={location => this.setState({ location })}
                  placeholder="المكان"
                />
              </Item>
              {/* # INVITES */}
              <Item rounded steyle={styles.item}>
                <Input
                  style={styles.input}
                  autoCorrect={false}
                  autoCapitalize="none"
                  onChangeText={number_of_people =>
                    this.setState({ number_of_people })
                  }
                  placeholder="عدد المدعوّين"
                />
              </Item>

              {/* DATE */}
              <View style={styles.gender}>
                <DateSelector
                  date={this.state.date}
                  onDateChange={dateStr =>
                    this.setState({
                      date: dateStr
                    })
                  }
                />
              </View>
              {/* TIME */}
              <View style={styles.gender}>
                <TimeSelector
                  time={this.state.time}
                  onTimeChange={dateStr =>
                    this.setState({
                      time: dateStr
                    })
                  }
                />
              </View>
              <View />
            </Form>

            {this.renderButton()}
          </View>
        </ImageBackground>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    categories: state.activityReducer.categories
  };
};
const mapDispatchToProps = dispatch => ({
  createActivity: (activityData, navigation) =>
    dispatch(actionCreators.createActivity(activityData, navigation)),
  updateActivity: (activityID, activityData, navigation) =>
    dispatch(
      actionCreators.updateActivity(activityID, activityData, navigation)
    ),
  fetchCategories: () => dispatch(actionCreators.fetchCategories())
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ActivityCreateForm);
