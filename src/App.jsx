import {Route, createBrowserRouter, createRoutesFromElements,RouterProvider} from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from "./pages/HomePage"
import JobsPage from './pages/JobsPage';
import JobPage, { jobLoader } from './pages/JobPage';
import NotfoundPage from './pages/NotfoundPage';
import AddJobPage from './pages/AddJobPage';
import EditJobPage from './pages/EditJobPage';

const App = () => {
  const addJob = async (newJob) => {
    //Add new job
    const res = await fetch('/api/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newJob),
    });
    return res;
  }

  // Update job
  const updateJob = async (job) => {
      const res = await fetch(`/api/jobs/${job.id}`,{
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(job),
      });
      return res;
    }
    
    // Delete job
    const deleteJob = async (id) => {
      const res = await fetch(`/api/jobs/${id}`,{
        method: 'DELETE',
      });
      return res;
    }
  
  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path='/' element={<MainLayout/>}>
    <Route index element={<HomePage/>}/>
    <Route path='/jobs' element={<JobsPage/>}/>
    <Route path='/add-job' element={<AddJobPage addJobSubmit={addJob}/>}/>
    <Route path='/edit-job/:id' element={<EditJobPage updateJobSubmit={updateJob}/>} loader={jobLoader}/>
     <Route path='/jobs/:id' element={<JobPage deleteJob={deleteJob}/>} loader={jobLoader}/>
    <Route path='*' element={<NotfoundPage/>}/>
    </Route>
  )
  );
  return (
    <RouterProvider router={router}/>
  )
}

export default App