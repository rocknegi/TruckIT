import React, { Component } from 'react'
import { Text, Alert } from 'react-native'
import { Container, Content, Button, Right,Icon ,Left,Body,Header} from 'native-base';
import { GoogleSignin} from 'react-native-google-signin';
import { withNavigation } from 'react-navigation';

 class Settings extends Component {
    
    _logout=async()=>{
       
        try {
          await GoogleSignin.revokeAccess();
          await GoogleSignin.signOut();
        } catch (error) {
          Alert.alert(error);
        }

        this.props.navigation.navigate('home');

  }
  render() {

    return (
     <Container>
         <Content>
             <Header>
                 <Left>
                     <Button>
                         <Icon  name='arrow-back'/>
                     </Button>
                 </Left>
                 <Body>
                     <Text style={{color:'#fff'}}>
                         Settings
                     </Text>
                 </Body>
                 <Right />
             </Header>
             <Button full style={{margin:10}} onPress={this._logout}>
             <Text style={{color:'#fff'}}>
                 Logout
             </Text>
             </Button>
         </Content>

     </Container>
    )
  }
}
export default withNavigation(Settings)