import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './feature/todoList';
import formReducer from './feature/formSlice';
import themeReducer from './feature/themeSlice';
import { loadFromLocalStorage, saveToLocalStorage } from './helpers/storage';


export const store = configureStore({
	reducer: {
		todoList: todosReducer,
    form: formReducer,
		themeList: themeReducer
	},
	preloadedState: loadFromLocalStorage(),
});

store.subscribe(() => saveToLocalStorage(store.getState()));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;