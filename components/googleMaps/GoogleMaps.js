import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View, Dimensions,TextInput } from 'react-native';
import MapView, { PROVIDER_GOOGLE,Callout } from 'react-native-maps';
import RetroMapStyles from './RetroMapStyles.json';
import { Container, Content } from 'native-base';
let { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 0;
const LONGITUDE = 0;
const LATITUDE_DELTA= 0.0922;
const LONGITUDE_DELTA = 0.0421;

export default class MapExample extends Component {
  constructor() {
    super();
    this.state = {
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      }
    };
  }
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          region: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          }
        });
      },
    (error) => console.log(error.message),
    { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
    this.watchID = navigator.geolocation.watchPosition(
      position => {
        this.setState({
          region: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          }
        });
      }
    );
  }
  onMapPress(event) {
    console.log(event.nativeEvent.coordinate.longitude);
    let region = {
      latitude:       event.nativeEvent.coordinate.latitude,
      longitude:      event.nativeEvent.coordinate.longitude,
      latitudeDelta:  0.00922*1.5,
      longitudeDelta: 0.00421*1.5
    }
    this.setState({region})
  }
  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
  }
  render() {
    return (
      
      <Container >

        <MapView
        provider={ PROVIDER_GOOGLE }
        style={ styles.container }
        customMapStyle={ RetroMapStyles }
        showsUserLocation={ true }
        region={ this.state.region }
        onRegionChange={ region => this.setState({region}) }
        onRegionChangeComplete={ region => this.setState({region}) }
        onPress={(event)=>this.onMapPress(event)}
      >
        <MapView.Marker
          coordinate={ this.state.region }
        />
      </MapView>
      <Callout>
    <View style={styles.calloutView} >
      <TextInput style={styles.calloutSearch}
        placeholder={"Search"}
      />
    </View>
  </Callout>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },
  calloutView: {
    flexDirection: "row",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: 10,
    width: "40%",
    marginLeft: "30%",
    marginRight: "30%",
    marginTop: 20
  },
  calloutSearch: {
    borderColor: "transparent",
    marginLeft: 10,
    width: "90%",
    marginRight: 10,
    height: 40,
    borderWidth: 0.0  
  }
});
AppRegistry.registerComponent('MapExample', () => MapExample);