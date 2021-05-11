/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import Search from '../components/Search';
import PackageCard from '../components/Package';

const useStyles = makeStyles((theme) => ({
  home: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '70%',
    height: '100%',
    background: 'rgba(255, 255, 255, 0.91)',
    borderRadius: '10%',
  },
  cardDisplay: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    width: 'auto',
    height: '100%',
  },
}));

const Home = () => {
  const [marsInfos, setMarsInfos] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    axios
      .get('https://api.spacexdata.com/v2/launches?launch_year=2019&2020')
      .then((res) => {
        return setMarsInfos(res.data.slice(0, 10));
      });
  }, []);

  return (
    <div className={classes.home}>
      <h1>Next flights</h1>
      <Search />
      <div className={classes.cardDisplay}>
        {marsInfos.map((info) => (
          <PackageCard
            year={info.launch_year}
            mission={info.mission_name}
            departureSite={info.launch_site}
            company={info.links}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
