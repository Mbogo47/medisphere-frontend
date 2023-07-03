import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import UserProfile from './components/Userprofile/UserProfile';
import Appointments from './pages/Appointments/Appointmentable';
import Appt from './pages/Appointments/Apptpage';
import DashContent from './pages/Dashboard/DashContent';
import Dashboard from './pages/Dashboard/Dashboard';
import Landingpage from './pages/Landing/Landingpage';
import Medical from './pages/MedicalRecords/MedicalRecords';
import Notfound from './pages/NotFound/Notfound';
import PrescriptionForm from './pages/Prescriptions/EditPres';
import Prescription from './pages/Prescriptions/prescription';
import LoginPatient from './pages/Register/Login';
import DoctorLogin from './pages/Register/LoginD';
import Signup from './pages/Register/Signup';
import Medication from './pages/Medication/Medication'
import MedicationForm from './pages/Medication/EditMed';


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
            <Route path="medication" element={<Medication />}/>
            <Route path="MedForm/:id" element={< MedicationForm />} />
            <Route path="profile" element={<UserProfile />} />

          </Route>
        </Routes>
        <ToastContainer />
      </Router>

    </>
  );
}

export default App;
