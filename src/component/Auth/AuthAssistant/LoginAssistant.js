import React, { useState } from 'react';
import axios from 'axios';

function LoginAssistant() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/users/authAssistant/loginAssistant', formData);
      console.log('Token:', response.data.token);
    } catch (error) {
      console.error(error);
        }
  };
  return (
    <div>
      <h1>Connexion</h1>
      <form onSubmit={handleSubmit}>
        <label> Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>
        <br />
        <label> Mot de passe:
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
}
export default LoginAssistant;

