import React, { useState } from 'react';
import api from '../Api';  // Adjust the path as necessary

function CreateRule() {
  const [ruleString, setRuleString] = useState('');
  const [message, setMessage] = useState('');

  const handleCreateRule = async () => {
    try {
      const response = await api.post('/create-rule', ruleString, {
        headers: {
          'Content-Type': 'text/plain',
        },
      });
      setMessage(`Rule created successfully! AST: ${JSON.stringify(response.data)}`);
    } catch (error) {
      setMessage('Error creating rule.');
    }
  };

  const handleChange = (e) => {
    setRuleString(e.target.value);
  };

  return (
    <div className="container">
      <h2>Create Rule</h2>
      <textarea
        placeholder="Enter rule string here..."
        value={ruleString}
        onChange={handleChange}
        rows="4"
        cols="50"
      />
      <br />
      <button onClick={handleCreateRule}>Create Rule</button>
      <p>{message}</p>
    </div>
  );
}

export default CreateRule;
