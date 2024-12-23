import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";

const axiosInstance = axios.create({
  baseURL: "https://study-shelf-server.vercel.app",
  withCredentials: true,
});

const useAxiosSecure = () => {
  const { logoutUser } = useAuth();
  useEffect(() => {
    axiosInstance.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        if (error.status === 401 || error.status === 403) {
          logoutUser();
        }

        return Promise.reject(error);
      }
    );
  }, [logoutUser]);

  return axiosInstance;
};

export default useAxiosSecure;
