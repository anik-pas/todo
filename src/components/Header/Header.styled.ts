import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderWrapper = styled.header`
	position: fixed;
	top: 0;
	right: 0;
	left: 0;
	height: 50px;
	background-color: ${({ theme }) => theme.colors.backgroundAccent};
	display: flex;
	align-items: center;
`;

export const HeaderContainer = styled.div`
	max-width: 97%;
	width: 100%;
	margin: 0 auto;
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
`;

export const HeaderLink = styled(NavLink)`
	text-decoration: none;
	padding: 10px;
	color: ${({ theme }) => theme.colors.linkDefault};

	&.active {
		color: ${({ theme }) => theme.colors.linkActive};
	}
`;

export const ToggleThemeButton = styled.button`
position: absolute;
top: 50%;
right: 0;
transform: translateY(-50%);

width: 40px;
  height: 40px;
  border: none;
  border-radius: 50%;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.backgroundAccent};
  color: ${({ theme }) => theme.colors.backgroundPrimary};
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);

  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.backgroundPrimary};
    color: ${({ theme }) => theme.colors.backgroundSecondary};
  }

`