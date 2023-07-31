import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import '../styles/Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Email:', email);
    console.log('Password:', password);
  };
  return (
    <div className="login-container">
      <form className="login-form"> 
      <div className='h-form'>
        <h2>Hello
        </h2>
        </div>
      <label>Log your account or create a new one</label>
        <div className='input-form'>
          <input
            type="email"
            value={email}
            placeholder='example@email.com'
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            value={password}
            placeholder='Password'
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className='linea'>
          <p>Or continue with</p>
          <div><hr className='linea'/></div>
          </div><br /><br />
        <div>
          <img src="https://cdn.worldvectorlogo.com/logos/google-g-2015.svg" className='img-form'/>
          <img src="https://cdn.worldvectorlogo.com/logos/meta-1.svg" className='img-form' />
          <img src="https://cdn.worldvectorlogo.com/logos/apple-13.svg" className='img-form' />
        </div>
        <button type="button" onClick={handleLogin}>
          log in
        </button>
        <div className='registro'>
        <Link to="/signup">sign up</Link>
      </div>
      </form>
    </div>
  );
}

export default Login;
