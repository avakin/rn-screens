import React from 'react';
import { StyleSheet, Modal, Image, Text, View, Button } from 'react-native';
export default class TaskModal extends React.Component {
    constructor(props) {
        super(props);

    }
    deleteItem = () => {
        if (this.props.selectedTask == null) {
            return;
        };
        this.props.dataRemove(this.props.selectedTask.key);
    }
    render() {
        let modalContent = null;
        if (this.props.selectedTask !== null) {
            modalContent = (
                <View style={modalStyles.modalBody}>
                    <Image
                        style={modalStyles.modalImage}
                        source={this.props.selectedTask.image}/>
                    <Text
                        style={modalStyles.text}>
                        {this.props.selectedTask.name}
                    </Text>
                </View>

            )
        }
        return (
            <Modal
                onRequestClose={this.props.dataClosed}
                animationType='slide'
                visible={this.props.selectedTask !== null}>
                {modalContent}
                <View style={modalStyles.inputGroup}>
                    <Button
                        onPress={this.props.dataClosed}
                        title='close'
                        />
                    <Button
                        onPress={this.deleteItem}
                        title='remove'
                        color='#f00'
                        />
                </View>
            </Modal>
        )
    }
}

const modalStyles = StyleSheet.create({
    modalBody:{
        // backgroundColor:'red',
        // flex:1,
        // flexDirection: 'column',
        // justifyContent: 'center',
        // alignItems: 'center'
        padding: 10,


    },
    text:{
        color:'#111',
        fontWeight:'bold',
        marginBottom: 20,
        marginTop: 20,
        fontSize: 18,
        textAlign:'center',
    },
    inputGroup:{
        // flex: 1,
        padding: 10,
        width: '100%',
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    modalImage:{
        width:'100%',
        height:200,
    }
})
