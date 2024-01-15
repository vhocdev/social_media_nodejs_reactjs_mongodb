import { useState } from 'react';
import axios from "axios";
import { useHistory } from 'react-router-dom';

function SignupForm (){

  const history = useHistory();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    axios
    .post("/api/auth/register", { user: formData })
    .then(() => {
      history.push('/feed');
    })
    .catch((e) => console.log("Error : ", e));
  };

  return (
    <div className="login-container">
      <form onSubmit={handleRegister}>
        <h2>Register</h2>
        <div className="input-group">
          Username:
          <input type="text" id="name" name="name" required value={formData.name} onChange={handleInputChange}/>
        </div>
        <div className="input-group">
          Email:
          <input type="email" id="email" name="email" required value={formData.email} onChange={handleInputChange}/>
        </div>
        <div className="input-group">
          Password:
          <input type="password" id="password" name="password" required value={formData.password} onChange={handleInputChange} />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default SignupForm;