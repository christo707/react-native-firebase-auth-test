import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {

  componentWillMount() {
    firebase.initializeApp({
    apiKey: 'AIzaSyCD2akpJNMKn4WBgcYCY4k22QOCqFYerRo',
    authDomain: 'authentication-df267.firebaseapp.com',
    databaseURL: 'https://authentication-df267.firebaseio.com',
    projectId: 'authentication-df267',
    storageBucket: 'authentication-df267.appspot.com',
    messagingSenderId: '478955852187'
  });
  }

  render() {
    return (
      <View >
        <Header headerText='Authentication' />
        <LoginForm />
      </View>
    );
  }
}

// const styles = {
//
//   textStyle: {
//       fontWeight: 'bold',
//       fontSize: 30,
//       color: 'red',
//   }
// };
//
export default App;
