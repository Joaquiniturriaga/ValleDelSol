let users = [
    {id: 1, email: 'admin@mial.com', name: 'Admin', role: 'admin'},
    {id: 2, email: 'user@mail.com', name: 'User', role: 'user'}
];

const getProfile = (user) => {
    return users.find(u => u.id === user.id);

};


const updateUser = (id, data)=>{
    const user = users.find(u=>u.id===id);

    if(!user){
        throw new Error('User not found')
    }

    user.name = data.name || user.name;
    user.email = data.email || user.email;

    return user;
};

const getAllUsers = () =>{
    return users;
};


module.exports = { getProfile, updateUser ,getAllUsers}
