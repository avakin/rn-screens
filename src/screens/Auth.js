import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
export default class AuthScreen extends Component {
  static navigationOptions = {
    title: "Authorization"
  };
  render() {
    return (
      <View style={authStyles.container}>
        <Text style={authStyles.title}>Login screen</Text>
        <Button
          title="Go to app"
          onPress={() => this.props.navigation.navigate("Tabs")}
        />
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
