import React, { FC, useCallback, useState } from 'react';

import { dispatchAddCompany, useDispatch } from 'store';
import { Button } from 'components/Button'

import './styles.css'

export const AddCompany: FC = () => {
  const dispatch = useDispatch()
  const [inputValue, setInputValue] = useState<string>('')

  const handleOnChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }, [])

  const handleAddCompany = useCallback(() => {
    dispatch(dispatchAddCompany({ name: inputValue, id: Math.random() }))
    setInputValue('')
  }, [dispatch, inputValue])

  return (
    <div>
      <input
        className='add-company'
        placeholder="Company name"
        value={inputValue}
        onChange={handleOnChange}
      />
      <Button disabled={inputValue === ''} onClick={handleAddCompany}>Add</Button>
    </div>
  );
}
