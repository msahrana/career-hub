import {Link} from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="text-center justify-center items-center mt-60 space-y-6">
      <h1 className="text-7xl font-bold">Opus!</h1>
      <p className="text-3xl ">No data available Here...</p>
      <Link to="/">
        <button className="btn btn-secondary">Go Home</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
