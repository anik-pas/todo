import { useState } from 'react'
import { FormBlock, FormControl, FormField, FormLabel, FormWrapper } from './Form.slyle'

import plusIcon from '../../assets/images/plus.png'

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
    <FormWrapper>
      <FormBlock action="#" onSubmit={formSubmit}>
        <FormLabel>
          <FormField
            value={text}
            type="text"
            onChange={(event) => setText(event.target.value)}
          />
          <FormControl icon={plusIcon} />
        </FormLabel>
      </FormBlock>
    </FormWrapper>
  )
}