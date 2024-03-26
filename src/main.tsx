import React from 'react';
import ReactDOM from 'react-dom/client';
import './main.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import ErrorPage from './errorPage.tsx';
import LoginScreen from './modules/login/index.ts';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <LoginScreen/>,
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
