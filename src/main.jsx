import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import ErrorPage from "./Error";

import "./index.css";
import Contact from "./pages/Contact";
import { getContactLoader, getContactsLoader } from "./loaders/contactLoader";
import {
  createContactAction,
  deleteContactAction,
  updateContactAction,
  updateContactFavouriteAction,
} from "./actions/contactAction";
import EditContact from "./pages/EditContact";
import Index from "./pages/Index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: getContactsLoader,
    action: createContactAction,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <Index />,
          },
          {
            path: "contacts/:contactId",
            element: <Contact />,
            loader: getContactLoader,
            action: updateContactFavouriteAction,
          },
          {
            path: "contacts/:contactId/edit",
            element: <EditContact />,
            loader: getContactLoader,
            action: updateContactAction,
          },
          {
            path: "contacts/:contactId/destroy",
            action: deleteContactAction,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
