import React from 'react';

import {
  Wrapper,
  Ul,
  Li,
  Anchor,
  H4,
  ContactFooterIconOne,
  ContactFooterIconThree,
  SocialFooterFacebook,
  SocialFooterInstagram,
  // SocialFooterTwitter,
  // SocialFooterPinterest,
} from '../../../styles';

const Contact = () => {
  return (
    <Wrapper alignc="start">
      <H4 mb="sm">Contact</H4>
      <Ul gap="sm">
        <Li>
          <ContactFooterIconOne />
          info@museminds.com
        </Li>
        <Li>
          <ContactFooterIconThree />
          San José, Costa Rica
        </Li>
        <Ul columns="repeat(4, max-content)" colmd="repeat(4, max-content)" rgap="base">
          <Li>
            <Anchor target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/musemindsagency/">
              <SocialFooterFacebook />
            </Anchor>
          </Li>
          <Li>
            <Anchor href="https://www.instagram.com/muse.minds/">
              <SocialFooterInstagram />
            </Anchor>
          </Li>
          {/* <Li>
            <Anchor href="">
              <SocialFooterTwitter />
            </Anchor>
          </Li>
          <Li>
            <Anchor href="">
              <SocialFooterPinterest />
            </Anchor>
          </Li> */}
        </Ul>
      </Ul>
    </Wrapper>
  );
};

export default Contact;
