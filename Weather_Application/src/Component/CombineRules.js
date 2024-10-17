import React, { useState } from 'react';
import api from '../Api';

function CombineRules() {
  const [rules, setRules] = useState(['']);
  const [message, setMessage] = useState('');

  const handleCombineRules = async () => {
    try {
      await api.post('/combine-rules', { rules });
      setMessage('Rules combined successfully!');
    } catch (error) {
      setMessage('Error combining rules.');
      console.error(error); // Log error for debugging
    }
  };

  const handleAddRule = () => {
    setRules([...rules, '']);
  };

  return (
    <div className="container">
      <h2>Combine Rules</h2>
      {rules.map((rule, index) => (
        <input
          key={index}
          type="text"
          value={rule}
          onChange={(e) => {
            const newRules = [...rules];
            newRules[index] = e.target.value;
            setRules(newRules);
          }}
          placeholder={`Rule ${index + 1}`}
        />
      ))}
      <button onClick={handleAddRule}>Add Rule</button>
      <button onClick={handleCombineRules}>Combine Rules</button>
      <p>{message}</p>
    </div>
  );
}

export default CombineRules;
