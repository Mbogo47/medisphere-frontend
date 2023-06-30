import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import PrescriptionForm from './Editing/EditPres';
import UserProfile from './components/UserProfile';
import Appointments from './pages/Appointmentable';
import Appt from './pages/Apptpage';
import DashContent from './pages/DashContent';
import Dashboard from './pages/Dashboard';
import Landingpage from './pages/Landingpage';
import LoginPatient from './pages/Login';
import DoctorLogin from './pages/LoginD';
import Medical from './pages/MedicalRecords';
import Notfound from './pages/Notfound';
import Signup from './pages/Signup';
import Prescription from './pages/prescription';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/patient" element={<LoginPatient />} />
          <Route path="/doctor" element={<DoctorLogin />} />
          <Route path="/*" element={<Notfound />} />
          <Route path="/appt" element={<Appt />} />
          <Route path="/dashboard" element={<Dashboard />} >
            <Route path="appointments" element={<Appointments />} />
            <Route path="records" element={<Medical />} />
            <Route path="home" element={<DashContent />} />
            <Route path="prescription" element={<Prescription />} />
            <Route path="PresForm/:id" element={< PrescriptionForm />} />
            <Route path="profile" element={<UserProfile />} />
          </Route>
        </Routes>
        <ToastContainer />
      </Router>

    </>
  );
}

export default App;
