import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl='https://jsonplaceholder.typicode.com'

export const getAlbumsAsync = createAsyncThunk(
	'albums/getAlbumsAsync',
	async () => {
		try {
			const req=axios.get(`${baseUrl}/albums`);
			const resp = await req;
	
			const albums = await resp.data;
			return { albums };
	
		} catch (err) {
			console.error(err);
		}

	}
);


export const albumSlice = createSlice({
	name: 'albums',
	initialState: [],
	extraReducers: {
		[getAlbumsAsync.fulfilled]: (state, action) => {
			return action.payload.albums;
		}
	},
});

export default albumSlice.reducer;
