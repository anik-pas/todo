import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header/Header';
import { Fonts } from '../components/Fonts';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../styles/GlobalStyle';
import { useSelector } from 'react-redux';
import type { RootState } from '../store';

export const MainLayout = () => {

  const currentTheme = useSelector((state: RootState) => state.themeList.theme)
  return (
    <>
      <ThemeProvider theme={currentTheme}>
        <GlobalStyle />
        <Fonts />
        <Header />
        <Outlet />
      </ThemeProvider>
    </>
  );
};