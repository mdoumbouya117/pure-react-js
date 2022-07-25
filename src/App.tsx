import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Books from './pages/Books';
import Characters from './pages/Characters';

function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;
