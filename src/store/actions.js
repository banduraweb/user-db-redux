import {db} from "../database/database";

export const ACTION_TYPES = {
    GET_USERS: 'GET_USERS',
    DATA_GET_SUCCESS: "DATA_GET_SUCCESS"
};

export const saveUsers = (data) => {
    return {
        type: ACTION_TYPES.GET_USERS,
        payload: data,
    };
};


export const addUser = (data) => {
    return {
        type: ACTION_TYPES.DATA_GET_SUCCESS,
        payload: data,
    };
};


export const loadUsers = () => async(dispatch) => {

    try {

        let DB_READY = await db.on("ready", () => (db));

        let allUsers = await db.userDataBase.toArray();

        console.log(allUsers, DB_READY);

        dispatch(saveUsers(allUsers));
    }

    catch (e) {
        //dispatch(setRestaurantsError(e.message));
    } finally {
      //  dispatch(stopLoading());
    }
};