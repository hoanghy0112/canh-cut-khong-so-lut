import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthenticationPage from "../pages/AuthenticationPage";
import TimePicker from "../components/TimePicker/TimePicker";
import TimeTag from "../components/TimeTag/TimeTag";
// import Info from '../components/UserProfile/Info';
import ImportedTag from "../components/Tag/ImportedTag/ImportedTag";
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
