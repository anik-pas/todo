import { useSelector } from "react-redux"
import { ListItem } from "../components/ListItem/ListItem"
import { Todo } from "../models/todo-item"
import { RootState } from "../store"

export const ViewList = () => {
  const todoList = useSelector((state: RootState) => state.todoList.todos)

  return (
    <div className='container'>
      {
        todoList.map((todo: Todo, idx: number) => {
          return (<ListItem todo={todo} key={idx} />)
        })
      }
    </div>
  )
}