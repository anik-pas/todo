import { Form } from "../components/Form/Form";
import { ToDoList } from "../components/ToDoList/ToDoList";
import { Todo } from "../models/todo-item";
import { RootState } from "../store";
import { useDispatch, useSelector } from "react-redux";
import { deleteAction, updateAction } from "../feature/todoList";

export const ToDoListPage = () => {
    const todoList = useSelector((state: RootState) => state.todoList.todos)
    const dispatch = useDispatch()

    const updateToDo = (toDoItem: Todo) => {
        dispatch(updateAction(toDoItem))
    }
    const deleteTodo = (toDoItem: Todo) => {
        dispatch(deleteAction(toDoItem))
    }

    return (
        <>
            <Form />
            <ToDoList todos={todoList} updateToDo={updateToDo} deleteTodo={deleteTodo} />
        </>
    )
}