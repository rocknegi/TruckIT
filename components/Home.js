import React, { Component } from 'react';
import {View,StyleSheet,StatusBar } from 'react-native';
import RotatingEarth from './RotatingEarth';
import { Container, Content, StyleProvider, Button, Text, Footer, FooterTab } from 'native-base';
import getTheme from '../native-base-theme/components';
import material from '../native-base-theme/variables/material';
import * as Animatable from 'react-native-animatable';
import AsyncStorage from '@react-native-community/async-storage';

export default class Home extends Component {

  render() {

    return (
      <StyleProvider style={getTheme(material)}>
        <Container>
          <Content>
          <StatusBar backgroundColor="#000"/>
            <RotatingEarth />
            <Text style={{fontSize:30,fontWeight:'bold',margin:40}}>
              Heavy Duty Vehical Assistant
            </Text>

          </Content>
          <Footer style={styles.buttonContainer}>
    
         <Animatable.View animation='bounceInRight' delay={500} style={styles.buttons}>
            <Button  style={{backgroundColor:'#f4511e'}} onPress={()=>this.props.navigation.navigate('driverLogin')}>
              <Text style={{fontSize:15}}> Driver   </Text>
            </Button>
           </Animatable.View>
           <Animatable.View animation='bounceInLeft' delay={500} style={styles.buttons}>
            <Button  style={{backgroundColor:'#f4511e'}}  onPress={()=>this.props.navigation.navigate('managerLogin')}>
              <Text style={{fontSize:15}}>Manager</Text>
            </Button>
           </Animatable.View>
  
          </Footer>
        </Container>
      </StyleProvider>
    )
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#9575cd',
    justifyContent: 'space-between',
  },
  buttons:{
    color: '#e53935',
    borderRadius: 3,
    textAlign: 'center',
    marginTop:23,
    marginBottom: 8,
    marginRight: 8,
    marginLeft: 8,
  }
})
