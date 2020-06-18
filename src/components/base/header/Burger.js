import React from 'react';
import { bool, func } from 'prop-types';

import { Wrapper, BurgerBtn, Closed, Opened } from '../../../styles';

const Burger = ({ open, setOpen }) => {
  return (
    <Wrapper column="13 / -1" display="none" lgdisplay="block">
      <BurgerBtn open={open} onClick={() => setOpen(!open)}>
        {open ? <Closed /> : <Opened />}
      </BurgerBtn>
    </Wrapper>
  );
};

Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default Burger;
