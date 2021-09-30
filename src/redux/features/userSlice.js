import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl='https://jsonplaceholder.typicode.com'

export const getUsersAsync = createAsyncThunk(
	'users/getUsersAsync',
	async () => {
		try {
			const req=axios.get(`${baseUrl}/users`);
			const resp = await req;
	
			const users = await resp.data;
			return { users };
	
		} catch (err) {
			console.error(err);
		}

	}
);


export const userSlice = createSlice({
	name: 'users',
	initialState: [],
	extraReducers: {
		[getUsersAsync.fulfilled]: (state, action) => {
			return action.payload.users;
		}
	},
});

export default userSlice.reducer;
