import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { View } from 'react-native-ui-lib';

export default function Profile() {

  return (
    <SafeAreaProvider>
      <View bg-screenBG flex paddingH-15>
        <ScrollView showsVerticalScrollIndicator={false}>
          
        </ScrollView>
      </View>
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}