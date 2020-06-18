import React, { useState, useRef } from 'react';

import Logo from './header/Logo';
import Navbar from './header/Navbar';
import Burger from './header/Burger';

import { useOnClickOutside } from '../../hooks/UseOnClickOutside';
import { HLayout, Container } from '../../styles';

const Header = () => {
  const [open, setOpen] = useState(false);

  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));
  return (
    <HLayout bg="light" pt="base" pb="base" shadow="card">
      <Container forwardRef={node}>
        <Logo />
        <Navbar open={open} setOpen={setOpen} />
        <Burger open={open} setOpen={setOpen} />
      </Container>
    </HLayout>
  );
};

export default Header;
