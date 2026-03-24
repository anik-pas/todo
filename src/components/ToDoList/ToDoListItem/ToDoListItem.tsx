import './ToDoListItem.scss'
export const ToDoListItem = () => {
  return (
    <li className="todo-list-item__wrapper">
      <span>Первая задача</span>
      <div className="todo-list-item__buttons">
        <button type="button" className="btn-trash"></button>
        <button type="button" className="btn-check"></button>
      </div>
    </li>
  )
}