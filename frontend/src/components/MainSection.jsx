// import React from 'react';
// import '@fortawesome/fontawesome-free/css/all.min.css'; 
// import tshirt from '../assets/t-shirt.png';
// function MainSection() {
//   return (
//     <div className="flex flex-col md:flex-row items-center justify-center text-white p-8 h-screen bg-gradient-to-r from-blue-500 to-purple-600">
//       <div className="text-center md:text-left md:w-1/2">
//         <h1 className="text-4xl md:text-5xl font-bold mb-4">
//           Achieve Your Competitive Edge
//         </h1>
//         <p className="text-lg mb-6">
//           Empowering all students for success in competitive exams with expert guidance and resources.
//         </p>
//         <div className="flex flex-col md:flex-row items-center justify-center md:justify-start">
//           <button className="bg-transparent border-2 border-white text-white py-2 px-6 rounded-full mb-4 md:mb-0 md:mr-4">
//             Join
//           </button>
//           <div className="flex items-center">
//             <i className="fas fa-star text-yellow-400"></i>
//             <i className="fas fa-star text-yellow-400"></i>
//             <i className="fas fa-star text-yellow-400"></i>
//             <i className="fas fa-star text-yellow-400"></i>
//             <i className="fas fa-star text-yellow-400"></i>
//             <span className="ml-2">Rated 4.8 out of 5</span>
//           </div>
//         </div>
//       </div>
//       <div className="md:w-1/2 mt-8 md:mt-0">
//         <img
//           src={tshirt}
//           alt="A stylish dark blue and light blue sports shirt with a logo"
//           className="rounded-full shadow-lg"
//         />
//       </div>
//     </div>
//   );
// }

// export default MainSection;

import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome icons
import tshirt from '../assets/t-shirt.png'; // Image import
import 'tailwindcss/tailwind.css'; // Tailwind CSS
import quote from '../assets/quote.png';

function MainSection() {
  return (
    <div className="min-h-screen">
      {/* First Section */}
      <div className="flex flex-col md:flex-row items-center justify-center text-white p-8 h-auto md:h-screen bg-gradient-to-r from-blue-500 to-purple-600">
        <div className="text-center md:text-left md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Achieve Your Competitive Edge
          </h1>
          <p className="text-lg mb-6">
            Empowering all students for success in competitive exams with expert guidance and resources.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-start">
            <button className="bg-transparent border-2 border-white text-white py-2 px-6 rounded-full mb-4 md:mb-0 md:mr-4">
              Join
            </button>
            <div className="flex items-center">
              <i className="fas fa-star text-yellow-400"></i>
              <i className="fas fa-star text-yellow-400"></i>
              <i className="fas fa-star text-yellow-400"></i>
              <i className="fas fa-star text-yellow-400"></i>
              <i className="fas fa-star text-yellow-400"></i>
              <span className="ml-2">Rated 4.8 out of 5</span>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 w-full h-full flex justify-center">
          <img
            src={tshirt}
            alt="A stylish dark blue and light blue sports shirt with a logo"
            className="rounded-full shadow-lg w-3/4 md:w-full"
          />
        </div>
      </div>

      {/* Second Section */}
      <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-white">
        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl">
          {/* Left Section */}
          <div className="md:w-1/2 p-6 text-center md:text-left">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Empowering Students for Competitive Success
            </h1>
            <p className="text-gray-600 mb-6">
              At Apna Competitive Corner, we provide comprehensive educational resources for 12th and engineering students to excel in their competitive exams and achieve their academic goals.
            </p>
            <div className="flex justify-center md:justify-start space-x-8 mb-4 md:mb-0">
              <div className="text-center">
                <p className="text-4xl font-bold text-blue-600">150+</p>
                <p className="text-gray-600">Join Us</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-blue-600">15</p>
                <p className="text-gray-600">Trusted by Thousands</p>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="md:w-1/2 w-full p-6">
            <div className="bg-gray-100 rounded-lg p-6 shadow-lg">
              <img
                src={quote}
                alt="Inspirational quote with decorative leaves"
                className="rounded-lg mb-4 w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainSection;
