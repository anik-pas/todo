import { useState } from 'react'
import './Form.scss'

export const Form = (props: { createNewToDo: Function }) => {
  const [text, setText] = useState<string>('')

  const formSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault()
    if (text) {
      props.createNewToDo(text)
      setText('')
    }
  }

  return (
    <div className="form-wrapper">
      <form action="#" onSubmit={formSubmit}>
        <label>
          <input
            value={text}
            type="text"
            onChange={(event) => setText(event.target.value)}
          />
          <button type='submit'></button>
        </label>
      </form>
    </div>
  )
}