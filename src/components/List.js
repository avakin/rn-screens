import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Alert,
  Image,
  View
} from "react-native";
import Feather from "react-native-vector-icons/Feather";

export default class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemBackground: "#eee",
      done: false
    };
    // random id =  Math.random().toString(36).substr(2, 9)
  }
  makeDone = () => {
    let counter = this.props.counter;
    if (!this.state.done) {
      this.setState({
        itemBackground: "#4caf50",
        done: true
      });
    } else {
      this.props.ChooseItem(counter);
      //
      // Alert.alert(
      //   'This task has been already done!',
      //   ' Do you want to remove it?',
      //   [
      //     {text: 'Cancel', onPress: () => { return }},
      //     {text: 'Remove', onPress: () => { this.props.RemoveItem(counter) }},
      //   ],
      //   { cancelable: false }
      // )
    }
  };
  undone = () => {
    if (this.state.done == true) {
      return {
        display: "none"
      };
    } else {
      return {
        display: "flex"
      };
    }
  };
  checked = () => {
    if (this.state.done == true) {
      return {
        display: "flex",
        color: "#fff"
      };
    } else {
      return {
        display: "none"
      };
    }
  };
  listContainerStyle = () => {
    return {
      padding: 10,
      width: "100%",
      backgroundColor: this.state.itemBackground,
      marginBottom: 5,
      marginTop: 5,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between"
    };
  };
  render() {
    return (
      <TouchableOpacity
        onPress={this.makeDone}
        style={this.listContainerStyle()}
      >
        <View style={listStyle.itemInfo}>
          <Image
            resizeMode="cover"
            source={this.props.ItemImage}
            style={listStyle.image}
          />
          <Text style={listStyle.listItem}>{this.props.ItemName}</Text>
        </View>
        <Feather style={this.undone()} name="x" size={25} />
        <Feather style={this.checked()} name="check" size={25} />
      </TouchableOpacity>
    );
  }
}
const listStyle = StyleSheet.create({
  listItem: {
    fontWeight: "bold",
    fontSize: 18
  },
  itemInfo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "80%"
  },
  image: {
    width: 30,
    height: 30,
    marginRight: 10
  }
});
