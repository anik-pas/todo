import { Todo } from '../../../models/todo-item'
import { ToDoItem, ToDoItemControl, ToDoItemControls, ToDoItemText } from './ToDoListItem.styled'

import checkIcon from '../../../assets/images/check.png'
import trashIcon from '../../../assets/images/trash.png'
import uncheckIcon from '../../../assets/images/uncheck.png'

export const ToDoListItem = (props: { toDoItem: Todo, updateToDo: Function, deleteTodo: Function }) => {
  return (
    <ToDoItem>
      <ToDoItemText>{props.toDoItem.text}</ToDoItemText>
      <ToDoItemControls>
        <ToDoItemControl
          icon={trashIcon}
          onClick={() => props.deleteTodo(props.toDoItem)}
        ></ToDoItemControl>
        <ToDoItemControl
          icon={props.toDoItem.isDone ? checkIcon : uncheckIcon}
          onClick={() => props.updateToDo(props.toDoItem)}
        ></ToDoItemControl>
      </ToDoItemControls>
    </ToDoItem>
  )
}