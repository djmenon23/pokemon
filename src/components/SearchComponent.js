import React from 'react';
import {Navbar, Nav,Form,FormControl,Button} from 'react-bootstrap';
const Search = () => {
    return (
        <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="#home">Pokemon</Navbar.Brand>
        <Nav className="mr-auto">
       
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-light">Search</Button>
        </Form>
      </Navbar>
    )
}

export default Search;