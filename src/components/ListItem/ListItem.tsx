import { Todo } from "../../models/todo-item"
import { StyledLink } from './ListItem.styles'

export const ListItem = ({ todo }: { todo: Todo }) => {
  return (
    <StyledLink
      $isDone={todo.isDone}
      target="_blank"
      rel="noreferrer"
      href={`/todo/list/${todo.id}`}>{todo.text}</StyledLink>
  )
}
