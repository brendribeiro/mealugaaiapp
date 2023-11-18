import { NavLink } from 'react-router-dom';
import BannerBackpack from '../../assets/banner_backpack.jpg';
import { LogoSVG } from '../assets/Logo';
import { Banner, ButtonContainer, Container, Content, InputButton, InputContainer, NameInputContainer, NamesInput, PasswordInput, UsernameInput } from './styles';

export function SignUp() {
    return (<>
        <Container>
            <Banner>
                <img src={BannerBackpack} alt="imagem mochila como banner" />
            </Banner>

            <Content>
                <LogoSVG />

                <InputContainer>
                    <UsernameInput>
                        <p>Username</p>
                        <input type="text" placeholder='johnsmith123' />
                    </UsernameInput>

                    <NameInputContainer>
                        <NamesInput>
                            <p>Nome</p>
                            <input type="text" placeholder='John' />
                        </NamesInput>

                        <NamesInput>
                            <p>Sobrenome</p>
                            <input type="text" placeholder='Smith' />
                        </NamesInput>
                    </NameInputContainer>

                    <PasswordInput>
                        <p>Password</p>
                        <input type="password" placeholder='Insira uma senha forte' />
                    </PasswordInput>

                    <ButtonContainer>
                        <InputButton>
                            Registrar
                        </InputButton>
                        <NavLink to="/auth/login">
                            clique para entrar
                        </NavLink>
                    </ButtonContainer>
                </InputContainer>

            </Content>
        </Container>
    </>);
}