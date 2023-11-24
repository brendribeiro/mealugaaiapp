import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import BannerBackpack from '../../assets/banner_backpack.jpg';
import { LogoSVG } from '../assets/Logo';
import { register } from '../SignIn/api';
import {
  Banner,
  ButtonContainer,
  Container,
  Content,
  ErrorMessage,
  InputButton,
  InputContainer,
  LoadingMessage,
  Message,
  NameInputContainer,
  NamesInput,
  PasswordInput,
  UsernameInput,
} from './styles';

export function SignUp() {
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  // Estados para erros de validação
  const [usernameError, setUsernameError] = useState('');
  const [nameError, setNameError] = useState('');
  const [surnameError, setSurnameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
    if (usernameError && event.target.value) {
      setUsernameError('');
    }
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
    if (nameError && event.target.value) {
      setNameError('');
    }
  };

  const handleSurnameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSurname(event.target.value);
    if (surnameError && event.target.value) {
      setSurnameError('');
    }
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    if (passwordError && event.target.value) {
      setPasswordError('');
    }
  };

  const validate = () => {
    let isValid = true;
    if (!username) {
      setUsernameError('Por favor, preencha o username.');
      isValid = false;
    } else {
      setUsernameError('');
    }
    if (!name) {
      setNameError('Por favor, preencha o nome.');
      isValid = false;
    } else {
      setNameError('');
    }
    if (!surname) {
      setSurnameError('Por favor, preencha o sobrenome.');
      isValid = false;
    } else {
      setSurnameError('');
    }
    if (!password) {
      setPasswordError('Por favor, preencha a senha.');
      isValid = false;
    } else {
      setPasswordError('');
    }
    return isValid;
  };
  

  const handleRegister = async () => {
    if (!validate()) {
      return;
    }

    setIsLoading(true);
    try {
      await register(username, name, surname, password);
      localStorage.setItem(
        'user',
        JSON.stringify({ username, firstName: name, lastName: surname }),
      );
      setIsLoading(false);
      setShowSuccessMessage(true);
      setTimeout(() => {
        setShowSuccessMessage(false);
        navigate('/auth/login');
      }, 2000);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
      setErrorMessage(
        'Ocorreu um erro ao registrar. Já existe um cadastro com esse usuario.',
      );
    }
  };

  return (
    <Container>
      <Banner>
        <img src={BannerBackpack} alt="imagem mochila como banner" />
      </Banner>

      <Content>
        <LogoSVG />

        <InputContainer>
          <UsernameInput>
            <p>Username</p>
            <input
              type="text"
              value={username}
              onChange={handleUsernameChange}
            />
            {usernameError && <ErrorMessage>{usernameError}</ErrorMessage>}
          </UsernameInput>

          <NameInputContainer>
            <NamesInput>
              <p>Nome</p>
              <input type="text" value={name} onChange={handleNameChange} />
              {nameError && <ErrorMessage>{nameError}</ErrorMessage>}
            </NamesInput>

            <NamesInput>
              <p>Sobrenome</p>
              <input
                type="text"
                value={surname}
                onChange={handleSurnameChange}
              />
              {surnameError && <ErrorMessage>{surnameError}</ErrorMessage>}
            </NamesInput>
          </NameInputContainer>

          <PasswordInput>
            <p>Password</p>
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />
            {passwordError && <ErrorMessage>{passwordError}</ErrorMessage>}
          </PasswordInput>

          <ButtonContainer>
            <InputButton onClick={handleRegister}>Registrar</InputButton>
            <NavLink to="/auth/login">Clique para entrar</NavLink>
          </ButtonContainer>
          {isLoading && (
            <Message>
              <LoadingMessage>C a r r e g a n d o</LoadingMessage>
            </Message>
          )}
          {showSuccessMessage && (
            <Message>
              Cadastro efetuado com sucesso! Faça o login para acessar sua 😊
            </Message>
          )}
          {errorMessage && <Message>{errorMessage}</Message>}
        </InputContainer>
      </Content>
    </Container>
  );
}
