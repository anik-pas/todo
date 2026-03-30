import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./layouts/layout";
import { NotFound } from "./pages/404";
import { ViewList } from "./pages/ViewList";
import { ToDoListPage } from "./pages/ToDoListPage";
import { ViewListItem } from "./pages/ViewListItem";
import { ghRoot } from "./const";

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      errorElement: <Layout />,
      children: [
        { path: '/', element: <ToDoListPage /> },
        { path: '/list', element: <ViewList /> },
        { path: '/list/:id', element: <ViewListItem /> },
      ],
    },
    { path: '/404', element: <NotFound /> },
    { path: '*', element: <NotFound /> },
  ],
  { basename: `${ghRoot}` }
);