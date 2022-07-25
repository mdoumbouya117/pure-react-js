import React from 'react';
import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
            <Route
              path='/'
              element={<h1>First look !</h1>}
            />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
