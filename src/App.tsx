import React from 'react';
import logo from './logo.svg';
import './App.css';
import getAdvice from './api/api';
import Quote from './Quote';

function App() {
  return (
    <div className="App">
     <Quote />
    </div>
  );
}

export default App;
