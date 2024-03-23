import {useEffect, useState} from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [dataLength, setDataLength] = useState(4);

  useEffect(() => {
    fetch("./jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <div className="text-center space-y-5 my-6">
      <h1 className="text-2xl lg:text-5xl font-semibold">Featured Jobs:</h1>
      <p>
        Explore thousands of job opportunities with all the information you
        need. Its your future...
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {jobs.slice(0, dataLength).map((job) => (
          <Job key={job.id} job={job}></Job>
        ))}
      </div>
      <div className={dataLength === jobs.length ? "hidden" : ""}>
        <button
          onClick={() => setDataLength(jobs.length)}
          className="btn btn-info text-white font-bold "
        >
          Show All Jobs
        </button>
      </div>
    </div>
  );
};

export default FeaturedJobs;
