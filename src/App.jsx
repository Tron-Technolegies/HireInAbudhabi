import Home from "./pages/Home";
import {
  BrowserRouter,
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HowItWorks from "./pages/HowItWorks";
import DigitalMarketingPage from "./pages/DigitalMarketingPage";
import CodingPage from "./pages/CodingPage";
import MultimediaPage from "./pages/MultimediaPage";
import AboutUs from "./pages/AboutUs";
import TermsConditions from "./pages/TermsCondition";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Layout from "./pages/Layout";
import ErrorPage from "./pages/ErrorPage";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <Home /> },
        { path: "/how-it-works", element: <HowItWorks /> },
        {
          path: "/services/digitalmarketing",
          element: <DigitalMarketingPage />,
        },
        { path: "/services/coding", element: <CodingPage /> },
        { path: "/services/multimedia", element: <MultimediaPage /> },
        { path: "/AboutUs", element: <AboutUs /> },
        { path: "/terms-and-conditions", element: <TermsConditions /> },
        { path: "/privacy-policy", element: <PrivacyPolicy /> },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}
