import styled from "styled-components";
import Card from "../Card/Card";

export const CardList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const CardItem = styled(Card)`
  box-sizing: border-box;
  width: 33.33%;
`;
