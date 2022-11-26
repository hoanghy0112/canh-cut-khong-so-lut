import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthenticationPage from "../pages/AuthenticationPage";
// import Info from '../components/UserProfile/Info';
import HomePage from "../pages/HomePage/HomePage";
import ItemPage from "../pages/ItemPage/ItemPage";

const router = createBrowserRouter([
	{
		path: "",
		element: <HomePage />,
		children: [
			{
				path: "item",
				element: <ItemPage />,
			},
			{
				path: "suggestion",
				element: <ItemPage />,
			},
		],
	},
	{
		path: "authentication",
		element: <AuthenticationPage />,
	},
]);

export default function MainRouter() {
	return <RouterProvider router={router} />;
}
