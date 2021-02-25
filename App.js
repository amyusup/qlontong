import SplashScreen from 'react-native-splash-screen';
import React from 'react';
import {StatusBar} from 'react-native';
import MainNavigator from './src';
const App = () => {
  React.useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <>
      <StatusBar translucent backgroundColor="white" barStyle="dark-content" />
      <MainNavigator />
    </>
  );
};

export default App;
