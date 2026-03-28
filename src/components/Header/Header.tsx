import { HeaderWrapper, Container, StyledNavLink } from './Header.styles'

export const Header = () => {
  return (
    <HeaderWrapper>
      <Container>
        <StyledNavLink to="/">ToDo</StyledNavLink>
        <StyledNavLink to="/list">List</StyledNavLink>
      </Container>
    </HeaderWrapper>
  )
}
