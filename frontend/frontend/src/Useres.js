import { Box } from "@mui/material";
import UserForm from "./UserForm";
import UserTable from "./UserTable";
import Axios from 'axios';
import { useEffect, useState } from 'react';
//import { set } from "../../../server/app";

const Users = () => {
    const [users, setUsers] = useState([]);
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = () => {
        Axios.get('http://localhost:3001/api/users')
            .then((response) => {
                console.log(response.data); // Debugging log
                setUsers(response.data); // Update state with fetched users
            })
            .catch((error) => {
                console.error("Error fetching users:", error);
            });
    };

    const addUser = (data) => {
        setSubmitted(true);

const payload = {
        id: data.id,
        name: data.name,   
    }

    Axios.post('http://localhost:3001/api/createuser', payload)
        .then(() => {
            getUsers();
            setSubmitted(false);
        })
        .catch((error) => {
            console.error("Error adding user:", error);
        });
}

    return (
        <Box 
            sx={{
                width: 'calc(100% - 240px)',
                marginLeft: 'auto',
                marginRight: 'auto',
                marginTop: '50px',
            }}
        >
            <UserForm 
                addUser={addUser}
            />
            <UserTable users={users} />
        </Box>
    );
};

export default Users;
