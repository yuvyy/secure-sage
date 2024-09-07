import AboutUsPage from "./pages/aboutUsPage";
import HomePage from "./pages/homePage";
import NewTestPage from "./pages/newTestPage";
import ReportsPage from "./pages/reportsPage";
import ResultPage from "./pages/resultPage";
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
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
