import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { QueryClient, QueryClientProvider } from "react-query";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom"; // Added Outlet
import { contactRoute, homeRoute } from "./app-utils/AppRoutes";
import { ContactPage } from "./app-components/ContactPage/ContactPage";
import { Header } from "./app-components/Header/Header";
import { Table } from "./app-components/TableComponent/Table";

const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: homeRoute,
    element: (
      <>
        <Header />
        <Outlet />
      </>
    ),
    children: [
      {
        path: homeRoute,
        element: <Table />,
      },
      {
        path: contactRoute,
        element: <ContactPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
