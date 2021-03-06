import React from 'react';
import scrollTo from 'gatsby-plugin-smoothscroll';

import { Wrapper, H1, IconMotion, ViewMore } from '../../../../styles';

const HeroBlockC = () => {
  return (
    <Wrapper column="2 / 12" lg="2 / 12" mb="md" align="center">
      <H1
        width="100rem"
        lgsize="md"
        color="light"
        mt="lg"
        mb="lg"
        data-sal-duration="1200"
        data-sal-delay="100"
        data-sal="slide-up"
        data-sal-easing="ease-out-bounce"
      >
        Who we are
      </H1>
      <IconMotion
        onClick={() => scrollTo('#scroll')}
        initial={{ opacity: 0.4, y: 2 }}
        animate={{ opacity: 0.8, y: -1 }}
        transition={{ duration: 1, yoyo: Infinity, ease: 'easeInOut' }}
      >
        <ViewMore />
      </IconMotion>
    </Wrapper>
  );
};

export default HeroBlockC;
