import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  ScrollView
} from "react-native";
import { connect } from "react-redux";
import { addItem, changePlaceholder } from "../../src/store/actions/items";
import DefaultInput from "../components/UI/DefaultInput.js";
import DefaultHeading from "../components/UI/HeadingText";
import PickImage from "../components/PickImage";
import PickLocation from "../components/PickLocation";

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
      <ScrollView>
        <View style={TabStyle.container}>
          <DefaultHeading style={TabStyle.title}>Adding Tasks</DefaultHeading>
          <PickImage />
          <PickLocation />
          <DefaultInput
            placeholder="Task Title"
            value={this.props.text}
            onChangeText={value => this.changePlaceholder(value)}
          />
          <View style={TabStyle.button}>
            <Button title="add task" onPress={this.addToList} />
          </View>
          {/* <Button
          onPress={this.props.navigation.getParam("doLog")}
          title="get function"
        /> */}
        </View>
      </ScrollView>
    );
  }
}
const TabStyle = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "flex-start",
    alignItems: "center",
    padding: 10
  },
  title: {
    marginBottom: 20
  },
  inputGroup: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },

  button: {
    margin: 10
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
