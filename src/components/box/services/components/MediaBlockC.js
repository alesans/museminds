import React from 'react';

import { Wrapper, H2, P, Small } from '../../../../styles';

const MediaBlockC = () => {
  return (
    <Wrapper column="2 / 6" lg="2/12" align="center">
      <Wrapper mt="sm" mb="sm">
        <Wrapper mb="sm">
          <Small align="left">Services</Small>
          <H2>Video post-production</H2>
        </Wrapper>
        <Wrapper>
          <P>Development of audiovisual materials from the recorded material, which will be presented to audiences.</P>
        </Wrapper>
      </Wrapper>
    </Wrapper>
  );
};

export default MediaBlockC;
