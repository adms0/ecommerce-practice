import {configureStore} from "@reduxjs/toolkit";
import productSlice from "./redux/products/slice";
import userSlice from "./redux/users/slice";
import appApi from "./services/appApi";

// persit our store
import storage from "redux-persist/lib/storage";
import {combineReducers} from 'redux'
import {persistCombineReducers, persistReducer} from 'redux-persist'
import thunk from 'redux-thunk'

// reducers
const reducer = combineReducers({
  user: userSlice,
  products: productSlice,
  [appApi.reducerPath]: appApi.reducer
})

const persistConfig = {
  key: 'root',
  storage,
  blackList: [appApi.reducerPath, 'products']
}

// persist our store
const persistedReducer = persistReducer(persistConfig, reducer)

// creating the store
const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk, appApi.middleware]
})

export default store