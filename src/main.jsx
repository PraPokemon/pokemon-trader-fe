import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PokedexEntrie from "./Pages/PokedexEntrie.jsx";
import Inventory from "./Pages/Inventory.jsx";
import TradingPage from "./Pages/TraidingPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <TradingPage/>,
  },
  {
    path: "/Pokedex",
    element: <App/>,
  },
  {
    path: "/PokedexEntrie",
    element: <PokedexEntrie/>,
  },
  {
    path: "/Inventory",
    element: <Inventory/>,
  },
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
