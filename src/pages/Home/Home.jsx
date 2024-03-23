import Banner from "../../components/Banner/Banner";
import CategoryList from "../../components/CategoryList/CategoryList";
import FeaturedJobs from "../../components/FeaturedJobs/FeaturedJobs";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="divider"></div>
      <CategoryList></CategoryList>
      <div className="divider"></div>
      <FeaturedJobs></FeaturedJobs>
    </div>
  );
};

export default Home;
