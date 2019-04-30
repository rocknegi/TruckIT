import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import DriverScreen from './DriverScreen'
import Settings from './Settings';
import { withNavigation } from 'react-navigation';
import GoogleMaps from './googleMaps/GoogleMaps';

const support = () => <Text>support</Text>;

 class BottomNavigationBar extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'Home', title: 'Home', icon: 'home', color: '#3F51B5' },
      { key: 'Maps', title: 'Maps', icon: 'map', color: '#009688' },
      { key: 'Settings', title: 'Settings', icon: 'settings', color: '#795548' },
      { key: 'support', title: 'support', icon: 'help', color: '#607D8B' },
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderScene = BottomNavigation.SceneMap({
    Home: DriverScreen,
    Maps: GoogleMaps,
    Settings: Settings,
    support:support
  });

  render() {
    return (
      <BottomNavigation
        navigationState={this.state}
        onIndexChange={this._handleIndexChange}
        renderScene={this._renderScene}
      />
    );
  }
}

export default withNavigation(BottomNavigationBar)