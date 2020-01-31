import React, {useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {Container} from "react-bootstrap";
import * as actions from './store/actions';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/Header/Header'
import FormRegistration from './components/FormAdd/FormAdd';
import TableData from './components/TableData/TableData';
import {reset} from 'redux-form';
import uuid from 'react-uuid'
import {db} from "./database/database";
import "./App.css";

function App () {

  const dispatch = useDispatch();


    useEffect(() => {
        setTimeout(()=>{
            dispatch(actions.loadUsers());
        },2000)


  }, []);



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
