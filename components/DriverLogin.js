import React, { Component } from 'react'
import { StatusBar, Alert } from 'react-native'
import { Container, Content, Header, Left, Button, Icon, Title, Right, Form, Label, Item, Footer, FooterTab, Body, Input, Text, StyleProvider } from 'native-base';
import getTheme from '../native-base-theme/components';
import material from '../native-base-theme/variables/material';
import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin';
import { withNavigation } from 'react-navigation';
import firebase from 'react-native-firebase';

class DriverLogin extends Component {

    state = {
        isSigninInProgress: false,
        email: '',
        pass: ''
    }
    componentDidMount() {

        GoogleSignin.configure({
            webClientId: '976432902054-72jg8hkmkqr5vooo38c3tejn4sch4rga.apps.googleusercontent.com'
        });
    }
    _next = () => {
        this.props.navigation.navigate('driverScreenLayout')
    }

    _googleSignIn = async () => {
        try {
            await GoogleSignin.signIn();
            const currentUser = await GoogleSignin.getCurrentUser();
            // const token = currentUser.accessToken
            // Alert.alert('hello');
            this._next();
        } catch (e) {
            Alert.alert("" + e)
        }
    }
    _login = () => {
        if (this.state.email === '' || this.state.pass === '') {
            alert('Please enter both email and pass')
        }
        else {
            firebase
                .auth()
                .signInWithEmailAndPassword(this.state.email, this.state.pass)
                .then(this._next)
                .catch(error => alert(error))
        }

    }
    render() {
        return (
            <StyleProvider style={getTheme(material)}>
                <Container>
                    <Content>

                        <Header span style={{ backgroundColor: '#00897b' }}>
                            <StatusBar backgroundColor="#00695c" />
                            <Left>
                                <Button transparent onPress={()=>this.props.navigation.goBack()}>
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
                                <Label>Email</Label>
                                <Input onChangeText={email => this.setState({ email })} />
                            </Item>
                            <Item floatingLabel last>
                                <Label>Password</Label>
                                <Input onChangeText={pass => this.setState({ pass })} />
                            </Item>
                            <Button full style={{ margin: 20, borderRadius: 20 }} danger onPress={this._login}>
                                <Text>Login</Text>
                            </Button>
                            <GoogleSigninButton
                                style={{ width: '80%', height: 48, marginLeft: 35, borderRadius: 20 }}
                                size={GoogleSigninButton.Size.Wide}
                                color={GoogleSigninButton.Color.light}
                                onPress={this._googleSignIn}
                            />
                        </Form>
                    </Content>
                    <Footer>
                        <FooterTab>
                            <Button full style={{ backgroundColor: '#00695c' }}><Text style={{ color: '#fff', fontWeight: 'bold' }} onPress={() => this.props.navigation.navigate('Signup')}>Dont have an account?</Text></Button>
                        </FooterTab>

                    </Footer>
                </Container>
            </StyleProvider>
        )
    }
}
export default withNavigation(DriverLogin)