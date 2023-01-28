import React from 'react';

import { StoreProvider } from 'store'
import { CompaniesList } from 'components/CompaniesList';

function App() {
  return (
    <StoreProvider>
      <CompaniesList />
    </StoreProvider>
  );
}

export default App;
