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
  changePlaceholder,
  savingUser
} from "./src/store/actions/items";
import ListItem from "./src/components/List.js";
import appImage from "./src/assets/forest.jpg";
import TaskModal from "./src/components/Modal.js";
import { createStackNavigator, createSwitchNavigator } from "react-navigation";
import AuthScreen from "./src/screens/Auth.js";
import TabsNavigator from "./src/screens/MainTabsScreen.js";
import HomeScreen from "./src/screens/Home.js";
import Icon from "react-native-vector-icons/MaterialIcons";

import TaskInfo from "./src/screens/Details.js";
const AppStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      title: "Home page"
    },
    Tabs: {
      screen: TabsNavigator
    },
    TaskInfo: {
      screen: TaskInfo
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      title: "Home",
      headerStyle: {
        backgroundColor: "#f4511e"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      },
      headerRight:
        navigation.state.routeName == "TaskInfo" ? null : (
          <MenuOpener navigation={navigation} />
        )
    })
  }
);
class MenuOpener extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Icon
        name="menu"
        color="#fff"
        size={40}
        style={{ marginRight: 10 }}
        onPress={() => this.props.navigation.toggleDrawer()}
      />
    );
  }
}
const AuthStack = createStackNavigator({
  Auth: {
    screen: AuthScreen
  }
});
const RootStack = createSwitchNavigator(
  {
    App: AppStack,
    Auth: AuthStack
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
    selectedTask: state.items.selectedTask,
    user: state.items.user
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onAddItem: () => dispatch(addItem()),
    onRemoveItem: key => dispatch(removeItem(key)),
    onSelectItem: key => dispatch(selectItem(key)),
    onDeselectItem: () => dispatch(deselectItem()),
    onChangePlaceholder: value => dispatch(changePlaceholder(value)),
    onSaveUser: value => dispatch(savingUser(value))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
