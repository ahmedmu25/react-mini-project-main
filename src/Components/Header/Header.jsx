import React, { useContext, useState } from 'react';
import {
  Navbar,
  Container,
  Row,
  Col,
  Form,
  FormControl,
  Button
} from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';

import { ListDataContext } from '../Context/listingContext';

const Header = () => {
  const ListData = useContext(ListDataContext);
  const [search, setSearch] = useState('');
  return (
    <React.Fragment>
      <header>
        <Container fluid>
          <Row>
            <Col md={2} lg={2}>
              <Navbar>
                <Navbar.Brand href='/'>
                  <img
                    alt=''
                    src='./images/logo.svg'
                    className='d-inline-block align-top mx-2'
                  />
                  <h3>Mini</h3>
                </Navbar.Brand>
              </Navbar>
            </Col>

            <Col md={4} lg={4}>
              <div className='mt-3'>
                <div className='float-start'>
                  <Routes>
                    <Route
                      exact
                      path='/'
                      element={
                        <div>
                          <h2 className='text-dark m-0'>Overview</h2>
                          <p className='text-muted'>MiniProject</p>
                        </div>
                      }
                    />
                    <Route
                      exact
                      path='/Listing'
                      element={
                        <div>
                          <h2 className='text-dark m-0'>Listing</h2>
                          <p className='text-muted'>MiniProject</p>
                        </div>
                      }
                    />
                  </Routes>
                </div>
                <div className='float-end mt-2'></div>
              </div>
            </Col>
            <Routes>
              <Route
                exact
                path='/listing'
                element={
                  <Col md={4} lg={4}>
                    <Form
                      onSubmit={e => {
                        e.preventDefault();

                        ListData.dispatch({
                          type: 'GLOBALFILTER',
                          payload: search
                        });
                      }}
                      className='d-flex pt-3'
                    >
                      <FormControl
                        placeholder='Search'
                        className='me-2'
                        aria-label='Search'
                        onChange={e => {
                          setSearch(e.target.value);
                        }}
                      />
                      <Button type='submit' variant='outline-success'>
                        Search
                      </Button>
                    </Form>
                  </Col>
                }
              />
            </Routes>
          </Row>
        </Container>
      </header>
    </React.Fragment>
  );
};

Header.propTypes = {};

export default Header;
