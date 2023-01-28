import { CompanyInterface } from 'types'

import {
  companiesReducer,
  sortOrderReducer,
  searchTermReducer,
} from './reducers'

import {
  dispatchChangeSortOrder,
  dispatchUpdateSearchTerm,
  dispatchAddCompany,
  dispatchDeleteCompany,
  dispatchInitCompanies,
} from '../actionCreators'

const COMPANIES: CompanyInterface[] = [
  { name: 'CompanyOne', id: 1 },
  { name: 'CompanyTwo', id: 2 },
  { name: 'CompanyThree', id: 3 },
  { name: 'CompanyZero', id: 0 },
]

describe('reducers', () => {
  describe('companiesReducer', () => {
    it('should init companies with an array of available companies', () => {
      const companies = companiesReducer({ companies: [], action: dispatchInitCompanies(COMPANIES) })

      expect(companies).toEqual(COMPANIES)
    })

    it('should add a new company to an array of existing companies', () => {
      const testCompany = { name: 'TestCompany', id: 100 }
      const companies = companiesReducer({
        companies: COMPANIES,
        action: dispatchAddCompany(testCompany)
      })

      expect(companies).toEqual([...COMPANIES, testCompany])
    })

    it('should delete a company from an existing array and return an updated array', () => {
      const id = 0
      const companies = companiesReducer({ companies: COMPANIES, action: dispatchDeleteCompany(id) })

      expect(companies).toEqual(COMPANIES.filter((company) => company.id !== id))
    })
  })

  describe('sortOrderReducer', () => {
    it('should change sort order to -1 if current sortOrder equals 1', () => {
      const sortOrder = sortOrderReducer({ sortOrder: 1, action: dispatchChangeSortOrder() })

      expect(sortOrder).toEqual(-1)
    })
  })

  describe('searchTermReducer', () => {
    it('should update searchTerm', () => {
      const updatedSearchTerm = 'updated'
      const searchTerm = searchTermReducer({ searchTerm: '', action: dispatchUpdateSearchTerm(updatedSearchTerm) })

      expect(searchTerm).toEqual(updatedSearchTerm)
    })
  })
})
