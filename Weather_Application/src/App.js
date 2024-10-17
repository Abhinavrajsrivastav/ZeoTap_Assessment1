import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CreateRule from './Component/CreateRule';
import CombineRules from './Component/CombineRules';
import EvaluateRule from './Component/EvaluateRule';
import './Style.css';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Create Rule</Link> | 
          <Link to="/combine">Combine Rules</Link> | 
          <Link to="/evaluate">Evaluate Rule</Link>
        </nav>
        <Routes>
          <Route path="/" element={<CreateRule />} />
          <Route path="/combine" element={<CombineRules />} />
          <Route path="/evaluate" element={<EvaluateRule />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
