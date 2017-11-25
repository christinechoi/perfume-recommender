import React from 'react';
import {  NavLink } from 'react-router-dom';
 

const Navbar = props => {


  return (
    <div style={{ borderBottom: '2px solid black', paddingBottom: '10px', marginBottom: '12px' }}>
      <NavLink 
        style={{ marginRight: '10px' }} 
        to="/recommendations"
        onClick={this.handleClick}
      >
        Saved Recommendations
      </NavLink>

       
      <NavLink 
        style={{ marginRight: '10px' }} 
        to="/movies"
      >
        Movies
      </NavLink>
      <NavLink 
        style={{ marginRight: '10px' }} 
        to="/movies/new"
      >
        Add Movie
      </NavLink>
    </div>
  );
}
 
export default Navbar;