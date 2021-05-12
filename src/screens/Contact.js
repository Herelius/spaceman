import { useState } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      display: 'flex',
      flexDirection: 'column',
      margin: theme.spacing(3),
      width: '25ch',
    },
  },
  background: {
    margin: theme.spacing(3),
    borderRadius: 10,
  },
  button: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
}));

export default function Form() {
  const classes = useStyles();
  // const [messages, setMessages] = useState([]);
  const [emailInputs, setEmailInputs] = useState({
    email: '',
    name: '',
    subject: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmailInputs((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // destructure from inputs
    axios
      .post(`${process.env.REACT_APP_API_BASE_URL}/contact`, emailInputs)
      // make an object to be handled from req.body on the backend.
      .then(() => {
        // eslint-disable-next-line no-alert
        window.alert('Votre email a bien été envoyé (ne spammez pas trop :-)');
      });
    setEmailInputs({
      email: '',
      name: '',
      subject: '',
      description: '',
    });
  };

  return (
    <Paper className={classes.background} elevation={3}>
      <form
        className={classes.root}
        onChange={handleChange}
        onSubmit={handleSubmit}
        noValidate
        autoComplete="off"
      >
        <TextField
          value={emailInputs.email}
          onChange={handleChange}
          id="email"
          name="email"
          label="Email"
          variant="outlined"
          required
        />
        <TextField
          value={emailInputs.name}
          onChange={handleChange}
          id="name"
          name="name"
          label="Name"
          variant="outlined"
          required
        />
        <TextField
          value={emailInputs.subject}
          onChange={handleChange}
          id="subject"
          name="subject"
          label="Subject"
          variant="outlined"
          required
        />
        <TextField
          id="description"
          name="description"
          value={emailInputs.description}
          onChange={handleChange}
          label="Message"
          multiline
          rows={4}
          variant="outlined"
          required
        />
        <Button className={classes.button} type="submit" variant="contained">
          Send
        </Button>
      </form>
    </Paper>
  );
}
