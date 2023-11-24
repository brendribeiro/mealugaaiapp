import { useState, useEffect, FormEvent } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import BannerBackpack from '../../assets/banner_backpack.jpg';
import { LogoSVG } from '../assets/Logo';
import { login } from './api';
import {
  Banner,
  ButtonContainer,
  Container,
  Content,
  InputButton,
  InputContainer,
  PasswordInput,
  UsernameInput,
  Message,
  LoadingMessage,
} from './styles';

interface ErrorResponse {
  response?: {
    data?: {
      message?: string;
    };
  };
}

const isError = (arg: unknown): arg is ErrorResponse => {
  return (
    arg !== null &&
    arg !== undefined &&
    typeof arg === 'object' &&
    'response' in arg
  );
};

export function SignIn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const successMessage = location.state?.successMessage;

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
    setErrorMessage('');
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    setErrorMessage('');
  };

  const handleLogin = async (event: FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const response = await login(username, password);
      console.log(response);
      // Armazenar o token de autenticação no LocalStorage
      localStorage.setItem('token', response.token);
      setIsLoading(false);
      setShowSuccessMessage(true);
      setErrorMessage('');
      localStorage.setItem('username', username);
      setTimeout(() => {
        setShowSuccessMessage(false);
        navigate('/home');
      }, 2000);
    } catch (error: unknown) {
      console.error(error);
      setIsLoading(false);
      if (isError(error) && error.response?.data?.message) {
        if (error.response.data.message === 'Credentials incorrect') {
          setErrorMessage(
            'Credenciais incorretas. Por favor, corrija e tente novamente.',
          );
        } else {
          setErrorMessage('Falha no login. Por favor, tente novamente.');
        }
      }
    }
  };

  return (
    <>
      <Container>
        <Banner>
          <img src={BannerBackpack} alt="imagem mochila como banner" />
        </Banner>

        <Content>
          <LogoSVG />

          <form onSubmit={handleLogin}>
            <InputContainer>
              <UsernameInput>
                <p>Username</p>
                <input
                  type="text"
                  value={username}
                  onChange={handleUsernameChange}
                />
              </UsernameInput>

              <PasswordInput>
                <p>Password</p>
                <input
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </PasswordInput>

              <ButtonContainer>
                <InputButton
                  type="submit"
                  disabled={isLoading || !username || !password} 
                >
                  Entrar
                </InputButton>
                <NavLink to="/auth/register">
                  Clique para criar sua conta
                </NavLink>
                {successMessage && <p>{successMessage}</p>}
                {isLoading && (
                  <Message>
                    <LoadingMessage>C a r r e g a n d o</LoadingMessage>
                  </Message>
                )}
                {showSuccessMessage && (
                  <Message>Login bem Sucedido! Redirecionando...</Message>
                )}
                {errorMessage && <Message>{errorMessage}</Message>}
              </ButtonContainer>
            </InputContainer>
          </form>
        </Content>
      </Container>
    </>
  );
}
