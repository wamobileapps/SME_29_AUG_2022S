import React, {useState, useEffect} from 'react';
import {Alert, StyleSheet} from 'react-native';
import AppNavigator from './navigation/AppNavigator';
import {Provider} from 'react-redux';
import store from './redux/store';

const App = props => {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
