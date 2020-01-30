import React, {useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Container} from "react-bootstrap";
import * as actions from './store/actions';
import "bootstrap/dist/css/bootstrap.min.css";
import {selectUsers, statusLoading} from "./store/selectors";
import Header from './components/Header/Header'
import FormRegistration from './components/FormAdd/FormAdd';
import TableData from './components/TableData/TableData';
import {reset} from 'redux-form';
import uuid from 'react-uuid'
import {db} from "./database/database";
import "./App.css";

function App () {
    console.log(db,'db');
  const dispatch = useDispatch();
  const users = useSelector(state => selectUsers(state));
  const getLoadStatus = useSelector(state => statusLoading(state));

    useEffect(() => {
        setTimeout(()=>{
            dispatch(actions.loadUsers());
        },2000)


  }, []);

    console.log(users,'userInfouserInfo');
    console.log(getLoadStatus,'getLoadStatus');

    const  AddUserToDB =(values) => {

        const {firstName, lastName, Gender, Age, phone} = values;

        let user = {
            _id: uuid(),
            FIRST_NAME: firstName,
            LAST_NAME: lastName,
            PHONE: phone,
            GENDER: Gender,
            AGE: Age
        };

        db.userDataBase.add(user).then(async () => {
            dispatch(actions.addUser(user));
        });

        dispatch(reset('addUserForm'));
      };

  return (

      <Container>
        <Header />
        <FormRegistration onSubmit={AddUserToDB}/>
        <TableData/>
      </Container>


  )
}

export default App;
