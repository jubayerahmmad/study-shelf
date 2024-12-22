import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "animate.css";
import router from "./routes/router.jsx";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./providers/AuthProvider.jsx";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <RouterProvider router={router} />
        <Toaster></Toaster>
      </AuthProvider>
    </HelmetProvider>
  </StrictMode>
);
