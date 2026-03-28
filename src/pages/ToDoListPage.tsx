import { Form } from "../components/Form/Form";
import { ToDoList } from "../components/ToDoList/ToDoList";
import { Todo } from "../models/todo-item";
import { RootState } from "../store";
import { useDispatch, useSelector } from "react-redux";
import { createAction, deleteAction, updateAction } from "../feature/todoList";

export const ToDoListPage = () => {
    const todoList = useSelector((state: RootState) => state.todoList.todos)
    const dispatch = useDispatch()

    const createNewToDo = (text: string) => {
        dispatch(createAction(text))
    }
    const updateToDo = (toDoItem: Todo) => {
        dispatch(updateAction(toDoItem))
    }
    const deleteTodo = (toDoItem: Todo) => {
        dispatch(deleteAction(toDoItem))
    }

    return (
        <>
            <Form createNewToDo={createNewToDo} />
            <ToDoList todos={todoList} updateToDo={updateToDo} deleteTodo={deleteTodo} />
        </>
    )
}