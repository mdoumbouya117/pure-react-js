import React from 'react';
import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Books from './pages/Books';
import Characters from './pages/Characters';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
            <Route
              path='/'
              element={<Books />}
            />
            <Route
              path='/characters'
              element={<Characters />}
            />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
