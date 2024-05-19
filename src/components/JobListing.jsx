import { useState, useEffect } from "react";
import JobCard from "../components/JobCard";
import Spinner from "./Spinner";

const JobListing = ({ isHome }) => {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const apiUrl = isHome ? '/api/jobs?_limit=3' : '/api/jobs';
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        // setJobs(isHome ? data.slice(0, 3) : data);
        setJobs(data)
      } catch (error) {
        console.log("Error fetching data", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? "Recent Jobs" : "Browse Jobs"}
        </h2>

        {isLoading ? (
          <Spinner loading={isLoading} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {jobs.map((job) => {
              return <JobCard key={job.id} props={job} />;
            })}
          </div>
        )}
      </div>
    </section>
  );
};
export default JobListing;
