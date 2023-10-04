import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import Content from './Content';
import LoginPage from './LoginPage'
import './index.css';
function App() {
  // const [activePage, setActivePage] = useState('hero');

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={< LoginPage />} />
          <Route path="*" element={<Content />} />
        </Routes>
      </Router>
    </div>
  );
}


ReactDOM.render(<App />, document.getElementById('root'));
export default App;