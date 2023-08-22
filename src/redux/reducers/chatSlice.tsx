import { createSlice } from '@reduxjs/toolkit'
import { PayloadAction } from '@reduxjs/toolkit'
import type { Chat } from '../../types/chatType'

export interface ChatUpdate {
  id: number;
}

export const chatSlice = createSlice({
  name: 'chat',
  initialState: null as Chat[] | null,
  reducers: {
    init: (state, action: PayloadAction<Chat[]>) => {
      return action.payload
    },
    update: (state, action: PayloadAction<ChatUpdate>) => {
      const id = state.findIndex( (x: Chat) => x.id === action.payload.id)
      state[id].favorite = (state[id].favorite) ? !state[id].favorite : true
      return state
    },
  },
})

export const { init, update } = chatSlice.actions
export default chatSlice.reducer