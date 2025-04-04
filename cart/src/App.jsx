import React from 'react';
import './App.css';
import Cart from './components/Cart/Cart';
import { AppContext } from './components/Context/AppContext';

const App = () => {
  return (
    <div className="app">
      <AppContext>
        <Cart />
      </AppContext>
    </div>
  );
};

export default App;
