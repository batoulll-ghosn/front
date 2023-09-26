import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Content from './Content'; // Import the Content component
import './index.css';
function App() {
  const [activePage, setActivePage] = useState('hero');

  return (
    <div>
      <Content activePage={activePage} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
export default App;