import {Link} from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const ErrorPage = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="text-center justify-center items-center mt-60 space-y-6">
        <h1 className="text-7xl font-bold">Opus!!!</h1>
        <p className="text-3xl ">No data available Here...</p>
        <Link to="/">
          <button className="btn btn-secondary mt-5 text-xl">Go Home</button>
        </Link>
      </div>
    </>
  );
};

export default ErrorPage;
