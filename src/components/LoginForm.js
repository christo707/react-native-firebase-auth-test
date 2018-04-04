import React, { Component } from 'react';
import firebase from 'firebase';
import { Text } from 'react-native';
import { Input, Card, CardSection, Button } from './common';

class LoginForm extends Component {

state = { email: '', password: '', error: '' };

onButtonPress() {
  this.setState({ error: '' });
  const { email, password } = this.state;
  firebase.auth().signInWithEmailAndPassword(email, password)
    .catch(() => {
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .catch(() => {
            this.setState({ error: 'Authentication Fails' });
        });
    });
}

  render() {
    return (
      <Card>
        <CardSection>
          <Input
          placeholder='xyz@gmail.com'
          label='Email:'
          value={this.state.email}
          onChangeText={email => this.setState({ email })}
          />
        </CardSection>
        <CardSection>
          <Input
          secureTextEntry
          placeholder='password'
          label='Password:'
          value={this.state.password}
          onChangeText={password => this.setState({ password })}
          />
        </CardSection>
        <Text style={styles.errorTextStyle}>
          { this.state.error }
        </Text>
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)} value='Log In' />
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
     color: 'red',
     fontSize: 20,
     alignSelf: 'center'
  }
};

export default LoginForm;
