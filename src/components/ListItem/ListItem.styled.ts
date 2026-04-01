import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ListItemLink = styled(Link)<{$isDone: boolean}>`
	text-decoration: none;
	font-size: 1.25rem;
	font-weight: 600;
  color: ${({ $isDone }) => ($isDone ? "green" : "red")};
`;
