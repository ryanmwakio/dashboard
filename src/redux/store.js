import { configureStore } from '@reduxjs/toolkit';

import userReducer from './features/userSlice';
import albumReducer from './features/albumSlice';

export default configureStore({
	reducer: {
		users: userReducer,
		albums: albumReducer,
	},
});
