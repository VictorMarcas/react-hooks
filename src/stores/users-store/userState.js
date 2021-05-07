import React, { useReducer } from "react";
import userReducer from './userReducer';
import UserContext from "./userContext";
import Services from '../../plugins/axios';
import {ADD_USER, DELETE_USER, EDITED_USER, GET_USERS, UPDATE_USER} from "../../actions";

const UserState = (props) => {
    const initialState = {
        users: [],
        editedUser: null
    }

    const [state, dispatch] = useReducer(userReducer, initialState);

    const getUsers = () => {
        Services.get('/users')
            .then(response => {
                dispatch({
                    type: GET_USERS,
                    payload: response.data.data
                })
            })
    }
    const addUser = (user) => {
        Services.post('/users', user)
            .then(response => {
                dispatch({
                    type: ADD_USER,
                    payload: response.data
                })
            })
    }
    const deleteUser = (id) => {
        Services.delete(`'/users/${id}`)
            .then(response => {
                if(response.status === 204) {
                    dispatch({
                        type: DELETE_USER,
                        payload: id
                    })
                }
            })
    }
    const editedUser = (user) => {
        dispatch({
            type: EDITED_USER,
            payload: user
        })
    }
    const updateUser = (user) => {
        Services.put(`/users/${user.id}`, user)
            .then(response => {
                dispatch({
                    type: UPDATE_USER,
                    payload: response.data
                })
            })
    }
    return (
        <UserContext.Provider value={{users: state.users, edited: state.editedUser, getUsers, addUser, deleteUser, editedUser, updateUser}}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserState;