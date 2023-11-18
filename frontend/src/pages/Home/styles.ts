import styled from "styled-components";

export const HomeContainer = styled.div`
  margin: auto;
  padding: 0 20px;
  max-width: 1270px;
  width: 100%;
  overflow: hidden;
`;

export const ItemsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  place-items: center;
  gap: 20px;

  margin-top: 50px;
`;

export const ItemCard = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;

  max-width: 250px;
  width: 100%;
  height: 300px;

  border-radius: 8px;
  border: 1px solid ${(props) => props.theme["gray--700"]};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  margin-bottom: 10px;
  cursor: pointer;
`;

export const ItemImg = styled.div`
  img {
    height: 200px;
    width: 250px;
    object-fit: cover;

    border-radius: 8px 8px 0px 0px;
  }
`;

export const ItemName = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;

  width: 100%;

  font-size: 17px;
  font-weight: 500;
  color: ${(props) => props.theme["gray--300"]};
`;

export const ItemInfos = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
`;

export const ItemInfoContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;

  padding: 0 10px;

  height: 100%;
`;

export const ItemCategory = styled.div`
  color: ${(props) => props.theme["green--500"]};
  font-size: 16px;
  font-weight: 400;
`;

export const ItemPrice = styled.div`
  color: ${(props) => props.theme["green--300"]};
  font-size: 16px;
  font-weight: 500;
`;
