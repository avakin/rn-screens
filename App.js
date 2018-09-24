import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList
} from "react-native";
import { connect } from "react-redux";
import {
  addItem,
  removeItem,
  selectItem,
  deselectItem,
  changePlaceholder
} from "./src/store/actions/items";
import ListItem from "./src/components/List.js";
import appImage from "./src/assets/forest.jpg";
import TaskModal from "./src/components/Modal.js";
import { createStackNavigator } from "react-navigation";
import AuthScreen from "./src/screens/Auth.js";
import TabsNavigator from "./src/screens/MainTabsScreen.js";

const RootStack = createStackNavigator(
  {
    Auth: {
      screen: AuthScreen
    },
    Tabs: {
      screen: TabsNavigator
    }
  },
  {
    initialRouteName: "Auth"
  }
);
class App extends React.Component {
  render() {
    return <RootStack />;
  }
}

const mapStateToProps = state => {
  return {
    text: state.items.text,
    list: state.items.list,
    selectedTask: state.items.selectedTask
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onAddItem: () => dispatch(addItem()),
    onRemoveItem: key => dispatch(removeItem(key)),
    onSelectItem: key => dispatch(selectItem(key)),
    onDeselectItem: () => dispatch(deselectItem()),
    onChangePlaceholder: value => dispatch(changePlaceholder(value))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
