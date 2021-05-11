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
    widht: 200,
  },
  formControl: {
    margin: theme.spacing(6),
    marginTop: 20,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function Search() {
  const classes = useStyles();
  const [année, setAnnée] = React.useState('');
  const [saison, setSaison] = React.useState('');
  const [type, setType] = React.useState('');

  const handleAnnée = (event) => {
    setAnnée(event.target.value);
  };
  const handleSaison = (event) => {
    setSaison(event.target.value);
  };
  const handleType = (event) => {
    setType(event.target.value);
  };

  return (
    <div className={classes.search}>
      <FormControl className={classes.formControl}>
        <InputLabel id="année">Anné</InputLabel>
        <Select
          labelId="année"
          id="années"
          value={année}
          onChange={handleAnnée}
        >
          <MenuItem value={2022}>2022</MenuItem>
          <MenuItem value={2023}>2023</MenuItem>
          <MenuItem value={2024}>2024</MenuItem>
          <MenuItem value={2025}>2025</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel id="saison">Saison</InputLabel>
        <Select
          labelId="saison"
          id="saison"
          value={saison}
          onChange={handleSaison}
        >
          <MenuItem value="été">Été</MenuItem>
          <MenuItem value="hiver">Hiver</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel id="type">Type</InputLabel>
        <Select labelId="type" id="type" value={type} onChange={handleType}>
          <MenuItem value="sportif">Sportif</MenuItem>
          <MenuItem value="culturel">Culturel</MenuItem>
          <MenuItem value="détente">Détente</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
