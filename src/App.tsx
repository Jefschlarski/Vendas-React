import type { Router as RemixRouter } from '@remix-run/router';
import { createBrowserRouter, RouteObject, RouterProvider } from 'react-router-dom';

import { loginRoutes } from './modules/login/routes';
import { useNotification } from './shared/hooks/useNotification';
import { splashRoutes } from './modules/splash/routes';
import { ProductRoutes } from './modules/product/routes';
import { useGlobalContext } from './shared/hooks/useGlobalContext';
import { isAuthenticated } from './shared/functions/connections/auth';

function App() {
  const { contextHolder } = useNotification();
  const { user, setUser } = useGlobalContext();

  const publicRoutes: RouteObject[] = [...loginRoutes];
  const privateRoutes: RouteObject[] = [...splashRoutes, ...ProductRoutes].map((route) => ({...route, loader: () => isAuthenticated(setUser, user)}));
  const router: RemixRouter = createBrowserRouter([...publicRoutes, ...privateRoutes]);

  return (
    <>
    {contextHolder}
    <RouterProvider router={router} />
    </>
  );
}

export default App;