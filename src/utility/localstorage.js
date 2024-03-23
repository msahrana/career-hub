import swal from "sweetalert";

/* get all application */
export const getStoredJobApplication = () => {
  let jobApplication = [];
  const storedJobApplication = localStorage.getItem("jobApplication");
  if (storedJobApplication) {
    jobApplication = JSON.parse(storedJobApplication);
  }
  return jobApplication;
};

/* save single blog */
export const saveJobApplication = (application) => {
  let jobApplication = getStoredJobApplication();
  const isExist = jobApplication.find((job) => job.id === application.id);
  if (isExist) {
    swal({
      title: "Sorry!",
      text: "You have already applied!",
      icon: "warning",
    });
    return;
  }
  jobApplication.push(application);
  localStorage.setItem("jobApplication", JSON.stringify(jobApplication));
  swal({
    title: "Good job!",
    text: "You application successfully applied!",
    icon: "success",
  });
};
