import {Routes, Route } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react';
import LandingPage from './LandingPage';
import Complaint from './Complaint';
import Supervisor from './Supervisor';
import Stats from './Stats';
import Admin from './Admin';
import Navbar from './Navbar';

function Router() {
  const { isLoading } = useAuth0();

  return isLoading ? <div>Loading...</div> : (
      <div className='back'> 
        <Navbar/>
        <Routes>
          <Route path="/" index element={<LandingPage/>} />
          <Route path="/complaint" element={<Complaint/>} />
          <Route path="/admin" element={<Admin/>} />
          <Route path="/supervisor" element={<Supervisor/>} />
          <Route path="/statistics" element={<Stats/>} />
          <Route path="*" element={<LandingPage/>} />
        </Routes>  
      </div>
  );
}

export default Router;