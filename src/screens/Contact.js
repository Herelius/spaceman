import { useState } from 'react';
import axios from 'axios';

export default function Form() {
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
    <div>
      <form onSubmit={handleSubmit}>
        <h1>
          You can contact us by Space Mail if you fill the form and submit it.
          Space man is here to hear all your feedbacks and will contact you as
          soon as possible. <br />
          It's not the best choice, it's Space Man's choice !
        </h1>
        <input
          type="email"
          placeholder="Your Space Mail address"
          name="email"
          value={emailInputs.email}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          placeholder="Your Space Name"
          name="name"
          required
          value={emailInputs.name}
          onChange={handleChange}
        />

        <input
          type="text"
          placeholder="Subject"
          name="subject"
          value={emailInputs.subject}
          onChange={handleChange}
          required
        />

        <textarea
          name="description"
          placeholder="Message"
          value={emailInputs.description}
          onChange={handleChange}
          cols="30"
          rows="10"
          required
        />
        <button type="submit">Envoyez</button>
      </form>
    </div>
  );
}
