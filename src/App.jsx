import AboutUsPage from "./pages/aboutUsPage";
import HomePage from "./pages/homePage";
import NewTestPage from "./Components/newTestForm";
import ReportsPage from "./pages/reportsPage";
import ResultPage from "./pages/resultPage";
import ThemeToggle from "./Components/themeToggle";
import LoginPage from "./pages/loginPage";
import ProfilePage from "./pages/profilePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RemediationPage from "./pages/remediationPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/newTest",
      element: <NewTestPage />,
    },
    {
      path: "/result",
      element: <ResultPage />,
    },
    {
      path: "/reports",
      element: <ReportsPage />,
    },
    {
      path: "/aboutUs",
      element: <AboutUsPage />,
    },
    {
      path: "/profile",
      element: <ProfilePage />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/remediate",
      element: <RemediationPage />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
