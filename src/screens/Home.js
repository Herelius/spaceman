import React from 'react';
import Package from '../components/Package';
import Search from '../components/Search';
import Cart from '../components/Cart';
import './home.css';

const Home = () => {
  return (
    <div className="main">
      <Cart />
      <h1 className="title">
        Space Man : It's not the best choice, it's Space Man choice !
      </h1>
      <Search className="search" />
      <div>
        <Package className="package" />
      </div>
    </div>
  );
};

export default Home;
