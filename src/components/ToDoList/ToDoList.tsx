import { ToDoListItem } from "./ToDoListItem/ToDoListItem"
import { TodoContainer, TodoList } from "./ToDoList.styled"
import { ToDo } from "../../models/todo-item.interface.tsx"

export const ToDoList = (props: { todos: ToDo[], updateToDo: Function, deleteTodo: Function }) => {

  const checkedList = () => {
    return props.todos
      .filter((item) => !item.isDone)
      .map((item) => {
        return (
          <ToDoListItem
            toDoItem={item}
            key={item.id}
            updateToDo={props.updateToDo}
            deleteTodo={props.deleteTodo}
          />
        )
      })
  }

  const uncheckedList = () => {
    return props.todos
      .filter((item) => item.isDone)
      .map((item) => {
        return (
          <ToDoListItem
            toDoItem={item}
            key={item.id}
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
};
