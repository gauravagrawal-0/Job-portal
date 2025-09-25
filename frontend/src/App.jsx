import {

  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,


} from "react-router-dom"

import {Toaster } from "react-hot-toast"
import LandingPage from "./pages/LandingPage/LandingPage"
import Signup from "../src/pages/Auth/Signup"
import Login from "../src/pages/Auth/Login"

import JobSeekerDashboard from "../src/pages/JobSeekers/JobSeekerDashboard"
import JobDetails from "../src/pages/JobSeekers/JobDetails"
import SavedJobs from "../src/pages/JobSeekers/SavedJobs"
import UserProfile from "../src/pages/JobSeekers/UserProfile"

import EmployerDashboard from "../src/pages/Employer/EmployerDashboard"
import JobPostingForm from "../src/pages/Employer/JobPostingForm"
import ManageJobs from "../src/pages/Employer/ManageJobs"
import ApplicationViewer from "../src/pages/Employer/ApplicationViewer"
import EmployerProfilePage from "../src/pages/Employer/EmployerProfilePage"
import ProtectedRoutes from "./routes/ProtectedRoutes"




const App = () => {
  return (
    <div>



      <Router>

        <Routes>

          {/* Public Routes*/}
          <Route path="/" element={<LandingPage />}/>
          <Route path="/signup" element={< Signup />}/>
          <Route path="/login" element={<Login />}/>

           <Route path="/find-jobs" element={<JobSeekerDashboard />}/>
           <Route path="/job/:jobId" element={<JobDetails />}/>
           <Route path="/saved-jobs" element={<SavedJobs />}/>
           <Route path="/profile" element={<UserProfile />}/>

            {/* Protected routes*/}

        <Route element={<ProtectedRoutes requiredRole="employer" />}>
           <Route path="/employer-dashboard" element={<EmployerDashboard />}/>
           <Route path="/post-jobs" element={<JobPostingForm />}/>
           <Route path="/manage-jobs" element={<ManageJobs />}/>
           <Route path="/applicants" element={<ApplicationViewer />}/>
           <Route path="/company-profile" element={<EmployerProfilePage />}/>
          </Route>




          {/* Catch all Routes*/}

           <Route path="*" element={<Navigate to="/" replace />}/>


          
        </Routes>
      </Router>


      <Toaster toastOptions={{
        className:"",
        style:{
          fontSize:"13px",
        },
      }}/>


    </div>
  )
}

export default App