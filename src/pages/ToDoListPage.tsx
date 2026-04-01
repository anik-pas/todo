import { Form } from '../components/Form/Form';
import { ToDoList } from '../components/ToDoList/ToDoList';
import type { ToDo } from '../models/todo-item.interface.tsx';

import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../store';
import { deleteAction, updateAction } from '../feature/todoList';

export const ToDoListPage = () => {
  const todoList = useSelector(
    (state: RootState) => state.todoList.todos,
  );
  const dispatch = useDispatch();

  const updateToDo = (toDoItem: ToDo): void => {
    dispatch(updateAction(toDoItem));
  };
  const deleteToDo = (toDoItem: ToDo): void => {
    dispatch(deleteAction(toDoItem));
  };

  return (
    <>
      <Form />
      <ToDoList
        todos={todoList}
        updateToDo={updateToDo}
        deleteTodo={deleteToDo}
      />
    </>
  );
};