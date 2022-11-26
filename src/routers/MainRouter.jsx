import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AuthenticationPage from '../pages/AuthenticationPage';
import TimePicker from '../components/TimePicker/TimePicker';
import TimeTag from '../components/TimeTag/TimeTag';
// import Info from '../components/UserProfile/Info';
import ImportedTag from '../components/Tag/ImportedTag/ImportedTag';

const router = createBrowserRouter([
  {
    path: '',
    element: <ImportedTag />,
  },
  {
    path: 'authentication',
    element: <AuthenticationPage />,
  },
]);

export default function MainRouter() {
  return <RouterProvider router={router} />;
}
