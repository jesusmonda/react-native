import React from 'react';
import { Colors } from 'react-native-ui-lib';
import useProtectedRoute from '../context/auth';

export default function App() {

  useProtectedRoute(true);

  console.log("Renderizando vista APP")

  return (
    <>
    </>
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