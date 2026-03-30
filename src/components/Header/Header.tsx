import { useDispatch } from 'react-redux'
import { HeaderWrapper, Container, StyledNavLink, ToggleButton } from './Header.styles'
import { toggleThemeAction } from '../../feature/themeList'

export const Header = () => {
  const dispatch = useDispatch()

  return (
    <HeaderWrapper>
      <Container>
        <StyledNavLink to="/">ToDo</StyledNavLink>
        <StyledNavLink to="/list">List</StyledNavLink>
        <ToggleButton onClick={() => dispatch(toggleThemeAction())}>
          toggle
        </ToggleButton>
      </Container>
    </HeaderWrapper>
  )
}
