import type { ToDo } from '../../models/todo-item.interface.tsx';
import { ListItemLink } from './ListItem.styled';

export const ListItem = ({ todo }: { todo: ToDo }) => {
  return (
    <ListItemLink
      to={`/list/${todo.id}`}
      $isDone={todo.isDone}>
      {todo.text}{' '}
    </ListItemLink>
  );
};