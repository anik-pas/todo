import styled from 'styled-components';
import { Link } from "react-router-dom";

export const NotFoundContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-top: 5rem;
	min-height: 100dvh;
`;

export const NotFoundTitle = styled.h1``

export const NotFoundLink = styled(Link)`
  display: inline-block;
  margin-top: 20px;
  font-size: 1rem;
  font-weight: 500;
  color: #0077cc;
  text-decoration: none;

  &:hover {
    color: #005fa3;
    text-decoration: underline;
  }
`