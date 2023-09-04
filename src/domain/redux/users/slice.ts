import {createSlice} from "@reduxjs/toolkit";

export const initialState = null

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {},
})

// export const {logout, addNotification, resetNotifications} = userSlice.actions

export default userSlice.reducer