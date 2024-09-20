import React from 'react';
import sampleGif from '../assets/section.gif'; // Add your gif path here

function Section() {
  return (
    <section className="d-flex align-items-center justify-content-between p-4">
      {/* Left Side (Text or Other Content) */}
      <div className="left-content">
        <h2>Welcome to Apna Competitive Corner!</h2>
        <p className='desc'>
          Your journey to success starts here. Explore our courses designed to help you succeed in competitive exams.
        </p>
      </div>

      {/* Right Side (GIF) */}
      <div className="right-content">
        <img src={sampleGif} alt="Animated GIF" className="img-fluid gif-animation" />
      </div>
    </section>
  );
}

export default Section;
