import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AuthenticationPage from '../pages/AuthenticationPage';
// import Info from '../components/UserProfile/Info';
// import HomePage from '../pages/HomePage/HomePage';
// import ItemPage from '../pages/ItemPage/ItemPage';
// import SuggestionPage from '../pages/SuggestionPage/SuggestionPage';
//import SuggestionPage from '../pages/SuggestionPage/SuggestionPage';
// import UsedPlasticPage from '../pages/UsedPlasticPage/UsedPlasticPage';

import QDTestPage from '../pages/QDTstPage';
//import TestPage from '../pages/TestPage_khang/khangTest';
// import SchedulePage from '../pages/SchedulePage/SchedulePage';

const router = createBrowserRouter([
  //   {
  //     path: '',
  //     // element: <HomePage />,
  //     children: [
  //       {
  //         path: 'item',
  //         element: <ItemPage />,
  //       },
  //       {
  //         path: 'home',
  //         element: <SchedulePage />,
  //       },
  //       {
  //         path: 'suggestion',
  //         element: <SuggestionPage />,
  //       },
  //       {
  //         path: 'usedplastic',
  //         element: <UsedPlasticPage />,
  //       },
  //     ],
  //   },
  {
    path: 'authentication',
    element: <AuthenticationPage />,
  },
  {
    path: 'test',
    element: <TestPage />,
  },
]);

export default function MainRouter() {
  return <RouterProvider router={router} />;
}
