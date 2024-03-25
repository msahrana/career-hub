import bannerImg from "../../assets/images/user.png";

const Banner = () => {
  return (
    <div className="py-8 w-full">
      <div className="flex flex-col lg:flex-row w-full justify-between">
        <div>
          <h1 className="text-5xl font-bold">
            One Step <br /> Closer To Your <br />{" "}
            <span className="text-[#a7f3d0]">Dream Job</span>
          </h1>
          <p className="py-6">
            Explore thousands of job opportunities with all the information you
            need. <br /> Its your future. Come find it. Manage all your job
            application from start to finish.
          </p>
          <button className="btn bg-gradient-to-r from-[#7e90fe] to-[#9873ff] text-white ">
            Get Started
          </button>
        </div>
        <img src={bannerImg} className="rounded-lg w-96" />
      </div>
    </div>
  );
};

export default Banner;
