import React, { Component } from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";
import connect from "react-redux/lib/connect/connect";
import { savingUser } from "../../src/store/actions/items";
// import Icon from "react-native-vector-icons/MaterialIcons";
class AuthScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pass: "",
      user: ""
    };
  }
  checkUser = () => {
    if (this.state.pass == "superpass") {
      this.props.navigation.navigate("Home", {
        id: 86
      });
      this.props.onSaveUser(this.state.user);
    } else {
      alert("Entried password is invalid");
    }
  };
  static navigationOptions = {
    title: "Authorization",
    headerStyle: {
      backgroundColor: "#2196f3"
    },
    // headerRight: (
    //   <Icon
    //     name="menu"
    //     color="#fff"
    //     size={40}
    //     style={{ marginRight: 10 }}
    //     onPress={() => this.props.navigator.toggleDrawer()}
    //   />
    // ),
    headerTintColor: "#fff"
  };
  render() {
    return (
      <View style={authStyles.container}>
        <Text style={authStyles.title}>Login screen</Text>
        <TextInput
          style={{ width: "80%" }}
          placeholder="login"
          onChangeText={value => {
            this.setState({ user: value });
          }}
        />
        <TextInput
          secureTextEntry={true}
          style={{ width: "80%" }}
          placeholder="password"
          onChangeText={value => {
            this.setState({ pass: value });
          }}
        />
        <View style={{ marginTop: 30 }}>
          <Button title="Go to app" onPress={this.checkUser} />
        </View>
      </View>
    );
  }
}
const authStyles = StyleSheet.create({
  title: {
    color: "#111",
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 20
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
const mapStateToProps = state => {
  return {
    user: state.items.user
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onSaveUser: value => dispatch(savingUser(value))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthScreen);
