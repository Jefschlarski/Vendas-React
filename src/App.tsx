import type { Router as RemixRouter } from '@remix-run/router';
import { createBrowserRouter, RouteObject, RouterProvider } from 'react-router-dom';

import { loginRoutes } from './modules/login/routes';
import { useNotification } from './shared/hooks/useNotification';
import { splashRoutes } from './modules/splash/routes';
import { ProductRoutes } from './modules/product/routes';
import { isAuthenticated } from './shared/functions/connections/auth';
import { useRequest } from './shared/hooks/useRequests';
import { USER_URL } from './shared/constants/urls';
import { Methods } from './shared/enums/methods';
import { useEffect } from 'react';
import { useGlobalContext } from './shared/hooks/useGlobalContext';

const publicRoutes: RouteObject[] = [...loginRoutes];
const privateRoutes: RouteObject[] = [...splashRoutes, ...ProductRoutes].map((route) => ({...route, loader: () => isAuthenticated()}));
const router: RemixRouter = createBrowserRouter([...publicRoutes, ...privateRoutes]);
function App() {
  const { contextHolder } = useNotification();
  const { setUser } = useGlobalContext();
  const { request } = useRequest();

  useEffect(() => {
    request(USER_URL, Methods.GET, setUser);
  },[])

  return (
    <>
    {contextHolder}
    <RouterProvider router={router} />
    </>
  );
}

export default App;