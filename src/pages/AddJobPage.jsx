
const AddJobPage = () => {
  return (
    <section className="bg-slate-400">
      <div className="container m-auto max-w-2xl py-24">
        <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md m-4 md:m-0">
          <form>
            <h2 className="text-3xl text-center fontsemibold mb-6">Add Job</h2>

            <div className="mb-4">
              <label htmlFor="type" className="text-gray-700 font-semibold mb-6">
                Job Type
              </label>
              <select id='type'>
                <option value="">Select Job Type</option>
                <option value="full-time">Full-time</option>
                <option value="part-time">Part-time</option>
                <option value="internship">Internship</option>
              </select>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default AddJobPage