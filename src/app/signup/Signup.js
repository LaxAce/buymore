import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

// Actions
import {action} from '../../providers/store/actions/actionIndex'

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false)

  const dispatch = useDispatch();
  const {loggedIn} = bindActionCreators(action, dispatch);

  const handleSubmit = async e => {
    e.preventDefault();

    setLoading(true)
    const details = { email, name, password };

    const data = await fetch(
      'https://buymore-backend.herokuapp.com/api/v1/users',
      {
        method: 'POST',
        body: JSON.stringify(details),
        headers: { 'Content-Type': 'application/json' },
      }
    )
      .then(res => res.json())
      .then(result => {
        const token = result.data;
        localStorage.setItem('authToken', token);
        setLoading(false)
        if (!result.msg) {
          navigate('/');
          loggedIn()
        }
        setError(result.msg);
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="signup-page">
      <h2 className="pls-create">Please Create an Account</h2>
      {error && <div className='error-msg'>⚠ {error} ⚠</div>}
      <form onSubmit={handleSubmit} className='signup-form'>
        <label htmlFor="email" className="input-box">
          Email
          <input
            type="email"
            name="email"
            className="signup-mail input-field"
            placeholder='example@gmal.com'
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </label>
        <label htmlFor="full-name" className="input-box">
          Full Name
          <input
            type="text"
            name="username"
            className="signup-name input-field"
            placeholder='John Doe'
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
        </label>
        <label htmlFor="password" className="input-box">
          Password
          <input
            type="password"
            name="password"
            className="signup-password input-field"
            placeholder='Dark34#lmk*owkl'
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            minLength={6}
          />
        </label>
        {loading ? <button className="submit-signup">Loading...</button>
        : <button className="submit-signup">Create Account</button>
      }
      </form>
    </div>
  );
};

export default Signup;
