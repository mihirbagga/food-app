import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Landing from "./components/Landing";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Cart from "./components/Cart";
import Error from "./components/Error";
import Header from "./components/Header";
import Menu from "./components/restrauntDetails";
import { useTheme } from "./themeConfig";

import { ThemeProvider } from "./themeConfig";

const About = lazy(() => import("./components/About"));

const App = () => {
  const { theme } = useTheme();
  return (
      <div className={theme==='dark' ? 'bg-gray-800 text-white' : ''}>
        <Header />
        <Outlet />
      </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element:    <ThemeProvider> <App /> </ThemeProvider>,
    children: [
      {
        path: "/",
        element: <Landing />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurant-menu/:resId",
        element: <Menu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
