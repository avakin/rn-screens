import React from "react";
import {
  StyleSheet,
  Modal,
  Image,
  Text,
  View,
  Button,
  TouchableOpacity
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { createStackNavigator } from "react-navigation";
import Details from "./Details";
export default class TaskModal extends React.Component {
  constructor(props) {
    super(props);
  }
  deleteItem = () => {
    if (this.props.selectedTask == null) {
      return;
    }
    this.props.dataRemove(this.props.selectedTask.key);
  };
  render() {
    let modalContent = null;
    if (this.props.selectedTask !== null) {
      modalContent = (
        <View style={modalStyles.modalBody}>
          <Image
            style={modalStyles.modalImage}
            source={this.props.selectedTask.image}
          />
          <Text style={modalStyles.text}>{this.props.selectedTask.name}</Text>
        </View>
      );
    }
    return (
      <Modal
        onRequestClose={this.props.dataClosed}
        animationType="slide"
        visible={this.props.selectedTask !== null}
      >
        {modalContent}
        <View style={modalStyles.inputGroup}>
          {/* <Button onPress={this.props.dataClosed} title="close" /> */}
          {/* <Button onPress={this.deleteItem} title="remove" color="#f00" /> */}
          <TouchableOpacity onPress={this.props.dataClosed}>
            <View style={modalStyles.cancelButton}>
              <Icon name="block" size={25} color="#fff" />
              <Text style={modalStyles.buttonText}>CLOSE</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.deleteItem}>
            <View style={modalStyles.removingButton}>
              <Icon name="delete" size={25} color="#fff" />
              <Text style={modalStyles.buttonText}>REMOVE</Text>
            </View>
          </TouchableOpacity>
        </View>
        {/* <Details /> */}
      </Modal>
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
