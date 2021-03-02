import SplashScreen from 'react-native-splash-screen';
import React from 'react';
import {StatusBar} from 'react-native';
import MainNavigator from './src';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/es/integration/react';
import {store, persistor} from './src/redux/store';
const App = () => {
  React.useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <>
      <StatusBar translucent backgroundColor="white" barStyle="dark-content" />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
        <StatusBar backgroundColor="#0099ff" barStyle="light-content" />
          <MainNavigator />
        </PersistGate>
      </Provider>
    </>
  );
};

export default App;
