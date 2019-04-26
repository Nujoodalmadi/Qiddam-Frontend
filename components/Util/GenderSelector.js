import React, { Component } from "react";
import ModalSelector from "react-native-modal-selector";
import { TextInput } from "react-native";

class GenderSelector extends Component {
  render() {
    let index = 0;
    const genderData = [
      { key: index++, label: "أنثى" },
      { key: index++, label: "ذكر" },
      { key: index++, label: "الكل" }
    ];
    return (
      <ModalSelector
        data={genderData}
        supportedOrientations={["portrait"]}
        accessible={true}
        cancelButtonAccessibilityLabel={"Cancel Button"}
        onChange={this.props.genderChange}
      >
        <TextInput
          editable={false}
          placeholder="بنات/شباب؟"
          value={this.props.gender}
        />
      </ModalSelector>
    );
  }
}

export default GenderSelector;
