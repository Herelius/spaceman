/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
// eslint-disable-next-line import/no-named-as-default
import Package from '../components/Package';
import Search from '../components/Search';
import './Home.css';

const Home = () => {
  const [marsImages, setMarsImages] = useState([]);

  useEffect(() => {
    axios
      .get(
        'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY'
      )
      .then((res) => {
        return setMarsImages(res.data.photos.slice(0, 9));
      });
  }, []);

  return (
    <>
      <h1>
        Space Man : It's not the best choice, it's Space Man's choice !
        &#128640;
      </h1>
      <Search />
      <div>
        {marsImages.map((image) => (
          <Package />
        ))}
      </div>
    </>
  );
};

export default Home;
