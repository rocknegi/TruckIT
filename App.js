if(__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'))
}
import Reactotron from 'reactotron-react-native'
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import RotatingEarth from './components/RotatingEarth';

export default class App extends Component {
  render() {
    Reactotron.log({ numbers: [1, 2, 3], boolean: false, nested: { here: 'we go' } })
    return (
      <View >
       <RotatingEarth />
            </View>
    );
  }
}


