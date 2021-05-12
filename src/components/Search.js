import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  search: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    widht: 'auto',
    backgroundColor: '#ecf2ff',
    borderRadius: '12px',
    filter: 'drop-shadow(1px 1px 3px rgba(0, 0, 0, 0.3))',
  },
  formControl: {
    margin: theme.spacing(6),
    marginTop: 20,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(1),
  },
}));

export default function Search({ years, change, yearLabel }) {
  const classes = useStyles();

  return (
    <div className={classes.search}>
      <FormControl className={classes.formControl}>
        <InputLabel id="years">Anné</InputLabel>
        <Select labelId="years" id="years" value={yearLabel} onChange={change}>
          {years.map((year) => {
            return (
              <MenuItem key={year} value={year}>
                {year}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
}
