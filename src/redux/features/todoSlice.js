import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl='https://jsonplaceholder.typicode.com'

export const getTodosAsync = createAsyncThunk(
	'todos/getTodosAsync',
	async () => {
		try {
			const req=axios.get(`${baseUrl}/todos`);
			const resp = await req;
	
			const todos = await resp.data;
			return { todos };
	
		} catch (err) {
			console.error(err);
		}

	}
);


export const todoSlice = createSlice({
	name: 'todos',
	initialState: [],
	extraReducers: {
		[getTodosAsync.fulfilled]: (state, action) => {
			return action.payload.todos;
		}
	},
});

export default todoSlice.reducer;
