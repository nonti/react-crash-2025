import  { useState } from "react";
import { FaMapMarker } from 'react-icons/fa';
import { Link } from "react-router-dom";

const jobListing = ({ job }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);
  let description = job.description;

  if(!showFullDescription){
    description = description.substring(0, 90) + '...'
  }


  return (
    <div className="bg-white rounded-xl shadow-md relative">
      <div className="p-4">
        <div className="mb-6">
          <div className="text-gray-600 my-2">
            {job.type}
          </div>
          <h3 className="text-xl">
            {job.title}
          </h3>
        </div>
        <div className='mb-5'>
          {description}
        </div>
        <button onClick={() => setShowFullDescription((prevState) => !prevState)} className="text-slate-600 mb-5 hover:text-gray-600">
          { showFullDescription ? 'Less' : 'More'}
        </button>
        <h3 className='text-slate-500 mb-2 '>{job.salary} /Year</h3>
          <div className='border border-gray-100 mb-5'></div>
            <div className='flex flex-col-1 lg:flex-row justify-between mb-4'>
              <div className='text-red-600 mb-3'>
              <FaMapMarker className='inline text-lg mb-1 mr-1'/> {job.location}
              </div>
              <Link to={`/jobs/${job.id}`} className='h-[36px] bg-slate-500 hover:bg-gray-500 text-white px-4 py-2 rounded-lg text-center text-sm'>Read More</Link>
        </div>
      </div>
    </div>
  )
}

export default jobListing