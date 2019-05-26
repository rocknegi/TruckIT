import React, { Component } from 'react'
import { StatusBar, Text, View } from 'react-native'
import { Container, Content, Header, Left, Button, Icon, Title, Right, Body, List, ListItem } from 'native-base';
import firebase from 'react-native-firebase';
import reactotron from 'reactotron-react-native';

export default class DriverDetails extends Component {
    state = {
        key: null,
        userData: [],
        Name: '',
        TollCost: '',
        carnumber: '',
        destination: '',
        mobilenumber: '',
        ontrip: '',
        start: '',
        vehicleType: ''
    }
    componentDidMount() {
        const { navigation } = this.props;
        const key = navigation.getParam('key');
        this.setState({ key }, () => {
            reactotron.log('match key ' + this.state.key)
            this._retrieveData();
        })
    }
    _retrieveData = () => {
        firebase.database().ref(`Manager/rohanc/${this.state.key}`).on('value', (data) => {
            this.setState({ userData: data.val() }, () => {
                reactotron.log(JSON.stringify(this.state.userData))
                try {
                    this.setState({ Name:this.state.userData.Name,
                         TollCost:this.state.userData.TollCost,
                          carnumber:this.state.userData.carnumber, 
                          destination:this.state.userData.destination, 
                          mobilenumber:this.state.userData.mobilenumber, 
                          ontrip:this.state.userData.ontrip, 
                          vehicleType:this.state.userData.vehicleType
                         })
                } catch (e) { alert('no data yet') }
            })


        });
    }
    render() {
        return (
            <Container>
                <Content>
                    <Header span style={{ backgroundColor: '#00897b' }}>
                        <StatusBar backgroundColor="#00695c" />
                        <Left>
                            <Button transparent onPress={() => this.props.navigation.goBack()}>
                                <Icon name='arrow-back' />
                            </Button>
                        </Left>
                        <Body>
                            <Title>Driver Details</Title>
                        </Body>
                        <Right />

                    </Header>

                    <List>
                        <ListItem>
                            <Text>Name</Text>
                            <Body />
                            <Right>
                                <Text>{this.state.Name}</Text>
                            </Right>
                        </ListItem>
                        <ListItem>
                            <Text>Toll Cost</Text>
                            <Body />
                            <Right>
                                <Text>{this.state.TollCost}</Text>
                            </Right>
                        </ListItem>
                        <ListItem>
                            <Text>Car Number</Text>
                            <Body />
                            <Right>
                                <Text>{this.state.carnumber}</Text>
                            </Right>
                        </ListItem>
                        <ListItem>
                            <Text>Destination</Text>
                            <Body />
                            <Right>
                                <Text>{this.state.destination}</Text>
                            </Right>
                        </ListItem>
                        <ListItem>
                            <Text>Mobile No</Text>
                            <Body />
                            <Right>
                                <Text>{this.state.mobilenumber}</Text>
                            </Right>
                        </ListItem>
                        <ListItem><Text>On Trip</Text>
                            <Body />
                            <Right>
                                <Text>{this.state.ontrip}</Text>
                            </Right>
                        </ListItem>
                        <ListItem>
                            <Text>Start</Text>
                            <Body />
                            <Right>
                                <Text>{this.state.start}</Text>
                            </Right>
                        </ListItem>
                        <ListItem>
                            <Text>Vehicle Type</Text>
                            <Body />
                            <Right>
                                <Text>{this.state.vehicleType}</Text>
                            </Right>
                        </ListItem>
                    </List>
                </Content>
            </Container>
        )
    }
}
