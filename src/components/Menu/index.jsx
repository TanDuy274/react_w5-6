import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Menu.css';
import { Button } from '@mui/material';

Menu.propTypes = {};

function Menu({ logOut }) {
  return (
    <div className='menu'>
      <ul className='list'>
        <li className='item'>
          <NavLink
            to='/dashboard/home'
            className='link'
          >
            Home
          </NavLink>
        </li>
        <li className='item'>
          <NavLink
            to='/dashboard/user'
            className='link'
          >
            Users
          </NavLink>
        </li>
        <li className='item'>
          <NavLink
            to='/dashboard/todo'
            className='link'
          >
            Todo
          </NavLink>
        </li>
        <li className='item'>
          <NavLink
            to='/dashboard/help'
            className='link'
          >
            Help
          </NavLink>
        </li>
      </ul>
      <Button
        variant='outlined'
        color='error'
        className='button'
        onClick={logOut}
      >
        Log out
      </Button>
    </div>
  );
}

export default Menu;
