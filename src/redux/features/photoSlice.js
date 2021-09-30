import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl='https://jsonplaceholder.typicode.com'

export const getPhotosAsync = createAsyncThunk(
	'photos/getPhotosAsync',
	async () => {
		try {
			const req=axios.get(`${baseUrl}/photos`);
			const resp = await req;
	
			const photos = await resp.data;
			return { photos };
	
		} catch (err) {
			console.error(err);
		}

	}
);


export const photoSlice = createSlice({
	name: 'photos',
	initialState: [],
	extraReducers: {
		[getPhotosAsync.fulfilled]: (state, action) => {
			return action.payload.photos
		}
	},
});

export default photoSlice.reducer;
