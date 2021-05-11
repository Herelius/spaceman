/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import Search from '../components/Search';
import PackageCard from '../components/Package';

const Home = () => {
  const [marsInfos, setMarsInfos] = useState([]);

  useEffect(() => {
    axios
      .get('https://api.spacexdata.com/v2/launches?launch_year=2019&2020')
      .then((res) => {
        return setMarsInfos(res.data.slice(0, 10));
      });
  }, []);

  // https://images-api.nasa.gov/search?q=planete&media_type=image

  return (
    <>
      <h1>Space Man : It's not the best choice, it's Space Man's choice !</h1>
      <Search />
      <div>
        {marsInfos.map((info) => (
          <PackageCard
            year={info.launch_year}
            mission={info.mission_name}
            departureSite={info.launch_site}
            company={info.links}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
