import React from 'react';
import { Router } from "@remix-run/router";
import ReactDOM from 'react-dom/client';
import './main.css';
import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from "react-router-dom";

import { loginRoutes } from './modules/login/routes.tsx';

import ErrorPage from './errorPage.tsx';



const mainRoutes: RouteObject[] = [{
  path: "/",
  element: <div>Teste</div>,
  errorElement: <ErrorPage/>
}]

const router: Router = createBrowserRouter([...mainRoutes, ...loginRoutes]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
