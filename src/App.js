import React from 'react';
import './App.css';
import Table from './components/Table.js';
import VoiceControl from './components/VoiceControl.js';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Table />} />
          <Route path="/voiceControl" element={<VoiceControl />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
