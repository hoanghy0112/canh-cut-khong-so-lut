import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AuthenticationPage from '../pages/AuthenticationPage';
import HomePage from '../pages/HomePage/HomePage';
import ItemPage from '../pages/ItemPage/ItemPage';
import SuggestionPage from '../pages/SuggestionPage/SuggestionPage';
import UsedPlasticPage from '../pages/UsedPlasticPage/UsedPlasticPage';

import SchedulePage from '../pages/SchedulePage/SchedulePage';
import TestPage from '../pages/TestPage_khang/khangTest';
import SponsorPage from '../pages/SponsorPage/SponsorPage';

const router = createBrowserRouter([
  {
    path: '',
    element: <HomePage />,
    children: [
      {
        path: 'item',
        element: <ItemPage />,
      },
      {
        path: '',
        element: <SchedulePage />,
      },
      {
        path: 'suggestion',
        element: <SuggestionPage />,
      },
      {
        path: 'usedplastic',
        element: <UsedPlasticPage />,
      },
    ],
  },
  {
    path: 'authentication',
    element: <AuthenticationPage />,
  },
  {
    path: 'test',
    element: <SponsorPage />,
  },
  {
    path: 'sponsor',
    element: <SponsorPage />,
  },
]);

export default function MainRouter() {
  return <RouterProvider router={router} />;
}
