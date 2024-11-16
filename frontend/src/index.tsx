import React, {useEffect, useState }  from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate, useLocation, useParams } from "react-router-dom";
import './index.css';

import App from './App';
import Login from './pages/auth/Login'
import Signup from './pages/auth/Signup'
import Home from './pages/afterLogin/Home'

import Layout from './components/layout';
import NotFound from './components/NotFound'
import Detail from './pages/afterLogin/Detail';
import Post from './pages/afterLogin/Post';


const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const location = useLocation();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch('/api/users/auth', {
          credentials: 'include'
        });
        
        setIsAuthenticated(res.ok);
      } catch (error) {
        console.error('Authentication check failed:', error);
        setIsAuthenticated(false);
      }
    };

    checkAuth();
  }, []);

  if (isAuthenticated === null) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};


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

      <Route path="/home" element={ 
            <ProtectedRoute>
              <Home />
            </ProtectedRoute> } />
      <Route path="home/:id" element={
        <ProtectedRoute>
          <Detail/>
        </ProtectedRoute>
      }/>
    <Route path="/post" element={<Post />} />


      <Route path="*" element={<NotFound />} />
  </Route>
</Routes>
  </BrowserRouter>
);

