import React from 'react';
import Package from '../components/Package';
import Search from '../components/Search';

const Home = () => {
  return (
    <>
      <h1>Space Man : It's not the best choice, it's Space Man choice !</h1>
      <Search />
      <div>
        <Package />
      </div>
    </>
  );
};

export default Home;
