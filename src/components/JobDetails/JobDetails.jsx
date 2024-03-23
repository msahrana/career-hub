import {useLoaderData, useParams} from "react-router-dom";
import {HiOutlineCurrencyDollar} from "react-icons/hi2";
import {MdOutlineSubtitles, MdLocalPhone} from "react-icons/md";
import {HiOutlineMail} from "react-icons/hi";
import {CiLocationOn} from "react-icons/ci";
import {saveJobApplication} from "../../utility/localstorage";

const JobDetails = () => {
  const jobs = useLoaderData();
  const {id} = useParams();
  const idInt = parseInt(id);
  const job = jobs.find((job) => job.id === idInt);

  const handleApplyJob = (job) => {
    saveJobApplication(job);
    console.log(job);
  };

  return (
    <div>
      <h2 className="text-4xl font-semibold text-center mb-10">
        Job Details of : {job.job_title}
      </h2>
      <div className="flex flex-col lg:flex-row gap-10">
        {/* left side */}
        <div className="w-2/3 text-justify space-y-10">
          <h1>
            <span className="font-bold">Job Description:</span>{" "}
            {job.job_description}
          </h1>
          <h1>
            <span className="font-bold">Job Responsibility:</span>{" "}
            {job.job_responsibility}
          </h1>
          <div>
            <h1>
              <span className="font-bold">Educational Requirement:</span>{" "}
            </h1>
            <p>{job.educational_requirements}</p>
          </div>
          <div>
            <h1 className="font-bold">Experience:</h1>
            <p>{job.experiences}</p>
          </div>
        </div>
        {/* right side */}
        <div className="w-1/3">
          <div className="bg-[#F3EFFE] p-4 rounded">
            <h1 className="text-xl font-semibold">Job Info:</h1>
            <div className="divider"></div>
            <div>
              <h2 className="flex space-x-2">
                <span className="font-bold">Salary: </span>
                <HiOutlineCurrencyDollar className="text-2xl mr-2 text-[#7E90FE]" />
                {job.salary}
              </h2>
              <h2 className="flex space-x-2 my-2">
                <span className="font-bold">Salary: </span>
                <MdOutlineSubtitles className="text-2xl mr-2 text-[#7E90FE]" />
                {job.job_title}
              </h2>
            </div>
            <h1 className="text-xl font-semibold mt-4">
              Contact Information:{" "}
            </h1>
            <div className="divider"></div>
            <div>
              <h2 className="flex space-x-2 my-2 items-center">
                <MdLocalPhone className="text-2xl text-[#7E90FE]" />
                <span className="font-bold pr-1">Phone:</span>
                {job.contact_information.phone}
              </h2>
              <h2 className="flex space-x-2 my-2 items-center">
                <HiOutlineMail className="text-2xl text-[#7E90FE]" />
                <span className="font-bold pr-1">Phone:</span>
                {job.contact_information.email}
              </h2>
              <h2 className="flex space-x-2 my-2 items-center">
                <CiLocationOn className="text-2xl text-[#7E90FE]" />
                <span className="font-bold pr-1">Phone:</span>
                {job.contact_information.address}
              </h2>
            </div>
          </div>
          <button
            onClick={() => handleApplyJob(job)}
            className="btn btn-accent w-full text-white font-medium mt-10 mb-6"
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
