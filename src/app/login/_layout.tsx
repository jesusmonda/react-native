import { Stack } from 'expo-router';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Colors, TouchableOpacity } from 'react-native-ui-lib';

export default function LoginLayout() {
  return (
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
          headerShown: true,
          title: "",
          headerBackVisible: false,
          headerRight: () => {
            return (
              <TouchableOpacity>
                <Ionicons name="person-outline" size={24} color={Colors.secondaryText} />
              </TouchableOpacity>
            )
          }
        }}
      />
    </Stack>
  );
}