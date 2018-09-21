import React from 'react';
import { StyleSheet, Text,TouchableOpacity, Alert, Image} from 'react-native';

export default class ListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            itemBackground: '#eee',
            done:false,
        })
        // random id =  Math.random().toString(36).substr(2, 9)
    }
    makeDone = () => {
        let counter = this.props.counter;
        if (!this.state.done) {
            this.setState({
                itemBackground:'#4caf50',
                done:true,
            });

        } else {
            this.props.ChooseItem(counter);
                //
                // Alert.alert(
                //   'This task has been already done!',
                //   ' Do you want to remove it?',
                //   [
                //     {text: 'Cancel', onPress: () => { return }},
                //     {text: 'Remove', onPress: () => { this.props.RemoveItem(counter) }},
                //   ],
                //   { cancelable: false }
                // )
        }
    }
    listContainerStyle = () => {
        return {
            padding: 10,
            width: '100%',
            backgroundColor: this.state.itemBackground,
            marginBottom: 5,
            marginTop: 5,
            flexDirection:'row',
            alignItems:'center',
            justifyContent: 'flex-start'
        }
    }
    render() {
        return (
            <TouchableOpacity
                onPress={this.makeDone}
                style={this.listContainerStyle()}>
                <Image
                    resizeMode='cover'
                    source={this.props.ItemImage}
                    style={listStyle.image}/>
                    <Text
                        style={listStyle.listItem}>
                        {this.props.ItemName}
                    </Text>
            </TouchableOpacity>
        )
    }
}
const listStyle = StyleSheet.create({
    listItem:{
        fontWeight: 'bold',
        fontSize: 18,
    },
    image:{
        width:30,
        height: 30,
        marginRight: 10,
    }
})
