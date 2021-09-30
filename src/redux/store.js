import { configureStore } from '@reduxjs/toolkit';

import userReducer from './features/userSlice';
import albumReducer from './features/albumSlice';
import todoReducer from './features/todoSlice';
import postReducer from './features/postSlice';
import photoReducer from './features/photoSlice';

export default configureStore({
	reducer: {
		users: userReducer,
		albums: albumReducer,
		todos: todoReducer,
		posts: postReducer,
		photos: photoReducer,
	},
});
