import React, {useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Spinner, Container} from "react-bootstrap";
import * as actions from './store/actions';
import "bootstrap/dist/css/bootstrap.min.css";
import {selectUsers} from "./store/selectors";
import Header from './components/Header/Header'
import FormRegistration from './components/FormAdd/FormAdd'
import {reset} from 'redux-form';
import uuid from 'react-uuid'
import {db} from "./database/database";
import "./App.css";

function App () {

  const dispatch = useDispatch();
  const users = useSelector(state => selectUsers(state));

    useEffect(() => {
    dispatch(actions.loadUsers());
  }, []);

    console.log(users,'userInfouserInfo');




    function showResults(values) {
        console.log(values,'valuesvaluesvaluesvalues');

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

        dispatch(reset('simple'));
      }

  return (
      <Container>
        <Header />
        <FormRegistration onSubmit={showResults}/>
      </Container>


  )
}



export default App;
