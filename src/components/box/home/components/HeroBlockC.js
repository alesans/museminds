import React from 'react';
import scrollTo from 'gatsby-plugin-smoothscroll';

import { Wrapper, H1, Small, IconMotion, ViewMoreDark } from '../../../../styles';

const HeroBlockC = () => {
  return (
    <Wrapper column="2 / 6" lg="2 / 10" align="start" pl="sm" pr="sm">
      <H1 width="45rem" lgsize="md" color="dark" mt="lg" mb="sm" size="xl">
        <Small align="left">WE CRAFT BRANDS</Small>
        We're a creative agency that focus in human-centered solutions
      </H1>
      <IconMotion
        onClick={() => scrollTo('#scroll')}
        initial={{ opacity: 0.4, y: 2 }}
        animate={{ opacity: 0.8, y: -1 }}
        transition={{ duration: 1, yoyo: Infinity, ease: 'easeInOut' }}
      >
        <ViewMoreDark />
      </IconMotion>
    </Wrapper>
  );
};

export default HeroBlockC;
