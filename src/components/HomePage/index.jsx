import React from 'react';
import './HomePage.css';
import ShowUsers from '../ShowUsers';

HomePage.propTypes = {};

function HomePage({ email }) {
  const users = JSON.parse(localStorage.getItem('accArray'));
  let newArr = [];

  users.map((user) => {
    if (user.email === email) {
      newArr[0] = user;
    }
  });

  return (
    <div className='content'>
      {console.log(users)}
      {console.log(email)}
      <p>User info</p>
      {/* {users.map((user) => {
        if (user.email === email)
          <div>
            <p>User {user.id}: </p>
            <p>firstName: {user.firstName}</p>
            <p>lastName: {user.lastName}</p>
            <p>hobby: {user.hobby}</p>
            <p>Gender: {user.gender}</p>
            <p>Email: {user.email}</p>
            <p>phone number: {user.phoneNumber}</p>
            <p>password: {user.password}</p>
            <p>confirmPassword: {user.confirmPassword}</p>
          </div>;
      })} */}
      <ShowUsers data={newArr} />
    </div>
  );
}

export default HomePage;
