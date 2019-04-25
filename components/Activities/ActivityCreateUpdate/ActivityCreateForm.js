import React, { Component } from "react";
import { connect } from "react-redux";
import { TouchableOpacity, Text, View } from "react-native";
import TimePicker from "react-native-24h-timepicker";
import * as actionCreators from "../../../store/actions";
import styles from "../styles";
import {
  Input,
  Icon,
  List,
  ListItem,
  Body,
  Form,
  Item,
  Button,
  DatePicker,
  Root,
  Picker,
  Spinner
} from "native-base";
import { Image, ImageBackground } from "react-native";

class ActivityCreateForm extends Component {
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
  onCancel = () => {
    this.TimePicker.close();
  };

  onConfirm = (hour, minute) => {
    // this.setState({ time: `${hour}:${minute}` });
    this.setState({ time: "12:23:00" });
    this.TimePicker.close();
  };

  setCategory = newCategory => {
    this.setState({ chosenCategory: newCategory });
  };
  onValueChange = value => {
    this.setState({ category: value });
  };

  onValueChangeGender = value => {
    this.setState({ gender: value });
  };

  state = {
    title: "",
    description: "",
    category: "",
    gender: "",
    location: "",
    number_of_people: "",
    date: "",
    time: ""
  };

  //Profile> Activity Detail> Update> activityCreateForm

  async componentDidMount() {
    await this.props.fetchCategories();
  }

  render() {
    if (!this.props.categories) {
      return <Spinner />;
    } else {
      return (
        <Root>
          <ImageBackground style={styles.background}>
            <View style={styles.createForm}>
              <List>
                <ListItem style={{ borderBottomWidth: 0 }}>
                  <Body>
                    <Form>
                      <Item rounded steyle={styles.item}>
                        <Input
                          style={styles.input}
                          autoCorrect={false}
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
                          onChangeText={description =>
                            this.setState({ description })
                          }
                          placeholder="وصف أكثر عن الدعوة"
                        />
                      </Item>

                      <Item steyle={styles.item}>
                        <Picker
                          style={styles.input}
                          mode="dropdown"
                          iosIcon={<Icon name="arrow-down" />}
                          style={{ width: undefined }}
                          placeholder=" نوع الدعوة"
                          placeholderStyle={{ color: "#bfc6ea" }}
                          placeholderIconColor="#007aff"
                          selectedValue={this.state.selected}
                          onValueChange={this.onValueChange}
                        >
                          {this.props.categories.map(category => (
                            <Picker.Item
                              label={category.title}
                              value={category.id}
                              key={category.id}
                            >
                              {category.title}
                            </Picker.Item>
                          ))}
                        </Picker>
                      </Item>

                      <Item steyle={styles.item}>
                        <Picker
                          style={styles.input}
                          mode="dropdown"
                          iosIcon={<Icon name="arrow-down" />}
                          style={{ width: undefined }}
                          placeholder="أولاد ولا بنات؟"
                          placeholderStyle={{ color: "#bfc6ea" }}
                          placeholderIconColor="#007aff"
                          selectedValue={this.state.selectedGender} //??
                          onValueChange={this.onValueChangeGender}
                        >
                          <Picker.Item label="بنات" value="أنثى" />
                          <Picker.Item label="أولاد" value="ذكر" />
                          <Picker.Item label="الكل" value="الكل" />
                        </Picker>
                      </Item>

                      <Item rounded steyle={styles.item}>
                        <Input
                          style={styles.input}
                          autoCorrect={false}
                          autoCapitalize="none"
                          onChangeText={location => this.setState({ location })}
                          placeholder="المكان"
                        />
                      </Item>
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

                      <DatePicker
                        style={styles.input}
                        defaultDate={new Date(2019, 4, 4)}
                        minimumDate={new Date(2019, 1, 1)}
                        maximumDate={new Date(2019, 12, 31)}
                        locale={"en"}
                        timeZoneOffsetInMinutes={undefined}
                        modalTransparent={false}
                        animationType={"fade"}
                        androidMode={"default"}
                        placeHolderText="تاريخ الدعوة"
                        textStyle={{ color: "green" }}
                        placeHolderTextStyle={{ color: "#d3d3d3" }}
                        onDateChange={() =>
                          this.setState({ date: "1212-12-12" })
                        }
                        disabled={false}
                      />

                      <View>
                        <TouchableOpacity
                          onPress={() => this.TimePicker.open()}
                        >
                          <Text>وقت الدعوة</Text>
                        </TouchableOpacity>
                        <Text>{this.state.time}</Text>
                        <TimePicker
                          ref={ref => {
                            this.TimePicker = ref;
                          }}
                          onCancel={() => this.onCancel()}
                          onConfirm={(hour, minute) =>
                            this.onConfirm(hour, minute)
                          }
                        />
                      </View>
                    </Form>
                  </Body>
                </ListItem>
                <Button
                  onPress={() =>
                    this.props.createActivity(this.state, this.props.navigation)
                  }
                  style={styles.shareButton}
                >
                  <Text>انشر الدعوة</Text>
                </Button>
              </List>
            </View>
          </ImageBackground>
        </Root>
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
  fetchCategories: () => dispatch(actionCreators.fetchCategories())
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ActivityCreateForm);
