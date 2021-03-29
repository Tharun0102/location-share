import React from 'react';
import UsersList from '../components/UsersList';
// shows list of users
const Users = () => {
    const users = [
        {
            name: "Tharun1",
            id: "1",
            image: "",
            places: 3
        },
        {
            name: "Tharun2",
            id: "2",
            image: "./my1[435].jpg",
            places: 5
        },
        {
            name: "Tharun3",
            id: "3",
            image: "./my1[435].jpg",
            places: 5
        },
        {
            name: "Tharun4",
            id: "4",
            image: "./my1[435].jpg",
            places: 5
        }
    ];
    return (
        <UsersList users={users} />
    );
}


export default Users;
