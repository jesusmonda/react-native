import { createSlice } from '@reduxjs/toolkit'
import { PayloadAction } from '@reduxjs/toolkit'
import type { Chat } from '../../types/chatType'

export interface ChatUpdate {
  id: number;
}

export const chatSlice = createSlice({
  name: 'chat',
  initialState: null as {data: Chat[]} | null,
  reducers: {
    init: (state, action: PayloadAction<{data: Chat[]}>) => {
      return action.payload
    },
    update: (state, action: PayloadAction<ChatUpdate>) => {
      const id = state.data.findIndex( (x: Chat) => x.id === action.payload.id)
      state.data[id].favorite = (state.data[id].favorite) ? !state.data[id].favorite : true
      return state
    },
  },
})

export const { init, update } = chatSlice.actions
export default chatSlice.reducer