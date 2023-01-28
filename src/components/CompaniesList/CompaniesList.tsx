import React, { FC, useCallback, useEffect, useState } from 'react';

import {
  dispatchChangeSortOrder,
  dispatchInitCompanies,
  useDispatch,
  useStore,
} from 'store';

import { api } from 'api'
import { CompanyInterface } from 'types';
import { AddCompany } from 'components/AddCompany'
import { Company } from 'components/Company'
import { SearchBar } from 'components/SearchBar'

import './styles.css'

export const CompaniesList: FC = () => {
  const dispatch = useDispatch()
  const { companies, searchTerm, sortOrder } = useStore()

  const [isLoading, setIsLoading] = useState<boolean>(false)

  const displayedCompanies = companies.filter(
    (company: CompanyInterface) =>
      searchTerm.length > 0 ? company.name.toLowerCase().includes(searchTerm) : company
  ).sort((a: CompanyInterface, b: CompanyInterface) => {
    if (a.name.toLowerCase() < b.name.toLowerCase()) return -1 * sortOrder
    if (a.name.toLowerCase() > b.name.toLowerCase()) return 1 * sortOrder
    return 0
  })

  const handleChangeSortOrder = useCallback(
    () => dispatch(dispatchChangeSortOrder()),
    [dispatch]
  )

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const companies = await api.get('/2956f768defa023003a6')

        dispatch(dispatchInitCompanies(companies))
        setIsLoading(false)
      } catch (err) {}
    }

    setIsLoading(true)
    fetchCompanies()
  }, [dispatch])

  return (
    <div className="companies-list">
      <div className="companies-list-header">
        <SearchBar />
        <AddCompany />
      </div>
      <div className="companies-list-sort">
        <div
          className="companies-list-sort-header"
          onClick={handleChangeSortOrder}
        >
          Company name
        </div>
        <div className="companies-list-sort-order-wrapper">
          <div className="companies-list-sort-order-up"></div>
          <div className="companies-list-sort-order-down"></div>
        </div>
      </div>
        {
          isLoading ?
          <div className="companies-list-loading">Loading...</div> :
          displayedCompanies
            .map((company : any) => <Company key={company.id} company={company} />)
        }
    </div>
  );
}
