import { useState } from "react";
import { Form } from "../components/Form/Form";
import { Header } from "../components/Header/Header";
import { ToDoList } from "../components/ToDoList/ToDoList";
import { Todo } from "../models/todo-item";

export const ToDoListPage = () => {
    const [todos, setTodos] = useState<Todo[]>([])


    const createNewToDo = (text: string) => {
        const newToDo: Todo = {
            id: todos.length,
            text: text,
            isDone: false
        }
        setTodos([...todos, newToDo])
    }
    const updateToDo = (toDoItem: Todo) => {
        const NewTodos = todos.map((todo) => {
            if (todo.id === toDoItem.id) {
                todo.isDone = !todo.isDone
            }
            return todo
        })
        setTodos(NewTodos)
    }
    const deleteTodo = (toDoItem: Todo) => {
        const NewTodos = todos.filter((todo) => todo.id !== toDoItem.id)
        setTodos(NewTodos)
    }

    return (
        <>
            <Header />
            <Form createNewToDo={createNewToDo} />
            <ToDoList todos={todos} updateToDo={updateToDo} deleteTodo={deleteTodo} />
        </>
    )
}