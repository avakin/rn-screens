import React, { Component } from "react";
import { View, Text, StyleSheet, Button, ImageBackground } from "react-native";
import connect from "react-redux/lib/connect/connect";
import { savingUser } from "../../src/store/actions/items";
// import Icon from "react-native-vector-icons/MaterialIcons";
import DefaultInput from "../components/UI/DefaultInput.js";
import DefaultHeading from "../components/UI/HeadingText.js";
import BackgroundImage from "../assets/background.png";
import ButtonWithBackground from "../components/UI/ButtonWithBackground.js";
class AuthScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pass: "",
      user: ""
    };
  }
  checkUser = () => {
    // if (this.state.pass == "superpass") {
    //   this.props.navigation.navigate("Home", {});
    //   this.props.onSaveUser(this.state.user);
    // } else {
    //   alert("Entried password is invalid");
    // }
    this.props.navigation.navigate("Home", {});
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
      <ImageBackground
        source={BackgroundImage}
        style={authStyles.backgroundImage}
      >
        <View style={authStyles.container}>
          <DefaultHeading style={authStyles.title}>
            Sing Up screen
          </DefaultHeading>
          <ButtonWithBackground
            color="#2196f3"
            onPress={() => console.log("bom bom")}
            textColor="#fff"
          >
            Switch to Login
          </ButtonWithBackground>
          <View style={authStyles.inputGroup}>
            <DefaultInput
              placeholder="login"
              onChangeText={value => {
                this.setState({ user: value });
              }}
              style={authStyles.input}
            />
            <DefaultInput
              secureTextEntry={true}
              placeholder="password"
              onChangeText={value => {
                this.setState({ pass: value });
              }}
              style={authStyles.input}
            />
            <DefaultInput
              secureTextEntry={true}
              placeholder="confirm password"
              onChangeText={value => {
                this.setState({ confirmPass: value });
              }}
              style={authStyles.input}
            />
          </View>
          <View>
            <ButtonWithBackground
              onPress={this.checkUser}
              textColor="#fff"
              color="#2196f3"
            >
              Register
            </ButtonWithBackground>
          </View>
        </View>
      </ImageBackground>
    );
  }
}
const authStyles = StyleSheet.create({
  title: {
    marginBottom: 20
  },
  inputGroup: {
    width: "80%",
    marginTop: 20,
    marginBottom: 20
  },
  button: {
    color: "#fff"
  },
  backgroundImage: {
    flex: 1,
    width: "100%"
  },
  input: {
    backgroundColor: "#fff"
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
