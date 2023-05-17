import React from "react";
import { RouterProvider } from "react-router-dom";
import Router from "./routes";

const App = () => {
  return (
    <React.StrictMode>
      <RouterProvider router={Router} />
    </React.StrictMode>
  )
}

export default App