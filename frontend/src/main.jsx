import React from 'react';
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from "react-router";
import Layout from './components/Layout.jsx';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
         <Layout>  
            <App />
         </Layout> 
      </BrowserRouter>
  </React.StrictMode>
);


      
   
