import {createSlice} from '@reduxjs/toolkit'
import appApi from '../../services/appApi'

export const initialState = null

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {}
})

export default productSlice.reducer