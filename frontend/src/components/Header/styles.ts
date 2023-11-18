import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 10px;
`;

export const LogoContainer = styled.div`
  h1 {
    font-family: Offside;
    font-style: normal;
    font-weight: 400;
    color: ${(props) => props.theme["green--500"]};
  }
`;

export const ContainerNav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    color: ${(props) => props.theme["green--500"]};
    text-decoration: none;
    padding: 15px;

    font-size: 18px;

    border-top: 1px solid ${(props) => props.theme["gray--800"]};
    border-bottom: 1px solid ${(props) => props.theme["gray--800"]};
  }

  a:hover {
    border-bottom: 1px solid ${(props) => props.theme["green--300"]};
  }
`;
