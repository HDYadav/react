import React, {lazy,Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurentMenu from "./components/RestaurentMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"; 
import Shimmer from "./components/Shimmer";
//import Grocery from "./components/Grocery";

const Grocery = lazy(() => import("./components/Grocery"));
 

const Applayout = () => {
  return (
    <div className="app">
      <Header />
     <Outlet />
    </div>
  );
};

const rootx = ReactDOM.createRoot(document.getElementById("root"));

const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "restaurants/:resID",
        element: <RestaurentMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);


//rootx.render(<Applayout />);

rootx.render(<RouterProvider router={appRoute} />);
