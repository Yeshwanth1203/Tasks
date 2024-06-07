import React from 'react';
import ItemList from './Components/ItemsList';
import Cart from './Components/Cart';
import Header from './Components/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="item-list-container">
        <ItemList />
      </div>
      <Cart />
    </div>
  );
}

export default App;
