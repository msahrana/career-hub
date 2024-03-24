import {useLoaderData} from "react-router-dom";
import Job from "../../components/Job/Job";

const Jobs = () => {
  const jobs = useLoaderData();

  return (
    <div>
      <h4 className="text-5xl text-center font-bold mb-10">All Jobs</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {jobs.map((job) => (
          <Job key={job.id} job={job}></Job>
        ))}
      </div>
    </div>
  );
};

export default Jobs;
