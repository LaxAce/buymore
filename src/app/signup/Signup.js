import { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();

    const details = { email, name, password };
    // console.log(details);

    fetch('https://fakestoreapi.com/users', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(details),
    })
      .then(res => res.json())
      .then(json => console.log(json));

    navigate(-1);
  };

  return (
    <div className="signup">
      <h2 className="pls-create">Please Create an Account</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email" className="email-box">
          Email
          <input
            type="text"
            name="email"
            className="signup-mail"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </label>
        <label htmlFor="full-name" className="name-box">
          Full Name
          <input
            type="text"
            name="username"
            className="signup-name"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
        </label>
        <label htmlFor="password" className="password-box">
          Password
          <input
            type="password"
            name="password"
            className="signup-password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </label>
        <button className="submit-signup">CREATE ACCOUNT</button>
      </form>
    </div>
  );
};

export default Signup;
