import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
axios.defaults.baseURL = 'https://6427e89046fd35eb7c47c37d.mockapi.io/'

export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll',
    async (_, thunkAPI) =>{
        try {
            const res = await axios.get('/contacts')

            return res.data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
)
export const addContact = createAsyncThunk(
    'contacts/addContact',
    async ({name, phone}, thunkAPI) =>{
        try {
            const res = await axios.post('/contacts', {name, phone})
            return res.data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
)

export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (contactId, thunkAPI) =>{
        try {
            const res = await axios.delete(`/contacts/${contactId}`)
            return res.data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
)