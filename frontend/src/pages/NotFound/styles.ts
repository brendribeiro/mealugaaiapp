import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;

  height: 100vh;
  width: 100vw;

  padding: 20px;

  overflow: hidden;

  svg {
    width: 100%;
    height: 60%;
    object-fit: cover;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 20px;

  h2 {
    color: ${(props) => props.theme["green--500"]};
    font-size: 35px;
    font-style: normal;
    font-weight: 870;
    line-height: 110%;
  }

  p {
    color: ${(props) => props.theme["gray--300"]};
    font-size: 20px;
    font-style: normal;
  }
`;
