import React, { Component } from "react";
import DatePicker from "react-native-datepicker";

class DateSelector extends Component {
  render() {
    return (
      <DatePicker
        style={{ width: 80 }}
        showIcon={false}
        date={this.props.date}
        mode="date"
        placeholder="التاريخ"
        format="YYYY-MM-DD"
        minDate="2016-05-01"
        maxDate="2016-06-01"
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
          }
        }}
        cancelBtnText="Cancel"
        onDateChange={this.props.onDateChange}
      />
    );
  }
}

export default DateSelector;
