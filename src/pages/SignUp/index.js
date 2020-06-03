import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { Form, Input } from '@rocketseat/unform';

import logo from '~/images/logo.svg';
import { signUpRequest } from '~/store/modules/auth/actions';
import schema from '~/validators/signup';

export default function SignUp() {
  const dispatch = useDispatch();

  function handleSubmit(data) {
    const { name, email, password } = data;

    dispatch(signUpRequest(name, email, password));
  }

  return (
    <>
      <img src={logo} alt="GoBarber" />

      <Form onSubmit={handleSubmit} schema={schema}>
        <Input name="name" placeholder="Nome completo" />
        <Input name="email" type="email" placeholder="Seu e-mail" />
        <Input
          name="password"
          type="password"
          placeholder="Sua senha secreta"
        />

        <button type="submit">Criar Conta</button>
        <Link to="/">Ja tenho login</Link>
      </Form>
    </>
  );
}
