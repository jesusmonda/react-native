import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { View, Button, TextField, Colors, Image } from 'react-native-ui-lib';
import useProtectedRoute, { useAuth } from '../context/auth';
import login from '../services/loginService';
import type { Login } from '../types/loginType';

export default function App() {
  useProtectedRoute("nonAutenticated");
  
  const onLogin = async function() {
    try {
      const response: Login = await login({
        username: 'kminchelle',
        password: '0lelplR',
        expiresInMins: 1
      })
      useAuth().signIn(response);
    } catch (error: any) {
      console.log(error)
    }
  }

  return (
    <SafeAreaProvider>
      <View bg-screenBG flex paddingH-15>
        <View flex center>
          <Image width={60} height={60} source={{uri: 'https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png'}} />
          <View marginT-40 row br30 padding-10 style={{borderWidth: 1, borderColor: "#ecf0f7"}}>
            <TextField marginL-10 placeholder={'Email'} containerStyle={{flex:1}} />
          </View>
          <View marginT-20 row br30 padding-10 style={{borderWidth: 1, borderColor: "#ecf0f7"}}>
            <TextField marginL-10 placeholder={'Password'} containerStyle={{flex:1}} />
          </View>
          <View marginT-30 style={{ width: '100%' }}>
            <Button br20 label={'Sign in'} size={Button.sizes.large} backgroundColor={Colors.primaryColor} onPress={onLogin} />
          </View>
        </View>
        <View bottom marginB-30>
          <Button text80 link label={"Don't have an account yet? Sign up"} color={Colors.secondaryText} />
        </View>
      </View>
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}