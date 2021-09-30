import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl='https://jsonplaceholder.typicode.com'

export const getPostsAsync = createAsyncThunk(
	'posts/getPostsAsync',
	async () => {
		try {
			const req=axios.get(`${baseUrl}/posts`);
			const resp = await req;
	
			const posts = await resp.data;
			return { posts };
	
		} catch (err) {
			console.error(err);
		}

	}
);


export const postSlice = createSlice({
	name: 'posts',
	initialState: [],
	extraReducers: {
		[getPostsAsync.fulfilled]: (state, action) => {
			return action.payload.posts;
		}
	},
});

export default postSlice.reducer;
