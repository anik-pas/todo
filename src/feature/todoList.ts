import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Todo } from '../models/todo-item'
import { v4 as uuid } from 'uuid';

export interface TodoState {
 todos: Todo[]
}

const initialState: TodoState = {
  todos: [],
}

export const todoSlice = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    createAction: (state, action: PayloadAction<string>) => {
      const newToDo: Todo = {
            id: uuid(),
            text: action.payload,
            isDone: false
        }
        state.todos = [...state.todos, newToDo]
    },
    updateAction: (state, action: PayloadAction<Todo>) => {
      const NewTodos = state.todos.map((todo) => {
            if (todo.id === action.payload.id) {
                todo.isDone = !todo.isDone
            }
            return todo
        })
        state.todos = NewTodos
    },
    deleteAction: (state, action: PayloadAction<Todo>) => {
      const NewTodos = state.todos.filter((todo) => todo.id !== action.payload.id)
    state.todos = NewTodos
    },
  },
})


export const { createAction, updateAction, deleteAction } = todoSlice.actions

export default todoSlice.reducer