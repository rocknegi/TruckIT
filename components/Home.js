import Reactotron from 'reactotron-react-native'
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import RotatingEarth from './RotatingEarth';
import { Container, Header, Content, Body, Right, Left, Button, Icon,StyleProvider } from 'native-base';
import getTheme from '../native-base-theme/components';
import material from '../native-base-theme/variables/material';

export default class Home extends Component {

  render() {
      
    return (
        <StyleProvider style={getTheme(material)}>
        <Container >
          <Content>
            <RotatingEarth />
          </Content>
        </Container>
      </StyleProvider>
    )
  }
}
