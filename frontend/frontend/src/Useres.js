import { Box } from "@mui/material";
import UserForm from "./UserForm";
import UserTable from "./UserTable";
import Axios from 'axios';
import { useEffect, useState } from 'react';





const Users = () => {

    
        const [users, setUsers] = useState([]);

        useEffect(() => {
            getUsers();

    } , []);

    const getUsers =  () => {
        Axios.get('http://localhost:3001/users')
        .then((response) => {
            setUsers(response.data);
        })
        .catch((error) => {
            console.log(error);
        }
        );
    }


    return (
<Box 
sx = {
    {
        width :'calc(100% - 240px)',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '50px',
 
    }
}
>
        <UserForm />
        <UserTable users={users} />

</Box>

    )
}
export default Users;