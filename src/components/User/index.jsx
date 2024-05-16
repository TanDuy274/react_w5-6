import React from 'react';
import './User.css';
import ShowUsers from '../ShowUsers';

User.propTypes = {};

function User(props) {
  const users = JSON.parse(localStorage.getItem('accArray'));
  return (
    <div className='content'>
      {/* <p>User</p> */}
      <ShowUsers data={users} />
    </div>
  );
}

export default User;
