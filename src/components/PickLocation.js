import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
export default class PickLocation extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.placeholder}>
          <Text>Map Preview</Text>
        </View>
        <View style={styles.button}>
          <Button
            title="Locate Place"
            color="red"
            onPress={() => alert("locate")}
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: "100%"
  },
  button: {
    margin: 10
  },
  placeholder: {
    width: "90%",
    height: 180,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "#bbb"
  }
});
