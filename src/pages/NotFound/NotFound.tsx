import {
  NotFoundContainer,
  NotFoundLink,
  NotFoundTitle,
} from './NotFound.styled';

export const NotFound = () => {
  return (
    <NotFoundContainer>
      <NotFoundTitle>Not Found</NotFoundTitle>
      <NotFoundLink to='/'>Back Home</NotFoundLink>
    </NotFoundContainer>
  );
};