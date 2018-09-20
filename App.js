import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList} from 'react-native';
import ListItem from './src/components/List.js';
import appImage from './src/assets/forest.jpg';
import TaskModal from './src/components/Modal.js';
export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text : '',
            list: [],
            selectedTask: null
        };
    }

    changePlaceholder = (value) => {
        this.setState({
            text : value,
        })
    }
    showText = () => {

        if (this.state.text != '') {
            this.setState({
                text:'.text written. button pressed'
            });
            this._textInput.setNativeProps({
                borderColor: '#000'
            })
        } else {
            this.setState({
                text:'write text'
            });
        }

    }
    addToList = () => {
        if (this.state.text.trim() == '') {
            alert('Please fill in something to textfield');
            return;
        };
        this.setState(prevState => ({
                list: prevState.list.concat(
                    {
                        key:  Math.random().toString(36).substr(2, 9),
                        name:prevState.text,
                        // image: appImage,
                        image: ImagesArray[Math.floor(Math.random() * (5 - 0 + 1)) + 0],
                    }
                ),
                text: '',
        }));
    }
    removeItemFromList = (key) => {
        this.setState(prevState => ({
                list: prevState.list.filter(function(item) {
                    return item.key !== key;
                }),
                selectedTask: null,
        }));
    }
    closeModalInfo = () => {

        this.setState({
            selectedTask: null,
        })
    }
    selectedItemFromList = (key) => {
        this.setState(prevState => ({
            selectedTask: prevState.list.find( task => {
                return task.key == key;
            } )
        }))
    }
    render() {
        return (
          <View style={styles.container}>
              <TaskModal
                  dataClosed={this.closeModalInfo}
                  dataRemove={this.removeItemFromList}
                  selectedTask={this.state.selectedTask}
                  />
            <Text style={styles.text}>TODO List</Text>
            <Text style={styles.tip}>* touching task make it done</Text>
            <View style={styles.inputGroup}>
                <TextInput style={styles.input}
                    value={this.state.text}
                    onChangeText={(value) => this.changePlaceholder(value)}
                    placeholder='Write text here'
                    ref={component => this._textInput = component}
                    />
                <Button
                    style={styles.button}
                    title='add task'
                    onPress={this.addToList}
                    />
            </View>
            <List
                selectedItem={this.selectedItemFromList}

                dataList={this.state.list}/>
          </View>
        );
    }
}
const List = props => {
    // RemoveItem={props.dataRemove}
    return(
        <FlatList
            data={props.dataList}
            style={styles.list}
            renderItem={ ( {item} ) => {
                return <ListItem
                    ChooseItem={props.selectedItem}
                    counter={item.key}
                    ItemImage={item.image}
                    ItemName={item.name}/>
            }}>
        </FlatList>
    )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  tip:{
    fontSize: 14,
    marginBottom:10,
    color:"#111",
    textAlign:'left',
  },
  text:{
      color:'#111',
      fontWeight:'bold',
      marginBottom: 20,
      fontSize: 18,
  },
  input:{
      // borderColor: 'black',
      // borderWidth: 2,
      width: '70%',
      // marginBottom: 20,
  },
  button:{
      color: '#fff',
      width: '30%'
  },
  list:{
      width: '100%',
  },
  inputGroup:{
      // flex: 1,
      width: '100%',
      flexDirection:'row',
      alignItems: 'center',
      justifyContent: 'space-between'
  }
});
const ImageIndex = Math.floor(Math.random() * (5 - 0 + 1)) + 0;
const ImagesArray = [
    {
        uri:"https://img.purch.com/w/640/aHR0cDovL3d3dy5zcGFjZS5jb20vaW1hZ2VzL2kvMDAwLzA3Ny83MjMvaTAyL3B1ZXJ0b3JpY29zdXJ2ZXkuanBnPzE1MzE0MTY2ODY="
    },
    {
        uri:"https://static1.squarespace.com/static/5886840e2994ca91a1dea568/t/596aa7c83a04115f9be7ee9a/1500162026877/andreas-gucklhorn-285567.jpg?format=1500w"
    },
    {
        uri:"https://i.redd.it/bhx8n681lbxz.jpg"
    },
    {
        uri:"https://longreadsblog.files.wordpress.com/2017/11/gettyimages-489012110.jpg?w=1680"
    },
    {
        uri:"http://static.asiawebdirect.com/m/phuket/portals/kosamui-com/homepage/beaches/pagePropertiesImage/samui-beaches.jpg.jpg"
    },
    {
        uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIC35ro2QwXZLVsGyWU-oftAFoMrMz8XM6MipO9lFoZ8IMbriP"
    },
];
