if(__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'))
}
import Reactotron from 'reactotron-react-native'
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import RotatingEarth from './components/RotatingEarth';
import { Container, Header, Content, Body, Right,Left,Button,Icon} from 'native-base';

export default class App extends Component {
  render() {
    Reactotron.log({ numbers: [1, 2, 3], boolean: false, nested: { here: 'we go' } })
    return (
      <Container >
        <Header>
        <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Text style={{fontSize:20,fontWeight:'bold',color:'#fff'}}>Truct IT</Text>
          </Body>
          <Right/>
        </Header>

        <Content>
        <RotatingEarth />
        </Content>
      
            </Container>
    );
  }
}


