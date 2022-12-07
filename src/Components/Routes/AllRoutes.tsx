import React from "react";
import { useRoutes } from "react-router-dom";
import GettingStarted from "../404/GettingStarted";
import NotFound from "../404/NotFound";
import About from "../About/About";
import Enterprise from "../Enterprise/Enterprise";
import HomeScreen from "../HomeScreen";
import Technology from "../Technology/Technology";

const AllRoutes = () => {
  let element = useRoutes([
    {
      path: "/",
      element: <HomeScreen />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/technology",
      element: <Technology />,
    },
    {
      path: "/enterprise",

      children: [
        {
          index: true,
          element: <Enterprise />,
        },
        {
          path: "gettingstarted",
          element: <GettingStarted />,
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return element;
};

export default AllRoutes;
