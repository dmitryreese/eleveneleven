import React, { FC, useCallback } from 'react'

import { dispatchDeleteCompany, useDispatch } from 'store'
import { CompanyInterface } from 'types';
import { Button } from 'components/Button'

import './styles.css'

interface Props {
  company: CompanyInterface;
}

export const Company: FC<Props> = ({ company }) => {
  const dispatch = useDispatch()

  const handleDeleteCompany = useCallback(() => {
    dispatch(dispatchDeleteCompany(company.id))
  }, [company.id, dispatch])

  return (
    <div className="company">
      <div className="company-name">{company.name}</div>
      <Button onClick={handleDeleteCompany}>Delete</Button>
    </div>
  );
}
