import React from 'react';
import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Books from './pages/Books';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
            <Route
              path='/'
              element={<Books />}
            />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
