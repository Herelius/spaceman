import React from 'react';
import Package from '../components/Package';
import Search from '../components/Search';
import '../components/cart.css';

const Home = () => {
  return (
    <div className="main">
      <h1>Space Man : It's not the best choice, it's Space Man choice !</h1>
      <Search />
      <div>
        <Package />
      </div>
    </div>
  );
};

export default Home;
