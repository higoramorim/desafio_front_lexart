import React from 'react';
import Form from './component/Form';
import RenderTable from './component/RenderTable';
import { BrowserRouter as Router} from 'react-router-dom';
// import Routes from './Routes';
import ProductProvider from './context/ProductProvider';
import './App.css';

function App() {
  return (
    <Router>
    <ProductProvider>
      <Form />
      <RenderTable />
    </ProductProvider>
    </Router>
  );
}

export default App;
