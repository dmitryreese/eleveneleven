import { CompanyInterface } from "types";

export interface StoreInterface {
  searchTerm: string;
  companies: CompanyInterface[],
  sortOrder: number,
}

export interface ActionInterface {
  payload?: any;
  type: string;
}

export interface CompaniesReducerInterface {
  companies: CompanyInterface[],
  action: ActionInterface;
}

export interface SearchTermReducerInterface {
  searchTerm: string,
  action: ActionInterface;
}

export interface SortOrderReducerInterface {
  sortOrder: number,
  action: ActionInterface;
}

