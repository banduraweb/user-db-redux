import React from "react";
import { Form, Navbar, Nav } from "react-bootstrap";
import { DebounceInput } from 'react-debounce-input';

const Header = () => {
    const preventEvent=(e)=>{
        e.preventDefault()
    };

    return (
        <>
            <Navbar bg="dark" variant="dark" id="header__navbar">
                <Navbar.Brand href="#home">INDEXEDDB API</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#">indexedDB: </Nav.Link>
                    <Nav.Link href="#">Version: </Nav.Link>
                </Nav>
                <Form inline onSubmit={preventEvent}>
                    <DebounceInput
                        onChange={()=>{}}
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
