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
    <div className="border rounded gap-5 my-5 w-2/3 mx-auto">
      <div className="flex flex-col lg:flex-row p-3 space-x-5 items-center">
        <div>
          <img
            src={logo}
            className="rounded-lg bg-gray-200 lg:p-8 lg:size-44"
          />
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-center mx-auto">
          <div className="ml-6 text-start">
            <div className="text-start space-y-2">
              <h2 className="text-3xl font-semibold">{job_title}</h2>
              <p className="text-xl">{company_name}</p>
            </div>
            <div className="text-start mt-2">
              <button className="px-5 py-2 font-bold border rounded border-[#7E90FE] mr-4 text-[#7E90FE]">
                {remote_or_onsite}
              </button>
              <button className="px-5 py-2 font-bold border rounded border-[#7E90FE] mr-4 text-[#7E90FE]">
                {job_type}
              </button>
            </div>
            <div className="flex space-x-5 mt-2">
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
          <div>
            <button
              type="button"
              className="flex items-center p-3 font-semibold rounded-md bg-gradient-to-br from-purple-500 via-indigo-500 to-indigo-500 text-white"
            >
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppliedJob;
