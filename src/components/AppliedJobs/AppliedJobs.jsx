import {useEffect, useState} from "react";
import {getStoredJobApplication} from "../../utility/localstorage";
import AppliedJob from "../AppliedJob/AppliedJob";

const AppliedJobs = () => {
  const [jobApplication, setJobApplication] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([]);

  useEffect(() => {
    const storedAppliedJob = getStoredJobApplication();
    setJobApplication(storedAppliedJob);
    setDisplayJobs(storedAppliedJob);
  }, []);

  const handleJobFilter = (filter) => {
    if (filter === "All") {
      setDisplayJobs(jobApplication);
    } else if (filter === "Remote") {
      const remoteJobs = jobApplication.filter(
        (job) => job.remote_or_onsite === "Remote"
      );
      setDisplayJobs(remoteJobs);
    } else if (filter === "Onsite") {
      const onsiteJobs = jobApplication.filter(
        (job) => job.remote_or_onsite === "Onsite"
      );
      setDisplayJobs(onsiteJobs);
    }
  };

  return (
    <div>
      <h5 className="text-4xl font-bold text-center lg:mb-10">Applied Jobs:</h5>
      <div className="text-end mx-auto lg:pr-60">
        <details className="dropdown">
          <summary className="m-1 btn">Filter Job</summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li onClick={() => handleJobFilter("All")}>
              <a>All</a>
            </li>
            <li onClick={() => handleJobFilter("Remote")}>
              <a>Remote</a>
            </li>
            <li onClick={() => handleJobFilter("Onsite")}>
              <a>Onsite</a>
            </li>
          </ul>
        </details>
      </div>
      {displayJobs.map((jobInfo) => (
        <AppliedJob key={jobInfo.id} jobInfo={jobInfo}></AppliedJob>
      ))}
    </div>
  );
};

export default AppliedJobs;
