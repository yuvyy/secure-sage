import AboutUsPage from "./pages/aboutUsPage";
import HomePage from "./pages/homePage";
import NewTestPage from "./pages/newTestPage";
import ReportsPage from "./pages/reportsPage";
import ResultPage from "./pages/resultPage";
import ThemeToggle from "./Components/themeToggle";
import NewSystemPage from "./pages/newSystemPage";
import NewGroupPage from "./pages/newGroupPage";
import EditGroupPage from "./pages/editGroupPage";
import CustomCategoryPage from "./pages/customCategoryPage";
import EditCategoryPage from "./pages/editCategoryPage";
import LoginPage from "./pages/loginPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage/>
    },
    {
      path: '/newTest',
      element: <NewTestPage />
    },
    {
      path: '/result',
      element: <ResultPage/>
    },
    {
      path: '/reports',
      element: <ReportsPage/>
    },
    {
      path: '/aboutUs',
      element: <AboutUsPage/>
    },
    {
      path: '/newGroup',
      element: <NewGroupPage/>
    },
    {
      path: '/newSystem',
      element: <NewSystemPage/>
    },
    {
      path: '/editGroup',
      element: <EditGroupPage/>
    },
    {
      path: '/customCategory',
      element: <CustomCategoryPage/>
    },
    {
      path: '/editCategory',
      element: <EditCategoryPage/>
    },
    {
      path: '/login',
      element: <LoginPage/>
    },
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
