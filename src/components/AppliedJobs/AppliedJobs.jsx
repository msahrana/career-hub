import {useEffect, useState} from "react";
import {getStoredJobApplication} from "../../utility/localstorage";
import AppliedJob from "../AppliedJob/AppliedJob";

const AppliedJobs = () => {
  const [jobApplication, setJobApplication] = useState([]);

  useEffect(() => {
    const storedAppliedJob = getStoredJobApplication();
    setJobApplication(storedAppliedJob);
  }, []);

  return (
    <div>
      <h5 className="text-4xl font-bold text-center mb-10">Applied Jobs:</h5>
      {jobApplication.map((jobInfo) => (
        <AppliedJob key={jobInfo.id} jobInfo={jobInfo}></AppliedJob>
      ))}
    </div>
  );
};

export default AppliedJobs;
