import React, { useState } from 'react';
import api from '../Api';

function EvaluateRule() {
  const [data, setData] = useState({
    age: '',
    department: '',
    salary: '',
    experience: '',
  });
  const [result, setResult] = useState(null);

  
  const handleEvaluate = async () => {
    try {
        const response = await api.post('/evaluate-rule', data, {
            params: { ruleString: 'age>25' }
        });
        setResult(response.data ? 'Eligible' : 'Not Eligible');
    } catch (error) {
        console.error("Error during evaluation:", error);
        setResult('Error evaluating rule.');
    }
};



  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
      <h2>Evaluate Rule</h2>
      <input name="age" placeholder="Age" onChange={handleChange} />
      <input name="department" placeholder="Department" onChange={handleChange} />
      <input name="salary" placeholder="Salary" onChange={handleChange} />
      <input name="experience" placeholder="Experience" onChange={handleChange} />
      <button onClick={handleEvaluate}>Evaluate</button>
      <p>Result: {result}</p>
    </div>
  );
}

export default EvaluateRule;
