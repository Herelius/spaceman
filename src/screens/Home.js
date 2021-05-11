/* eslint-disable no-unused-vars */
import './Home.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../components/CardUi';

const Dayjs = require('dayjs');

const Home = () => {
  /* Select options */
  const years = [
    2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017,
    2018, 2019, 2020, 2021,
  ];

  const [selectYear, setSelectYear] = useState(null);

  /* API results */
  const [alllaunches, setAlllaunches] = useState([]);

  useEffect(() => {
    axios
      .get('https://api.spacexdata.com/v4/launches')
      .then((res) => {
        console.log(res.data);
        setAlllaunches(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <>
      <h1>
        <cite>Space Man</cite>
      </h1>
      <h2>
        <blockquote>
          It's not the best choice, it's Space Man choice !
        </blockquote>
      </h2>
      <div className="searchForm">
        <form className="searchForm">
          <h2>Search Engine</h2>
          <div className="select">
            <select
              name="Year"
              onChange={(event) => {
                setSelectYear(event.target.value);
                console.log(event.target.value);
              }}
            >
              <option value="" hidden>
                -- Year --
              </option>
              <option value="all">All</option>
              {years.map((year) => {
                return (
                  <option key={year} value={`${year}`}>
                    {year}
                  </option>
                );
              })}
            </select>
          </div>
        </form>
      </div>
      <div>
        <h2>Results</h2>
        <div>
          <ul className="container">
            {selectYear !== 'all'
              ? alllaunches
                  .filter((launche) => {
                    return launche.date_local.includes(selectYear);
                  })
                  .map((launche) => {
                    return (
                      <Card
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
                  })
              : alllaunches.map((launche) => {
                  return (
                    <Card
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
          </ul>
        </div>
      </div>
    </>
  );
};

export default Home;
