import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { homeRoute } from "./app-utils/AppRoutes";
import { ContactPage } from "./app-components/ContactPage/ContactPage";
import { HousesPage } from "./app-components/HousesPage/HousesPage";

const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: homeRoute,
    element: <HousesPage />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
