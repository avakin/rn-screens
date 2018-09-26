import React from "react";
import { Text, StyleSheet } from "react-native";

const DefaultHeading = props => {
  return (
    <Text {...props} style={[styles.heading, props.style]}>
      {props.children}
    </Text>
  );
};
const styles = StyleSheet.create({
  heading: {
    fontSize: 25,
    // textTransform: "uppercase",
    fontWeight: "bold",
    color: "#111"
  }
});
export default DefaultHeading;
