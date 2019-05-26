import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Container, Content } from 'native-base';
import firebase from 'react-native-firebase';
import reactotron from 'reactotron-react-native';

export default class Firebase_Databse extends Component {

    componentDidMount(){
        this._retrieveData();
    }

    _retrieveData = ()=>{
        const key = firebase.database().ref('Drivers/').push().key
        reactotron.log(key)
        firebase.database().ref('Driver/').push({
            assigned:0,
            manager:'RohanChopra'
        })
        .then(res=>reactotron.log(res))
        .catch(err=>reactotron.log(err))
    }
    render() {
        return (
            <Container>
                <Content>

                </Content>
            </Container>
        )
    }
}
