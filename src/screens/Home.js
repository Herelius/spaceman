/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import Search from '../components/Search';
import PackageCard from '../components/Package';

const Dayjs = require('dayjs');

const useStyles = makeStyles((theme) => ({
  home: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '70%',
    height: '100%',
    borderRadius: '10%',
  },
  cardDisplay: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    width: 'auto',
  },
}));

const Home = () => {
  const classes = useStyles();

  /* Select options */
  const years = [
    2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017,
    2018, 2019, 2020, 2021,
  ];

  const [selectYear, setSelectYear] = useState('');

  /* API results */
  const [alllaunches, setAlllaunches] = useState([]);
  const [yearLabel, setYearLabel] = React.useState('');

  const handleChange = (event) => {
    setSelectYear(event.target.value);
    console.log(event.target.value);
    setYearLabel(event.target.value);
  };

  useEffect(() => {
    axios
      .get('https://api.spacexdata.com/v4/launches')
      .then((res) => {
        setAlllaunches(res.data.slice(0, 30));
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div className={classes.home}>
      <h1 className={classes.title}>Next flights</h1>
      <Search yearLabel={yearLabel} years={years} change={handleChange} />
      <div className={classes.cardDisplay}>
        {selectYear !== 'all'
          ? alllaunches
              .filter((launche) => {
                return launche.date_local.includes(selectYear);
              })
              .map((launche) => {
                return (
                  <PackageCard
                    key={launche.id}
                    imgUrl={launche.links.patch.small}
                    title={launche.name}
                    launcheDay={Dayjs(launche.date_local).format(
                      'MMMM D, YYYY h:mm A'
                    )}
                    wikiLink={launche.links.article}
                  />
                );
              })
          : alllaunches.map((launche) => {
              return (
                <PackageCard
                  key={launche.id}
                  nameImg={launche.name}
                  imgUrl={launche.links.patch.small}
                  titleImg={launche.name}
                  title={launche.name}
                  launcheDay={Dayjs(launche.date_local).format(
                    'MMMM D, YYYY h:mm A'
                  )}
                  wikiLink={launche.links.article}
                />
              );
            })}
      </div>
    </div>
  );
};

export default Home;
