import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useLocalSearchParams } from 'expo-router';
import { View, Text, Colors, ListItem } from 'react-native-ui-lib';
import { Chat } from '../../../types/chatType';
import getChats from '../../../services/chatService';
import ChatItem from '../../../components/chatItem';

export default function Details() {
  const params = useLocalSearchParams();
  const id: number = Number(params.id);

  const [chat, setChat] = useState<Chat>();

  useEffect(() => {
    (async function fetchData() {
      let response: {data: Chat[]} = await getChats(false)
      const index = response.data.findIndex( (x: Chat) => x.id == id)
      setChat(response.data[index]);
    })()
  }, []);

  return (
    <SafeAreaProvider>
      <View bg-screenBG flex paddingH-15>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View marginT-20>
            {
              chat === undefined ? <Text>Cargando...</Text> :
              <ListItem
                br20
                activeBackgroundColor={Colors.grey60}
                activeOpacity={0.8}
              >
                <ChatItem id={chat.id} />
              </ListItem>
            }
          </View>
        </ScrollView>
      </View>
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 54,
    height: 54,
    borderRadius: 10,
    marginHorizontal: 14
  },
  border: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.grey70
  }
});