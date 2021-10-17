import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import { Provider } from 'react-redux';
import  store from './src/redux/store';
import RootStack from './src/navigation/stack/RootStack';

const App = () => {

  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
        <Provider store={store}>
            <NavigationContainer>
                <RootStack />
            </NavigationContainer>
        </Provider>
  )
}

export default App;