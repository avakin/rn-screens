import React from "react";
import { StyleSheet, Image, Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
// import { createStackNavigator } from "react-navigation";
// import Details from "./Details";
// import { connect } from "react-redux";
export default class TaskModal extends React.Component {
  constructor(props) {
    super(props);
  }
  deleteItem = () => {
    const key = this.props.navigation.getParam("key");
    const deleteItem = this.props.navigation.getParam("deleteItem");
    deleteItem(key);
    this.props.navigation.navigate("Tabs");
  };
  render() {
    const title = this.props.navigation.getParam("title");
    const image = this.props.navigation.getParam("image");
    return (
      <View style={modalStyles.modalBody}>
        <Image style={modalStyles.modalImage} source={image} />
        <Text style={modalStyles.text}>{title}</Text>
        <TouchableOpacity onPress={this.deleteItem}>
          <View style={modalStyles.removingButton}>
            <Icon name="delete" size={25} color="#fff" />
            <Text style={modalStyles.buttonText}>REMOVE</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const modalStyles = StyleSheet.create({
  modalBody: {
    // backgroundColor:'red',
    // flex:1,
    // flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'center'
    padding: 10
  },
  cancelButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2196f3",
    paddingTop: 7,
    paddingBottom: 7,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 2
  },
  removingButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f44336",
    paddingTop: 7,
    paddingBottom: 7,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 2
  },
  text: {
    color: "#111",
    fontWeight: "bold",
    marginBottom: 20,
    marginTop: 20,
    fontSize: 18,
    textAlign: "center"
  },
  inputGroup: {
    // flex: 1,
    padding: 10,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  modalImage: {
    width: "100%",
    height: 200
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    marginLeft: 8
  }
});
