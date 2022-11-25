import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthenticationPage from "../pages/AuthenticationPage";

const router = createBrowserRouter([
	{
		path: "",
		element: <div>Hello world!</div>,
	},
	{
		path: "authentication",
		element: <AuthenticationPage />,
	},
]);

export default function MainRouter() {
	return <RouterProvider router={router} />;
}
