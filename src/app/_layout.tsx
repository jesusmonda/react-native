import { Stack } from 'expo-router';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import { Ionicons } from '@expo/vector-icons';
require('react-native-ui-lib/config').setConfig({appScheme: 'dark'});
import { Colors, Text, TouchableOpacity } from 'react-native-ui-lib';

export default function AppLayout() {
  return (
    <Provider store={store}>
      <Stack
        screenOptions={{
          headerTintColor: Colors.primaryText,
          headerShadowVisible: false,
          headerLargeTitle: true,
        }}
        >
        <Stack.Screen
          name="index"
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="(auth)/details/index"
          options={{
            title: "Details",
          }}
        />

        <Stack.Screen
          name="(auth)/(tabs)"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
  </Provider>
  );
}

Colors.loadColors({
  primaryTextLight: '#1c1c1c',
  secondaryTextLight: '#a5a5a5',
  primaryTextDark: '',
  secondaryTextDark: '',
  primaryColor: '#027fe9',
});

Colors.loadSchemes({
  light: {
    screenBG: '#fff',
    primaryText: Colors.primaryTextLight,
    secondaryText: Colors.secondaryTextLight,
    primaryColor: Colors.primaryColor,
  },
  dark: {
    screenBG: '#000',
    primaryText: Colors.primaryTextDark,
    secondaryText: Colors.secondaryTextDark,
    primaryColor: Colors.primaryColor,
  }
});