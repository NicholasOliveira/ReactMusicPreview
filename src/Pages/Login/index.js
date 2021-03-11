import React, { useContext, useEffect, useState } from 'react';
import { Container, LoginForm } from './styles';
import Input from '../../Components/Input';
import Button from '../../Components/Button';
import Spacer from '../../Components/Spacer';
import Logo from '../../static/images/logo.png';
import Imagem from '../../Components/Imagem';
import { authEndpoint, clientId, redirectUri, scopes } from '../../__Config';
import getToken from '../../utils/getToken';
import { ContextAuth } from '../../Context';

function Login() {
  const { setToken } = useContext(ContextAuth);
  const [idCliente, setidCliente] = useState(clientId);
  const jwToken = getToken();
  if (jwToken) {
    localStorage.setItem('jwt', jwToken);
  }
  function onChange(e) {
    setidCliente(e.target.value);
  }
  return (
    <Container>
      <LoginForm method="get" action={`${authEndpoint}`}>
        <Imagem
          data={{
            size: 'extrasmallbox',
            url: Logo,
          }}
        />
        <Spacer width="100%" height="20px" />
        <Spacer width="100%" height="30px" />
        <Input
          type="password"
          name="clientId"
          value={idCliente}
          placeholder="Seu IdClient"
          onChange={onChange}
          fontSize="extralarge"
        />
        <Input
          type="hidden"
          name="client_id"
          value={idCliente}
          fontSize="medium"
        />
        <Input
          type="hidden"
          name="redirect_uri"
          value={redirectUri}
          fontSize="medium"
        />
        <Input
          type="hidden"
          name="response_type"
          value="token"
          fontSize="medium"
        />
        <Input
          type="hidden"
          name="show_dialog"
          value="true"
          fontSize="medium"
        />
        <Input
          type="hidden"
          name="scope"
          value={scopes.join('%20')}
          fontSize="medium"
        />
        <Spacer width="100%" height="30px" />
        <Button type="submit" value="Efetuar Login" fontSize="medium" />
      </LoginForm>
    </Container>
  );
}

export default Login;
