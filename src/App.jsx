import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import ChangePassword from "./components/ChangePassword";
import Register from "./components/Register";
import SalesRegister from "./components/SalesRegister";
import WhatIsPhoneNum from "./components/WhatIsPhoneNum";

function App() {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Register /> },
        { path: "/change-password", element: <ChangePassword /> },
        {
          path: "/sales-register",
          element: <SalesRegister />,
        },
        {
          path: "/what-is-phone-number",
          element: <WhatIsPhoneNum />,
        },
      ],
    },
  ]);
  return (
    <RouterProvider router={router}>
      <div></div>
    </RouterProvider>
  );
}

export default App;
