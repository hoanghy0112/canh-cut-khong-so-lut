import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AuthenticationPage from '../pages/AuthenticationPage';
import HomePage from '../pages/HomePage/HomePage';
import TestPage from '../pages/TestPage_khang/khangTest';

const router = createBrowserRouter([
  {
    path: '',
    element: <AuthenticationPage />,
  },
  {
    path: 'home',
    element: <HomePage />,
  },
  {
    path: 'test',
    element: <TestPage />,
  },
]);

export default function MainRouter() {
  return <RouterProvider router={router} />;
}
