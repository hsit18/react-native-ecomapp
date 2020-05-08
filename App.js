/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';

const App = () => {
  return (
    <View>
      <Text>Ecom App</Text>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" />
      </View>
    </View>
  );
};

export default App;
