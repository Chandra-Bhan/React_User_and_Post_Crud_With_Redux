import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="bg-dark p-2">
      <NavLink to="/">User_Crud_Operations</NavLink>
      <NavLink to="/post" className="ms-4">
        Post_Crud_Operations
      </NavLink>
    </div>
  );
}
