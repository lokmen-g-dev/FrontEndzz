import React, { useState } from 'react';
import axios from 'axios';

function RegistreAssistant() {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    NumCin: '',
    Mobile: '',
    portfolio: ''
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
      const response = await axios.post('http://localhost:4000/users/authAssistant/registerAssistant', formData);
      console.log(response.data.message);
      setFormData({
        firstname: '',
        lastname: '',
        username: '',
        email: '',
        password: '',
        NumCin: '',
        Mobile: '',
        portfolio: ''
      });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <h1>Registre Page</h1>
      <form onSubmit={handleSubmit}>
        <label> Prénom:
          <input type="text" name="firstname" value={formData.firstname} onChange={handleChange} />
        </label>
        <br />
        <label> Nom :
          <input type="text" name="lastname" value={formData.lastname} onChange={handleChange} />
        </label>
        <br />
        <label> Nom :
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
        <label> Portfolio:
          <textarea name="portfolio" value={formData.portfolio} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">S'inscrire</button>
      </form>
    </div>
  );
}
export default RegistreAssistant;
