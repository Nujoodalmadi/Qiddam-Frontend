import React, { Component } from "react";
import { Picker, Icon, View } from "native-base";
import styles from "../Activities/styles";

class CategorySelector extends Component {
  render() {
    return (
      <Picker
        mode="dropdown"
        placeholder=" نوع الدعوة"
        placeholderIconColor="#007aff"
        selectedValue={this.props.selectedValue}
        onValueChange={this.props.onValueChange}
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
    );
  }
}

export default CategorySelector;
