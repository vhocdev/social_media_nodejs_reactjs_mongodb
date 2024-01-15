import { Link } from 'react-router-dom';

function LoginForm (){

  const handleLogin = (e) => {
    e.preventDefault();
    const { value } = e.target;
    console.log(value);
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin}>
        <h2>Login</h2>
        <div className="input-group">
          Name:
          <input type="text" id="username" name="username" required />
        </div>
        <div className="input-group">
          Password:
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit">Login</button>
        <div className="pt-2">Don't have an account? <Link to="/signup">Sign up</Link></div>
      </form>
    </div>
  );
}

export default LoginForm;