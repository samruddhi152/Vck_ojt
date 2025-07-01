import { Route, BrowserRouter as Router , Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import "./App.css";
import AdmissionPage from "./pages/AdmissionPage";
import ContactPage from "./pages/ContactPage";
import CoursesPage from "./pages/CoursesPage";
import ChatbotComponent from "./conponentes/Chatbot/ChatbotComponentes";
import { useState } from "react";
import DeveloperInfoPopup from "./conponentes/DeveloperInfo/DeveloperInfoPopup";

const App = () => {
  const [showPopup, setShowPopup] = useState(true);
  const handleClosePopup = () => {
    setShowPopup(false);
  };
 return(
    <>
    <div>
        {/* Your main application content */}
        <DeveloperInfoPopup
          show={showPopup}
          onClose={handleClosePopup}
          studentName="Samruddhi Rajaram Patil"
          studentPhotoUrl="\Images\samuu.jpeg" // Path to their photo
          uniqueMessage="Learned so much during this OJT! This app showcases my independent coding and deployment skills"
        />
      </div>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/home" element={<HomePage/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/admission" element={<AdmissionPage/>} />
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="/courses" element={<CoursesPage/>} />
        </Routes>
        <ChatbotComponent/>
    </Router>
    </>
 )
}

export default App;