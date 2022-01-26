import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Overview = () => {
  return (
    <React.Fragment>
      <Row className='_pprow pb-3'>
        <Row
          className='ms-2 mb-2'
          style={{
            backgroundImage: `url("./images/hero.png")`,
            backgroundRepeat: 'no-repeat',
            height: '50vh',
            backgroundSize: 'contain',
            position: 'relative'
          }}
        ></Row>
        <Row>
          <Col md={3}></Col>
          <Col className='border-end border-start bkcolor'>
            <Row>
              {' '}
              <Col className='pt-3 ps-0' md={9}>
                {' '}
                <h3>Mini Project</h3>
              </Col>
              <Col md={3}>
                <Link style={{ color: '#02ffcf' }} to='./listing'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='50'
                    height='50'
                    fill='currentColor'
                    className='bi bi-play-fill'
                    viewBox='0 0 16 16'
                  >
                    <path d='m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z' />
                  </svg>
                </Link>
              </Col>{' '}
            </Row>

            <p className='text-left'>
              is based on react.js, The goal of the <b>Mini Project</b> is to
              showcase how well you can handle backend data. In order to
              represent skills and understanding of React. I have added
              following functions.
              <br />
            </p>

            <ul>
              <li>Displaying of data as listing.</li>
              <li>
                Added Sort functionality: Sort by price(high-low, low-high),
                sort by featured.
              </li>
              <li>Change the number of items to be displayed on one page </li>
              <li>Pagination </li>
              <li>Searching </li>
            </ul>
          </Col>
          <Col className='border-end  bkcolor'>
            <Row>
              {' '}
              <Col className='pt-3 ps-0' md={9}>
                <h3>Packages Used</h3>
              </Col>
            </Row>

            <p className='text-left'>
              In order to build the application some external Packages been used
              as follows:
            </p>
            <ul>
              <li>React Router</li>
              <li>React Select</li>
              <li>React bootstrap</li>
              <li>Scss </li>
            </ul>
          </Col>
          <Col md={3}></Col>
        </Row>
      </Row>
    </React.Fragment>
  );
};

export default Overview;
