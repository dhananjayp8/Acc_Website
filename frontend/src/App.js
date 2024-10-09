import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ExamBlock from './components/ExamPrep';
import Footer from './components/Footer';
import MainSection from './components/MainSection';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Testimonial from './components/Testimonial';
import Course from './components/Course'; // Import the Course component

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <MainSection />
            <Services />
            <Testimonial />
            <ExamBlock />
          </>
        } />
        <Route path="/course" element={<Course />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
