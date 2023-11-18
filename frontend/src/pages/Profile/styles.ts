import styled from "styled-components";

export const ProfileContainer = styled.div`
  margin: auto;
  padding: 0 20px;
  max-width: 1270px;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

export const ProfileContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 150px;

  height: 100%;
  overflow: hidden;
`;

export const ContainerSVG = styled.div`
  svg {
    width: 500px;
  }
`;

export const ProfileInfos = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  gap: 130px;

  max-width: 500px;

  h2 {
    font-size: 32px;
    color: ${(props) => props.theme["green--500"]};
  }

  p {
    color: ${(props) => props.theme["gray--300"]};
    margin-bottom: 10px;
  }

  svg {
    color: ${(props) => props.theme["green--500"]};
    cursor: pointer;
    margin-right: 6px;
  }
`;

export const ProfileNames = styled.div`
  display: flex;
  justify-content: center;
  align-items: e;
  gap: 100px;
`;

export const ProfileFistName = styled.div``;
export const ProfileLastName = styled.div``;

export const ProfileUsername = styled.div``;
export const ProfileEmail = styled.div``;
