import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthenticationPage from "../pages/AuthenticationPage";
import HomePage from "../pages/HomePage/HomePage";
import ItemPage from "../pages/ItemPage/ItemPage";
import SuggestionPage from "../pages/SuggestionPage/SuggestionPage";
import UsedPlasticPage from "../pages/UsedPlasticPage/UsedPlasticPage";

import SchedulePage from "../pages/SchedulePage/SchedulePage";
import TestPage from "../pages/TestPage_khang/khangTest";
import SponsorPage from "../pages/SponsorPage/SponsorPage";
import AccumulatedPoint from "../pages/AccumulatedPoint/AccumulatedPoint";

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
				path: "",
				element: <SchedulePage />,
			},
			{
				path: "suggestion",
				element: <SuggestionPage />,
			},
			{
				path: "accumulated",
				element: <AccumulatedPoint />,
			},
		],
	},
	{
		path: "sponsor",
		element: <SponsorPage />,
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
	{
		path: "test",
		element: <SponsorPage />,
	},
	{
		path: "sponsor",
		element: <SponsorPage />,
	},
]);

export default function MainRouter() {
	return <RouterProvider router={router} />;
}
