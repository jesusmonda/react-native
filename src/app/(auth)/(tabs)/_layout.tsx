import { Tabs } from 'expo-router/tabs';
import React from "react";
import { Ionicons } from '@expo/vector-icons';
import { Colors } from 'react-native-ui-lib';

export default function AppLayout() {
  return (
    <Tabs screenOptions={{
      headerShown: false,
      tabBarShowLabel: true,
      tabBarActiveTintColor: Colors.primaryColor,
      tabBarInactiveTintColor: Colors.secondaryText,
    }}>

      <Tabs.Screen
        name="home"
        options={{
          href: "/home",
          title: "Home",
          tabBarIcon: ({ focused, color }) => {
            return <Ionicons name='home-outline' size={24} color={color} />;
          },
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          href: "/profile",
          title: "Profile",
          tabBarIcon: ({ focused, color }) => {
            return <Ionicons name='person-outline' size={24} color={color} />;
          },
        }}
      />
    </Tabs>
  );
}