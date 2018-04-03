import React, { Component } from 'react';
//import { View, Text } from 'react-native';
import { Card, CardSection, Button } from './common';

class LoginForm extends Component {

  render() {
    return (
      <Card>
        <CardSection />
        <CardSection />
        <CardSection>
          <Button value='Log In' />
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
