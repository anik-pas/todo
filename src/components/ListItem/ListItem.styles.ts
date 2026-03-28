import styled from "styled-components";

export const StyledLink = styled.a<{ $isDone: boolean }>`
  text-decoration: none;
  padding: 10px;
  color: ${({ $isDone }) => ($isDone ? 'green' : 'red')};
`;
