import React, {useContext, useState, useEffect} from 'react';
import UserContext from "../stores/users-store/userContext";

const RegisterUser = () => {
    const initState = {
        avatar: '',
        first_name: '',
        last_name: '',
        email: ''
    }
    const [user, setUser] = useState(initState);
    const {addUser, updateUser, edited} = useContext(UserContext)

    useEffect(() => {
        if(edited) {
            setUser(edited)
        } else {
            setUser(initState)
        }
    }, [edited])

    const handleOnChange = (event) => {
        setUser({...user, [event.target.name]: event.target.value})
    }

    const handleOnSubmit = (e) => {
        if(edited) {
            updateUser(user)
        } else {
            addUser(user);
        }
        e.preventDefault();
        e.target.reset();
    }

    return (
        <div className="xl:order-2">
            <h2 className="text-gray-900 font-bold leading-tight text-xl">{`${edited ? 'Editar' : 'Registrar'} Usuario`}</h2>
            <div className="mt-4">
                <form onSubmit={handleOnSubmit}>
                    <div className="space-y-4">
                        <div className="relative">
                            <label htmlFor="name" className="leading-7 text-sm text-gray-600">Avatar</label>
                            <input type="url" id="avatar" name="avatar"
                                   onChange={handleOnChange}
                                   value={user.avatar}
                                   className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="grid xl:grid-cols-2 gap-4">
                            <div className="relative">
                                <label htmlFor="name" className="leading-7 text-sm text-gray-600">First Name</label>
                                <input type="text" id="first_name" name="first_name"
                                       onChange={handleOnChange}
                                       value={user.first_name}
                                       className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <div className="relative">
                                <label htmlFor="name" className="leading-7 text-sm text-gray-600">Last Name</label>
                                <input type="text" id="last_name" name="last_name"
                                       onChange={handleOnChange}
                                       value={user.last_name}
                                       className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                        </div>
                        <div className="relative">
                            <label htmlFor="name" className="leading-7 text-sm text-gray-600">Email</label>
                            <input type="email" id="email" name="email"
                                   onChange={handleOnChange}
                                   value={user.email}
                                   className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="text-right">
                            <button
                                className="w-full text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">{`${edited ? 'Actualizar' : 'Registrar'} Usuario`}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RegisterUser;
