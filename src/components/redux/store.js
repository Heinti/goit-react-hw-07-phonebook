// import { legacy_createStore as createStore } from "redux";
// import {devToolsEnhancer} from '@redux-devtools/extension'
// const initialState = {
//     tasks: [
//         { id: 0, text: "Learn HTML and CSS", completed: true },
//         { id: 1, text: "Get good at JavaScript", completed: true },
//         { id: 2, text: "Master React", completed: false },
//         { id: 3, text: "Discover Redux", completed: false },
//         { id: 4, text: "Build amazing apps", completed: false },
//       ],
//       filters: {
//         status: "all",
//       },

// }

// const rootReducer = (state = initialState, action) =>{
//     return state;
// }
// const enhancer = devToolsEnhancer();

// export const store = createStore(rootReducer, enhancer)

import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage';


import { contactsReducer } from './contactSlice';
import { filterReducer } from './filterSlice';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

const persistConfig = {
  key: 'root',  
  storage,
  whitelist: ['contacts']
};

const persistRootReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistRootReducer,
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  },
);

export const persistor = persistStore(store)



// import { createSlice } from "@reduxjs/toolkit";

// export const increment = createAction('myValue/increment')
// export const decrement = createAction('myValue/decrement')

// const myReducer = createReducer (10, {
// [increment]: (state, action)=> state + action.payload,
// [decrement]: (state, action)=> state - action.payload,
// })
// const myValueSlice = createSlice({
//   name: "myValue",
//   initialState: 10,
//   reducers: {
//     increment(state, action) {
//       return state += action.payload
//     },
//     decrement(state, action){
//       return state -= action.payload
//     }
//   }
// })

//   export const {increment, decrement} = myValueSlice.actions

// export const store = configureStore({
//   reducer: {
//     myValue: myValueSlice.reducer,
//   }
// })
