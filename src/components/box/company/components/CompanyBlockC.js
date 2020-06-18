import React from 'react';

import { Wrapper, H2, P, Small } from '../../../../styles';

const CompanyBlockC = () => {
  return (
    <Wrapper column="2 / 7" lg="2/12" align="center">
      <Wrapper mt="sm" mb="sm">
        <Wrapper mb="sm">
          <Small align="left">Company</Small>
          <H2>Our Mission</H2>
        </Wrapper>
        <Wrapper>
          <P>
            We are a group of professionals who develop quality products for our clients with a humanistic approach.
            From the conception of MuseMinds, we care about business development through a human point of view and
            various areas of thought. Our multidisciplinary team includes web developers, designers, psychologists,
            musicians, business experts, pedagogues, visual artists, and marketing professionals. Contact with people is
            essential, that is why MuseMinds for us means the need for the inspiration to descend, inspiring the minds
            of our great team and thus developing quality products.
          </P>
        </Wrapper>
      </Wrapper>
    </Wrapper>
  );
};

export default CompanyBlockC;
