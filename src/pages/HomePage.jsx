import Banner from "../components/Banner";
import HomeCard from "../components/HomeCard";
import JobListing from "../components/JobListing";
import ViewAllJobs from "../components/ViewAllJobs";

const HomePage = () => {
  return (
    <>
      <Banner />
      <HomeCard />
      <JobListing isHome={true}/>
      <ViewAllJobs />
    </>
  );
};
export default HomePage;
