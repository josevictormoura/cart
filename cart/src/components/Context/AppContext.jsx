import React from 'react';

import { Context } from './UseContext';

export const AppContext = ({ children }) => {
  const [products, setProducts] = React.useState([
    // {
    //   name: 'produto 01',
    //   category: 'esporte',
    //   price: 120,
    //   quant: 2,
    // },
    // {
    //   name: 'produto 02',
    //   category: 'estudo',
    //   price: 70,
    //   quant: 1,
    // },
    // {
    //   name: 'produto 03',
    //   category: 'casa',
    //   price: 100,
    //   quant: 1,
    // },
  ]);

  const valueContext = {
    products,
    setProducts,
  };

  return <Context.Provider value={valueContext}>{children}</Context.Provider>;
};
