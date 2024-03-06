import { RouterProvider, createBrowserRouter } from "react-router-dom";

import RootLayout from "./pages/RootLayout";
import Error from "./pages/Error";
import Home from "./pages/Home";
import About from "./pages/About";
import Plan from "./pages/Plan";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "order",
        element: <Plan />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
