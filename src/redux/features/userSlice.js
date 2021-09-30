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

export const addUserAsync = createAsyncThunk(
	'users/addUserAsync',
	async (payload) => {
		try {
			const req=axios.post(`${baseUrl}/users`,payload);
			const resp = await req;
	
			const users = await resp.data;
			return { users };
	
		} catch (err) {
			console.error(err);
		}
	}
);

export const updateUserAsync = createAsyncThunk(
	'users/updateUserAsync',
	async (payload) => {
		try {
			const req=axios.patch(`${baseUrl}/users`,payload);
			const resp = await req;
	
			const users = await resp.data;
			return { users };
	
		} catch (err) {
			console.error(err);
		}
	}
);

export const deleteUserAsync = createAsyncThunk(
	'users/deleteUserAsync',
	async (userId) => {
		try {
			const req=axios.get(`${baseUrl}/users`);
			const resp = await req;
	
			const users = await resp.data;
			users.filter(user=>user.id!==userId);
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
		},
		[deleteUserAsync.fulfilled]: (state, action) => {
			return action.payload.users;
		},
	},
});

export default userSlice.reducer;
