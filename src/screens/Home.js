import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { createDrawerNavigator, DrawerItems } from "react-navigation";
import TabsNavigator from "./MainTabsScreen.js";
import Icon from "react-native-vector-icons/MaterialIcons";
import { connect } from "react-redux";
class HomeScreen extends React.Component {
  static navigationOptions = {
    title: "Task App Home Screen",
    headerStyle: {
      backgroundColor: "#2196f3"
    }
  };
  render() {
    return (
      <View style={homeStyles.container}>
        <Text style={{ fontWeight: "bold", fontSize: 18, marginBottom: 20 }}>
          Home screen
        </Text>
        <Text style={{ textAlign: "center" }}>
          Hi! It's your profile in this app! Slide right to open menu and go
          making tasklist
        </Text>
      </View>
    );
  }
}
const DrawerComponentConnected = props => {
  return (
    <View>
      <View style={homeStyles.user}>
        <View style={homeStyles.iconHolder}>
          <Icon name="person" size={60} color="#fff" />
        </View>
        <View style={homeStyles.userTitleHolder}>
          <Text style={homeStyles.userTitle}>
            {props.user != "" ? "Hello, " + props.user + "!" : "Hello, anonim!"}
          </Text>
          <Icon
            name="input"
            size={30}
            color="#fff"
            onPress={() => console.log(props.navigation.navigate("Auth"))}
          />
        </View>
      </View>
      <View>
        <DrawerItems {...props} />
      </View>
    </View>
  );
};
const DrawerComponent = connect(({ items }) => ({ user: items.user }))(
  DrawerComponentConnected
);

export default createDrawerNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Tabs: {
      screen: TabsNavigator
    }
  },
  {
    contentComponent: DrawerComponent
  }
);
const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 10
  },
  user: {
    padding: 20,
    backgroundColor: "#ff5722",
    alignItems: "center",
    justifyContent: "center"
  },
  userTitleHolder: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 10
  },
  userTitle: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#fff",
    marginRight: 15,
    height: "100%",
    width: "70%"
  },
  iconHolder: {
    borderRadius: 50,
    backgroundColor: "rgba(255,255,255,0.3)",
    padding: 10
  }
});
