import { createBrowserRouter } from 'react-router-dom';
import { MainLayout } from './layouts/Mainlayout';
import { ItemDetails } from './pages/ItemDetails/ItemDetails';
import { NotFound } from './pages/NotFound/NotFound';
import { ToDoListPage } from './pages/ToDoListPage';
import { ViewList } from './pages/ViewList/ViewList';
import { ghRoot } from './const';



export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <MainLayout />,
      errorElement: <NotFound />,
      children: [
        {
          path: '/',
          element: <ToDoListPage />,
        },
        {
          path: '/list',
          element: <ViewList />,
        },
        {
          path: '/list/:id',
          element: <ItemDetails />,
        },
      ],
    },
    {
      path: '*',
      element: <NotFound />,
    },
  ],
  {
    basename: ghRoot,
  },
);