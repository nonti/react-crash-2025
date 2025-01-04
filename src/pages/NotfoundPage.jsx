import { Link } from "react-router-dom"
import { FaExclamationTriangle } from 'react-icons/fa';
const NotfoundPage = () => {
  return (
    <section className='text-center flex flex-col items-center h-96justify-center'>
      <FaExclamationTriangle className='text-yellow-400 text-6xl mb-4'/>
      <h1 className="text-6xl font-bold mb-4">404 Not Found</h1>
      <p className="text-xl mb-5">This page does not exist!</p>
       <Link to='/' className='text-white bg-slate-800 hover:bg-gray-600 rounded-xl px-3 py-2 mt-4'>Go Back</Link>
    </section>
  )
}

export default NotfoundPage