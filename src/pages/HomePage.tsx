import { ListItem } from "../components/ListItem/ListItem"
import { Todo } from "../models/todo-item"

interface ComponentProps {
  todos: Todo[]
}

export const HomePage = ({ todos }: ComponentProps) => {
  return (
    <div className='container'>
      {
        todos.map((todo: Todo, idx: number) => {
          return (<ListItem todo={todo} key={idx} />)
        })
      }
    </div>
  )
}