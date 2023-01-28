export const INIT_COMPANIES = 'INIT_COMPANIES'
export const ADD_COMPANY = 'ADD_COMPANY'
export const DELETE_COMPANY = 'DELETE_COMPANY'

export const UPDATE_SEARCH_TERM = 'UPDATE_SEARCH_TERM'

export const CHANGE_SORT_ORDER = 'CHANGE_SORT_ORDER'

export const dispatchInitCompanies = (companies: any[]) => ({ type: INIT_COMPANIES, payload: { companies } })
export const dispatchAddCompany = (company: any) => ({ type: ADD_COMPANY, payload: { company } })
export const dispatchDeleteCompany = (id: number) => ({ type: DELETE_COMPANY, payload: { id } })

export const dispatchUpdateSearchTerm = (searchTerm: string) => ({ type: UPDATE_SEARCH_TERM, payload: { searchTerm } })

export const dispatchChangeSortOrder = () => ({ type: CHANGE_SORT_ORDER })

