import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductsPage  from './pages/ProductsPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
