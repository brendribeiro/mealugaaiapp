import { ContainerNav, HeaderContainer, LogoContainer, Nav } from "./styles";
import { NavLink } from 'react-router-dom';

export function Header() {
    return (<>
        <HeaderContainer>
            <LogoContainer>
                <h1>mealugaaí</h1>
            </LogoContainer>

            <ContainerNav>
                <Nav>
                    <NavLink to="/home">
                        home
                    </NavLink>

                    <NavLink to="/profile">
                        meu perfil
                    </NavLink>

                    <a href="">minhas locações</a>
                </Nav>
            </ContainerNav>
        </HeaderContainer>
    </>)
}