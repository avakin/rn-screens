import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Platform,
  TouchableNativeFeedback
} from "react-native";

const ButtonWithBackground = props => {
  const content = (
    <View style={[styles.button, { backgroundColor: props.color }]}>
      <Text style={[styles.buttonText, { color: props.textColor }]}>
        {props.children.toUpperCase()}
      </Text>
    </View>
  );
  if (Platform.OS === "android") {
    return (
      <TouchableNativeFeedback onPress={props.onPress}>
        {content}
      </TouchableNativeFeedback>
    );
  }
  return <TouchableOpacity onPress={props.onPress}>{content}</TouchableOpacity>;
};
const styles = StyleSheet.create({
  button: {
    padding: 8,
    margin: 5,
    borderRadius: 2
  },
  buttonText: {
    fontWeight: "bold"
  }
});
export default ButtonWithBackground;
