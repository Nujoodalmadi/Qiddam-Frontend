import React, { Component } from "react";
import { Picker, Icon } from "native-base";

class CategorySelector extends Component {
  render() {
    return (
      <Picker
        mode="dropdown"
        iosIcon={<Icon name="arrow-down" />}
        style={{ width: undefined }}
        placeholder=" نوع الدعوة"
        placeholderStyle={{ color: "#bfc6ea" }}
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
