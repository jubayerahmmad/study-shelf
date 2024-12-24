import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import ErrorPage from "../components/ErrorPage";
import Home from "../pages/Home/Home";
import AllBooks from "../pages/AllBooks";
import Login from "../pages/AuthPages/Login";
import Register from "../pages/AuthPages/Register";
import AddBooks from "../pages/AddBooks";
import BorrowedBooks from "../pages/BorrowedBooks";
import ProtectedRoute from "./ProtectedRoute";
import CategoryPage from "../pages/CategoryPage";
import UpdateBooks from "../components/UpdateBooks";
import BookDetails from "../components/BookDetails";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allBooks",
        element: (
          <ProtectedRoute>
            <AllBooks></AllBooks>
          </ProtectedRoute>
        ),
        // loader: () => fetch("https://study-shelf-server.vercel.app/allBooks"),
      },
      {
        path: "/update-book/:id",
        element: (
          <ProtectedRoute>
            <UpdateBooks></UpdateBooks>
          </ProtectedRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://study-shelf-server.vercel.app/allBooks/${params.id}`),
      },
      {
        path: "/category/:category",
        element: (
          <ProtectedRoute>
            <CategoryPage></CategoryPage>
          </ProtectedRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://study-shelf-server.vercel.app/books/${params.category}`
          ),
      },
      {
        path: "/bookDetails/:id",
        element: (
          <ProtectedRoute>
            <BookDetails></BookDetails>
          </ProtectedRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://study-shelf-server.vercel.app/allBooks/${params.id}`),
      },
      {
        path: "/addBooks",
        element: (
          <ProtectedRoute>
            <AddBooks></AddBooks>
          </ProtectedRoute>
        ),
      },
      {
        path: "/borrowedBooks",
        element: (
          <ProtectedRoute>
            <BorrowedBooks></BorrowedBooks>
          </ProtectedRoute>
        ),
      },

      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
