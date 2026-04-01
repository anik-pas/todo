import { useState } from 'react'
import { FormControl, FormField, FormInput, FormLabel, FormWrapper } from './Form.styled'

import plusIcon from '../../assets/images/plus.png'

import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '../../store'
import { createAction } from '../../feature/todoList'
import { clearValue, setValue } from '../../feature/formSlice'

export const Form = () => {
  const dispatch = useDispatch()
  const task = useSelector((state: RootState) => state.form.value)

  const formSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault()
    if (task) {
      dispatch(createAction(task))
      dispatch(clearValue())
    }
  }

  return (
    <FormField action="#" onSubmit={formSubmit}>
      <FormLabel>
        <FormInput
          type="text"
          value={task}
          onChange={(event) => dispatch(setValue(event.target.value))}
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              formSubmit(event);
            }
          }}
        />
        <FormControl $icon={plusIcon} />
      </FormLabel>
    </FormField>
  )
}