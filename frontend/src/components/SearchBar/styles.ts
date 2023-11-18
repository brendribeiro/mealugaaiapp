import styled from "styled-components";

export const SearchBarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
  margin-top: 30px;

  input {
    width: 100%;
    height: 50px;

    padding: 20px;

    border: 1px solid ${(props) => props.theme["gray--600"]};
    border-radius: 10px;

    background: ${(props) => props.theme["gray--600"]};
    color: ${(props) => props.theme.white};

    font-size: 18px;
    font-weight: 300;
  }

  svg {
    position: absolute;
    right: 30px;
    cursor: pointer;
  }
`;
