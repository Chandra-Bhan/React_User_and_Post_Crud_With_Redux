import React from 'react';
import './style.css';
import User from './user/User';
import Post from './post/Post';
import { Routes, Route } from 'react-router-dom';
import Navbar from './navbar/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';

//Create posts crud operations and user crud operations with redux

export default function App() {
  return (
    <div  className="border p-5"
    style={{
      width: '50rem',
      textAlign: 'center',
      margin: 'auto',
      marginTop: '10px',
    }}>
      <h1 className="text-danger">Create posts crud operations and user crud operations with redux</h1>
      <Navbar/>
      <Routes>
        <Route path="/" element={<User />} />
        <Route path="/post" element={<Post />} />
      </Routes>
    </div>
  );
}
