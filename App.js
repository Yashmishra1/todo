import { View, Text } from 'react-native'
import React from 'react'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Navigation from './src/navigation/navigator';
import { persistor, store } from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <Navigation />
        </PersistGate>
    </Provider>
  )
}

export default App;