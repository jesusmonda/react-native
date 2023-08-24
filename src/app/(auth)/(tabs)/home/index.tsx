import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { RefreshControl, ScrollView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { View, Text, Colors, Button, TextField, ListItem } from 'react-native-ui-lib';
import { Ionicons } from '@expo/vector-icons';
import getChats from '../../../../services/chatService';
import type { Chat } from '../../../../types/chatType';
import ChatItem from '../../../../components/chatItem';
import { useAuth } from '../../../../context/auth';

export default function Home() {
  const [chats, setChats] = useState<Chat[]>();
  const [refresh, setRefresh] = useState<boolean>(false);

  useEffect(() => {
    (async function _() {
      init(false);
    })()
  }, []);

  const init = async (makeRequest: boolean) => {
    let response = await getChats(makeRequest)
    setChats(response.data);
  }

  const onRefresh = () => {
    setRefresh(true);
    setTimeout( () => setRefresh(false), 1000);
    init(true);
  }

  return (
    <SafeAreaProvider>
      <View bg-screenBG flex paddingH-15>
        <ScrollView showsVerticalScrollIndicator={false} refreshControl={<RefreshControl refreshing={refresh} onRefresh={() => onRefresh()} />}>
          <View flex row br30 padding-10 style={{borderWidth: 1, borderColor: "#ecf0f7"}}>
            <Ionicons name="search" size={24} color={Colors.secondaryText} />
            <TextField marginL-10 placeholder={'Buscador'} containerStyle={{flex:1}} />
          </View>
          <View row marginT-20>
            <Button marginR-40 label={'Press'} size={Button.sizes.large} backgroundColor={Colors.primaryColor} />
            <Button marginR-40 label={'Press'} size={Button.sizes.large} link={true} color={Colors.secondaryText} />
            <Button label={'Press'} size={Button.sizes.large} link={true} color={Colors.secondaryText} />
          </View>
          <View marginT-20>
            <Text color={Colors.primaryText} text40>Usuario logeado {useAuth().user.username}</Text>
            <Text color={Colors.secondaryText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pellentesque dui eu justo tincidunt, non sodales quam interdum. Aliquam aliquam ornare enim porta condimentum. In nec nisl aliquam, suscipit nunc sed, sollicitudin sem. In tincidunt sed mi eu elementum. Praesent dui orci, dignissim id diam at, ullamcorper finibus tellus. Nullam sapien enim, ultrices eu eleifend ac, pulvinar id elit. Fusce at dignissim ante, at dignissim purus. Mauris rhoncus ipsum id erat dictum, quis porttitor lectus convallis. Sed eros arcu, aliquet vitae nisi non, mattis porttitor sem. Nunc vitae varius libero, nec suscipit urna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque semper cursus commodo. Nunc ut orci in nunc euismod dignissim. Curabitur vitae posuere est.</Text>
          </View>
          <View marginT-20>
            <Text text40>Chats</Text>
            {
              chats === undefined ? <Text>Cargando...</Text> :
              chats.map((item:Chat)=> (
                <ListItem
                  br20
                  activeBackgroundColor={Colors.grey60}
                  activeOpacity={0.8}
                  key={item.id}
                  onPress={() => router.push({pathname:'/details', params: { id: item.id }})}
                >
                  <ChatItem id={item.id} />
                </ListItem>
              ))
            }
          </View>
        </ScrollView>
      </View>
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}