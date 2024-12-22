import axios from "axios";
import React, { useEffect } from "react";
import useAuth from "../hooks/useAuth";

const BorrowedBooks = () => {
  const { user } = useAuth();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/borrowedBooks/${user?.email}`)
      .then((res) => {
        console.log(res.data);
      });
  }, [user]);

  return <div>Borrowed Books</div>;
};

export default BorrowedBooks;
