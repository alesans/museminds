import React from 'react';

import { Wrapper, H2, P, Small } from '../../../../styles';

const DesBlockC = () => {
  return (
    <Wrapper lgorder="1" column="8 / 12" lg="2 / 12" align="center" order="1">
      <Wrapper mt="sm" mb="sm">
        <Wrapper mb="sm">
          <Small align="left">Services</Small>
          <H2>UI/UX Design</H2>
        </Wrapper>
        <Wrapper>
          <P>
            Define the most graphic part of the project, where the layout and look and feel of the application are
            detailed. In short, the appearance and aesthetics of a web page, desktop or mobile application.
          </P>
        </Wrapper>
      </Wrapper>
    </Wrapper>
  );
};

export default DesBlockC;
