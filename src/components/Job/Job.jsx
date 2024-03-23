import {CiLocationOn} from "react-icons/ci";
import {HiOutlineCurrencyDollar} from "react-icons/hi2";
import {Link} from "react-router-dom";

const Job = ({job}) => {
  const {
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    job_type,
    location,
    salary,
    id,
  } = job;
  return (
    <div className="border-2 border-gray-300 rounded-lg p-2">
      <img src={logo} alt="" className="p-6 w-32 h-24" />
      <div className="flex flex-col justify-between p-6 space-y-8">
        <div className="text-start space-y-2">
          <h2 className="text-3xl font-semibold tracking-wide">{job_title}</h2>
          <p className="dark:text-gray-800">{company_name}</p>
        </div>
        <div className="text-start">
          <button className="px-5 py-2 font-bold border rounded border-[#7E90FE] mr-4 text-[#7E90FE]">
            {remote_or_onsite}
          </button>
          <button className="px-5 py-2 font-bold border rounded border-[#7E90FE] mr-4 text-[#7E90FE]">
            {job_type}
          </button>
        </div>
        <div className="flex space-x-5">
          <h2 className="flex">
            <CiLocationOn className="text-2xl mr-2" />
            {location}
          </h2>
          <h2 className="flex">
            <HiOutlineCurrencyDollar className="text-2xl mr-2" />
            {salary}
          </h2>
        </div>
        <div>
          <Link to={`/job/${id}`}>
            <button
              type="button"
              className="flex items-center justify-start p-3 font-semibold rounded-md bg-gradient-to-br from-purple-500 via-indigo-500 to-indigo-500 text-white"
            >
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Job;
