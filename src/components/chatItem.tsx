import React from 'react';
import { Text, Colors, ListItem, Image, TouchableOpacity } from 'react-native-ui-lib';
import { Ionicons } from '@expo/vector-icons';
import { update } from '../redux/reducers/chatSlice'
import { useDispatch, useSelector } from 'react-redux'
import type { Chat } from '../types/chatType';
import { StyleSheet } from 'react-native';
import { RootState } from '../redux/store';

export interface Props {
  id: number;
}

export default function ChatItem(props: Props) {
  const chat: {data: Chat[]} | null = useSelector((state:RootState) => state.chat)
  const dispatch = useDispatch()
  const id: number = props.id;

  const index = chat.data.findIndex( (x: Chat) => x.id == id)
  const item: Chat = chat.data[index];

  const star = (): void => {
    dispatch(update({id: id}))
  }

  return (
    <>
      <ListItem.Part left>
      <Image width={54} height={54} source={{uri: 'https://learnenglish.britishcouncil.org/sites/podcasts/files/2021-10/RS6715_492969113-hig.jpg'}} style={styles.image} />
      </ListItem.Part>
      <ListItem.Part middle column containerStyle={[styles.border, {paddingRight: 17}]}>
        <ListItem.Part containerStyle={{marginBottom: 3}}>
            <Text flex marginR-10 color={Colors.primaryText} text70 numberOfLines={1}>{item.name}</Text>
            <Text color={Colors.primaryText} text80>{item.year}</Text>
        </ListItem.Part>
        <ListItem.Part>
            <Text
            flex
            marginR-10
            text80
            color={Colors.secondaryText}
            numberOfLines={1}
            >Hola, que tal?</Text>
            <TouchableOpacity onPress={star}>
            <Ionicons name={item.favorite ? 'star' : 'star-outline'} size={17} color={Colors.secondaryText} />
            </TouchableOpacity>
        </ListItem.Part>
      </ListItem.Part>
    </>
  );
}

const styles = StyleSheet.create({
  image: {
    borderRadius: 10,
    marginHorizontal: 14
  },
  border: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.grey70
  }
});