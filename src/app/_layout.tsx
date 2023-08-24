import { Stack } from 'expo-router';
import React from 'react';
import { Provider } from 'react-redux';
import { Colors } from 'react-native-ui-lib';
import { store } from '../redux/store';
require('react-native-ui-lib/config').setConfig({appScheme: 'dark'});

export default function LoginLayout() {
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
          name="login"
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