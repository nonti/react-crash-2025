import { useParams,  useLoaderData, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { toast } from 'react-toastify';

const EditJobPage = ({ updateJobSubmit }) => {
  const job = useLoaderData();
  const navigate = useNavigate();
  const {id} = useParams();
   const [title, setTitle] = useState(job.title);
    const [type, setType] = useState(job.type);
    const [location, setLocation] = useState(job.location);
    const [description, setDescription] = useState(job.description);
    const [companyName, setCompanyName] = useState(job.company.name);
    const [companyDescription, setCompanyDescription] = useState(job.company.description);
    const [contactEmail, setContactEmail] = useState(job.company.contactEmail);
    const [contactPhone, setContactPhone] = useState(job.company.contactPhone);
    const [salary, setSalary] = useState(job.salary);

    const submitForm =  (e) => {
      e.preventDefault();
      const updateJob  =  {
        id,
        title, 
        type, 
        location,
        description,salary, 
        company : {
          name: companyName, 
          description: companyDescription, 
          contactEmail, 
          contactPhone,
         },
      };

      updateJobSubmit(updateJob);
      toast.success('Job updated successfully');
      return navigate(`/jobs/${id}`);
    }

  return (
   <>
        <section className="bg-slate-400">
      <div className="container m-auto max-w-2xl py-24">
        <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md m-4 md:m-0">
          <form onSubmit={submitForm}>
            <h2 className="text-3xl text-center fontsemibold mb-6">Update Job</h2>

            <div className="mb-4">
              <label htmlFor="type" className="text-gray-700 font-semibold mb-6">
                Job Type
              </label>
              <select id='type' name='type' className='border rounded w-full py-2 px-3 required' 
              value={type}
              onChange={(e) => setType(e.target.value) }
              >
                <option value="">Select Job Type</option>
                <option value="full-time">Full-time</option>
                <option value="part-time">Part-time</option>
                <option value="freelance">Freelance</option>
                <option value="temporary">Temporary</option>  
                <option value="Remote">Remote</option>
                <option value="internship">Internship</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Job Listing Name
              </label>
              <input type='text' id="title" name='title' className='border rounded w-full px-3 py-2 mb-2'
              placeholder="Title"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value) }
              />
              </div>
              <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Description
              </label>
              <textarea type='text' id="description"
               name='description' 
               className='border rounded w-full px-3 py-2 mb-2'
               rows='4'
              placeholder="Add any job duties, expectations, requirements, etc"
              required
              value={description}
              onChange={(e) => setDescription(e.target.value) }
              />
              </div>
              <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Salary
              </label>
              <select id='salary' name='salary' className="border rounded w-full py-2 px-3 " required 
                value={salary} 
                onChange={(e) => setSalary(e.target.value)} 
                >
              <option value='Under R50K'>Under R50K</option>
                <option value='R50K - 60K'>R50K - R60K</option>
                <option value='R60K - 70K'>R60K - R70K</option>
                <option value='R70K - 80K'>R70K - R80K</option>
                <option value='R80K - 90K'>R80K - R90K</option>
                <option value='R90K - 100K'>R90K - R100K</option>
                <option value='R100K - 125K'>R100K - R125K</option>
                <option value='R125K - 150K'>R125K - R150K</option>
                <option value='R150K - 175K'>R150K - R175K</option>
                <option value='R175K - 200K'>$175K - R200K</option>
                <option value='Over R200K'>Over R200K</option>
              </select>
              </div>
              <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Location
              </label>
              <input type='text' id="location" name='location' className='border rounded w-full px-3 py-2 mb-2'
              placeholder="Location"
              required
              value={location}
              onChange={(e) => setLocation(e.target.value) }
              />
              </div>
              <h3 className='text-2xl mb-5'>Company Info</h3>

              <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Company Name
              </label>
              <input type='text' id="company" name='company' className='border rounded w-full px-3 py-2 mb-2'
              placeholder="Company Name"
              required
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value) }
              />
              </div>
              <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Company Description
              </label>
              <textarea type='text' id="company_description"
               name='company_description' 
               className='border rounded w-full px-3 py-2 mb-2'
               rows='4'
              placeholder="What does your company do?"
              required
              value={companyDescription}
              onChange={(e) => setCompanyDescription(e.target.value) }
              />
              </div>
              <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Contact Email
              </label>
              <input type='email' id="contact_email" name='contact_email' className='border rounded w-full px-3 py-2 mb-2'
              placeholder="Contact Email"
              required
              value={contactEmail}
              onChange={(e) => setContactEmail(e.target.value) }
              />
              </div>
              <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Contact Phone
              </label>
              <input type='tel' id="contant_phone" name='contant_phone' className='border rounded w-full px-3 py-2 mb-2'
              placeholder="Contact Phone"
              required
              value={contactPhone}
              onChange={(e) => setContactPhone(e.target.value) }
              />
              </div>
              <div>
                <button className="bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline">Update Job</button>
              </div>
          </form>
        </div>
      </div>
    </section>
    </>
  )
}

export default EditJobPage;