import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';

import App from './App';
import Login from './pages/auth/Login'
import Signup from './pages/auth/Signup'
import Home from './pages/afterLogin/Home'

import Layout from './components/layout';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
<Routes>
  <Route element={<Layout />}>
    <Route path="/" element={<App />} />
    <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<Signup/>}/>

    <Route path="/home" element={<Home />} />
    {/* <Route path="about" element={<About />} />
    <Route path="contact" element={<Contact />} />
    <Route path="*" element={<NotFound />} /> 404 page */}
  </Route>
</Routes>
  </BrowserRouter>
);

