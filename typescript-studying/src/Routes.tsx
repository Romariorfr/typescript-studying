import { createBrowserRouter } from "react-router-dom";

import PageHome from "./Studing-structure/Pages/Home";
import ArrayNumber from "./Array-numbers";
import MapStudy from "./Studing-structure/Map";
import Stack from "./Studing-structure/stack";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PageHome />,
  },
  {
    path: "/array",
    element: <ArrayNumber />,
  },
  {
    path: "/map",
    element: <MapStudy />,
  },
  {
    path: "/stack",
    element: <Stack />,
  },
]);
