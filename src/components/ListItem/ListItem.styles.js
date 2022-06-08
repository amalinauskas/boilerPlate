import styled from "styled-components";

export const ListItem = styled.li`
  padding: 1rem;
  list-style: none;
  display: flex;
  justify-content: space-between;
  &:not(:first-child) {
    border-top: 1px solid grey;
  }
`;

export const ItemDate = styled.span`
  color: grey;
  padding-left: 1rem;
`;

export const Checkbox = styled.input`
  margin-right: 1rem;
`;
