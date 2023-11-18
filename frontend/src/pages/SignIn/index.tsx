import { NavLink } from 'react-router-dom';
import BannerBackpack from '../../assets/banner_backpack.jpg';
import { LogoSVG } from '../assets/Logo';
import { Banner, ButtonContainer, Container, Content, InputButton, InputContainer, PasswordInput, UsernameInput } from './styles';

export function SignIn() {
    return (
        <>
            <Container>
                <Banner>
                    <img src={BannerBackpack} alt="imagem mochila como banner" />
                </Banner>

                <Content>
                    <LogoSVG />

                    <InputContainer>
                        <UsernameInput>
                            <p>Username</p>
                            <input type="text" />
                        </UsernameInput>

                        <PasswordInput>
                            <p>Password</p>
                            <input type="password" />
                        </PasswordInput>

                        <ButtonContainer>
                            <InputButton>
                                Entrar
                            </InputButton>

                            <NavLink to="/auth/register">
                                clique para criar sua conta
                            </NavLink>
                        </ButtonContainer>
                    </InputContainer>

                </Content>
            </Container>
        </>
    )
}