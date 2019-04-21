import React, { Component } from 'react'
import{StatusBar} from 'react-native'
import { Container, Content, Header, Left, Button, Icon, Title, Right, Form, Label, Item, Footer, FooterTab,Body,Input,Text,StyleProvider } from 'native-base';
import getTheme from '../native-base-theme/components';
import material from '../native-base-theme/variables/material';

export default class DriverLogin extends Component {
    render() {
        return (
            <StyleProvider style={getTheme(material)}>
            <Container>
                <Content>
                
                    <Header span style={{backgroundColor:'#00897b'}}>
                    <StatusBar backgroundColor="#00695c"/>
                        <Left>
                            <Button transparent>
                                <Icon name='arrow-back' />
                            </Button>
                        </Left>
                        <Body>
                            <Title>Driver</Title>
                        </Body>
                        <Right />

                    </Header>

                    <Form>
                        <Item floatingLabel>
                        <Label>Username</Label>
                            <Input  />
                        </Item>
                        <Item floatingLabel last>
                        <Label>Password</Label>
                            <Input  />
                        </Item>
                        <Button full style={{margin:20,borderRadius:20}} danger>
                            <Text>Login</Text>
                        </Button>
                    </Form>
                </Content>
                <Footer>
                    <FooterTab>
                        <Button full style={{backgroundColor:'#00695c'}}><Text style={{color:'#fff',fontWeight:'bold'}}>Dont have an account?</Text></Button>
                    </FooterTab>

                </Footer>
            </Container>
            </StyleProvider>
        )
    }
}
