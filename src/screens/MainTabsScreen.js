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
    Share: {
      screen: ShareTask
    },
    Find: {
      screen: FindTask
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "Share") {
          iconName = `share`;
        } else if (routeName === "Find") {
          iconName = `place`;
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
  }
);
