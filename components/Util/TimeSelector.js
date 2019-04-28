import React, { Component } from "react";
import DatePicker from "react-native-datepicker";

class TimeSelector extends Component {
  render() {
    return (
      <DatePicker
        style={{ width: 80 }}
        showIcon={false}
        date={this.props.time}
        mode="time"
        placeholder="الوقت"
        confirmBtnText="Confirm"
        customStyles={{
          dateIcon: {
            position: "absolute",
            left: 0,
            top: 4,
            color: "red",
            marginLeft: 0
          },
          dateInput: {
            borderWidth: 0
          },
          dateText: {
            fontSize: 10,
            fontWeight: "bold",
            color: "white"
          }
        }}
        cancelBtnText="Cancel"
        onDateChange={this.props.onTimeChange}
      />
    );
  }
}

export default TimeSelector;
