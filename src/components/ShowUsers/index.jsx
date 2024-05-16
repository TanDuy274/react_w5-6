import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React from 'react';

ShowUsers.propTypes = {};

function ShowUsers({ data }) {
  return (
    // <ul>
    //   {data.map((user) => (
    //     <li key={user.id}>
    //       <p>User {user.id}: </p>
    //       <p>firstName: {user.firstName}</p>
    //       <p>lastName: {user.lastName}</p>
    //       <p>hobby: {user.hobby}</p>
    //       <p>Gender: {user.gender}</p>
    //       <p>Email: {user.email}</p>
    //       <p>phone number: {user.phoneNumber}</p>
    //       <p>password: {user.password}</p>
    //       <p>confirmPassword: {user.confirmPassword}</p>
    //     </li>
    //   ))}
    // </ul>
    <TableContainer>
      <Table
        sx={{ minWidth: 700 }}
        aria-label='customized table'
      >
        <TableHead>
          <TableRow>
            <TableCell>User</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Hobby</TableCell>
            <TableCell>Gender</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone Number</TableCell>
            <TableCell>Password</TableCell>
            <TableCell>Confirm Password</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {data.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.firstName}</TableCell>
              <TableCell>{user.lastName}</TableCell>
              <TableCell>{user.hobby}</TableCell>
              <TableCell>{user.gender}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.phoneNumber}</TableCell>
              <TableCell>{user.password}</TableCell>
              <TableCell>{user.confirmPassword}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ShowUsers;
