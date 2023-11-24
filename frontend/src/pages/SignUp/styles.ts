import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: minmax(auto, 800px) 1fr;
  justify-content: center;
  align-content: center;

  width: 100vw;
  height: 100vh;

  overflow: hidden;
`;

export const Banner = styled.div`
  height: 100vh;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 80px;

  padding: 0 100px;
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 25px;
  max-width: 485px;
  width: 100%;
  input {
    height: 50px;
    max-width: 485px;
    width: 100%;
    padding: 15px;
    border-radius: 10px;
    border: 1px solid ${(props) => props.theme['gray--600']};
    background: ${(props) => props.theme['gray--600']};
    color: ${(props) => props.theme.white};
    font-size: 18px;
    font-weight: 300;
    line-height: 60.688%;
  }

  p {
    color: ${(props) => props.theme['gray--100']};
    font-size: 20px;
    font-weight: 400;
    line-height: 60.688%;
    margin-bottom: 10px;
  }
`;

export const InputButton = styled.button`
  color: ${(props) => props.theme.white};

  text-align: center;
  font-size: 26px;
  font-style: normal;
  line-height: 60.688%;
  height: 60px;
  max-width: 485px;
  width: 100%;
  cursor: pointer;
  border: none;
  border-radius: 10px;
  background-color: ${(props) => props.theme['green--700']};
  &:hover {
    background: ${(props) => props.theme['green--500']};
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  a {
    color: ${(props) => props.theme['gray--300']};

    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 60.688%;
    text-decoration-line: underline;
    margin-top: 10px;
    &:hover {
      color: ${(props) => props.theme['gray--100']};
    }
  }
`;

export const UsernameInput = styled.div``;
export const PasswordInput = styled.div``;
export const NamesInput = styled.div``;

export const NameInputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const Message = styled.div`
  margin-top: 20px;
  background-color: #1a1c1d;
  border: 1px solid #00875f;
  border-radius: 0.25rem;
  padding: 1rem;
  width: 100%;
  text-align: center;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
`;

const dotAnimation = keyframes`
  0%, 20% {
    opacity: 0;
  }
  40%, 60% {
    opacity: 1;
  }
  80%, 100% {
    opacity: 0;
  }
`;

export const LoadingMessage = styled.div`
  &::after {
    content: ' . . .';
    animation: ${dotAnimation} 1s steps(5, end) infinite;
  }
`;

export const ErrorMessage = styled.p`
  color: #ff4d4f !important;
  font-size: 15px !important;
  margin-top: 5px;
  line-height: 1 !important;
  font-style: italic !important;
`;
