import { useEffect, useState } from 'react';
import type { ToDo } from '../../models/todo-item.interface.tsx';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import type { RootState } from '../../store';



export const ItemDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const todoList = useSelector((state: RootState) => state.todoList.todos)
  const [todo, setTodo] = useState<ToDo>();

  const checkTodo = () => {
    const targetTodo = todoList.find((item) => String(item.id) === id);
    if (targetTodo) {
      setTodo(targetTodo);
    } else {
      navigate('/not-found');
    }
  };

  useEffect(() => {
    checkTodo();
  }, [todoList, id, navigate]);

  return (
    <div className='block-center'>
      <h1>{todo?.text} </h1>
    </div>
  );
};