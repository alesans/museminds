import React, { useState } from 'react';
// import styled from 'styled-components';
import axios from 'axios';

import { Wrapper, Form, SendBtn, P, Input, Label, Textarea } from '../../../../styles';

const ContactForm = () => {
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
  });
  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg },
    });
    if (ok) {
      form.reset();
    }
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    setServerState({ submitting: true });
    axios({
      method: 'post',
      url: 'https://formspree.io/',
      data: new FormData(form),
    })
      .then((r) => {
        handleServerResponse(true, 'Thanks! We will be in touch soon.', form);
      })
      .catch((r) => {
        handleServerResponse(false, r.response.data.error, form);
      });
  };
  return (
    <Wrapper column="2 / 12" lg="2 / 12">
      <Form onSubmit={handleOnSubmit} columns="gridTwo" gap="md" align="start">
        <Wrapper>
          <Wrapper>
            <Input type="hidden" name="_gotcha" />
          </Wrapper>
          <Wrapper>
            <Label>Summary*</Label>
            <Input type="text" name="summary" placeholder="Job description" required />
          </Wrapper>
          <Wrapper>
            <Label>Full Name*</Label>
            <Input type="text" name="fullname" placeholder="John Doe" required />
          </Wrapper>
          <Wrapper>
            <Label>Email*</Label>
            <Input type="text" name="email" placeholder="nfo@johndoe.com" required />
          </Wrapper>
          <Wrapper>
            <Label>Website (optional)</Label>
            <Input type="text" name="website" placeholder="www.johndoe.com" />
          </Wrapper>
        </Wrapper>
        <Wrapper>
          <Wrapper mb="md">
            <Label>Message*</Label>
            <Textarea name="message" rows="6" col="1" placeholder="Job brief..." required></Textarea>
          </Wrapper>
          <Wrapper justifyi="center" mb="sm">
            <SendBtn padding="xl" type="submit" disabled={serverState.submitting}>
              Send
            </SendBtn>
          </Wrapper>
          <Wrapper justify="center" justifyi="center">
            {serverState.status && <P className={!serverState.status.ok ? 'errorMsg' : ''}>{serverState.status.msg}</P>}
          </Wrapper>
        </Wrapper>
      </Form>
    </Wrapper>
  );
};

export default ContactForm;
