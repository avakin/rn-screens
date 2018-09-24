import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default class ShareTask extends React.Component {
  render() {
    return (
      <View style={TabStyle.container}>
        <Text style={TabStyle.title}>Share tasks</Text>
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
  }
});
