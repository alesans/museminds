import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { Theme, GlobalStyles } from '../../styles';

import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <Fragment>
      <ThemeProvider theme={Theme}>
        <GlobalStyles />
        <Header />
        {children}
        <Footer />
      </ThemeProvider>
    </Fragment>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
