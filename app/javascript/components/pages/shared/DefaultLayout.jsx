import React from 'react';
import PropTypes from 'prop-types';

import { Container, Row } from 'react-bootstrap';
import MainNavigation from './MainNavigation';
import Footer from './Footer';

const DefaultLayout = ({ children }) => (
  <>
    <MainNavigation />
    <Container fluid>
      <Row className="justify-content-center">{children}</Row>
    </Container>
    <Footer />
  </>
);

export default DefaultLayout;

DefaultLayout.propTypes = {
  children: PropTypes.node
};

DefaultLayout.defaultProps = {
  children: null
};
