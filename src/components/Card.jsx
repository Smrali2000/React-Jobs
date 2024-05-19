import { Link} from "react-router-dom";
const Card = ({bg = 'bg-gray-100'}) => {
  return (
    <div className={`${bg} p-6 rounded-lg shadow-md`}>
      <h2 className="text-2xl font-bold">For Developers</h2>
      <p className="mt-2 mb-4">
        Browse our React jobs and start your career today
      </p>
      <Link
        to="/job"
        className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
      >
        Browse Jobs
      </Link>
    </div>
  );
};
export default Card;
