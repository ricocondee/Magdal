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
      <h1>Hello</h1>
      <label>Enter your data  to register or click here to log in </label>
        <div>
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
        <label >Or continue with</label><br /><br />
        <img src="https://th.bing.com/th/id/R.d3adffcc9058a20c1b9866413892cb81?rik=4ZVKtBs9y4DL0w&riu=http%3a%2f%2fwww.wired.com%2fwp-content%2fuploads%2f2015%2f09%2fgoogle-logo-1200x630.jpg&ehk=vF6fl8hgeut4T6e%2fOljxX%2bTe%2bPgQxsUeL4%2fJ5kydiZc%3d&risl=&pid=ImgRaw&r=0" /><br /><br />
        <button type="button" onClick={handleLogin}>
          Sign up
        </button>
      </form>
    </div>
  );
}

export default RegisterForm;