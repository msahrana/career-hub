import {Link, NavLink} from "react-router-dom";

const Navbar = () => {
  return (
    <header className="p-4 dark:bg-gray-800 dark:text-gray-100">
      <div className="container flex justify-between h-16 mx-auto">
        <Link
          to="/"
          aria-label="Back to homepage"
          className="flex items-center p-2"
        >
          <button className="btn text-3xl">Career Hub</button>
          <h1></h1>
        </Link>
        <ul className="items-stretch hidden space-x-8 lg:flex">
          <NavLink
            className={({isActive}) =>
              isActive ? "text-red-500 font-bold" : "font-bold"
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({isActive}) =>
              isActive ? "text-red-500 font-bold" : "font-bold"
            }
            to="/jobs"
          >
            Jobs
          </NavLink>
          <NavLink
            className={({isActive}) =>
              isActive ? "text-red-500 font-bold" : "font-bold"
            }
            to="/appliedJobs"
          >
            Applied Jobs
          </NavLink>
          <NavLink
            className={({isActive}) =>
              isActive ? "text-red-500 font-bold" : "font-bold"
            }
            to="/statistics"
          >
            Statistics
          </NavLink>
          <NavLink
            className={({isActive}) =>
              isActive ? "text-red-500 font-bold" : "font-bold"
            }
            to="/blogs"
          >
            Blogs
          </NavLink>
        </ul>
        <div className="items-center flex-shrink-0 hidden lg:flex">
          <button className="btn mr-2 self-center px-8 py-3 rounded">
            Sign in
          </button>
          <button className="btn self-center px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900">
            Sign up
          </button>
        </div>
        <button className="p-4 lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 dark:text-gray-100"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
