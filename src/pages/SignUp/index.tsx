import React from 'react';
import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi';

import { Form } from '@unform/web';

import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';

interface TESTE {
  name: string;
  email: string;
  password: string;
}

const SingUp: React.FC = () => {
  function handleSubmit(data: TESTE) {
    console.log(data);
  }

  return (
    <Container>
      <Background />
      <Content>
        <img src={logoImg} alt="GoBarber" />
        <Form initialData={{ name: 'william' }} onSubmit={handleSubmit}>
          <h1>Faça seu Cadastro</h1>
          <Input name="name" icon={FiUser} placeholder="Nome" />
          <Input name="email" icon={FiMail} placeholder="E-mail" />
          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="senha"
          />
          <Button type="submit">Cadastar</Button>
        </Form>

        <a href="/">
          <FiArrowLeft />
          Voltar para Logon
        </a>
      </Content>
    </Container>
  );
};

export default SingUp;
