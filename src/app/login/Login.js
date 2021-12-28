import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

// Actions
import {action} from '../../providers/store/actions/actionIndex'

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmails] = useState('');
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('')

  // const loginState = useSelector(s => s.loggedIn);
  const dispatch = useDispatch();
  const {loggedIn} = bindActionCreators(action, dispatch);

  const handleSubmit = e => {
    e.preventDefault();

    const details = { email, password };
    setLoading(true);

    fetch('https://buymore-backend.herokuapp.com/api/v1/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(details),
    })
      .then(res => res.json())
      .then(result => {
        loggedIn();
        setLoading(false);
        const token = result.data;
        if (token) {
        localStorage.setItem('authToken', token);
        navigate('/');
        } else if (result == 'In correct email') {        // I must change this after i correct in the backend
          setError('Incorrect email')
        } else {
          setError(result)
        }
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="login-page">
      <h2 className="pls-login">Please Login</h2>
      {error && <div className='error-msg'>⚠ {error} ⚠</div>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="email" className="input-box">
          Email
          <input
            type="email"
            name="email"
            className="login-mail input-field"
            value={email}
            onChange={e => setEmails(e.target.value)}
            required
          />
        </label>

        <label htmlFor="password" className="input-box">
          Password
          <input
            type="password"
            name="password"
            className="login-password input-field"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </label>

        {loading ? (
          <button className="submit-login"> Loading... </button>
        ) : (
          <button className="submit-login">Login</button>
        )}
      </form>
    </div>
  );
};

export default Login;
