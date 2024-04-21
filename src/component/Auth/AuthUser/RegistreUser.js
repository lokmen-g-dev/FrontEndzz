import React, { useState } from 'react';
import axios from 'axios';

function RegistreUser() {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    NumCin: '',
    Mobile: ''
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
      const response = await axios.post('http://localhost:4000/users/auth/register', formData);
      console.log(response.data.message);
      setFormData({
        firstname: '',
        lastname: '',
        username: '',
        email: '',
        password: '',
        NumCin: '',
        Mobile: ''
      });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <h1>Inscription</h1>
      <form onSubmit={handleSubmit}>
        <label> Prénom:
          <input type="text" name="firstname" value={formData.firstname} onChange={handleChange} />
        </label>
        <br />
        <label> Nom:
          <input type="text" name="lastname"  value={formData.lastname} onChange={handleChange} />
        </label>
        <br />
        <label> Nom d'utilisateur:
          <input type="text" name="username" value={formData.username} onChange={handleChange} />
        </label>
        <br />
        <label> Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>
        <br />
        <label> Mot de passe:
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
        </label> 
        <br />
        <label> Numéro de CIN:
          <input type="text" name="NumCin" value={formData.NumCin} onChange={handleChange} />
        </label>
        <br />
        <label> Numéro de téléphone:
          <input type="text" name="Mobile" value={formData.Mobile} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">S'inscrire</button>
      </form>
    </div>
  );
}
export default RegistreUser;
