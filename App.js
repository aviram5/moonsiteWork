import 'react-native-gesture-handler';
import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import {store} from './src/store';
import {Provider as StoreProvider} from 'react-redux';
import {I18nManager} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';

export default function App() {
  I18nManager.forceRTL(true);

  return (
    <StoreProvider store={store}>
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </StoreProvider>
  );
}
