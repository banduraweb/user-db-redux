import React from "react";
import { Form, Navbar, Nav } from "react-bootstrap";
import { DebounceInput } from 'react-debounce-input';
import {db} from "../../database/database";
import { useDispatch } from 'react-redux';
import * as actions from '../../store/actions';

const Header = () => {
    const dispatch = useDispatch();
    const preventEvent=(e)=>{
        e.preventDefault()
    };

    const getQuerySearchParam =({target})=>{
        const param = target.value;
        dispatch(actions.searchQueryUsers(param))
    };

    return (
        <>
            <Navbar bg="dark" variant="dark" id="header__navbar">
                <Navbar.Brand href="#home">{db.name}</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#">V : {db.verno}</Nav.Link>
                </Nav>
                <Form inline onSubmit={preventEvent}>
                    <DebounceInput
                        onChange={(e)=>{getQuerySearchParam(e)}}
                        debounceTimeout={700}
                        type="text"
                        placeholder="Search by name"
                        className="mr-sm-2" />
                </Form>
            </Navbar>
        </>
    );
};

export default Header;
