import React, { FC, useCallback, useState } from 'react';

import { dispatchUpdateSearchTerm, useDispatch } from 'store';

import './styles.css'

export const SearchBar: FC = () => {
  const dispatch = useDispatch()
  const [inputValue, setInputValue] = useState<string>('')

  const handleOnChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
    dispatch(dispatchUpdateSearchTerm(e.target.value))
  }, [dispatch])

  return (
    <input
      className="search-bar"
      placeholder="Search"
      value={inputValue}
      onChange={handleOnChange}
    />
  );
}
