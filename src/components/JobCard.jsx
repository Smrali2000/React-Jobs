import { useState } from "react";
import {FaMapMarker} from 'react-icons/fa';
import { Link } from "react-router-dom";
const JobCard = ({ props }) => {
  const [fullDescription, setFullDescription] = useState(true);

  function handleClick() {
    setFullDescription(!fullDescription);
  }
  return (
    <div className="bg-white rounded-xl shadow-md relative">
      <div className="p-4">
        <div className="mb-6">
          <div className="text-gray-600 my-2">{props.type}</div>
          <h3 className="text-xl font-bold">{props.title}</h3>
        </div>

        <div className={`mb-5 ${fullDescription && "text-limit"}`}>
          {props.description}
        </div>
        <p className="show-more pb-5" onClick={handleClick}> {fullDescription ? 'More' :'Less'}...</p>

        <h3 className="text-indigo-500 mb-2">{props.salary} / Year</h3>

        <div className="border border-gray-100 mb-5"></div>

        <div className="flex flex-col lg:flex-row justify-between mb-4">
          <div className="text-orange-700 mb-3">
            <FaMapMarker className="inline mb-1 mr-1 text-lg" />
            {props.location}
          </div>
          <Link
            to={`/job/${props.id}`}
            className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};
export default JobCard;
