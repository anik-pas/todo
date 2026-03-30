import { useSelector } from "react-redux"
import { ListItem } from "../components/ListItem/ListItem"
import { Todo } from "../models/todo-item"
import { RootState } from "../store"

export const ViewList = () => {
  const todoList = useSelector((state: RootState) => state.todoList.todos)

  return (
    <div className='container'>
      {
        todoList.map((todo: Todo) => {
          return (<ListItem todo={todo} key={todo.id} />)
        })
      }
    </div>
  )
}