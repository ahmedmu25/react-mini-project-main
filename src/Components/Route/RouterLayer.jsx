import React from 'react';
import { Header, SideBar, Content } from '../';
import { BrowserRouter as Router } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { createBrowserHistory } from 'history';
import ListDataContextProvider from '../Context/listingContext';

const history = createBrowserHistory();
const RouterLayer = props => {
  return (
    <Router history={history}>
      <Container fluid className='g-0'>
        <ListDataContextProvider>
          <Header></Header>

          <main>
            <Row style={{ backgroundColor: '#f3f3f3' }} className='g-2'>
              <Col className='mt-0' lg={2} md={2}>
                <SideBar />
              </Col>
              <Col lg={10} md={10}>
                <Content />
              </Col>
            </Row>
          </main>
        </ListDataContextProvider>
      </Container>
    </Router>
  );
};

export default RouterLayer;
