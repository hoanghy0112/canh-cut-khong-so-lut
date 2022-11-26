import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AuthenticationPage from '../pages/AuthenticationPage';
import HomePage from '../pages/HomePage/HomePage';

import QDTestPage from '../pages/QDTstPage';

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
	path: 'qdtest',
	element: <QDTestPage/>,
  }
]);

export default function MainRouter() {
  return <RouterProvider router={router} />;
}
