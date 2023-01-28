import { CompanyInterface } from 'types'

import {
  INIT_COMPANIES,
  ADD_COMPANY,
  DELETE_COMPANY,
  UPDATE_SEARCH_TERM,
  CHANGE_SORT_ORDER,
} from './actionCreators'
import {
  CompaniesReducerInterface,
  SearchTermReducerInterface,
  SortOrderReducerInterface
} from './types'

export const companiesReducer = ({
  companies,
  action
}: CompaniesReducerInterface): CompanyInterface[] => {
  const { payload, type } = action

  switch (type) {
    case INIT_COMPANIES: {
      return payload.companies
    }
    case ADD_COMPANY: {
      return [...companies, payload.company]
    }
    case DELETE_COMPANY: {
      return companies.filter((company: CompanyInterface) => company.id !== payload.id)
    }
    default: {
      return companies
    }
  }
}

export const searchTermReducer = ({
  searchTerm,
  action
}: SearchTermReducerInterface): string => {
  const { payload, type } = action

  switch (type) {
    case UPDATE_SEARCH_TERM: {
      return payload.searchTerm
    }
    default: {
      return searchTerm
    }
  }
}

export const sortOrderReducer = ({
  sortOrder,
  action
}: SortOrderReducerInterface): number => {
  const { type } = action

  switch (type) {
    case CHANGE_SORT_ORDER: {
      return sortOrder === 0 ? 1 : sortOrder === 1 ? -1 : 1
    }
    default: {
      return sortOrder
    }
  }
}
