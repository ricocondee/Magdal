import React,{useState} from 'react';
import "../styles/register.css"

function RegisterForm() {
  const [Username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('username', Username);
    console.log('Email:', email);
    console.log('Password:', password);
  };

  const handleGoogleLogin = () => {
    console.log('registrar con google');
  };

  return (
    <div className="RegisterForm-container"> 
      
      <form className="RegisterForm-form"> 
      <div className='h-form'>
        <h2>Hello</h2>
      </div>
      <div className='tec'>
        <label>Enter your data  to register or click here to log in</label>
      </div>

     
        <div>
          <br />
          <input 
          type="email" 
          value={Username}
          placeholder='Username'
          onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <input
            type="email"
            value={email}
            placeholder='example@email.com'
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            value={password}
            placeholder='Password'
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <br />
        <div className='linea'>
          <p className='continue'>Or continue with</p>
          <div><hr className='linea'/></div>
          </div><br />
        <div>
          <img src="https://cdn.worldvectorlogo.com/logos/google-g-2015.svg" alt="" className='img-form' />
          <img src="https://cdn.worldvectorlogo.com/logos/meta-1.svg" className='img-form' />
          <img src="https://cdn.worldvectorlogo.com/logos/apple-13.svg" className='img-form' />
        </div>
        <button type="button" onClick={handleLogin}>
          Sign up
        </button>
        <div className='login'>
          <a href="">log in</a>

        </div>
      </form>
    </div>
  );
}

export default RegisterForm;