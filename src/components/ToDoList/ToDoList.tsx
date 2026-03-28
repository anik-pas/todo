import { ToDoListItem } from "./ToDoListItem/ToDoListItem"
import { TodoContainer, TodoList } from "./ToDoList.styles"
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
    <TodoContainer>
      <TodoList $variant="failed">
        {checkedList()}
      </TodoList>
      <TodoList $variant="completed">
        {uncheckedList()}
      </TodoList>
    </TodoContainer>
  )
}
