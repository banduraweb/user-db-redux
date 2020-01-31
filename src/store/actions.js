import {db} from "../database/database";



export const ACTION_TYPES = {
    GET_USERS: 'GET_USERS',
    DATA_ADD_SUCCESS: "DATA_ADD_SUCCESS",
    START_LOADING: "START_LOADING",
    STOP_LOADING: "STOP_LOADING",
    SET_LOAD_ERROR: 'SET_LOAD_ERROR',
    DELETE_USER: 'DELETE_USER',
    SEARCH_USER: "SEARCH_USER"
};

const setErrorLoad = error => ({
    type: ACTION_TYPES.SET_LOAD_ERROR,
    payload: error,
});


export const startLoading = () => ({
    type: ACTION_TYPES.START_LOADING,
});
export const stopLoading = () => ({
    type: ACTION_TYPES.STOP_LOADING,
});


export const saveUsers = (data) => {
    return {
        type: ACTION_TYPES.GET_USERS,
        payload: data,
    };
};


export const addUser = (data) => {
    return {
        type: ACTION_TYPES.DATA_ADD_SUCCESS,
        payload: data,
    };
};

export const deleteUser = data => ({
    type: ACTION_TYPES.DELETE_USER,
    data,
});


export const searchQueryUsers = value => ({
    type: ACTION_TYPES.SEARCH_USER,
    payload: value,
});


export const loadUsers = () => async(dispatch) => {

    try {
        dispatch(startLoading());
        let DB_READY = await db.on("ready", () => (db));

        let allUsers = await db.userDataBase.toArray();

        console.log(allUsers, DB_READY);

        dispatch(saveUsers(allUsers));
    }

    catch (e) {
        dispatch(setErrorLoad(e.message));
    } finally {
        dispatch(stopLoading());
    }
};