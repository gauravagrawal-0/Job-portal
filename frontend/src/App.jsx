import {

  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,


} from "react-router-dom"

import {Toaster } from "react-hot-toast"
import {LandingPage} from "../src/pages/LandingPage/LandingPage"
import {Signup} from "../src/pages/Auth/Signup"
import {Login} from "../src/pages/Auth/Login"

const App = () => {
  return (
    <div>



      <Router>

        <Routes>

          {/* Public Routes*/}
          <Route path="/" element={<LandingPage />}/>
          <Route path="/signup" element={< Signup />}/>
          <Route path="/login" element={<Login />}/>

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