import React, {useContext, useEffect} from 'react';
import CardUser from "./CardUser";
import UserContext from "../stores/users-store/userContext";

const UserList = () => {

    const {users, getUsers} = useContext(UserContext)

    useEffect(() => {
        getUsers();
        // eslint-disable-next-line
    }, [])

    return (
        <div className="xl:order-1">
            <h2 className="text-gray-900 font-bold leading-tight text-xl">Lista de usuarios</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                {
                    users.map(user => (
                        <CardUser key={user.id} user={user} />
                    ))
                }
            </div>
        </div>
    );
};

export default UserList;
