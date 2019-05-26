import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Container, Content, Header, Tabs, Icon, Tab, TabHeading, Left, Body, Right,Button, Footer } from 'native-base';
import { withNavigation } from 'react-navigation';
import Firebase_Databse from './Firebase_Databse';

class DriverScreen extends Component {
    render() {
        return (
            <Container>
               
               <Header hasTabs>
                    <Left>
                        <Button transparent onPress={()=>this.props.navigation.goBack()}>
                            <Icon name='arrow-back' />
                        </Button>
                    </Left>
                    <Body>
                        <Text style={{fontSize:20,color:'#ffff'}}>
                            Hello Driver
                        </Text>
                    </Body>
                    <Right />
                </Header>

                <Tabs>
                    <Tab heading={<TabHeading><Icon type='AntDesign' name='pluscircleo' /></TabHeading>}>
                    <Firebase_Databse />
                    </Tab>
                    <Tab heading={<TabHeading><Icon name="apps" /></TabHeading>}></Tab>
                    <Tab heading='Tab 3'/>
                </Tabs>

      
              
            </Container>
        )
    }
}
export default  withNavigation(DriverScreen)
