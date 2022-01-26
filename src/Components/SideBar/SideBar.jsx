import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const SideBar = () => {
  return (
    <div id='sidebar' className='h-100'>
      <Navbar>
        <Container fluid>
          <Nav defaultActiveKey='/' className='p-4'>
            <NavLink className='mb-2' to='/'>
              Overview
            </NavLink>
            <NavLink className='my-2' to='/listing'>
              Listing
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default SideBar;
