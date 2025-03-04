const  users =[
    {
        id: 1,
        name: 'John Doe',
        
    },
    {
        id: 2,
        name: ' Doe',
        
    },
];

const getUsers = (cb) =>{
    cb(users);
}

const getUserByID = (id, cb) =>{
    const user = users.find(user => user.id == id);
    cb(user);
}

exports.getUsers = getUsers;
exports.getUserByID = getUserByID;