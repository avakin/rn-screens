import React from "react";
import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import ShareTask from "./ShareTask.js";
import FindTask from "./FindTask.js";

export default createBottomTabNavigator(
  {
    Add: {
      screen: ShareTask
    },
    List: {
      screen: FindTask
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        console.log(navigation);

        let iconName;
        if (routeName === "Add") {
          iconName = `add`;
        } else if (routeName === "List") {
          iconName = `list`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Icon name={iconName} size={30} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: "#2196f3",
      inactiveTintColor: "gray"
    }
    // initialRouteParams: {
    //   id: 99
    // }
  }
);
