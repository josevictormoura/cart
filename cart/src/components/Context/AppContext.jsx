import React from 'react';

import { Context } from './UseContext';

export const AppContext = ({ children }) => {
  const [products, setProducts] = React.useState([]);
  const [modal, setModal] = React.useState(false);

  const valueContext = {
    products,
    setProducts,
    modal,
    setModal,
  };

  return <Context.Provider value={valueContext}>{children}</Context.Provider>;
};
