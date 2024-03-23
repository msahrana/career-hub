import {CiLocationOn} from "react-icons/ci";
import {HiOutlineCurrencyDollar} from "react-icons/hi2";

const AppliedJob = ({jobInfo}) => {
  const {
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    job_type,
    location,
    salary,
  } = jobInfo;

  return (
    <div className="hero bg-base-200 border gap-5 my-5 w-2/3 mx-auto">
      <div className="hero-content flex-col lg:flex-row">
        <img src={logo} className="rounded-lg shadow-2xl ml-2" />
        <div className="ml-6 text-start">
          <div className="text-start space-y-2">
            <h2 className="text-3xl font-semibold tracking-wide">
              {job_title}
            </h2>
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
        </div>
      </div>
    </div>
  );
};

export default AppliedJob;
