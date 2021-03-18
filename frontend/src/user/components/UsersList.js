import React from 'react';

import UserItem from './UserItem';
import Card from '../../shared/components/UIElements/Card';

import '../styles/UsersList.css';

const UsersList = ({ users }) => {
  if (users.length === 0) {
    return (
      <div className="center">
        <Card>
          <h2>No users found!</h2>
        </Card>
      </div>
    );
  }

  return (
    <ul className="users-list">
      {users.map((user) => {
        return (
          <UserItem
            key={user.id}
            id={user.id}
            image={user.image}
            name={user.name}
            places={user.places}
          />
        );
      })}
    </ul>
  );
};

UsersList.propTypes = {};

export default UsersList;