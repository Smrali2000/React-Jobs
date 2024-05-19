import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddJobPage = () => {
  const [addJob, setAddJob] = useState({
    type: "Full-Time",
    title: "",
    description: "",
    salary: "$70K - $80K",
    location: "",
    company_name: "",
    company_description: "",
    contact_email: "",
    contact_phone: "",
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAddJob((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const createJob = async (newJob) => {
    const response = await fetch("/api/jobs", {
      method: "POST",
      headers: {
        "Content-type": "Application/json",
      },
      body: JSON.stringify(newJob),
    });
    return;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newJob = {
      type: addJob.type,
      title: addJob.title,
      description: addJob.description,
      salary: addJob.salary,
      location: addJob.location,
      company: {
        name: addJob.company_name,
        description: addJob.company_description,
        contactEmail: addJob.contact_email,
        contactPhone: addJob.contact_phone,
      },
    };
    createJob(newJob);
    toast.success("New job created successfully");
    return navigate("/job");
  };

  return (
    <section className="bg-indigo-50">
      <div className="container m-auto max-w-2xl py-24">
        <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
          <form onSubmit={handleSubmit}>
            <h2 className="text-3xl text-center font-semibold mb-6">Add Job</h2>

            <div className="mb-4">
              <label
                htmlFor="type"
                className="block text-gray-700 font-bold mb-2"
              >
                Job Type
              </label>
              <select
                id="type"
                name="type"
                className="border rounded w-full py-2 px-3"
                value={addJob.type}
                onChange={handleInputChange}
                required
              >
                <option value="Full-Time">Full-Time</option>
                <option value="Part-Time">Part-Time</option>
                <option value="Remote">Remote</option>
                <option value="Internship">Internship</option>
              </select>
            </div>

            <div className="mb-4">
              <label
                htmlFor="title"
                className="block text-gray-700 font-bold mb-2"
              >
                Job Listing Name
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={addJob.title}
                onChange={handleInputChange}
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="eg. Beautiful Apartment In Miami"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-gray-700 font-bold mb-2"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                value={addJob.description}
                onChange={handleInputChange}
                className="border rounded w-full py-2 px-3"
                rows="4"
                placeholder="Add any job duties, expectations, requirements, etc"
              ></textarea>
            </div>

            <div className="mb-4">
              <label
                htmlFor="type"
                className="block text-gray-700 font-bold mb-2"
              >
                Salary
              </label>
              <select
                id="salary"
                name="salary"
                value={addJob.salary}
                onChange={handleInputChange}
                className="border rounded w-full py-2 px-3"
                required
              >
                <option value="Under $50K">Under $50K</option>
                <option value="$50K - 60K">$50K - $60K</option>
                <option value="$60K - 70K">$60K - $70K</option>
                <option value="$70K - 80K">$70K - $80K</option>
                <option value="$80K - 90K">$80K - $90K</option>
                <option value="$90K - 100K">$90K - $100K</option>
                <option value="$100K - 125K">$100K - $125K</option>
                <option value="$125K - 150K">$125K - $150K</option>
                <option value="$150K - 175K">$150K - $175K</option>
                <option value="$175K - 200K">$175K - $200K</option>
                <option value="Over $200K">Over $200K</option>
              </select>
            </div>

            <div className="mb-4">
              <label
                htmlFor="location"
                className="block text-gray-700 font-bold mb-2"
              >
                Location
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={addJob.location}
                onChange={handleInputChange}
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="Company Location"
                required
              />
            </div>

            <h3 className="text-2xl mb-5">Company Info</h3>

            <div className="mb-4">
              <label
                htmlFor="company_name"
                className="block text-gray-700 font-bold mb-2"
              >
                Company Name
              </label>
              <input
                type="text"
                id="company_name"
                name="company_name"
                value={addJob.company_name}
                onChange={handleInputChange}
                className="border rounded w-full py-2 px-3"
                placeholder="Company Name"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="company_description"
                className="block text-gray-700 font-bold mb-2"
              >
                Company Description
              </label>
              <textarea
                id="company_description"
                name="company_description"
                value={addJob.company_description}
                onChange={handleInputChange}
                className="border rounded w-full py-2 px-3"
                rows="4"
                placeholder="What does your company_name do?"
              ></textarea>
            </div>

            <div className="mb-4">
              <label
                htmlFor="contact_email"
                className="block text-gray-700 font-bold mb-2"
              >
                Contact Email
              </label>
              <input
                type="email"
                id="contact_email"
                name="contact_email"
                value={addJob.contact_email}
                onChange={handleInputChange}
                className="border rounded w-full py-2 px-3"
                placeholder="Email address for applicants"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="contact_phone"
                className="block text-gray-700 font-bold mb-2"
              >
                Contact Phone
              </label>
              <input
                type="tel"
                id="contact_phone"
                name="contact_phone"
                value={addJob.contact_phone}
                onChange={handleInputChange}
                className="border rounded w-full py-2 px-3"
                placeholder="Optional phone for applicants"
              />
            </div>

            <div>
              <button
                className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Add Job
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
export default AddJobPage;
