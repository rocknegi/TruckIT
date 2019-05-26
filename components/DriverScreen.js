import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Container, Content, Header, Tabs, Icon, Tab, TabHeading, Left, Body, Right,Button, Footer, FooterTab } from 'native-base';
import { withNavigation } from 'react-navigation';
import Firebase_Databse from './Firebase_Databse';

class DriverScreen extends Component {
    render() {
        return (
            <Container>
               
             <Content>
             <Header hasTabs>
                    <Left>
                        <Button transparent onPress={()=>this.props.navigation.goBack()}>
                            <Icon name='arrow-back' />
                        </Button>
                    </Left>
                    <Body>
                        <Text style={{fontSize:20,color:'#ffff'}}>
                            Driver Screen
                        </Text>
                    </Body>
                    <Right />
                </Header>
                <Firebase_Databse />
             </Content>

            </Container>
        )
    }
}
export default  withNavigation(DriverScreen)
