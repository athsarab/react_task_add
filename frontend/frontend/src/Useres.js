import { Box } from "@mui/material";
import UserForm from "./UserForm";
import UserTable from "./UserTable";


const users = [
    {
        id: 1,
        name: "John Doe"
    },
    {
        id: 2,
        name: "Jane Doe"
    }
];


const Users = () => {
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