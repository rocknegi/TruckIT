import React, { Component } from 'react'
import { Text, Share, StyleSheet } from 'react-native'
import { Container, Content } from 'native-base';
import firebase from 'react-native-firebase';
import reactotron from 'reactotron-react-native';
import { Button } from 'react-native-paper';
import { withNavigation } from 'react-navigation';

 class Firebase_Databse extends Component {
    state = {
        user_key: null,
        managerName: [],
        userName:''
    }

    componentDidMount() {
        this._retrieveData();
    }

    _retrieveData = () => {
        const user_key = firebase.database().ref('Driver/').push({
            assigned: 0,
        }).key;
      this._getUserDetails();
        this.setState({ user_key }, () => reactotron.log("user_key:" + this.state.user_key))
    }
    _getUserDetails = async()=>{
        var user = firebase.auth().currentUser;
        this.setState({userName:user.displayName})
    }

    _shareKey = async () => {
        try {
            const result = await Share.share({
                message:
                    `Your Drivers Code Is ${this.state.key}`,
            });

            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error) {
            alert(error.message);
        }
    }

    _checkAssigned = () => {
        firebase.database().ref(`Driver/${this.state.user_key}`).on('value', (data) => {
            this.setState({ managerName: data.val() }, () => {
                reactotron.log(JSON.stringify(this.state.managerName))
            })
            try{
                if (this.state.managerName.assigned) {
                    this.props.navigation.navigate('DriverDetails',{
                        key:this.state.user_key
                    })
                 }
                 else {
                     alert('wait for your manager to enter your token')
                 }
            }
            catch(e){
                alert(e)
            }
          

        });
    }
    render() {
        return (
            <Container>
                <Content>
                    <Text>
                        welcome {this.state.userName}
                    </Text>
                    <Button style={styles.button} icon="share" mode="Outlined button" onPress={this._shareKey}>
                        <Text>Share your code</Text>
                    </Button>

                    <Button style={styles.button} icon="check-box" mode="Outlined button" onPress={this._checkAssigned}>
                        <Text>Check</Text>
                    </Button>

                </Content>

            </Container>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        marginTop: 20,
        marginBottom: 50
    }
})
export default withNavigation(Firebase_Databse)