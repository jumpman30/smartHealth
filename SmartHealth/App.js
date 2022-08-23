import * as React from 'react';
import AppNavigator from './navigator/AppNavigator';
import {enableScreens} from 'react-native-screens';
import {Provider} from 'react-redux';
import store from './store/store';
enableScreens();




export default function App(){
  return (
    <Provider store={store}>

      <AppNavigator/>

    </Provider>
  )
}
