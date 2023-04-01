import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = "";

const filterSlice = createSlice({
    name: 'filter',
    initialState: filterInitialState,
    reducers:{
        getFilterValue (state, action) {
         return action.payload
        }
    }
})

export const {getFilterValue} = filterSlice.actions;
export const filterReducer = filterSlice.reducer;