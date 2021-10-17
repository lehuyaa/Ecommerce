import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './src/navigation/stack/AuthStack';
import AppStack from './src/navigation/stack/AppStack';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <NavigationContainer>
      {/* <AppStack /> */}
      <AuthStack />
    </NavigationContainer>
  )
}

export default App;