import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Services from './Services';
import Dashboard from './Dashboard';
import Posts from './Posts';
import Error from './Error';
import Navbar from './Navbar';

export default function App() {
  const isLoggedIn = true;
  return (
    <Router>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home />} />

          {/* passing props into About component */}
          <Route path='/about' element={<About message="Passing props into component" />} />

          <Route path='/services' element={<Services />} />

          {/* dynamic route */}
          <Route path='/posts/:category/:topic' element={<Posts />} />

          {/* Redirect or nevigate component */}
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/login' element={isLoggedIn ? <Navigate to="/dashboard" /> : <Home />} />

          {/* error message */}
          <Route path='*' element={<Error />} />
        </Routes>
      </div>
    </Router>
  )
}

