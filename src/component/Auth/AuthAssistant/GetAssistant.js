import React, { useState, useEffect } from 'react';
import axios from 'axios';

function GetAssistant() {
  const [assistants, setAssistants] = useState([]);
  useEffect(() => {
    const fetchAssistants = async () => {
      try {
        const response = await axios.get('http://localhost:4000/users/authAssistant/getAssistant');
        setAssistants(response.data.assistants);
      } catch (error) {
        console.error(error);
      }
    };
    fetchAssistants();
  }, []); 
  const handleStatusChange = async (email, newStatus) => {
    try {
      const response = await axios.put('http://localhost:4000/users/authAssistant/modifierStatusAssistant', {
        email,
        newStatus
      });
      console.log(response.data.message);
      const updatedAssistants = assistants.map(assistant => {
        if (assistant.email === email) {
          return { ...assistant, status: newStatus };
        }
        return assistant;
      });
      setAssistants(updatedAssistants);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <h1>Liste des Assistants</h1>
      <ul>
        {assistants.map((assistant, index) => (
          <li key={index}>
            <strong>Nom: </strong>{assistant.firstname} {assistant.lastname} <br />
            <strong>Email: </strong>{assistant.email} <br />
            <strong>Username: </strong>{assistant.username} <br />
            <strong>Status: </strong>{assistant.status} <br />
            <button onClick={() => handleStatusChange(assistant.email, 'active')}>Activer</button>
            <button onClick={() => handleStatusChange(assistant.email, 'inactive')}>Désactiver</button>
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
}
export default GetAssistant;
