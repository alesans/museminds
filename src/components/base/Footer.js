import React from 'react';

import { FLayout, Container } from '../../styles';
import Contact from './footer/Contact';
import Menu from './footer/Menu';
import Services from './footer/Services';
import Projects from './footer/Projects';
import Copyright from './footer/Copyright';

const Footer = () => {
  return (
    <FLayout pt="md" pb="md" bt="1px solid #EDEDED">
      <Container column="3/13" columns="footer" gap="sm" pb="lg" bb="1px solid #EDEDED">
        <Contact />
        <Services />
        <Menu />
        <Projects />
      </Container>
      <Container box="centerBox" mt="md">
        <Copyright />
      </Container>
    </FLayout>
  );
};

export default Footer;
