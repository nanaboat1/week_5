import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css'
import Layout from './routes/Layout';
import DetailView from './routes/DetailView';

const container = document.getElementById('root'); 
const root = createRoot( container! ); 
root.render ( 

  <BrowserRouter> 

    <Routes> 
      <Route path="/"  element={<Layout />}> 
        <Route index={true} path="/" element={<App />} /> 
      </Route>
      <Route index={true} path="/DispDetail/:symbol" element={<DetailView />} />
    </Routes>
  </BrowserRouter>
); 

