
import ExamBlock from './components/ExamPrep';
import Footer from './components/Footer';
import MainSection from './components/MainSection';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Testimonial from './components/Testimonial';
function App() {
  return (
    <div>
      <Navbar />
      <MainSection/>
      <Services/>
      <Testimonial/>
      <ExamBlock/>
      <Footer/>
    </div>
  );
}

export default App;
