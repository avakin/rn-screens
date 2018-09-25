import React from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";
import { connect } from "react-redux";
import { addItem, changePlaceholder } from "../../src/store/actions/items";

class ShareTask extends React.Component {
  constructor(props) {
    super(props);
  }
  checkOut = () => {
    const id = this.props.navigation.getParam("id");
    // console.log(id);
  };
  addToList = () => {
    if (this.props.text.trim() == "") {
      alert("Please fill in something to textfield");
      return;
    }
    this.props.onAddItem();
  };
  changePlaceholder = name => {
    this.props.onChangeText(name);
  };
  render() {
    return (
      <View style={TabStyle.container}>
        <Text style={TabStyle.title}>Share tasks</Text>
        <View style={TabStyle.inputGroup}>
          <TextInput
            style={TabStyle.input}
            value={this.props.text}
            onChangeText={value => this.changePlaceholder(value)}
            placeholder="Write text here"
          />
          <Button
            style={TabStyle.button}
            title="add task"
            onPress={this.addToList}
          />
        </View>
        {/* <Button
          onPress={this.props.navigation.getParam("doLog")}
          title="get function"
        /> */}
      </View>
    );
  }
}
const TabStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 10
  },
  title: {
    fontSize: 16,
    color: "#111"
  },
  inputGroup: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  input: {
    width: "70%"
  },
  button: {
    width: "30%"
  }
});
const mapStateToProps = state => {
  return {
    text: state.items.text
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onAddItem: () => dispatch(addItem()),
    onChangeText: value => dispatch(changePlaceholder(value))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShareTask);
