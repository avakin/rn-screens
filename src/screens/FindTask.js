import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { connect } from "react-redux";
import ListItem from "../../src/components/List.js";
import {
  selectItem,
  removeItem,
  deselectItem
} from "../../src/store/actions/items";
class FindTask extends React.Component {
  itemToSelect = key => {
    const task = this.props.list.find(place => {
      return place.key == key;
    });
    this.props.navigation.navigate("TaskInfo", {
      title: task.name,
      image: task.image,
      key: task.key,
      deleteItem: this.removeItemFromList
    });
    this.props.onSelectItem(key);
  };
  removeItemFromList = key => {
    this.props.onRemoveItem(key);
  };
  closeModalInfo = () => {
    this.props.onDeselectItem();
  };
  render() {
    {
      /* <TaskModal
          dataClosed={this.closeModalInfo}
          dataRemove={this.removeItemFromList}
          selectedTask={this.props.selectedTask}
        /> */
    }
    return (
      <View style={TabStyle.container}>
        <Text style={TabStyle.title}>Find tasks</Text>
        <List dataList={this.props.list} selectedItem={this.itemToSelect} />
      </View>
    );
  }
}

const List = props => {
  return (
    <FlatList
      data={props.dataList}
      style={TabStyle.list}
      renderItem={({ item }) => {
        return (
          <ListItem
            ChooseItem={props.selectedItem}
            counter={item.key}
            ItemImage={item.image}
            ItemName={item.name}
          />
        );
      }}
    />
  );
};
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
  },
  list: {
    width: "100%"
  }
});
const mapStateToProps = state => {
  return {
    text: state.items.text,
    list: state.items.list,
    selectedTask: state.items.selectedTask
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onSelectItem: key => dispatch(selectItem(key)),
    onRemoveItem: key => dispatch(removeItem(key)),
    onDeselectItem: () => dispatch(deselectItem())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FindTask);
