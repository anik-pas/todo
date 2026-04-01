import { useDispatch, useSelector } from 'react-redux';
import {
  HeaderContainer,
  HeaderLink,
  HeaderWrapper,
  ToggleThemeButton,
} from './Header.styled';
import { toggleThemeAction } from '../../feature/themeSlice';
import type { RootState } from '../../store';

export const Header = () => {
  const dispatch = useDispatch()
  const currentTheme = useSelector((state: RootState) => state.themeList.theme)
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <HeaderLink to='/'>Home</HeaderLink>
        <HeaderLink to='/list'>ToDo List</HeaderLink>
        <ToggleThemeButton onClick={() => dispatch(toggleThemeAction())}>
          {currentTheme.name === 'light' ? '🌙' : '🌞'}
        </ToggleThemeButton>
      </HeaderContainer>
    </HeaderWrapper>
  );
};