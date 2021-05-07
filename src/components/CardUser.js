import React, {useContext} from 'react';
import UserContext from "../stores/users-store/userContext";

const CardUser = (props) => {
    const { deleteUser, editedUser } = useContext(UserContext);

    const {id, avatar, first_name, last_name, email } = props.user

    return (
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
            <img alt="team"
                 className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                 src={avatar} />
            <div className="flex-grow">
                <h2 className="text-gray-900 title-font font-medium">{`${first_name} ${last_name}`}</h2>
                <p className="text-gray-500">{email}</p>
            </div>
            <div className="flex-shrink-0 flex items-center space-x-2">
                <button type="button" className="w-8 h-8 rounded-full flex items-center justify-center border-0 text-indigo-400 focus:outline-none disabled:text-gray-300 disabled:cursor-default" onClick={() => editedUser(props.user)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                </button>
                <button type="button" className="w-8 h-8 rounded-full flex items-center justify-center border-0 text-red-300 focus:outline-none" onClick={() => deleteUser(id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default CardUser;
