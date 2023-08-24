import { createSlice } from '@reduxjs/toolkit'
import { PayloadAction } from '@reduxjs/toolkit'
import type { Login } from '../../types/loginType'

export const loginSlice = createSlice({
  name: 'login',
  initialState: null as Login | null,
  reducers: {
    init: (state, action: PayloadAction<Login | null>) => {
      return action.payload
    },
  },
})

export const { init } = loginSlice.actions
export default loginSlice.reducer