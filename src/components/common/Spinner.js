import React from 'react';
import { View } from 'react-native';

const Spinner = (props) => (

    <View style={styles.containerStyle} >
      {props.children}
    </View>
  );

  const styles = {
    containerStyle: {
      borderWidth: 2,
      borderRadius: 2,
      borderColor: '#ddd',
      borderBottomWidth: 0,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 2,
      elevation: 3,
      marginLeft: 5,
      marginRight: 5,
      marginTop: 10
    }
  };

  export { Spinner };
