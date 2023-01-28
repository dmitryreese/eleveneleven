import React, {
  createContext,
  useContext,
  useReducer,
  FC
} from 'react';

import {
  searchTermReducer,
  companiesReducer,
  sortOrderReducer
} from './reducers'
import { ActionInterface, StoreInterface } from './types';

const initialStore: StoreInterface = {
  searchTerm: '',
  companies: [],
  sortOrder: 0,
};
const stateReducer = ({
  searchTerm,
  companies,
  sortOrder,
}: StoreInterface, action: ActionInterface) => ({
  searchTerm: searchTermReducer({ searchTerm, action }),
  companies: companiesReducer({ companies, action }),
  sortOrder: sortOrderReducer({ sortOrder, action })
})
const Store = createContext<StoreInterface>(initialStore);
const DispatchContext = createContext<React.Dispatch<any>>(() => null);

export const useStore = () => useContext(Store);

export const useDispatch = () => useContext(DispatchContext)

interface Props {
  children: React.ReactNode;
}

export const StoreProvider: FC<Props> = ({ children }) => {
  const [store, dispatch] = useReducer(
    stateReducer,
    initialStore,
  )

  return (
    <Store.Provider value={store}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </Store.Provider>
  )
}
