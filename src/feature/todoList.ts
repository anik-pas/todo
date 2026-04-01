import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { ToDo } from '../models/todo-item.interface.tsx';
import { toast } from 'react-toastify';

export interface TodosState {
	todos: ToDo[];
}

const initialState: TodosState = {
	todos: [],
};

export const todosSlice = createSlice({
	name: 'todoList',
	initialState,
	reducers: {
		createAction: (state, action: PayloadAction<string>) => {
			const newToDo: ToDo = {
				id: crypto.randomUUID(),
				text: action.payload,
				isDone: false,
			};
			state.todos = [...state.todos, newToDo];
			toast.success(`New task added: "${action.payload}"`, {
				autoClose: 500,
			});
		},
		updateAction: (state, action: PayloadAction<ToDo>) => {
			const newTodos = state.todos.map((item) => {
				if (item.id === action.payload.id) {
					item.isDone = !item.isDone;
				}
				return item;
			});
			state.todos = newTodos;
			toast.info(`Task updated: "${action.payload.text}"`, {
				autoClose: 500,
			});
		},
		deleteAction: (state, action: PayloadAction<ToDo>) => {
			const newTodos = state.todos.filter(
				(item) => item.id !== action.payload.id,
			);

      state.todos = newTodos;
			toast.error(`Task deleted: "${action.payload.text}"`, {
				autoClose: 500,
			});
		},
	},
});

export const { createAction, updateAction, deleteAction } =
	todosSlice.actions;

export default todosSlice.reducer;