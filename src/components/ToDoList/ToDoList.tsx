import { ToDoListItem } from "./ToDoListItem/ToDoListItem"
import './ToDoList.scss'
import { Todo } from "../../models/todo-item"

export const ToDoList = (props: { todos: Todo[], updateToDo: Function, deleteTodo: Function }) => {

  const checkedList = () => {
    return props.todos
      .filter((item) => !item.isDone)
      .map((item, idx) => {
        return (
          <ToDoListItem
            toDoItem={item}
            key={idx}
            updateToDo={props.updateToDo}
            deleteTodo={props.deleteTodo}
          />
        )
      })
  }

  const uncheckedList = () => {
    return props.todos
      .filter((item) => item.isDone)
      .map((item, idx) => {
        return (
          <ToDoListItem
            toDoItem={item}
            key={idx}
            updateToDo={props.updateToDo}
            deleteTodo={props.deleteTodo}
          />
        )
      })
  }

  return (
    <div className="todo-container" >
      <ul className="todo-list failed">
        {checkedList()}
      </ul>
      <ul className="todo-list completed">
        {uncheckedList()}
      </ul>
    </div>
  )
}