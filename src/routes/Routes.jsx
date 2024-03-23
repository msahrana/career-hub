import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../error/ErrorPage";
import Home from "../pages/Home/Home";
import AppliedJobs from "../components/AppliedJobs/AppliedJobs";
import JobDetails from "../components/JobDetails/JobDetails";

export const router = createBrowserRouter([
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
        path: "/appliedJobs",
        element: <AppliedJobs></AppliedJobs>,
      },
      {
        path: "/job/:id",
        element: <JobDetails></JobDetails>,
      },
    ],
  },
]);
